const appConfig = {
  // App Info
  name: 'Escuela',
  title: 'Escuela - Formando Líderes del Mañana',
  description: 'Formando líderes del mañana con valores y excelencia académica',
  version: '1.0.0',
  
  // API Configuration
  api: {
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    timeout: 5000,
  },

  // Theme Configuration
  theme: {
    colors: {
      primary: '#FFB618',
      dark: '#101010',
      light: '#FBFBFB',
    },
    fonts: {
      primary: '"Inter", sans-serif',
    },
  },

  // SEO Configuration
  seo: {
    titleTemplate: '%s | Escuela',
    defaultTitle: 'Escuela - Formando Líderes del Mañana',
    defaultDescription: 'Formando líderes del mañana con valores y excelencia académica',
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      site_name: 'Escuela',
    },
  },

  // Social Media
  social: {
    facebook: 'https://facebook.com/escuela',
    instagram: 'https://instagram.com/escuela',
    twitter: 'https://twitter.com/escuela',
  },

  // Contact Information
  contact: {
    address: 'Av. Principal #123',
    city: 'Ciudad',
    country: 'México',
    phone: '(123) 456-7890',
    email: 'info@escuela.edu',
    maps: {
      lat: 19.4326,
      lng: -99.1332,
      zoom: 15,
    }
  },

  // Form Configuration
  forms: {
    maxFileSize: 5, // MB
    allowedFileTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    reCaptchaSiteKey: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
    endpoints: {
      contact: '/api/contact',
      inscription: '/api/inscription',
    },
  },

  // Analytics Configuration
  analytics: {
    googleAnalyticsId: process.env.REACT_APP_GA_ID,
  },

  // Features Flags
  features: {
    darkMode: true,
    newsletter: true,
    virtualTour: false,
    onlinePayments: false,
  },

  // Cache Configuration
  cache: {
    version: 1,
    ttl: 3600, // 1 hour
  },

  // Image Configuration
  images: {
    domains: ['escuela.edu', 'storage.googleapis.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp'],
  },
};

export default appConfig;