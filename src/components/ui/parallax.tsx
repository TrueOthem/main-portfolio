'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import { useDeviceDetection, shouldReduceMotion } from '@/lib/utils';

interface ParallaxProps {
  children?: ReactNode;
  baseVelocity?: number;
  className?: string;
}

export const ParallaxText = ({
  children,
  baseVelocity = 100,
  className = '',
}: ParallaxProps) => {
  const baseX = useRef<MotionValue<number>>(motion.useMotionValue(0));
  const [optimizedVelocity, setOptimizedVelocity] = useState(baseVelocity);
  const [duration, setDuration] = useState(20);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Optimize performance on mobile devices by reducing motion
      if (isMobile) {
        setOptimizedVelocity(baseVelocity * 0.7);
        setDuration(25); // Slower is less CPU intensive
      } else if (isTablet) {
        setOptimizedVelocity(baseVelocity * 0.85);
        setDuration(22);
      }

      // Respect reduced motion preferences
      if (isReducedMotion || shouldReduceMotion()) {
        setShouldDisable(true);
      }
    }
  }, [baseVelocity, isMounted]);

  // Static render for reduced motion or SSR
  if (shouldDisable) {
    return (
      <div className={`whitespace-nowrap flex flex-nowrap ${className}`}>
        <div className="flex whitespace-nowrap flex-nowrap">
          <span className="block mr-4">{children}</span>
          <span className="block mr-4">{children}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div
        className="flex whitespace-nowrap flex-nowrap"
        style={{ x: baseX.current }}
        animate={{ x: [`0%`, `-50%`] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
      </motion.div>
    </div>
  );
};

interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ParallaxScroll = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
}: ParallaxScrollProps) => {
  const ref = useRef(null);
  const [optimizedSpeed, setOptimizedSpeed] = useState(speed);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Reduce parallax effect on mobile
      if (isMobile) {
        setOptimizedSpeed(speed * 0.5);
      } else if (isTablet) {
        setOptimizedSpeed(speed * 0.7);
      }

      // Respect reduced motion preferences or disable on low-powered devices
      if (isReducedMotion || shouldReduceMotion()) {
        setShouldDisable(true);
      }
    }
  }, [isMounted, speed]);

  // Static render for reduced motion, mobile performance optimization, or SSR
  if (shouldDisable || !isMounted) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative">
          {children}
        </div>
      </div>
    );
  }

  // Wrap in try/catch for static site generation compatibility
  try {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
    });

    // Calculate transform values based on direction
    const getTransformValue = () => {
      switch (direction) {
        case 'up':
          return useTransform(scrollYProgress, [0, 1], ['0%', `-${optimizedSpeed * 100}%`]);
        case 'down':
          return useTransform(scrollYProgress, [0, 1], ['0%', `${optimizedSpeed * 100}%`]);
        case 'left':
          return useTransform(scrollYProgress, [0, 1], ['0%', `-${optimizedSpeed * 100}%`]);
        case 'right':
          return useTransform(scrollYProgress, [0, 1], ['0%', `${optimizedSpeed * 100}%`]);
        default:
          return useTransform(scrollYProgress, [0, 1], ['0%', `-${optimizedSpeed * 100}%`]);
      }
    };

    const transformValue = getTransformValue();
    const transformProperty = direction === 'left' || direction === 'right' ? 'x' : 'y';

    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        <motion.div
          style={{ [transformProperty]: transformValue }}
          className="relative"
        >
          {children}
        </motion.div>
      </div>
    );
  } catch (error) {
    // Fallback for static site generation or errors
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="relative">
          {children}
        </div>
      </div>
    );
  }
};

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  speed?: number;
  className?: string;
  priority?: boolean;
  direction?: 'up' | 'down';
}

export const ParallaxImage = ({
  src,
  alt,
  width,
  height,
  speed = 0.5,
  className = '',
  priority = false,
  direction = 'up',
}: ParallaxImageProps) => {
  const ref = useRef(null);
  const [optimizedSpeed, setOptimizedSpeed] = useState(speed);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Reduce parallax effect on mobile to improve performance
      if (isMobile) {
        setOptimizedSpeed(speed * 0.4);
      } else if (isTablet) {
        setOptimizedSpeed(speed * 0.6);
      }

      // Respect reduced motion preferences or disable on low-powered devices
      if (isReducedMotion || shouldReduceMotion()) {
        setShouldDisable(true);
      }
    }
  }, [isMounted, speed]);

  // Static render for reduced motion, mobile optimization, or SSR
  if (shouldDisable || !isMounted) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover h-full w-full"
            priority={priority}
          />
        </div>
      </div>
    );
  }

  // Wrap in try/catch for static site generation compatibility
  try {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
    });

    const y = useTransform(
      scrollYProgress,
      [0, 1],
      direction === 'up' ? ['0%', `-${optimizedSpeed * 50}%`] : ['0%', `${optimizedSpeed * 50}%`]
    );

    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover h-full w-full"
            priority={priority}
          />
        </motion.div>
      </div>
    );
  } catch (error) {
    // Fallback for static site generation
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover h-full w-full"
            priority={priority}
          />
        </div>
      </div>
    );
  }
};

export const ParallaxRotate = ({
  children,
  className = '',
  maxRotation = 180
}: {
  children: ReactNode;
  className?: string;
  maxRotation?: number;
}) => {
  const ref = useRef(null);
  const [optimizedRotation, setOptimizedRotation] = useState(maxRotation);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Reduce rotation intensity on mobile
      if (isMobile) {
        setOptimizedRotation(maxRotation * 0.5);
      } else if (isTablet) {
        setOptimizedRotation(maxRotation * 0.7);
      }

      // Disable rotation for reduced motion
      if (isReducedMotion || shouldReduceMotion()) {
        setShouldDisable(true);
      }
    }
  }, [isMounted, maxRotation]);

  // Static render for reduced motion, mobile optimization, or SSR
  if (shouldDisable || !isMounted) {
    return (
      <div className={className}>
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    );
  }

  // Wrap in try/catch for static site generation compatibility
  try {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, optimizedRotation]);

    return (
      <div ref={ref} className={className}>
        <motion.div
          style={{ rotate }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </div>
    );
  } catch (error) {
    // Fallback for static site generation
    return (
      <div className={className}>
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    );
  }
};
