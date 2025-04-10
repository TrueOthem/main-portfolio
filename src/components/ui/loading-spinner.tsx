'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  thickness?: number;
  type?: 'circular' | 'dotPulse' | 'gridLoader' | 'barProgress';
  className?: string;
}

export const LoadingSpinner = ({
  size = 40,
  color = 'currentColor',
  thickness = 4,
  type = 'circular',
  className = '',
}: LoadingSpinnerProps) => {
  switch (type) {
    case 'circular':
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <motion.div
            className="rounded-full border-t-transparent"
            style={{
              width: size,
              height: size,
              borderWidth: thickness,
              borderColor: color,
              borderTopColor: 'transparent',
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      );

    case 'dotPulse':
      return (
        <div className={`flex items-center justify-center space-x-2 ${className}`}>
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              style={{
                width: size / 3,
                height: size / 3,
                backgroundColor: color,
                borderRadius: '50%',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      );

    case 'gridLoader':
      return (
        <div
          className={`grid grid-cols-3 gap-1 ${className}`}
          style={{ width: size, height: size }}
        >
          {[...Array(9)].map((_, index) => (
            <motion.div
              key={index}
              style={{
                backgroundColor: color,
                borderRadius: '2px',
              }}
              animate={{
                scale: [1, 0.7, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: (index * 0.1) % 0.8,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      );

    case 'barProgress':
      return (
        <div
          className={`relative overflow-hidden ${className}`}
          style={{
            width: size * 3,
            height: size / 4,
            backgroundColor: `${color}30`,
            borderRadius: size / 8,
          }}
        >
          <motion.div
            style={{
              height: '100%',
              backgroundColor: color,
              borderRadius: size / 8,
            }}
            animate={{
              width: ['0%', '100%', '0%'],
              x: ['-100%', '0%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      );

    default:
      return null;
  }
};

// A full-screen loading overlay component
export const LoadingOverlay = ({ message = 'Loading...' }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoadingSpinner size={60} type="dotPulse" className="mb-4" />
      <motion.p
        className="text-primary text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {message}
      </motion.p>
    </motion.div>
  );
};

// A progress bar that can be used at the top of the page
export const ProgressBar = ({ isLoading = false, progress = 0 }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-50"
      initial={{ width: '0%', opacity: 0 }}
      animate={{
        width: isLoading ? `${progress}%` : '100%',
        opacity: isLoading || progress > 0 ? 1 : 0,
        transition: {
          duration: isLoading ? 0.3 : 0.8,
        },
      }}
      exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.5 } }}
    />
  );
};
