-- Academy Management Database Schema
-- Last updated: 2026-04-30
--
-- ID convention: string-prefixed (Stripe-style): {prefix}_{random}
--   acad_  = academies
--   user_  = users
--   class_ = classes
--   enroll_ = enrollments
--   cat_   = categories
--   txn_   = transactions
--   att_   = attendance
--   inv_   = invitations
--   pr_    = password resets
--   ev_    = email verifications
--   rt_    = refresh tokens
-- Default uses UUID hex stripped (32 chars). Application layer may override
-- with nanoid for shorter IDs (e.g., user_V1StGXR8Z5jdHi6).

-- ============================================================================
-- ENUMS / TYPES
-- ============================================================================

CREATE TYPE user_role AS ENUM ('admin', 'receptionist', 'instructor', 'student');

CREATE TYPE class_status AS ENUM ('active', 'archived', 'draft');

CREATE TYPE enrollment_status AS ENUM ('active', 'completed', 'cancelled', 'waiting');

CREATE TYPE class_recurrence AS ENUM ('weekly', 'one_time');

CREATE TYPE schedule_day AS ENUM ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');

CREATE TYPE transaction_type AS ENUM ('income', 'expense');

CREATE TYPE transaction_status AS ENUM ('pending', 'succeeded', 'failed', 'refunded');

CREATE TYPE payment_method AS ENUM ('stripe', 'cash', 'transfer', 'check', 'other');

CREATE TYPE transaction_category AS ENUM ('enrollment', 'payroll', 'expense');

CREATE TYPE payroll_type AS ENUM ('hourly', 'salary', 'commission');

CREATE TYPE attendance_status AS ENUM ('present', 'absent', 'excused');


-- ============================================================================
-- ACADEMIES
-- ============================================================================

CREATE TABLE academies (
    id         VARCHAR(40) PRIMARY KEY DEFAULT 'acad_' || replace(gen_random_uuid()::text, '-', ''),
    name       VARCHAR(255) NOT NULL,
    is_active  BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- ============================================================================
-- USERS
-- ============================================================================

CREATE TABLE users (
    id                VARCHAR(40) PRIMARY KEY DEFAULT 'user_' || replace(gen_random_uuid()::text, '-', ''),
    email             VARCHAR(255) UNIQUE NOT NULL,
    first_name        VARCHAR(255) NOT NULL,
    last_name         VARCHAR(255) NOT NULL,
    password_hash     VARCHAR(255) NOT NULL,
    phone             VARCHAR(50),
    address           TEXT,
    date_of_birth     DATE,
    email_verified_at TIMESTAMP,
    is_active         BOOLEAN NOT NULL DEFAULT true,
    created_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);


-- ============================================================================
-- USER ACADEMIES (many-to-many)
-- A user can belong to multiple academies with a role per academy.
-- hourly_rate is instructor-specific (NULL for other roles).
-- ============================================================================

CREATE TABLE user_academies (
    user_id     VARCHAR(40) NOT NULL,
    academy_id  VARCHAR(40) NOT NULL,
    role        user_role NOT NULL DEFAULT 'student',
    hourly_rate DECIMAL(10, 2),
    joined_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (user_id, academy_id),
    FOREIGN KEY (user_id)    REFERENCES users(id)     ON DELETE CASCADE,
    FOREIGN KEY (academy_id) REFERENCES academies(id) ON DELETE CASCADE
);

CREATE INDEX idx_user_academies_user_id    ON user_academies(user_id);
CREATE INDEX idx_user_academies_academy_id ON user_academies(academy_id);


-- ============================================================================
-- CLASSES
-- ============================================================================

CREATE TABLE classes (
    id               VARCHAR(40) PRIMARY KEY DEFAULT 'class_' || replace(gen_random_uuid()::text, '-', ''),
    academy_id       VARCHAR(40) NOT NULL,
    name             VARCHAR(255) NOT NULL,
    description      TEXT,
    instructor_id    VARCHAR(40) NOT NULL,
    status           class_status NOT NULL DEFAULT 'draft',
    recurrence       class_recurrence NOT NULL DEFAULT 'weekly',
    schedule_day     schedule_day,
    schedule_time    TIME,
    duration_minutes INTEGER,
    max_students     INTEGER,
    price            DECIMAL(10, 2),
    location         VARCHAR(255),
    start_date       DATE,
    end_date         DATE,
    created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (academy_id)    REFERENCES academies(id) ON DELETE CASCADE,
    FOREIGN KEY (instructor_id) REFERENCES users(id)     ON DELETE CASCADE
);

CREATE INDEX idx_classes_academy_id    ON classes(academy_id);
CREATE INDEX idx_classes_instructor_id ON classes(instructor_id);
CREATE INDEX idx_classes_status        ON classes(status);


-- ============================================================================
-- ENROLLMENTS
-- waiting_position + waitlisted_at populated when status='waiting',
-- cleared when promoted to 'active'.
-- ============================================================================

CREATE TABLE enrollments (
    id               VARCHAR(40) PRIMARY KEY DEFAULT 'enroll_' || replace(gen_random_uuid()::text, '-', ''),
    student_id       VARCHAR(40) NOT NULL,
    class_id         VARCHAR(40) NOT NULL,
    status           enrollment_status NOT NULL DEFAULT 'active',
    waiting_position INTEGER,
    waitlisted_at    TIMESTAMP,
    enrollment_date  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    completion_date  TIMESTAMP,

    UNIQUE (student_id, class_id),
    FOREIGN KEY (student_id) REFERENCES users(id)   ON DELETE CASCADE,
    FOREIGN KEY (class_id)   REFERENCES classes(id) ON DELETE CASCADE
);

CREATE INDEX idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX idx_enrollments_class_id   ON enrollments(class_id);
CREATE INDEX idx_enrollments_status     ON enrollments(status);


-- ============================================================================
-- CATEGORIES
-- ============================================================================

CREATE TABLE categories (
    id             VARCHAR(40) PRIMARY KEY DEFAULT 'cat_' || replace(gen_random_uuid()::text, '-', ''),
    academy_id     VARCHAR(40) NOT NULL,
    name           VARCHAR(255) NOT NULL,
    description    TEXT,
    color          VARCHAR(7),
    monthly_fee    DECIMAL(10, 2),
    enrollment_fee DECIMAL(10, 2),
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    UNIQUE (academy_id, name),
    FOREIGN KEY (academy_id) REFERENCES academies(id) ON DELETE CASCADE
);

CREATE INDEX idx_categories_academy_id ON categories(academy_id);


-- ============================================================================
-- CLASS CATEGORIES (many-to-many)
-- A class can belong to multiple categories; controls student visibility/access.
-- ============================================================================

CREATE TABLE class_categories (
    class_id    VARCHAR(40) NOT NULL,
    category_id VARCHAR(40) NOT NULL,

    PRIMARY KEY (class_id, category_id),
    FOREIGN KEY (class_id)    REFERENCES classes(id)    ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE INDEX idx_class_categories_class_id    ON class_categories(class_id);
CREATE INDEX idx_class_categories_category_id ON class_categories(category_id);


-- ============================================================================
-- STUDENT CATEGORIES (many-to-many) = subscription level
-- Determines which classes a student can enroll in.
-- ============================================================================

CREATE TABLE student_categories (
    student_id  VARCHAR(40) NOT NULL,
    category_id VARCHAR(40) NOT NULL,
    assigned_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (student_id, category_id),
    FOREIGN KEY (student_id)  REFERENCES users(id)      ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE INDEX idx_student_categories_student_id  ON student_categories(student_id);
CREATE INDEX idx_student_categories_category_id ON student_categories(category_id);


-- ============================================================================
-- TRANSACTIONS
-- Unified income + expense ledger.
-- category: enrollment | payroll | expense (high-level)
-- subcategory: free-form detail (e.g., 'monthly_subscription', 'rent', 'utilities')
-- pending = AR/AP, succeeded = settled.
-- reference: e.g., Stripe PaymentIntent ID for stripe payments.
-- ============================================================================

CREATE TABLE transactions (
    id             VARCHAR(40) PRIMARY KEY DEFAULT 'txn_' || replace(gen_random_uuid()::text, '-', ''),
    academy_id     VARCHAR(40) NOT NULL,
    type           transaction_type NOT NULL,
    category       transaction_category NOT NULL,
    subcategory    VARCHAR(50),
    amount         DECIMAL(10, 2) NOT NULL,
    status         transaction_status NOT NULL DEFAULT 'pending',
    payment_method payment_method,
    due_date       DATE,
    paid_at        TIMESTAMP,
    student_id     VARCHAR(40),
    recipient_id   VARCHAR(40),
    enrollment_id  VARCHAR(40),
    period_start   DATE,
    period_end     DATE,
    payroll_type   payroll_type,
    reference      VARCHAR(255),
    notes          TEXT,
    created_by     VARCHAR(40) NOT NULL,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (academy_id)    REFERENCES academies(id)   ON DELETE CASCADE,
    FOREIGN KEY (student_id)    REFERENCES users(id)       ON DELETE SET NULL,
    FOREIGN KEY (recipient_id)  REFERENCES users(id)       ON DELETE SET NULL,
    FOREIGN KEY (enrollment_id) REFERENCES enrollments(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by)    REFERENCES users(id)
);

CREATE INDEX idx_transactions_academy_id ON transactions(academy_id);
CREATE INDEX idx_transactions_type       ON transactions(type);
CREATE INDEX idx_transactions_status     ON transactions(status);
CREATE INDEX idx_transactions_category   ON transactions(category);
CREATE INDEX idx_transactions_student_id ON transactions(student_id);
CREATE INDEX idx_transactions_due_date   ON transactions(due_date);


-- ============================================================================
-- ATTENDANCE
-- One record per person (student or instructor) per class session.
-- Instructor hours = COUNT(present) * classes.duration_minutes / 60.
-- ============================================================================

CREATE TABLE attendance (
    id           VARCHAR(40) PRIMARY KEY DEFAULT 'att_' || replace(gen_random_uuid()::text, '-', ''),
    academy_id   VARCHAR(40) NOT NULL,
    class_id     VARCHAR(40) NOT NULL,
    user_id      VARCHAR(40) NOT NULL,
    session_date DATE NOT NULL,
    status       attendance_status NOT NULL DEFAULT 'present',
    notes        TEXT,
    created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    UNIQUE (class_id, user_id, session_date),
    FOREIGN KEY (academy_id) REFERENCES academies(id) ON DELETE CASCADE,
    FOREIGN KEY (class_id)   REFERENCES classes(id)   ON DELETE CASCADE,
    FOREIGN KEY (user_id)    REFERENCES users(id)     ON DELETE CASCADE
);

CREATE INDEX idx_attendance_academy_id   ON attendance(academy_id);
CREATE INDEX idx_attendance_class_id     ON attendance(class_id);
CREATE INDEX idx_attendance_user_id      ON attendance(user_id);
CREATE INDEX idx_attendance_session_date ON attendance(session_date);


-- ============================================================================
-- INVITATIONS
-- Email-based invitation tokens for receptionist/instructor/student onboarding.
-- ============================================================================

CREATE TABLE invitations (
    id          VARCHAR(40) PRIMARY KEY DEFAULT 'inv_' || replace(gen_random_uuid()::text, '-', ''),
    academy_id  VARCHAR(40) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    role        user_role NOT NULL,
    first_name  VARCHAR(255),
    last_name   VARCHAR(255),
    invited_by  VARCHAR(40) NOT NULL,
    token       VARCHAR(255) UNIQUE NOT NULL,
    expires_at  TIMESTAMP NOT NULL,
    accepted_at TIMESTAMP,
    created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (academy_id) REFERENCES academies(id) ON DELETE CASCADE,
    FOREIGN KEY (invited_by) REFERENCES users(id)
);

CREATE INDEX idx_invitations_token      ON invitations(token);
CREATE INDEX idx_invitations_email      ON invitations(email);
CREATE INDEX idx_invitations_academy_id ON invitations(academy_id);


-- ============================================================================
-- PASSWORD RESETS
-- ============================================================================

CREATE TABLE password_resets (
    id         VARCHAR(40) PRIMARY KEY DEFAULT 'pr_' || replace(gen_random_uuid()::text, '-', ''),
    user_id    VARCHAR(40) NOT NULL,
    token      VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    used_at    TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_password_resets_token   ON password_resets(token);
CREATE INDEX idx_password_resets_user_id ON password_resets(user_id);


-- ============================================================================
-- EMAIL VERIFICATIONS
-- ============================================================================

CREATE TABLE email_verifications (
    id          VARCHAR(40) PRIMARY KEY DEFAULT 'ev_' || replace(gen_random_uuid()::text, '-', ''),
    user_id     VARCHAR(40) NOT NULL,
    token       VARCHAR(255) UNIQUE NOT NULL,
    expires_at  TIMESTAMP NOT NULL,
    verified_at TIMESTAMP,
    created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_email_verifications_token   ON email_verifications(token);
CREATE INDEX idx_email_verifications_user_id ON email_verifications(user_id);


-- ============================================================================
-- REFRESH TOKENS
-- Stores hashes (not raw tokens) for session/refresh-token revocation.
-- ============================================================================

CREATE TABLE refresh_tokens (
    id         VARCHAR(40) PRIMARY KEY DEFAULT 'rt_' || replace(gen_random_uuid()::text, '-', ''),
    user_id    VARCHAR(40) NOT NULL,
    token_hash VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    revoked_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_refresh_tokens_user_id    ON refresh_tokens(user_id);
CREATE INDEX idx_refresh_tokens_token_hash ON refresh_tokens(token_hash);
