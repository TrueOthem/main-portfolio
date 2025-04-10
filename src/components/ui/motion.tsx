'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Fade in animation
export const FadeIn = ({
  children,
  delay = 0,
  direction = null,
  duration = 0.5,
  className = '',
  fullWidth = false,
}: {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  duration?: number;
  className?: string;
  fullWidth?: boolean;
}) => {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const initial = {
    opacity: 0,
    ...(direction && directionOffset[direction]),
  };

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={fullWidth ? { width: '100%' } : {}}
    >
      {children}
    </motion.div>
  );
};

// Stagger children animation (for lists, grids, etc.)
export const StaggerContainer = ({
  children,
  delay = 0,
  className = '',
  staggerChildren = 0.1,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  staggerChildren?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// For staggered child items
export const StaggerItem = ({
  children,
  direction = null,
  className = '',
}: {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  className?: string;
}) => {
  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  const initial = {
    opacity: 0,
    ...(direction && directionOffset[direction]),
  };

  return (
    <motion.div
      variants={{
        hidden: initial,
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale animation
export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hover animation wrapper
export const HoverScale = ({
  children,
  scale = 1.05,
  className = '',
}: {
  children: ReactNode;
  scale?: number;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: scale }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Text reveal animation for headings
export const RevealText = ({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Path drawing animation for SVGs
export const DrawSVG = ({
  children,
  delay = 0,
  duration = 1.5,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.01 }}
      className={className}
    >
      <motion.svg
        initial="hidden"
        animate="visible"
        className="w-full h-full"
      >
        {children}
      </motion.svg>
    </motion.div>
  );
};

// SVG path for drawing animation
export const SVGPath = ({
  d,
  stroke = 'currentColor',
  strokeWidth = 2,
  delay = 0,
  duration = 1.5,
}: {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      variants={{
        hidden: { pathLength: 0 },
        visible: {
          pathLength: 1,
          transition: {
            delay,
            duration,
            ease: "easeInOut"
          }
        }
      }}
    />
  );
};

// Scroll-triggered animation
export const ScrollReveal = ({
  children,
  threshold = 0.1,
  className = '',
}: {
  children: ReactNode;
  threshold?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, threshold }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
