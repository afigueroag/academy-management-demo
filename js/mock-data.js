/* ================================================================
   MOCK DATA — fuente única de verdad para todo el demo
   Modifica este archivo para cambiar datos sin tocar la lógica.
   ================================================================ */

window.MOCK_DB = {

  academy: {
    id: 'acad_001',
    name: 'Academia Bushido — Artes Marciales',
    is_active: true,
    theme: {
      colorPrimary: '#6366f1',
      colorSecondary: '#8b5cf6',
      colorAccent: '#06b6d4'
    },
    logo: null,
    address: 'Av. Insurgentes Sur 1234, CDMX',
    phone: '+52 55 5678 9012',
    email: 'contacto@academiabushido.mx',
    rfc: 'AAM2024010101',
    fiscal_year_start: 1,
    tax_rate: 16,
    stripe_connected: false,
    plan: 'profesional',
    plan_expires: '2026-12-31'
  },

  /* ── Planes de membresía ──────────────────────────────────────── */
  plans: [
    {
      id: 'plan_001',
      academy_id: 'acad_001',
      name: 'Plan Básico',
      description: 'Acceso a una disciplina a nivel principiante. Clases sin prerrequisito de cinta.',
      color: '#10b981',
      monthly_fee: 500,
      enrollment_fee: 200,
      is_active: true,
      created_at: '2024-01-15T08:00:00Z'
    },
    {
      id: 'plan_002',
      academy_id: 'acad_001',
      name: 'Plan Intermedio',
      description: 'Acceso a todas las disciplinas hasta nivel cinta verde.',
      color: '#6366f1',
      monthly_fee: 800,
      enrollment_fee: 300,
      is_active: true,
      created_at: '2024-01-15T08:00:00Z'
    },
    {
      id: 'plan_003',
      academy_id: 'acad_001',
      name: 'Plan Negro',
      description: 'Acceso ilimitado a todas las clases, todos los niveles y sesiones de competencia.',
      color: '#1e293b',
      monthly_fee: 1200,
      enrollment_fee: 400,
      is_active: true,
      created_at: '2024-01-15T08:00:00Z'
    }
  ],

  /* ── Backward compat — páginas no migradas usan esto ─────────── */
  categories: [],

  /* ── Ejes de clasificación ────────────────────────────────────── */
  axes: [
    { id: 'axis_001', academy_id: 'acad_001', name: 'Cinta / Nivel', ordered: true,  created_at: '2024-01-15T08:00:00Z' },
    { id: 'axis_002', academy_id: 'acad_001', name: 'Disciplina',    ordered: false, created_at: '2024-01-15T08:00:00Z' }
  ],

  /* ── Grupos (valores por eje) ─────────────────────────────────── */
  groups: [
    /* Cinta / Nivel (ordered) */
    { id: 'grp_001', axis_id: 'axis_001', academy_id: 'acad_001', name: 'Cinta Blanca',   order: 1, color: '#94a3b8', created_at: '2024-01-15T08:00:00Z' },
    { id: 'grp_002', axis_id: 'axis_001', academy_id: 'acad_001', name: 'Cinta Amarilla', order: 2, color: '#eab308', created_at: '2024-01-15T08:00:00Z' },
    { id: 'grp_003', axis_id: 'axis_001', academy_id: 'acad_001', name: 'Cinta Naranja',  order: 3, color: '#f97316', created_at: '2024-01-15T08:00:00Z' },
    { id: 'grp_004', axis_id: 'axis_001', academy_id: 'acad_001', name: 'Cinta Verde',    order: 4, color: '#22c55e', created_at: '2024-01-15T08:00:00Z' },
    { id: 'grp_005', axis_id: 'axis_001', academy_id: 'acad_001', name: 'Cinta Azul',     order: 5, color: '#3b82f6', created_at: '2024-01-15T08:00:00Z' },
    { id: 'grp_006', axis_id: 'axis_001', academy_id: 'acad_001', name: 'Cinta Roja',     order: 6, color: '#ef4444', created_at: '2024-01-15T08:00:00Z' },
    { id: 'grp_007', axis_id: 'axis_001', academy_id: 'acad_001', name: 'Cinta Café',     order: 7, color: '#92400e', created_at: '2024-01-15T08:00:00Z' },
    { id: 'grp_008', axis_id: 'axis_001', academy_id: 'acad_001', name: 'Cinta Negra',    order: 8, color: '#1e293b', created_at: '2024-01-15T08:00:00Z' },
    /* Disciplina (unordered) */
    { id: 'grp_009', axis_id: 'axis_002', academy_id: 'acad_001', name: 'Karate',         order: 0, color: '#6366f1', created_at: '2024-01-15T08:00:00Z' },
    { id: 'grp_010', axis_id: 'axis_002', academy_id: 'acad_001', name: 'Tae Kwon Do',    order: 0, color: '#8b5cf6', created_at: '2024-01-15T08:00:00Z' },
    { id: 'grp_011', axis_id: 'axis_002', academy_id: 'acad_001', name: 'Judo',           order: 0, color: '#06b6d4', created_at: '2024-01-15T08:00:00Z' }
  ],

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
      created_at: '2024-01-15T08:00:00Z'
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
      created_at: '2024-01-20T08:00:00Z'
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
      specialty: 'Karate, Judo',
      credentials: 'Cinta Negra 4to Dan · 15 años de experiencia',
      start_date: '2024-01-25',
      email_verified_at: '2024-01-25T10:00:00Z',
      created_at: '2024-01-25T08:00:00Z'
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
      specialty: 'Tae Kwon Do, Judo',
      credentials: 'Cinta Negra 3er Dan · Instructor certificado WTF · Juez Nacional',
      start_date: '2024-01-26',
      email_verified_at: '2024-01-26T10:00:00Z',
      created_at: '2024-01-26T08:00:00Z'
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
      plan_id: 'plan_001',
      groups: ['grp_001', 'grp_009'],
      conditions: 'Fractura reciente en muñeca derecha (marzo 2026). Evitar caídas sobre ese lado y ejercicios de apoyo en mano.',
      payment_method: 'transfer',
      start_date: '2024-02-01',
      email_verified_at: '2024-02-01T10:00:00Z',
      created_at: '2024-02-01T08:00:00Z'
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
      plan_id: 'plan_002',
      groups: ['grp_003', 'grp_010'],
      conditions: 'Asma moderada. Puede necesitar descansos frecuentes en entrenamientos intensos. Siempre trae inhalador.',
      payment_method: 'stripe',
      start_date: '2024-02-05',
      email_verified_at: '2024-02-05T10:00:00Z',
      created_at: '2024-02-05T08:00:00Z'
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
      plan_id: 'plan_003',
      groups: ['grp_005', 'grp_010'],
      payment_method: 'cash',
      start_date: '2024-02-10',
      email_verified_at: '2024-02-10T10:00:00Z',
      created_at: '2024-02-10T08:00:00Z'
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
      plan_id: 'plan_001',
      groups: ['grp_002', 'grp_009'],
      payment_method: 'cash',
      start_date: '2024-02-12',
      email_verified_at: '2024-02-12T10:00:00Z',
      created_at: '2024-02-12T08:00:00Z'
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
      plan_id: 'plan_002',
      groups: ['grp_004', 'grp_009'],
      payment_method: 'transfer',
      start_date: '2024-02-15',
      email_verified_at: '2024-02-15T10:00:00Z',
      created_at: '2024-02-15T08:00:00Z'
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
      plan_id: 'plan_001',
      groups: ['grp_001', 'grp_011'],
      conditions: 'Escoliosis leve. Evitar ejercicios con carga axial en la columna. Autorizado por médico para actividad moderada.',
      payment_method: 'cash',
      start_date: '2024-03-01',
      email_verified_at: '2024-03-01T10:00:00Z',
      created_at: '2024-03-01T08:00:00Z'
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
      plan_id: 'plan_003',
      groups: ['grp_006', 'grp_010'],
      payment_method: 'transfer',
      start_date: '2024-03-05',
      email_verified_at: '2024-03-05T10:00:00Z',
      created_at: '2024-03-05T08:00:00Z'
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
      plan_id: 'plan_001',
      groups: ['grp_001', 'grp_011'],
      payment_method: null,
      start_date: '2024-03-10',
      email_verified_at: '2024-03-10T10:00:00Z',
      created_at: '2024-03-10T08:00:00Z'
    }
  ],

  classes: [
    {
      id: 'class_001',
      academy_id: 'acad_001',
      name: 'Karate Principiante',
      description: 'Fundamentos del Karate-Do: postura, kihon, kata Heian Shodan y etiqueta del dojo. Abierto a todos desde cinta blanca.',
      instructor_ids: ['user_003'], assistant_ids: ['user_004'],
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'monday',
      schedule_time: '17:00',
      schedule: [{ day: 'monday', time: '17:00' }, { day: 'wednesday', time: '17:00' }, { day: 'friday', time: '17:00' }],
      duration_minutes: 60,
      max_students: 15,
      price: 550,
      location: 'Dojo A',
      plan_ids: ['plan_001', 'plan_002', 'plan_003'],
      min_group: null,
      groups: ['grp_001', 'grp_002', 'grp_009'],
      start_date: '2024-02-05',
      end_date: null,
      created_at: '2024-01-20T08:00:00Z'
    },
    {
      id: 'class_002',
      academy_id: 'acad_001',
      name: 'Karate Intermedio',
      description: 'Kata Heian 3-5 y kumite básico. Combinaciones de bloqueo y ataque. Requiere cinta verde o superior.',
      instructor_ids: ['user_003'], assistant_ids: [],
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'tuesday',
      schedule_time: '18:00',
      schedule: [{ day: 'tuesday', time: '18:00' }, { day: 'thursday', time: '18:00' }],
      duration_minutes: 75,
      max_students: 12,
      price: 650,
      location: 'Dojo A',
      plan_ids: ['plan_002', 'plan_003'],
      min_group: 'grp_004',
      groups: ['grp_004', 'grp_005', 'grp_009'],
      start_date: '2024-02-06',
      end_date: null,
      created_at: '2024-01-20T08:00:00Z'
    },
    {
      id: 'class_003',
      academy_id: 'acad_001',
      name: 'Karate Avanzado',
      description: 'Kata avanzadas (Bassai Dai, Kanku), kumite libre y preparación para competencia. Exclusivo cinta roja en adelante.',
      instructor_ids: ['user_003', 'user_004'], assistant_ids: [],
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'monday',
      schedule_time: '19:00',
      schedule: [{ day: 'monday', time: '19:00' }, { day: 'wednesday', time: '19:00' }, { day: 'friday', time: '19:00' }],
      duration_minutes: 90,
      max_students: 10,
      price: 800,
      location: 'Dojo A',
      plan_ids: ['plan_003'],
      min_group: 'grp_006',
      groups: ['grp_006', 'grp_007', 'grp_008', 'grp_009'],
      start_date: '2024-02-07',
      end_date: null,
      created_at: '2024-01-21T08:00:00Z'
    },
    {
      id: 'class_004',
      academy_id: 'acad_001',
      name: 'Tae Kwon Do Principiante',
      description: 'Técnica base de TKD: patadas frontales, laterales, poomsae Taegeuk 1-2 y caídas. Sin prerrequisitos.',
      instructor_ids: ['user_004'], assistant_ids: [],
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'monday',
      schedule_time: '16:00',
      schedule: [{ day: 'monday', time: '16:00' }, { day: 'wednesday', time: '16:00' }],
      duration_minutes: 60,
      max_students: 15,
      price: 550,
      location: 'Dojo B',
      plan_ids: ['plan_001', 'plan_002', 'plan_003'],
      min_group: null,
      groups: ['grp_001', 'grp_002', 'grp_010'],
      start_date: '2024-02-05',
      end_date: null,
      created_at: '2024-01-22T08:00:00Z'
    },
    {
      id: 'class_005',
      academy_id: 'acad_001',
      name: 'Tae Kwon Do Intermedio',
      description: 'Poomsae Taegeuk 3-5, saltos, bandal chagi y combinaciones de patada. Requiere cinta naranja o superior.',
      instructor_ids: ['user_004'], assistant_ids: [],
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'tuesday',
      schedule_time: '17:00',
      schedule: [{ day: 'tuesday', time: '17:00' }, { day: 'thursday', time: '17:00' }, { day: 'saturday', time: '10:00' }],
      duration_minutes: 75,
      max_students: 12,
      price: 650,
      location: 'Dojo B',
      plan_ids: ['plan_002', 'plan_003'],
      min_group: 'grp_003',
      groups: ['grp_003', 'grp_004', 'grp_005', 'grp_010'],
      start_date: '2024-02-06',
      end_date: null,
      created_at: '2024-01-22T08:00:00Z'
    },
    {
      id: 'class_006',
      academy_id: 'acad_001',
      name: 'Tae Kwon Do Avanzado',
      description: 'Poomsae Koryo, sparring olímpico y estrategia de competencia. Cinta azul en adelante.',
      instructor_ids: ['user_004'], assistant_ids: [],
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'tuesday',
      schedule_time: '19:00',
      schedule: [{ day: 'tuesday', time: '19:00' }, { day: 'thursday', time: '19:00' }],
      duration_minutes: 90,
      max_students: 8,
      price: 800,
      location: 'Dojo B',
      plan_ids: ['plan_003'],
      min_group: 'grp_005',
      groups: ['grp_005', 'grp_006', 'grp_007', 'grp_010'],
      start_date: '2024-02-07',
      end_date: null,
      created_at: '2024-01-23T08:00:00Z'
    },
    {
      id: 'class_007',
      academy_id: 'acad_001',
      name: 'Judo Principiante',
      description: 'Ukemi (técnicas de caída), posición de guardia y primeros nage-waza. Abierto a todos sin cinta previa.',
      instructor_ids: ['user_003'], assistant_ids: ['user_004'],
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'saturday',
      schedule_time: '09:00',
      schedule: [{ day: 'saturday', time: '09:00' }, { day: 'sunday', time: '09:00' }],
      duration_minutes: 75,
      max_students: 15,
      price: 580,
      location: 'Tatami',
      plan_ids: ['plan_001', 'plan_002', 'plan_003'],
      min_group: null,
      groups: ['grp_001', 'grp_002', 'grp_011'],
      start_date: '2024-02-10',
      end_date: null,
      created_at: '2024-01-23T08:00:00Z'
    },
    {
      id: 'class_008',
      academy_id: 'acad_001',
      name: 'Judo Intermedio',
      description: 'Ne-waza, osoto-gari, shiai y táctica de competencia. Para cinta naranja en adelante.',
      instructor_ids: ['user_004'], assistant_ids: [],
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'tuesday',
      schedule_time: '16:00',
      schedule: [{ day: 'tuesday', time: '16:00' }, { day: 'thursday', time: '16:00' }],
      duration_minutes: 75,
      max_students: 12,
      price: 650,
      location: 'Tatami',
      plan_ids: ['plan_002', 'plan_003'],
      min_group: 'grp_003',
      groups: ['grp_003', 'grp_004', 'grp_005', 'grp_011'],
      start_date: '2024-02-12',
      end_date: null,
      created_at: '2024-01-24T08:00:00Z'
    },
    {
      id: 'class_009',
      academy_id: 'acad_001',
      name: 'Karate Infantil',
      description: 'Karate para niños de 5 a 12 años. Valores, disciplina, kihon básico y juegos marciales en ambiente divertido.',
      instructor_ids: ['user_003'], assistant_ids: ['user_004'],
      status: 'active',
      recurrence: 'weekly',
      schedule_day: 'saturday',
      schedule_time: '11:00',
      schedule: [{ day: 'saturday', time: '11:00' }, { day: 'sunday', time: '10:00' }],
      duration_minutes: 60,
      max_students: 20,
      price: 450,
      location: 'Dojo A',
      plan_ids: ['plan_001', 'plan_002', 'plan_003'],
      min_group: null,
      groups: ['grp_001', 'grp_002', 'grp_009'],
      start_date: '2024-02-10',
      end_date: null,
      created_at: '2024-01-24T08:00:00Z'
    },
    {
      id: 'class_010',
      academy_id: 'acad_001',
      name: 'Kata y Competencia',
      description: 'Preparación especializada para torneos nacionales. Kata libre, bunkai y estrategia competitiva. Exclusivo cinta roja en adelante.',
      instructor_ids: ['user_004'], assistant_ids: [],
      status: 'draft',
      recurrence: 'weekly',
      schedule_day: 'friday',
      schedule_time: '18:00',
      schedule: [{ day: 'friday', time: '18:00' }],
      duration_minutes: 90,
      max_students: 10,
      price: 700,
      location: 'Dojo A',
      plan_ids: ['plan_003'],
      min_group: 'grp_006',
      groups: ['grp_006', 'grp_007', 'grp_008', 'grp_009', 'grp_010'],
      start_date: '2024-06-01',
      end_date: null,
      created_at: '2024-05-01T08:00:00Z'
    }
  ],

  enrollments: [
    /* Juan (Cinta Blanca, Karate, plan_001) */
    { id: 'enroll_001', student_id: 'user_005', class_id: 'class_001', status: 'active',    enrolled_at: '2024-02-01T10:00:00Z', waiting_position: null },
    { id: 'enroll_002', student_id: 'user_005', class_id: 'class_009', status: 'active',    enrolled_at: '2024-02-01T10:00:00Z', waiting_position: null },
    /* Sofía (Cinta Naranja, TKD, plan_002) */
    { id: 'enroll_003', student_id: 'user_006', class_id: 'class_004', status: 'active',    enrolled_at: '2024-02-05T10:00:00Z', waiting_position: null },
    { id: 'enroll_004', student_id: 'user_006', class_id: 'class_005', status: 'active',    enrolled_at: '2024-02-05T10:00:00Z', waiting_position: null },
    /* Diego (Cinta Azul, TKD, plan_003) */
    { id: 'enroll_005', student_id: 'user_007', class_id: 'class_005', status: 'active',    enrolled_at: '2024-02-10T10:00:00Z', waiting_position: null },
    { id: 'enroll_006', student_id: 'user_007', class_id: 'class_006', status: 'active',    enrolled_at: '2024-02-10T10:00:00Z', waiting_position: null },
    /* Valeria (Cinta Amarilla, Karate, plan_001) */
    { id: 'enroll_007', student_id: 'user_008', class_id: 'class_001', status: 'active',    enrolled_at: '2024-02-12T10:00:00Z', waiting_position: null },
    { id: 'enroll_008', student_id: 'user_008', class_id: 'class_009', status: 'active',    enrolled_at: '2024-02-12T10:00:00Z', waiting_position: null },
    /* Miguel (Cinta Verde, Karate, plan_002) */
    { id: 'enroll_009', student_id: 'user_009', class_id: 'class_001', status: 'active',    enrolled_at: '2024-02-15T10:00:00Z', waiting_position: null },
    { id: 'enroll_010', student_id: 'user_009', class_id: 'class_002', status: 'active',    enrolled_at: '2024-02-15T10:00:00Z', waiting_position: null },
    /* Camila (Cinta Blanca, Judo, plan_001) */
    { id: 'enroll_011', student_id: 'user_010', class_id: 'class_007', status: 'active',    enrolled_at: '2024-03-01T10:00:00Z', waiting_position: null },
    { id: 'enroll_012', student_id: 'user_010', class_id: 'class_004', status: 'active',    enrolled_at: '2024-03-01T10:00:00Z', waiting_position: null },
    /* Andrés (Cinta Roja, TKD, plan_003) */
    { id: 'enroll_013', student_id: 'user_011', class_id: 'class_005', status: 'active',    enrolled_at: '2024-03-05T10:00:00Z', waiting_position: null },
    { id: 'enroll_014', student_id: 'user_011', class_id: 'class_006', status: 'active',    enrolled_at: '2024-03-05T10:00:00Z', waiting_position: null },
    { id: 'enroll_015', student_id: 'user_011', class_id: 'class_003', status: 'active',    enrolled_at: '2024-03-05T10:00:00Z', waiting_position: null },
    { id: 'enroll_016', student_id: 'user_011', class_id: 'class_006', status: 'waiting',   enrolled_at: '2024-03-06T10:00:00Z', waiting_position: 1 },
    /* Isabella (inactiva, Judo) */
    { id: 'enroll_017', student_id: 'user_012', class_id: 'class_007', status: 'cancelled', enrolled_at: '2024-03-10T10:00:00Z', waiting_position: null }
  ],

  transactions: [
    /* --- INGRESOS — Juan García (plan_001 Básico $500/mes, inscripción $200) --- */
    { id: 'txn_001', type: 'income', category: 'enrollment', subcategory: 'Cuota de inscripción', amount: 200,  status: 'succeeded', payment_method: 'cash',     student_id: 'user_005', class_id: null, due_date: '2024-02-01', paid_at: '2024-02-01T10:00:00Z', notes: 'Plan Básico',  created_at: '2024-02-01T10:00:00Z' },
    { id: 'txn_002', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 500,  status: 'succeeded', payment_method: 'transfer', student_id: 'user_005', class_id: null, due_date: '2024-02-01', paid_at: '2024-02-01T10:00:00Z', notes: 'Feb 2024',     created_at: '2024-02-01T10:00:00Z' },
    { id: 'txn_003', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 500,  status: 'succeeded', payment_method: 'transfer', student_id: 'user_005', class_id: null, due_date: '2024-03-01', paid_at: '2024-03-02T11:00:00Z', notes: 'Mar 2024',     created_at: '2024-03-01T08:00:00Z' },
    { id: 'txn_004', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 500,  status: 'succeeded', payment_method: 'transfer', student_id: 'user_005', class_id: null, due_date: '2024-04-01', paid_at: '2024-04-01T09:00:00Z', notes: 'Abr 2024',     created_at: '2024-04-01T08:00:00Z' },
    { id: 'txn_005', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 500,  status: 'pending',   payment_method: null,       student_id: 'user_005', class_id: null, due_date: '2026-05-01', paid_at: null,                   notes: 'May 2026',     created_at: '2026-05-01T08:00:00Z' },

    /* --- Sofía Martínez (plan_002 Intermedio $800/mes, inscripción $300) --- */
    { id: 'txn_006', type: 'income', category: 'enrollment', subcategory: 'Cuota de inscripción', amount: 300,  status: 'succeeded', payment_method: 'cash',     student_id: 'user_006', class_id: null, due_date: '2024-02-05', paid_at: '2024-02-05T10:00:00Z', notes: 'Plan Intermedio', created_at: '2024-02-05T10:00:00Z' },
    { id: 'txn_007', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 800,  status: 'succeeded', payment_method: 'stripe',   student_id: 'user_006', class_id: null, due_date: '2024-03-01', paid_at: '2024-03-01T10:00:00Z', notes: 'Mar 2024',        created_at: '2024-03-01T08:00:00Z' },
    { id: 'txn_008', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 800,  status: 'pending',   payment_method: null,       student_id: 'user_006', class_id: null, due_date: '2026-05-01', paid_at: null,                   notes: 'May 2026',        created_at: '2026-05-01T08:00:00Z' },

    /* --- Diego Hernández (plan_003 Negro $1200/mes, inscripción $400) — al corriente --- */
    { id: 'txn_009', type: 'income', category: 'enrollment', subcategory: 'Cuota de inscripción', amount: 400,  status: 'succeeded', payment_method: 'cash',     student_id: 'user_007', class_id: null, due_date: '2024-02-10', paid_at: '2024-02-10T10:00:00Z', notes: 'Plan Negro',   created_at: '2024-02-10T08:00:00Z' },
    { id: 'txn_010', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 1200, status: 'succeeded', payment_method: 'stripe',   student_id: 'user_007', class_id: null, due_date: '2024-04-01', paid_at: '2024-04-02T10:00:00Z', notes: 'Abr 2024',     created_at: '2024-04-01T08:00:00Z' },
    { id: 'txn_011', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 1200, status: 'succeeded', payment_method: 'stripe',   student_id: 'user_007', class_id: null, due_date: '2026-05-01', paid_at: '2026-05-01T10:00:00Z', notes: 'May 2026',     created_at: '2026-05-01T08:00:00Z' },

    /* --- Valeria Torres (plan_001 Básico $500/mes, inscripción $200) — mensualidad vencida --- */
    { id: 'txn_012', type: 'income', category: 'enrollment', subcategory: 'Cuota de inscripción', amount: 200,  status: 'succeeded', payment_method: 'cash',     student_id: 'user_008', class_id: null, due_date: '2024-02-12', paid_at: '2024-02-12T10:00:00Z', notes: 'Plan Básico', created_at: '2024-02-12T08:00:00Z' },
    { id: 'txn_013', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 500,  status: 'pending',   payment_method: null,       student_id: 'user_008', class_id: null, due_date: '2026-04-15', paid_at: null,                   notes: 'Abr 2026',    created_at: '2026-04-15T08:00:00Z' },

    /* --- Miguel Flores (plan_002 Intermedio $800/mes, inscripción $300) — pago fallido --- */
    { id: 'txn_014', type: 'income', category: 'enrollment', subcategory: 'Cuota de inscripción', amount: 300,  status: 'succeeded', payment_method: 'transfer', student_id: 'user_009', class_id: null, due_date: '2024-02-15', paid_at: '2024-02-15T10:00:00Z', notes: 'Plan Intermedio', created_at: '2024-02-15T08:00:00Z' },
    { id: 'txn_015', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 800,  status: 'failed',    payment_method: 'stripe',   student_id: 'user_009', class_id: null, due_date: '2026-05-01', paid_at: null,                   notes: 'Tarjeta declinada', created_at: '2026-05-01T08:00:00Z' },

    /* --- Camila Ramírez (plan_001 Básico $500/mes, inscripción $200) --- */
    { id: 'txn_016', type: 'income', category: 'enrollment', subcategory: 'Cuota de inscripción', amount: 200,  status: 'succeeded', payment_method: 'cash',     student_id: 'user_010', class_id: null, due_date: '2024-03-01', paid_at: '2024-03-01T11:00:00Z', notes: 'Plan Básico', created_at: '2024-03-01T11:00:00Z' },
    { id: 'txn_017', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 500,  status: 'succeeded', payment_method: 'cash',     student_id: 'user_010', class_id: null, due_date: '2024-04-01', paid_at: '2024-04-02T10:00:00Z', notes: 'Abr 2024',    created_at: '2024-04-01T08:00:00Z' },
    { id: 'txn_018', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 500,  status: 'pending',   payment_method: null,       student_id: 'user_010', class_id: null, due_date: '2026-05-01', paid_at: null,                   notes: 'May 2026',    created_at: '2026-05-01T08:00:00Z' },

    /* --- Andrés Morales (plan_003 Negro $1200/mes, inscripción $400) --- */
    { id: 'txn_019', type: 'income', category: 'enrollment', subcategory: 'Cuota de inscripción', amount: 400,  status: 'succeeded', payment_method: 'transfer', student_id: 'user_011', class_id: null, due_date: '2024-03-05', paid_at: '2024-03-05T10:00:00Z', notes: 'Plan Negro', created_at: '2024-03-05T10:00:00Z' },
    { id: 'txn_020', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 1200, status: 'succeeded', payment_method: 'transfer', student_id: 'user_011', class_id: null, due_date: '2024-04-01', paid_at: '2024-04-01T10:00:00Z', notes: 'Abr 2024',   created_at: '2024-04-01T08:00:00Z' },
    { id: 'txn_021', type: 'income', category: 'enrollment', subcategory: 'Mensualidad',          amount: 1200, status: 'pending',   payment_method: null,       student_id: 'user_011', class_id: null, due_date: '2026-05-01', paid_at: null,                   notes: 'May 2026',   created_at: '2026-05-01T08:00:00Z' },

    /* --- GASTOS --- */
    { id: 'txn_022', type: 'expense', category: 'expense', subcategory: 'Renta',        amount: 18000, status: 'succeeded', payment_method: 'transfer', student_id: null, class_id: null, due_date: '2026-05-01', paid_at: '2026-04-30T09:00:00Z', notes: 'Renta mayo 2026',              created_at: '2026-04-30T09:00:00Z' },
    { id: 'txn_023', type: 'expense', category: 'expense', subcategory: 'Servicios',    amount: 2100,  status: 'succeeded', payment_method: 'transfer', student_id: null, class_id: null, due_date: '2026-04-28', paid_at: '2026-04-28T10:00:00Z', notes: 'Electricidad y agua',          created_at: '2026-04-28T10:00:00Z' },
    { id: 'txn_024', type: 'expense', category: 'expense', subcategory: 'Marketing',    amount: 3500,  status: 'succeeded', payment_method: 'stripe',   student_id: null, class_id: null, due_date: '2026-04-15', paid_at: '2026-04-15T10:00:00Z', notes: 'Facebook & Instagram Ads',     created_at: '2026-04-15T10:00:00Z' },
    { id: 'txn_025', type: 'expense', category: 'expense', subcategory: 'Equipamiento', amount: 8500,  status: 'succeeded', payment_method: 'transfer', student_id: null, class_id: null, due_date: '2026-03-20', paid_at: '2026-03-20T09:00:00Z', notes: 'Espejos para Dojo A',          created_at: '2026-03-20T09:00:00Z' },
    { id: 'txn_026', type: 'expense', category: 'expense', subcategory: 'Limpieza',     amount: 1200,  status: 'succeeded', payment_method: 'cash',     student_id: null, class_id: null, due_date: '2026-04-30', paid_at: '2026-04-30T08:00:00Z', notes: 'Servicio de limpieza mensual', created_at: '2026-04-30T08:00:00Z' },
    { id: 'txn_027', type: 'expense', category: 'expense', subcategory: 'Software',     amount: 799,   status: 'succeeded', payment_method: 'stripe',   student_id: null, class_id: null, due_date: '2026-05-01', paid_at: '2026-05-01T08:00:00Z', notes: 'Suscripción mensual plataforma', created_at: '2026-05-01T08:00:00Z' },
    /* --- NÓMINA --- */
    { id: 'txn_028', type: 'expense', category: 'payroll', subcategory: 'Nómina instructora', amount: 11200, status: 'succeeded', payment_method: 'transfer', recipient_id: 'user_003', student_id: null, class_id: null, period_start: '2026-04-01', period_end: '2026-04-30', payroll_type: 'hourly', paid_at: '2026-05-02T10:00:00Z', notes: '40 hrs × $280', created_at: '2026-05-02T10:00:00Z' },
    { id: 'txn_029', type: 'expense', category: 'payroll', subcategory: 'Nómina instructor',  amount: 12800, status: 'succeeded', payment_method: 'transfer', recipient_id: 'user_004', student_id: null, class_id: null, period_start: '2026-04-01', period_end: '2026-04-30', payroll_type: 'hourly', paid_at: '2026-05-02T10:00:00Z', notes: '40 hrs × $320', created_at: '2026-05-02T10:00:00Z' },
    { id: 'txn_030', type: 'expense', category: 'payroll', subcategory: 'Nómina instructora', amount: 0,     status: 'pending',   payment_method: null,       recipient_id: 'user_003', student_id: null, class_id: null, period_start: '2026-05-01', period_end: '2026-05-31', payroll_type: 'hourly', paid_at: null,                   notes: null,            created_at: '2026-05-01T08:00:00Z' },
    { id: 'txn_031', type: 'expense', category: 'payroll', subcategory: 'Nómina instructor',  amount: 0,     status: 'pending',   payment_method: null,       recipient_id: 'user_004', student_id: null, class_id: null, period_start: '2026-05-01', period_end: '2026-05-31', payroll_type: 'hourly', paid_at: null,                   notes: null,            created_at: '2026-05-01T08:00:00Z' }
  ],

  attendance: (function() {
    const records = [];
    const today = new Date();
    const classSchedule = {
      'class_001': { day: 1, students: ['user_005','user_008','user_009'] },           // Karate Principiante — Lunes
      'class_002': { day: 2, students: ['user_009'] },                                 // Karate Intermedio — Martes
      'class_003': { day: 1, students: ['user_011'] },                                 // Karate Avanzado — Lunes
      'class_004': { day: 1, students: ['user_006','user_010'] },                      // TKD Principiante — Lunes
      'class_005': { day: 2, students: ['user_006','user_007','user_011'] },           // TKD Intermedio — Martes
      'class_006': { day: 2, students: ['user_007','user_011'] },                      // TKD Avanzado — Martes
      'class_007': { day: 6, students: ['user_010'] },                                 // Judo Principiante — Sábado
      'class_009': { day: 6, students: ['user_005','user_008'] }                       // Karate Infantil — Sábado
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
    { id: 'inv_001', academy_id: 'acad_001', email: 'nuevo.instructor@mail.com', role: 'instructor', first_name: 'Carlos',   last_name: 'Vega',  invited_by: 'user_001', token: 'tok_inv_abc123', expires_at: '2026-06-05T00:00:00Z', accepted_at: null, created_at: '2026-05-06T10:00:00Z' },
    { id: 'inv_002', academy_id: 'acad_001', email: 'nuevo.estudiante@mail.com', role: 'student',    first_name: 'Fernanda', last_name: 'Ruiz',  invited_by: 'user_001', token: 'tok_inv_def456', expires_at: '2026-06-05T00:00:00Z', accepted_at: null, created_at: '2026-05-06T11:00:00Z' }
  ],

  notifications_config: {
    'user_001': { upcoming_payments: true,  new_enrollments: true,  attendance_reminders: true,  waitlist_promotions: true  },
    'user_002': { upcoming_payments: true,  new_enrollments: true,  attendance_reminders: false, waitlist_promotions: false },
    'user_003': { upcoming_payments: false, new_enrollments: true,  attendance_reminders: true,  waitlist_promotions: false },
    'user_005': { upcoming_payments: true,  new_enrollments: false, attendance_reminders: true,  waitlist_promotions: true  }
  }
};

/* ================================================================
   HELPERS
   ================================================================ */

window.DB = {
  /* ── Usuarios ─────────────────────────────────────────────────── */
  getUser:          id    => MOCK_DB.users.find(u => u.id === id),
  getUserByEmail:   email => MOCK_DB.users.find(u => u.email.toLowerCase() === email.toLowerCase()),
  getStudents:      ()    => MOCK_DB.users.filter(u => u.role === 'student'),
  getInstructors:   ()    => MOCK_DB.users.filter(u => u.role === 'instructor'),

  /* ── Clases ───────────────────────────────────────────────────── */
  getClass:         id    => MOCK_DB.classes.find(c => c.id === id),
  getActiveClasses: ()    => MOCK_DB.classes.filter(c => c.status === 'active'),
  getInstructorClasses: instructorId => MOCK_DB.classes.filter(c => c.status === 'active' && ((c.instructor_ids||[]).includes(instructorId) || (c.assistant_ids||[]).includes(instructorId))),

  /* ── Planes ───────────────────────────────────────────────────── */
  getPlan:          id    => MOCK_DB.plans.find(p => p.id === id),
  getActivePlans:   ()    => MOCK_DB.plans.filter(p => p.is_active),
  getStudentsInPlan: planId => MOCK_DB.users.filter(u => u.role === 'student' && u.is_active && u.plan_id === planId),

  /* ── Ejes y Grupos ────────────────────────────────────────────── */
  getAxis:          id      => MOCK_DB.axes.find(a => a.id === id),
  getGroup:         id      => MOCK_DB.groups.find(g => g.id === id),
  getAxes:          ()      => MOCK_DB.axes,
  getGroupsByAxis:  axisId  => MOCK_DB.groups.filter(g => g.axis_id === axisId).sort((a,b) => a.order - b.order),
  getStudentGroups: userId  => {
    const u = MOCK_DB.users.find(x => x.id === userId);
    return (u?.groups || []).map(gid => MOCK_DB.groups.find(g => g.id === gid)).filter(Boolean);
  },

  /* ── Lógica de inscripción ────────────────────────────────────── */
  checkEnrollAccess: (studentId, classId) => {
    const student = MOCK_DB.users.find(u => u.id === studentId);
    const cls     = MOCK_DB.classes.find(c => c.id === classId);
    if (!student || !cls) return { allowed: false, reason: 'No encontrado' };

    // 1. Verificar nivel mínimo requerido
    if (cls.min_group) {
      const required = MOCK_DB.groups.find(g => g.id === cls.min_group);
      if (required) {
        const studentGroupsOnAxis = (student.groups || [])
          .map(gid => MOCK_DB.groups.find(g => g.id === gid))
          .filter(g => g && g.axis_id === required.axis_id);
        const studentOrder = studentGroupsOnAxis.length
          ? Math.max(...studentGroupsOnAxis.map(g => g.order))
          : 0;
        if (studentOrder < required.order) {
          return { allowed: false, level_block: true,
            reason: `Esta clase requiere nivel ${required.name} o superior. Tu nivel actual no cumple el prerrequisito.` };
        }
      }
    }

    // 2. Verificar cobertura del plan
    const inPlan = (cls.plan_ids || []).includes(student.plan_id);
    if (!inPlan) {
      const plan = MOCK_DB.plans.find(p => p.id === student.plan_id);
      return { allowed: true, premium: true, price: cls.price,
        reason: `Esta clase no está incluida en tu ${plan?.name || 'plan'}. Costo individual: $${cls.price}.` };
    }

    return { allowed: true, premium: false };
  },

  /* ── Inscripciones ────────────────────────────────────────────── */
  getEnrollmentsForStudent: studentId => MOCK_DB.enrollments.filter(e => e.student_id === studentId && e.status === 'active'),
  getEnrollmentsForClass:   classId   => MOCK_DB.enrollments.filter(e => e.class_id === classId && e.status === 'active'),

  enrollStudent: (studentId, classId) => {
    const exists = MOCK_DB.enrollments.find(e => e.student_id === studentId && e.class_id === classId);
    if (exists) return exists;
    const cls      = MOCK_DB.classes.find(c => c.id === classId);
    const enrolled = MOCK_DB.enrollments.filter(e => e.class_id === classId && e.status === 'active').length;
    const status   = cls && cls.max_students && enrolled >= cls.max_students ? 'waiting' : 'active';
    const waiting_position = status === 'waiting'
      ? MOCK_DB.enrollments.filter(e => e.class_id === classId && e.status === 'waiting').length + 1
      : null;
    const id = 'enroll_' + String(MOCK_DB.enrollments.length + 1).padStart(3, '0');
    const enrollment = { id, student_id: studentId, class_id: classId, status, enrolled_at: new Date().toISOString(), waiting_position };
    MOCK_DB.enrollments.push(enrollment);
    return enrollment;
  },

  cancelEnrollment: (enrollmentId) => {
    const e = MOCK_DB.enrollments.find(e => e.id === enrollmentId);
    if (e) { e.status = 'cancelled'; e.cancelled_at = new Date().toISOString(); }
    return e;
  },

  /* ── Asistencia ───────────────────────────────────────────────── */
  getAttendanceForClass:   (classId, date) => MOCK_DB.attendance.filter(a => a.class_id === classId && a.session_date === date),
  getAttendanceForStudent: studentId       => MOCK_DB.attendance.filter(a => a.user_id === studentId),

  getAttendanceRate: studentId => {
    const records = MOCK_DB.attendance.filter(a => a.user_id === studentId);
    if (!records.length) return 0;
    return Math.round(records.filter(a => a.status === 'present').length / records.length * 100);
  },

  /* ── Financiero ───────────────────────────────────────────────── */
  getStudentDebt: studentId => MOCK_DB.transactions
    .filter(t => t.student_id === studentId && t.type === 'income' && t.status === 'pending')
    .reduce((s, t) => s + t.amount, 0),

  getTotalDebt: () => MOCK_DB.transactions
    .filter(t => t.type === 'income' && t.status === 'pending')
    .reduce((s, t) => s + t.amount, 0),

  getMonthlyRevenue: () => {
    const now = new Date();
    return MOCK_DB.transactions
      .filter(t => t.type === 'income' && t.status === 'succeeded' && t.paid_at &&
        new Date(t.paid_at).getMonth() === now.getMonth())
      .reduce((s, t) => s + t.amount, 0);
  },

  getInstructorHours: (instructorId, periodStart, periodEnd) => {
    const classIds = MOCK_DB.classes.filter(c => c.instructor_id === instructorId).map(c => c.id);
    const records  = MOCK_DB.attendance.filter(a =>
      classIds.includes(a.class_id) && a.session_date >= periodStart && a.session_date <= periodEnd);
    const sessions = [...new Set(records.map(a => a.class_id + '_' + a.session_date))];
    return sessions.reduce((sum, key) => {
      const cls = MOCK_DB.classes.find(c => c.id === key.split('_')[0]);
      return sum + (cls ? cls.duration_minutes / 60 : 0);
    }, 0);
  },

  addTransaction: (data) => {
    const id  = 'txn_' + String(MOCK_DB.transactions.length + 1).padStart(3, '0');
    const txn = { id, ...data, created_at: new Date().toISOString() };
    MOCK_DB.transactions.push(txn);
    return txn;
  },

  /* keep for pages that haven't migrated yet */
  getCategory: id => MOCK_DB.plans.find(p => p.id === id) || MOCK_DB.groups.find(g => g.id === id)
};
