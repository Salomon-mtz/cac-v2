import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  containerClassName = '',
  variant = 'default',
  ...props 
}) => {
  const variants = {
    default: 'bg-dark',
    primary: 'bg-primary/10',
    secondary: 'bg-dark/50',
  };

  return (
    <section className={`py-16 px-4 ${variants[variant]} ${className}`} {...props}>
      <div className={`container mx-auto ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export const SectionTitle = ({ 
  children, 
  highlight, 
  className = '',
  centered = false,
  ...props 
}) => {
  const textContent = highlight ? (
    <>
      {children.split(highlight).map((part, i, arr) => (
        <React.Fragment key={i}>
          {part}
          {i < arr.length - 1 && <span className="text-primary">{highlight}</span>}
        </React.Fragment>
      ))}
    </>
  ) : children;

  return (
    <h2 
      className={`text-4xl font-bold text-light mb-8 ${centered ? 'text-center' : ''} ${className}`}
      {...props}
    >
      {textContent}
    </h2>
  );
};

export const SectionSubtitle = ({ 
  children, 
  className = '',
  centered = false,
  ...props 
}) => {
  return (
    <p 
      className={`text-xl text-light/80 ${centered ? 'text-center' : ''} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Section;