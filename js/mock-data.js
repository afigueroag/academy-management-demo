/* ================================================================
   MOCK DATA — fuente única de verdad para todo el demo
   Modifica este archivo para cambiar datos sin tocar la lógica.
   ================================================================ */

window.MOCK_DB = {

  academy: {
    id: 'acad_001',
    name: 'Academia Arte y Movimiento',
    is_active: true,
    theme: {
      colorPrimary: '#6366f1',
      colorSecondary: '#8b5cf6',
      colorAccent: '#06b6d4'
    },
    logo: null,
    address: 'Av. Insurgentes Sur 1234, CDMX',
    phone: '+52 55 5678 9012',
    email: 'contacto@arteymovimiento.mx',
    rfc: 'AAM2024010101',
    fiscal_year_start: 1,
    tax_rate: 16,
    stripe_connected: false,
    plan: 'profesional',
    plan_expires: '2026-12-31'
  },

  users: [
    {
      id: 'user_001',
      email: 'ana@academia.com',
      first_name: 'Ana',
      last_name: 'García',
      role: 'admin',
      phone: '+52 55 1234 5678',
      address: 'Polanco, CDMX',
      date_of_birth: '1985-03-15',
      is_active: true,
      hourly_rate: null,
      payroll_type: null,
      email_verified_at: '2024-01-15T10:00:00Z',
      created_at: '2024-01-15T08:00:00Z',
      categories: []
    },
    {
      id: 'user_002',
      email: 'carlos@academia.com',
      first_name: 'Carlos',
      last_name: 'López',
      role: 'receptionist',
      phone: '+52 55 2345 6789',
      address: 'Narvarte, CDMX',
      date_of_birth: '1992-07-22',
      is_active: true,
      hourly_rate: null,
      payroll_type: null,
      email_verified_at: '2024-01-20T10:00:00Z',
      created_at: '2024-01-20T08:00:00Z',
      categories: []
    },
    {
      id: 'user_003',
      email: 'maria@academia.com',
      first_name: 'María',
      last_name: 'Rodríguez',
      role: 'instructor',
      phone: '+52 55 3456 7890',
      address: 'Condesa, CDMX',
      date_of_birth: '1990-11-08',
      is_active: true,
      hourly_rate: 280,
      payroll_type: 'hourly',
      email_verified_at: '2024-01-25T10:00:00Z',
      created_at: '2024-01-25T08:00:00Z',
      categories: []
    },
    {
      id: 'user_004',
      email: 'roberto@instructor.com',
      first_name: 'Roberto',
      last_name: 'Silva',
      role: 'instructor',
      phone: '+52 55 4567 8901',
      address: 'Del Valle, CDMX',
      date_of_birth: '1988-05-30',
      is_active: true,
      hourly_rate: 320,
      payroll_type: 'hourly',
      email_verified_at: '2024-01-26T10:00:00Z',
      created_at: '2024-01-26T08:00:00Z',
      categories: []
    },
    {
      id: 'user_005',
      email: 'juan@estudiante.com',
      first_name: 'Juan',
      last_name: 'Pérez',
      role: 'student',
      phone: '+52 55 5678 9012',
      address: 'Roma Norte, CDMX',
      date_of_birth: '2005-02-14',
      is_active: true,
      hourly_rate: null,
      payroll_type: null,
      email_verified_at: '2024-02-01T10:00:00Z',
      created_at: '2024-02-01T08:00:00Z',
      categories: ['cat_001']
    },
    {
      id: 'user_006',
      email: 'sofia@estudiante.com',
      first_name: 'Sofía',
      last_name: 'Martínez',
      role: 'student',
      phone: '+52 55 6789 0123',
      address: 'Coyoacán, CDMX',
      date_of_birth: '2006-08-20',
      is_active: true,
      hourly_rate: null,
      payroll_type: null,
      email_verified_at: '2024-02-05T10:00:00Z',
      created_at: '2024-02-05T08:00:00Z',
      categories: ['cat_002']
    },
    {
      id: 'user_007',
      email: 'diego@estudiante.com',
      first_name: 'Diego',
      last_name: 'Hernández',
      role: 'student',
      phone: '+52 55 7890 1234',
      address: 'Tlalpan, CDMX',
      date_of_birth: '2004-12-01',
      is_active: true,
      hourly_rate: null,
      payroll_type: null,
      email_verified_at: '2024-02-10T10:00:00Z',
      created_at: '2024-02-10T08:00:00Z',
      categories: ['cat_003']
    },
    {
      id: 'user_008',
      email: 'valeria@estudiante.com',
      first_name: 'Valeria',
      last_name: 'Torres',
      role: 'student',
      phone: '+52 55 8901 2345',
      address: 'Xochimilco, CDMX',
      date_of_birth: '2007-04-17',
      is_active: true,
      hourly_rate: null,
      payroll_type: null,
      email_verified_at: '2024-02-12T10:00:00Z',
      created_at: '2024-02-12T08:00:00Z',
      categories: ['cat_001']
    },
    {
      id: 'user_009',
      email: 'miguel@estudiante.com',
      first_name: 'Miguel',
      last_name: 'Flores',
      role: 'student',
      phone: '+52 55 9012 3456',
      address: 'Azcapotzalco, CDMX',
      date_of_birth: '2003-09-25',
      is_active: true,
      hourly_rate: null,
      payroll_type: null,
      email_verified_at: '2024-02-15T10:00:00Z',
      created_at: '2024-02-15T08:00:00Z',
      categories: ['cat_002']
    },
    {
      id: 'user_010',
      email: 'camila@estudiante.com',
      first_name: 'Camila',
      last_name: 'Ramírez',
      role: 'student',
      phone: '+52 55 0123 4567',
      address: 'Iztapalapa, CDMX',
      date_of_birth: '2008-01-30',
      is_active: true,
      hourly_rate: null,
      payroll_type: null,
      email_verified_at: '2024-03-01T10:00:00Z',
      created_at: '2024-03-01T08:00:00Z',
      categories: ['cat_001']
    },
    {
      id: 'user_011',
      email: 'andres@estudiante.com',
      first_name: 'Andrés',
      last_name: 'Morales',
      role: 'student',
      phone: '+52 55 1234 0000',
      address: 'Gustavo A. Madero, CDMX',
      date_of_birth: '2005-06-12',
      is_active: true,
      hourly_rate: null,
      payroll_type: null,
      email_verified_at: '2024-03-05T10:00:00Z',
      created_at: '2024-03-05T08:00:00Z',
      categories: ['cat_003']
    },
    {
      id: 'user_012',
      email: 'isabella@estudiante.com',
      first_name: 'Isabella',
      last_name: 'Castro',
      role: 'student',
      phone: '+52 55 2345 0001',
      address: 'Benito Juárez, CDMX',
      date_of_birth: '2006-10-08',
      is_active: false,
      hourly_rate: null,
      payroll_type: null,
      email_verified_at: '2024-03-10T10:00:00Z',
      created_at: '2024-03-10T08:00:00Z',
      categories: ['cat_001']
    }
  ],

  categories: [
    {
      id: 'cat_001',
      academy_id: 'acad_001',
      name: 'Básico',
      description: 'Acceso a clases de nivel básico de una disciplina a elección',
      color: '#6366f1',
      monthly_fee: 500,
      enrollment_fee: 200,
      created_at: '2024-01-15T08:00:00Z'
    },
    {
      id: 'cat_002',
      academy_id: 'acad_001',
      name: 'Intermedio',
      description: 'Acceso a clases básicas e intermedias de todas las disciplinas',
      color: '#8b5cf6',
      monthly_fee: 800,
      enrollment_fee: 300,
      created_at: '2024-01-15T08:00:00Z'
    },
    {
      id: 'cat_003',
      academy_id: 'acad_001',
      name: 'Premium',
      description: 'Acceso ilimitado a todas las clases y prioridad en lista de espera',
      color: '#06b6d4',
      monthly_fee: 1200,
      enrollment_fee: 400,
      created_at: '2024-01-15T08:00:00Z'
    }
  ],

  classes: [
    {
      id: 'class_001',
      academy_id: 'acad_001',
      name: 'Ballet Clásico',
      description: 'Técnica clásica de ballet para principiantes y nivel básico. Énfasis en postura, flexibilidad y coordinación.',
      instructor_id: 'user_003',
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'monday',
      schedule_time: '10:00',
      duration_minutes: 60,
      max_students: 12,
      price: 650,
      location: 'Salón A',
      start_date: '2024-02-05',
      end_date: null,
      categories: ['cat_001', 'cat_002', 'cat_003'],
      created_at: '2024-01-20T08:00:00Z'
    },
    {
      id: 'class_002',
      academy_id: 'acad_001',
      name: 'Piano Iniciación',
      description: 'Aprende los fundamentos del piano: lectura de notas, postura y piezas básicas del repertorio clásico.',
      instructor_id: 'user_003',
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'wednesday',
      schedule_time: '16:00',
      duration_minutes: 45,
      max_students: 8,
      price: 720,
      location: 'Aula Música 1',
      start_date: '2024-02-07',
      end_date: null,
      categories: ['cat_001', 'cat_002', 'cat_003'],
      created_at: '2024-01-20T08:00:00Z'
    },
    {
      id: 'class_003',
      academy_id: 'acad_001',
      name: 'Fútbol Kids (5-10 años)',
      description: 'Desarrollo de habilidades motoras y trabajo en equipo a través del fútbol. Para niños de 5 a 10 años.',
      instructor_id: 'user_004',
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'saturday',
      schedule_time: '09:00',
      duration_minutes: 90,
      max_students: 20,
      price: 450,
      location: 'Cancha exterior',
      start_date: '2024-02-10',
      end_date: null,
      categories: ['cat_001', 'cat_002', 'cat_003'],
      created_at: '2024-01-22T08:00:00Z'
    },
    {
      id: 'class_004',
      academy_id: 'acad_001',
      name: 'Yoga Restaurativo',
      description: 'Práctica suave enfocada en la recuperación muscular, la respiración y la reducción del estrés.',
      instructor_id: 'user_003',
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'friday',
      schedule_time: '07:30',
      duration_minutes: 60,
      max_students: 15,
      price: 380,
      location: 'Salón Zen',
      start_date: '2024-02-09',
      end_date: null,
      categories: ['cat_002', 'cat_003'],
      created_at: '2024-01-22T08:00:00Z'
    },
    {
      id: 'class_005',
      academy_id: 'acad_001',
      name: 'Guitarra Intermedia',
      description: 'Acordes avanzados, rasgado, punteo y repertorio popular. Requiere conocimientos básicos de guitarra.',
      instructor_id: 'user_004',
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'tuesday',
      schedule_time: '18:00',
      duration_minutes: 60,
      max_students: 10,
      price: 680,
      location: 'Aula Música 2',
      start_date: '2024-02-06',
      end_date: null,
      categories: ['cat_002', 'cat_003'],
      created_at: '2024-01-23T08:00:00Z'
    },
    {
      id: 'class_006',
      academy_id: 'acad_001',
      name: 'Tae Kwon Do',
      description: 'Arte marcial coreana. Cinturón blanco hasta verde. Disciplina, concentración y defensa personal.',
      instructor_id: 'user_004',
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'thursday',
      schedule_time: '17:00',
      duration_minutes: 75,
      max_students: 18,
      price: 520,
      location: 'Dojo',
      start_date: '2024-02-08',
      end_date: null,
      categories: ['cat_001', 'cat_002', 'cat_003'],
      created_at: '2024-01-23T08:00:00Z'
    }
  ],

  enrollments: [
    { id: 'enroll_001', student_id: 'user_005', class_id: 'class_001', status: 'active', enrolled_at: '2024-02-01T10:00:00Z', waiting_position: null },
    { id: 'enroll_002', student_id: 'user_005', class_id: 'class_002', status: 'active', enrolled_at: '2024-02-01T10:00:00Z', waiting_position: null },
    { id: 'enroll_003', student_id: 'user_006', class_id: 'class_001', status: 'active', enrolled_at: '2024-02-05T10:00:00Z', waiting_position: null },
    { id: 'enroll_004', student_id: 'user_006', class_id: 'class_004', status: 'active', enrolled_at: '2024-02-05T10:00:00Z', waiting_position: null },
    { id: 'enroll_005', student_id: 'user_006', class_id: 'class_005', status: 'active', enrolled_at: '2024-02-05T10:00:00Z', waiting_position: null },
    { id: 'enroll_006', student_id: 'user_007', class_id: 'class_003', status: 'active', enrolled_at: '2024-02-10T10:00:00Z', waiting_position: null },
    { id: 'enroll_007', student_id: 'user_007', class_id: 'class_005', status: 'active', enrolled_at: '2024-02-10T10:00:00Z', waiting_position: null },
    { id: 'enroll_008', student_id: 'user_007', class_id: 'class_006', status: 'active', enrolled_at: '2024-02-10T10:00:00Z', waiting_position: null },
    { id: 'enroll_009', student_id: 'user_008', class_id: 'class_001', status: 'active', enrolled_at: '2024-02-12T10:00:00Z', waiting_position: null },
    { id: 'enroll_010', student_id: 'user_008', class_id: 'class_003', status: 'active', enrolled_at: '2024-02-12T10:00:00Z', waiting_position: null },
    { id: 'enroll_011', student_id: 'user_009', class_id: 'class_004', status: 'active', enrolled_at: '2024-02-15T10:00:00Z', waiting_position: null },
    { id: 'enroll_012', student_id: 'user_009', class_id: 'class_005', status: 'active', enrolled_at: '2024-02-15T10:00:00Z', waiting_position: null },
    { id: 'enroll_013', student_id: 'user_010', class_id: 'class_001', status: 'active', enrolled_at: '2024-03-01T10:00:00Z', waiting_position: null },
    { id: 'enroll_014', student_id: 'user_010', class_id: 'class_006', status: 'active', enrolled_at: '2024-03-01T10:00:00Z', waiting_position: null },
    { id: 'enroll_015', student_id: 'user_011', class_id: 'class_003', status: 'active', enrolled_at: '2024-03-05T10:00:00Z', waiting_position: null },
    { id: 'enroll_016', student_id: 'user_011', class_id: 'class_006', status: 'active', enrolled_at: '2024-03-05T10:00:00Z', waiting_position: null },
    { id: 'enroll_017', student_id: 'user_011', class_id: 'class_005', status: 'waiting', enrolled_at: '2024-03-06T10:00:00Z', waiting_position: 1 },
    { id: 'enroll_018', student_id: 'user_012', class_id: 'class_002', status: 'cancelled', enrolled_at: '2024-03-10T10:00:00Z', waiting_position: null }
  ],

  transactions: [
    /* --- INGRESOS (inscripciones) --- */
    { id: 'txn_001', type: 'income', category: 'enrollment', subcategory: 'Cuota de inscripción', amount: 200, status: 'succeeded', payment_method: 'cash', student_id: 'user_005', class_id: 'class_001', due_date: '2024-02-01', paid_at: '2024-02-01T10:00:00Z', notes: null, created_at: '2024-02-01T10:00:00Z' },
    { id: 'txn_002', type: 'income', category: 'enrollment', subcategory: 'Mensualidad', amount: 500, status: 'succeeded', payment_method: 'transfer', student_id: 'user_005', class_id: 'class_001', due_date: '2024-02-01', paid_at: '2024-02-01T10:00:00Z', notes: null, created_at: '2024-02-01T10:00:00Z' },
    { id: 'txn_003', type: 'income', category: 'enrollment', subcategory: 'Mensualidad', amount: 500, status: 'succeeded', payment_method: 'transfer', student_id: 'user_005', class_id: 'class_001', due_date: '2024-03-01', paid_at: '2024-03-02T11:00:00Z', notes: null, created_at: '2024-03-01T08:00:00Z' },
    { id: 'txn_004', type: 'income', category: 'enrollment', subcategory: 'Mensualidad', amount: 500, status: 'succeeded', payment_method: 'transfer', student_id: 'user_005', class_id: 'class_001', due_date: '2024-04-01', paid_at: '2024-04-01T09:00:00Z', notes: null, created_at: '2024-04-01T08:00:00Z' },
    { id: 'txn_005', type: 'income', category: 'enrollment', subcategory: 'Mensualidad', amount: 500, status: 'pending', payment_method: null, student_id: 'user_005', class_id: 'class_001', due_date: '2026-05-01', paid_at: null, notes: null, created_at: '2026-05-01T08:00:00Z' },
    { id: 'txn_006', type: 'income', category: 'enrollment', subcategory: 'Cuota de inscripción', amount: 300, status: 'succeeded', payment_method: 'cash', student_id: 'user_006', class_id: 'class_004', due_date: '2024-02-05', paid_at: '2024-02-05T10:00:00Z', notes: null, created_at: '2024-02-05T10:00:00Z' },
    { id: 'txn_007', type: 'income', category: 'enrollment', subcategory: 'Mensualidad', amount: 800, status: 'succeeded', payment_method: 'stripe', student_id: 'user_006', class_id: null, due_date: '2024-03-01', paid_at: '2024-03-01T10:00:00Z', notes: 'Suscripción Intermedio', created_at: '2024-03-01T08:00:00Z' },
    { id: 'txn_008', type: 'income', category: 'enrollment', subcategory: 'Mensualidad', amount: 800, status: 'pending', payment_method: null, student_id: 'user_006', class_id: null, due_date: '2026-05-01', paid_at: null, notes: null, created_at: '2026-05-01T08:00:00Z' },
    { id: 'txn_009', type: 'income', category: 'enrollment', subcategory: 'Mensualidad', amount: 1200, status: 'succeeded', payment_method: 'stripe', student_id: 'user_007', class_id: null, due_date: '2024-04-01', paid_at: '2024-04-02T10:00:00Z', notes: null, created_at: '2024-04-01T08:00:00Z' },
    { id: 'txn_010', type: 'income', category: 'enrollment', subcategory: 'Mensualidad', amount: 1200, status: 'succeeded', payment_method: 'stripe', student_id: 'user_007', class_id: null, due_date: '2026-04-01', paid_at: '2026-04-01T10:00:00Z', notes: null, created_at: '2026-04-01T08:00:00Z' },
    { id: 'txn_011', type: 'income', category: 'enrollment', subcategory: 'Mensualidad', amount: 500, status: 'pending', payment_method: null, student_id: 'user_008', class_id: null, due_date: '2026-04-15', paid_at: null, notes: null, created_at: '2026-04-15T08:00:00Z' },
    { id: 'txn_012', type: 'income', category: 'enrollment', subcategory: 'Mensualidad', amount: 800, status: 'failed',  payment_method: 'stripe', student_id: 'user_009', class_id: null, due_date: '2026-05-01', paid_at: null, notes: 'Tarjeta declinada', created_at: '2026-05-01T08:00:00Z' },
    { id: 'txn_013', type: 'income', category: 'enrollment', subcategory: 'Uniforme', amount: 450, status: 'succeeded', payment_method: 'cash', student_id: 'user_010', class_id: null, due_date: '2024-03-05', paid_at: '2024-03-05T11:00:00Z', notes: 'Uniforme de ballet talla M', created_at: '2024-03-05T11:00:00Z' },
    { id: 'txn_014', type: 'income', category: 'enrollment', subcategory: 'Material', amount: 220, status: 'succeeded', payment_method: 'cash', student_id: 'user_011', class_id: null, due_date: '2024-03-08', paid_at: '2024-03-08T10:00:00Z', notes: 'Cuaderno de partituras', created_at: '2024-03-08T10:00:00Z' },
    /* --- GASTOS --- */
    { id: 'txn_015', type: 'expense', category: 'expense', subcategory: 'Renta', amount: 18000, status: 'succeeded', payment_method: 'transfer', student_id: null, class_id: null, due_date: '2026-05-01', paid_at: '2026-04-30T09:00:00Z', notes: 'Renta mayo 2026', created_at: '2026-04-30T09:00:00Z' },
    { id: 'txn_016', type: 'expense', category: 'expense', subcategory: 'Servicios', amount: 2100, status: 'succeeded', payment_method: 'transfer', student_id: null, class_id: null, due_date: '2026-04-28', paid_at: '2026-04-28T10:00:00Z', notes: 'Electricidad y agua', created_at: '2026-04-28T10:00:00Z' },
    { id: 'txn_017', type: 'expense', category: 'expense', subcategory: 'Marketing', amount: 3500, status: 'succeeded', payment_method: 'stripe', student_id: null, class_id: null, due_date: '2026-04-15', paid_at: '2026-04-15T10:00:00Z', notes: 'Facebook & Instagram Ads', created_at: '2026-04-15T10:00:00Z' },
    { id: 'txn_018', type: 'expense', category: 'expense', subcategory: 'Equipamiento', amount: 8500, status: 'succeeded', payment_method: 'transfer', student_id: null, class_id: null, due_date: '2026-03-20', paid_at: '2026-03-20T09:00:00Z', notes: 'Espejo para Salón A', created_at: '2026-03-20T09:00:00Z' },
    { id: 'txn_019', type: 'expense', category: 'expense', subcategory: 'Limpieza', amount: 1200, status: 'succeeded', payment_method: 'cash', student_id: null, class_id: null, due_date: '2026-04-30', paid_at: '2026-04-30T08:00:00Z', notes: 'Servicio de limpieza mensual', created_at: '2026-04-30T08:00:00Z' },
    { id: 'txn_020', type: 'expense', category: 'expense', subcategory: 'Software', amount: 799, status: 'succeeded', payment_method: 'stripe', student_id: null, class_id: null, due_date: '2026-05-01', paid_at: '2026-05-01T08:00:00Z', notes: 'Suscripción mensual plataforma', created_at: '2026-05-01T08:00:00Z' },
    /* --- NÓMINA --- */
    { id: 'txn_021', type: 'expense', category: 'payroll', subcategory: 'Nómina instructora', amount: 11200, status: 'succeeded', payment_method: 'transfer', recipient_id: 'user_003', student_id: null, class_id: null, period_start: '2026-04-01', period_end: '2026-04-30', payroll_type: 'hourly', paid_at: '2026-05-02T10:00:00Z', notes: '40 hrs × $280', created_at: '2026-05-02T10:00:00Z' },
    { id: 'txn_022', type: 'expense', category: 'payroll', subcategory: 'Nómina instructor', amount: 12800, status: 'succeeded', payment_method: 'transfer', recipient_id: 'user_004', student_id: null, class_id: null, period_start: '2026-04-01', period_end: '2026-04-30', payroll_type: 'hourly', paid_at: '2026-05-02T10:00:00Z', notes: '40 hrs × $320', created_at: '2026-05-02T10:00:00Z' },
    { id: 'txn_023', type: 'expense', category: 'payroll', subcategory: 'Nómina instructora', amount: 0, status: 'pending', payment_method: null, recipient_id: 'user_003', student_id: null, class_id: null, period_start: '2026-05-01', period_end: '2026-05-31', payroll_type: 'hourly', paid_at: null, notes: null, created_at: '2026-05-01T08:00:00Z' },
    { id: 'txn_024', type: 'expense', category: 'payroll', subcategory: 'Nómina instructor', amount: 0, status: 'pending', payment_method: null, recipient_id: 'user_004', student_id: null, class_id: null, period_start: '2026-05-01', period_end: '2026-05-31', payroll_type: 'hourly', paid_at: null, notes: null, created_at: '2026-05-01T08:00:00Z' }
  ],

  attendance: (function() {
    const records = [];
    const today = new Date();
    const classSchedule = {
      'class_001': { day: 1, students: ['user_005','user_006','user_008','user_010'] },
      'class_002': { day: 3, students: ['user_005'] },
      'class_003': { day: 6, students: ['user_007','user_008','user_010','user_011'] },
      'class_004': { day: 5, students: ['user_006','user_009'] },
      'class_005': { day: 2, students: ['user_006','user_007','user_009'] },
      'class_006': { day: 4, students: ['user_007','user_010','user_011'] }
    };
    let id = 1;
    for (let w = 4; w >= 1; w--) {
      Object.entries(classSchedule).forEach(([classId, info]) => {
        const sessionDate = new Date(today);
        const diff = (info.day - today.getDay() + 7) % 7;
        sessionDate.setDate(today.getDate() - (w * 7) + diff);
        const dateStr = sessionDate.toISOString().split('T')[0];
        info.students.forEach(studentId => {
          const rand = Math.random();
          const status = rand > 0.85 ? 'absent' : rand > 0.75 ? 'excused' : 'present';
          records.push({
            id: `att_${String(id++).padStart(3,'0')}`,
            class_id: classId,
            user_id: studentId,
            session_date: dateStr,
            status,
            notes: status === 'excused' ? 'Justificado por enfermedad' : null,
            created_at: dateStr + 'T12:00:00Z'
          });
        });
      });
    }
    return records;
  })(),

  invitations: [
    {
      id: 'inv_001',
      academy_id: 'acad_001',
      email: 'nuevo.instructor@mail.com',
      role: 'instructor',
      first_name: 'Carlos',
      last_name: 'Vega',
      invited_by: 'user_001',
      token: 'tok_inv_abc123',
      expires_at: '2026-06-05T00:00:00Z',
      accepted_at: null,
      created_at: '2026-05-06T10:00:00Z'
    },
    {
      id: 'inv_002',
      academy_id: 'acad_001',
      email: 'nuevo.estudiante@mail.com',
      role: 'student',
      first_name: 'Fernanda',
      last_name: 'Ruiz',
      invited_by: 'user_001',
      token: 'tok_inv_def456',
      expires_at: '2026-06-05T00:00:00Z',
      accepted_at: null,
      created_at: '2026-05-06T11:00:00Z'
    }
  ],

  /* Datos auxiliares */
  notifications_config: {
    'user_001': { upcoming_payments: true, new_enrollments: true, attendance_reminders: true, waitlist_promotions: true },
    'user_002': { upcoming_payments: true, new_enrollments: true, attendance_reminders: false, waitlist_promotions: false },
    'user_003': { upcoming_payments: false, new_enrollments: true, attendance_reminders: true, waitlist_promotions: false },
    'user_005': { upcoming_payments: true, new_enrollments: false, attendance_reminders: true, waitlist_promotions: true }
  }
};

/* ================================================================
   HELPERS para consultar MOCK_DB
   ================================================================ */

window.DB = {
  getUser: id => MOCK_DB.users.find(u => u.id === id),
  getUserByEmail: email => MOCK_DB.users.find(u => u.email.toLowerCase() === email.toLowerCase()),
  getStudents: () => MOCK_DB.users.filter(u => u.role === 'student'),
  getInstructors: () => MOCK_DB.users.filter(u => u.role === 'instructor'),
  getClass: id => MOCK_DB.classes.find(c => c.id === id),
  getActiveClasses: () => MOCK_DB.classes.filter(c => c.status === 'active'),
  getCategory: id => MOCK_DB.categories.find(c => c.id === id),
  getEnrollmentsForStudent: studentId => MOCK_DB.enrollments.filter(e => e.student_id === studentId && e.status === 'active'),
  getEnrollmentsForClass: classId => MOCK_DB.enrollments.filter(e => e.class_id === classId && e.status === 'active'),
  getAttendanceForClass: (classId, date) => MOCK_DB.attendance.filter(a => a.class_id === classId && a.session_date === date),
  getAttendanceForStudent: studentId => MOCK_DB.attendance.filter(a => a.user_id === studentId),
  getInstructorClasses: instructorId => MOCK_DB.classes.filter(c => c.instructor_id === instructorId && c.status === 'active'),

  getStudentDebt: studentId => {
    return MOCK_DB.transactions
      .filter(t => t.student_id === studentId && t.type === 'income' && t.status === 'pending')
      .reduce((sum, t) => sum + t.amount, 0);
  },

  getTotalDebt: () => {
    return MOCK_DB.transactions
      .filter(t => t.type === 'income' && t.status === 'pending')
      .reduce((sum, t) => sum + t.amount, 0);
  },

  getMonthlyRevenue: () => {
    const now = new Date();
    return MOCK_DB.transactions
      .filter(t => t.type === 'income' && t.status === 'succeeded' && t.paid_at && new Date(t.paid_at).getMonth() === now.getMonth())
      .reduce((sum, t) => sum + t.amount, 0);
  },

  getAttendanceRate: studentId => {
    const records = MOCK_DB.attendance.filter(a => a.user_id === studentId);
    if (!records.length) return 0;
    const present = records.filter(a => a.status === 'present').length;
    return Math.round((present / records.length) * 100);
  },

  getInstructorHours: (instructorId, periodStart, periodEnd) => {
    const classIds = MOCK_DB.classes.filter(c => c.instructor_id === instructorId).map(c => c.id);
    const records = MOCK_DB.attendance.filter(a =>
      classIds.includes(a.class_id) &&
      a.session_date >= periodStart &&
      a.session_date <= periodEnd
    );
    const sessions = [...new Set(records.map(a => a.class_id + '_' + a.session_date))];
    return sessions.reduce((sum, key) => {
      const classId = key.split('_')[0];
      const cls = MOCK_DB.classes.find(c => c.id === classId);
      return sum + (cls ? cls.duration_minutes / 60 : 0);
    }, 0);
  },

  addTransaction: (data) => {
    const id = 'txn_' + String(MOCK_DB.transactions.length + 1).padStart(3, '0');
    const txn = { id, ...data, created_at: new Date().toISOString() };
    MOCK_DB.transactions.push(txn);
    return txn;
  },

  enrollStudent: (studentId, classId) => {
    const exists = MOCK_DB.enrollments.find(e => e.student_id === studentId && e.class_id === classId);
    if (exists) return exists;
    const cls = MOCK_DB.classes.find(c => c.id === classId);
    const enrolled = MOCK_DB.enrollments.filter(e => e.class_id === classId && e.status === 'active').length;
    const status = cls && cls.max_students && enrolled >= cls.max_students ? 'waiting' : 'active';
    const waiting_position = status === 'waiting' ? MOCK_DB.enrollments.filter(e => e.class_id === classId && e.status === 'waiting').length + 1 : null;
    const id = 'enroll_' + String(MOCK_DB.enrollments.length + 1).padStart(3, '0');
    const enrollment = { id, student_id: studentId, class_id: classId, status, enrolled_at: new Date().toISOString(), waiting_position };
    MOCK_DB.enrollments.push(enrollment);
    return enrollment;
  },

  cancelEnrollment: (enrollmentId) => {
    const e = MOCK_DB.enrollments.find(e => e.id === enrollmentId);
    if (e) { e.status = 'cancelled'; e.cancelled_at = new Date().toISOString(); }
    return e;
  }
};
