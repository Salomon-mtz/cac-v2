// Navigation Links
export const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  { name: 'Nuestro Colegio', path: '/colegio' },
  { name: 'Inscripciones', path: '/inscripciones' },
  { name: 'Academia', path: '/academia' },
  { name: 'Actividades', path: '/actividades' },
  { name: 'Contacto', path: '/contacto' }
];

// Social Media Links
export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' }
];

// Contact Information
export const CONTACT_INFO = {
  address: 'Av. Principal #123',
  city: 'Ciudad',
  country: 'México',
  phone: '(123) 456-7890',
  email: 'info@escuela.edu'
};

// School Programs
export const PROGRAMS = {
  kinder: {
    ages: '3-5 años',
    description: 'Desarrollo temprano y fundamentos educativos',
    activities: ['Desarrollo motriz', 'Iniciación a la lectura', 'Arte y música']
  },
  primary: {
    ages: '6-12 años',
    description: 'Educación primaria integral',
    activities: ['Matemáticas', 'Español', 'Ciencias', 'Historia']
  }
};

// Academic Levels
export const ACADEMIC_LEVELS = [
  { id: 'kinder3', name: 'Kinder 3 años' },
  { id: 'kinder4', name: 'Kinder 4 años' },
  { id: 'kinder5', name: 'Kinder 5 años' },
  { id: 'primero', name: '1° Primaria' },
  { id: 'segundo', name: '2° Primaria' },
  { id: 'tercero', name: '3° Primaria' },
  { id: 'cuarto', name: '4° Primaria' },
  { id: 'quinto', name: '5° Primaria' },
  { id: 'sexto', name: '6° Primaria' }
];

// Required Documents
export const REQUIRED_DOCUMENTS = [
  { id: 'actaNacimiento', name: 'Acta de Nacimiento' },
  { id: 'boletaAnterior', name: 'Boleta de Calificaciones del Año Anterior' },
  { id: 'certificadoMedico', name: 'Certificado Médico' },
  { id: 'cartaRecomendacion', name: 'Carta de Recomendación', optional: true }
];

// School Values
export const SCHOOL_VALUES = [
  {
    title: 'Excelencia Académica',
    description: 'Compromiso con los más altos estándares educativos'
  },
  {
    title: 'Integridad',
    description: 'Formación basada en valores éticos y morales'
  },
  {
    title: 'Innovación',
    description: 'Incorporación de metodologías y tecnologías modernas'
  },
  {
    title: 'Comunidad',
    description: 'Fomento de un ambiente inclusivo y colaborativo'
  }
];

// Form Validation Rules
export const VALIDATION_RULES = {
  required: 'Este campo es requerido',
  email: 'Email inválido',
  phone: 'Teléfono inválido (10 dígitos)',
  date: 'Fecha inválida',
  minLength: (length) => `Mínimo ${length} caracteres`,
  maxLength: (length) => `Máximo ${length} caracteres`
};