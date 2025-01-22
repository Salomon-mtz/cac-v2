import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`${sizes[size]} rounded-full border-4 border-primary border-t-transparent`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default Loading;