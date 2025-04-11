'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { getAnimationConfig, shouldReduceMotion, useDeviceDetection } from '@/lib/utils';

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
  // Use device detection to optimize animations
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Default values
  let offsetDistance = 40;
  let animDuration = duration;
  let animDelay = delay;

  if (isMounted) {
    const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

    // Reduce animation distance on mobile
    if (isMobile) {
      offsetDistance = 20;
      animDuration = duration * 0.7;
    } else if (isTablet) {
      offsetDistance = 30;
      animDuration = duration * 0.85;
    }

    // Respect reduced motion preferences
    if (isReducedMotion) {
      offsetDistance = 0;
      animDuration = duration * 0.5;
    }
  }

  const directionOffset = {
    up: { y: offsetDistance },
    down: { y: -offsetDistance },
    left: { x: offsetDistance },
    right: { x: -offsetDistance },
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
        duration: animDuration,
        delay: animDelay,
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
  // Use device detection for optimizing stagger timing
  const [isMounted, setIsMounted] = useState(false);
  const [optimizedStagger, setOptimizedStagger] = useState(staggerChildren);
  const [optimizedDelay, setOptimizedDelay] = useState(delay);

  useEffect(() => {
    setIsMounted(true);

    const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

    // Faster stagger on mobile for better performance
    if (isMobile) {
      setOptimizedStagger(staggerChildren * 0.6);
      setOptimizedDelay(delay * 0.7);
    } else if (isTablet) {
      setOptimizedStagger(staggerChildren * 0.8);
      setOptimizedDelay(delay * 0.85);
    }

    // Minimal stagger for reduced motion
    if (isReducedMotion) {
      setOptimizedStagger(staggerChildren * 0.3);
      setOptimizedDelay(delay * 0.5);
    }
  }, [delay, staggerChildren]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: optimizedStagger,
            delayChildren: optimizedDelay,
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
  // Use device detection to optimize animations
  const [isMounted, setIsMounted] = useState(false);
  const [offsetDistance, setOffsetDistance] = useState(20);

  useEffect(() => {
    setIsMounted(true);

    const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

    // Reduce animation distance on mobile
    if (isMobile) {
      setOffsetDistance(10);
    } else if (isTablet) {
      setOffsetDistance(15);
    }

    // Minimal offsets for reduced motion
    if (isReducedMotion) {
      setOffsetDistance(5);
    }
  }, []);

  const directionOffset = {
    up: { y: offsetDistance },
    down: { y: -offsetDistance },
    left: { x: offsetDistance },
    right: { x: -offsetDistance },
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
  // Use device detection for optimized scaling
  const [isMounted, setIsMounted] = useState(false);
  const [scaleFrom, setScaleFrom] = useState(0.94);
  const [animDuration, setAnimDuration] = useState(duration);
  const [animDelay, setAnimDelay] = useState(delay);

  useEffect(() => {
    setIsMounted(true);

    const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

    // More subtle scale on mobile
    if (isMobile) {
      setScaleFrom(0.97);
      setAnimDuration(duration * 0.7);
      setAnimDelay(delay * 0.7);
    } else if (isTablet) {
      setScaleFrom(0.96);
      setAnimDuration(duration * 0.85);
      setAnimDelay(delay * 0.85);
    }

    // Minimal scaling for reduced motion
    if (isReducedMotion) {
      setScaleFrom(0.98);
      setAnimDuration(duration * 0.5);
    }
  }, [delay, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleFrom }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: animDuration,
        delay: animDelay,
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
  // Use device detection for optimized hover effects
  const [isMounted, setIsMounted] = useState(false);
  const [hoverScale, setHoverScale] = useState(scale);
  const [optimizedDuration, setOptimizedDuration] = useState(0.2);

  useEffect(() => {
    setIsMounted(true);

    const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

    // Reduce scale effect on mobile/touch devices
    if (isMobile) {
      // Calculate a more subtle scale based on original
      const mobileScale = 1 + (scale - 1) * 0.5;
      setHoverScale(Math.min(mobileScale, 1.03));
      setOptimizedDuration(0.15);
    } else if (isTablet) {
      const tabletScale = 1 + (scale - 1) * 0.7;
      setHoverScale(Math.min(tabletScale, 1.04));
      setOptimizedDuration(0.18);
    }

    // Minimal or no scale for reduced motion
    if (isReducedMotion) {
      setHoverScale(1.01);
      setOptimizedDuration(0.1);
    }
  }, [scale]);

  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      transition={{ duration: optimizedDuration }}
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
  const [isMounted, setIsMounted] = useState(false);
  const [animDuration, setAnimDuration] = useState(0.8);
  const [animDelay, setAnimDelay] = useState(delay);
  const [yOffset, setYOffset] = useState('100%');

  useEffect(() => {
    setIsMounted(true);

    const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

    // Faster and subtler animations on mobile
    if (isMobile) {
      setAnimDuration(0.6);
      setAnimDelay(delay * 0.7);
      setYOffset('70%');
    } else if (isTablet) {
      setAnimDuration(0.7);
      setAnimDelay(delay * 0.85);
      setYOffset('85%');
    }

    // Minimal animation for reduced motion
    if (isReducedMotion) {
      setAnimDuration(0.4);
      setAnimDelay(delay * 0.5);
      setYOffset('50%');
    }
  }, [delay]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: yOffset }}
        animate={{ y: 0 }}
        transition={{
          duration: animDuration,
          delay: animDelay,
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
  const [isMounted, setIsMounted] = useState(false);
  const [animDuration, setAnimDuration] = useState(duration);
  const [animDelay, setAnimDelay] = useState(delay);

  useEffect(() => {
    setIsMounted(true);

    const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

    // Faster animations on mobile
    if (isMobile) {
      setAnimDuration(duration * 0.7);
      setAnimDelay(delay * 0.7);
    } else if (isTablet) {
      setAnimDuration(duration * 0.85);
      setAnimDelay(delay * 0.85);
    }

    // Shorter animation for reduced motion
    if (isReducedMotion) {
      setAnimDuration(duration * 0.4);
      setAnimDelay(delay * 0.5);
    }
  }, [delay, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: animDelay, duration: 0.01 }}
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
  const [isMounted, setIsMounted] = useState(false);
  const [animDuration, setAnimDuration] = useState(duration);
  const [animDelay, setAnimDelay] = useState(delay);

  useEffect(() => {
    setIsMounted(true);

    const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

    // Faster animations on mobile
    if (isMobile) {
      setAnimDuration(duration * 0.7);
      setAnimDelay(delay * 0.7);
    } else if (isTablet) {
      setAnimDuration(duration * 0.85);
      setAnimDelay(delay * 0.85);
    }

    // Shorter animation for reduced motion
    if (isReducedMotion) {
      setAnimDuration(duration * 0.4);
      setAnimDelay(delay * 0.5);
    }
  }, [delay, duration]);

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
            delay: animDelay,
            duration: animDuration,
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
  const [isMounted, setIsMounted] = useState(false);
  const [yOffset, setYOffset] = useState(30);
  const [animDuration, setAnimDuration] = useState(0.6);
  const [viewportThreshold, setViewportThreshold] = useState(threshold);

  useEffect(() => {
    setIsMounted(true);

    const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

    // Reduced motion and better viewport threshold for mobile
    if (isMobile) {
      setYOffset(15);
      setAnimDuration(0.4);
      // Larger threshold to ensure animation happens when properly in view
      setViewportThreshold(Math.max(threshold, 0.15));
    } else if (isTablet) {
      setYOffset(20);
      setAnimDuration(0.5);
      setViewportThreshold(Math.max(threshold, 0.12));
    }

    // Minimal animation for reduced motion
    if (isReducedMotion) {
      setYOffset(10);
      setAnimDuration(0.3);
    }
  }, [threshold]);

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, threshold: viewportThreshold }}
      transition={{ duration: animDuration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
