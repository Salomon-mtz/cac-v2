import { useState, useCallback } from 'react';

const useForm = (initialState = {}, onSubmit = () => {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const validateForm = useCallback((values) => {
    const errors = {};
    // Add your validation rules here
    Object.keys(values).forEach(key => {
      if (values[key] === '' && key !== 'mensaje') {
        errors[key] = 'Este campo es requerido';
      }
      
      if (key === 'email' && values[key] && !/\S+@\S+\.\S+/.test(values[key])) {
        errors[key] = 'Email inválido';
      }
      
      if (key === 'telefono' && values[key] && !/^\d{10}$/.test(values[key])) {
        errors[key] = 'Teléfono inválido (10 dígitos)';
      }
    });
    
    return errors;
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(values);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
        // Reset form on successful submission
        setValues(initialState);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  }, [values, initialState, validateForm, onSubmit]);

  const resetForm = useCallback(() => {
    setValues(initialState);
    setErrors({});
    setIsSubmitting(false);
  }, [initialState]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
    setErrors
  };
};

export default useForm;