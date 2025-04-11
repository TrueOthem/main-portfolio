'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useDeviceDetection, shouldReduceMotion } from '@/lib/utils';

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
  const [isMounted, setIsMounted] = useState(false);
  const [optimizedSize, setOptimizedSize] = useState(size);
  const [optimizedThickness, setOptimizedThickness] = useState(thickness);
  const [optimizedType, setOptimizedType] = useState(type);
  const [animationDuration, setAnimationDuration] = useState(1);
  const [pulseDelay, setPulseDelay] = useState(0.2);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Optimize for mobile
      if (isMobile) {
        // Slightly smaller spinner on mobile
        setOptimizedSize(size * 0.85);
        setOptimizedThickness(thickness * 0.9);
        // Faster animation
        setAnimationDuration(0.7);
        setPulseDelay(0.15);

        // Use simpler spinner types on low-end devices
        if (window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency < 4) {
          if (type === 'gridLoader') setOptimizedType('dotPulse');
        }
      } else if (isTablet) {
        setOptimizedSize(size * 0.9);
        setAnimationDuration(0.85);
        setPulseDelay(0.18);
      }

      // Respect reduced motion preferences
      if (isReducedMotion) {
        setAnimationDuration(0.5);
        // Use simplest spinner type
        if (type === 'gridLoader') setOptimizedType('circular');
      }
    }
  }, [isMounted, size, thickness, type]);

  switch (optimizedType) {
    case 'circular':
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <motion.div
            className="rounded-full border-t-transparent"
            style={{
              width: optimizedSize,
              height: optimizedSize,
              borderWidth: optimizedThickness,
              borderColor: color,
              borderTopColor: 'transparent',
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: animationDuration,
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
                width: optimizedSize / 3,
                height: optimizedSize / 3,
                backgroundColor: color,
                borderRadius: '50%',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: animationDuration * 0.8,
                repeat: Infinity,
                delay: index * pulseDelay,
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
          style={{ width: optimizedSize, height: optimizedSize }}
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
                duration: animationDuration * 0.8,
                repeat: Infinity,
                delay: (index * 0.1 * pulseDelay * 5) % (0.8 * pulseDelay * 5),
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
            width: optimizedSize * 3,
            height: optimizedSize / 4,
            backgroundColor: `${color}30`,
            borderRadius: optimizedSize / 8,
          }}
        >
          <motion.div
            style={{
              height: '100%',
              backgroundColor: color,
              borderRadius: optimizedSize / 8,
            }}
            animate={{
              width: ['0%', '100%', '0%'],
              x: ['-100%', '0%', '100%'],
            }}
            transition={{
              duration: animationDuration * 2,
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
  const [isMounted, setIsMounted] = useState(false);
  const [blurAmount, setBlurAmount] = useState('backdrop-blur-sm');
  const [optimizedSpinnerType, setOptimizedSpinnerType] = useState<'dotPulse' | 'circular'>('dotPulse');

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isReducedMotion } = useDeviceDetection();

      // Reduce blur for better performance on mobile
      if (isMobile) {
        setBlurAmount('backdrop-blur-[2px]');
        // Simple spinner for lower-end devices
        if (window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency < 4) {
          setOptimizedSpinnerType('circular');
        }
      }

      // Simple spinner for reduced motion
      if (isReducedMotion) {
        setOptimizedSpinnerType('circular');
      }
    }
  }, [isMounted]);

  return (
    <motion.div
      className={`fixed inset-0 bg-background/80 ${blurAmount} z-50 flex flex-col items-center justify-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoadingSpinner size={60} type={optimizedSpinnerType} className="mb-4" />
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
  const [isMounted, setIsMounted] = useState(false);
  const [barHeight, setBarHeight] = useState(0.5);
  const [animationDuration, setAnimationDuration] = useState({
    loading: 0.3,
    complete: 0.8
  });

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet } = useDeviceDetection();

      // Thicker bar on mobile for better visibility
      if (isMobile) {
        setBarHeight(0.75);
        // Faster animations on mobile
        setAnimationDuration({
          loading: 0.2,
          complete: 0.6
        });
      } else if (isTablet) {
        setBarHeight(0.6);
        setAnimationDuration({
          loading: 0.25,
          complete: 0.7
        });
      }
    }
  }, [isMounted]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bg-primary z-50"
      style={{ height: `${barHeight}rem` }}
      initial={{ width: '0%', opacity: 0 }}
      animate={{
        width: isLoading ? `${progress}%` : '100%',
        opacity: isLoading || progress > 0 ? 1 : 0,
        transition: {
          duration: isLoading ? animationDuration.loading : animationDuration.complete,
        },
      }}
      exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.5 } }}
    />
  );
};
