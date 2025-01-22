import React from 'react';

export const Input = React.forwardRef(({ 
  label,
  error,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-light mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-4 py-2 bg-light/5 
          border border-light/10 rounded-lg 
          focus:outline-none focus:border-primary 
          text-light transition-colors
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
});

export const TextArea = React.forwardRef(({ 
  label,
  error,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-light mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={`
          w-full px-4 py-2 bg-light/5 
          border border-light/10 rounded-lg 
          focus:outline-none focus:border-primary 
          text-light transition-colors resize-none
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
});

export const Select = React.forwardRef(({ 
  label,
  error,
  children,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-light mb-2">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={`
          w-full px-4 py-2 bg-light/5 
          border border-light/10 rounded-lg 
          focus:outline-none focus:border-primary 
          text-light transition-colors
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
});

export const Checkbox = React.forwardRef(({ 
  label,
  error,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        ref={ref}
        className={`
          w-5 h-5 rounded 
          border-light/10 
          text-primary 
          focus:ring-primary
          ${className}
        `}
        {...props}
      />
      {label && (
        <label className="text-light">
          {label}
        </label>
      )}
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
});