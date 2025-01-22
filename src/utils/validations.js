// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

// Phone validation (10 digits)
export const isValidPhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};

// Required field validation
export const isRequired = (value) => {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'string') return value.trim().length > 0;
  if (typeof value === 'number') return true;
  return !!value;
};

// Password validation (min 8 chars, 1 uppercase, 1 lowercase, 1 number)
export const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

// Date validation (YYYY-MM-DD)
export const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

// File size validation (in MB)
export const isValidFileSize = (file, maxSizeMB = 5) => {
  return file.size <= maxSizeMB * 1024 * 1024;
};

// File type validation
export const isValidFileType = (file, allowedTypes = []) => {
  return allowedTypes.includes(file.type);
};

// Form validation
export const validateForm = (values, rules) => {
  const errors = {};

  Object.keys(rules).forEach(field => {
    const value = values[field];
    const fieldRules = rules[field];

    if (fieldRules.required && !isRequired(value)) {
      errors[field] = 'Este campo es requerido';
    } else if (value) {
      if (fieldRules.email && !isValidEmail(value)) {
        errors[field] = 'Email inválido';
      }
      if (fieldRules.phone && !isValidPhone(value)) {
        errors[field] = 'Teléfono inválido';
      }
      if (fieldRules.password && !isValidPassword(value)) {
        errors[field] = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número';
      }
      if (fieldRules.date && !isValidDate(value)) {
        errors[field] = 'Fecha inválida';
      }
      if (fieldRules.minLength && value.length < fieldRules.minLength) {
        errors[field] = `Debe tener al menos ${fieldRules.minLength} caracteres`;
      }
      if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
        errors[field] = `Debe tener máximo ${fieldRules.maxLength} caracteres`;
      }
    }
  });

  return errors;
};