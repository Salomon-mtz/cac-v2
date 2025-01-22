import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-light/5 rounded-xl overflow-hidden hover:bg-light/10 transition-colors ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h3 className={`text-xl font-bold text-primary mb-2 ${className}`} {...props}>
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-6 pb-6 text-light/80 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const AnimatedCard = motion(Card);