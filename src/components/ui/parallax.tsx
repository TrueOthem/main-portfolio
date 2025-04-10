'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import Image from 'next/image';

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

  return (
    <div className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div
        className="flex whitespace-nowrap flex-nowrap"
        style={{ x: baseX.current }}
        animate={{ x: [`0%`, `-50%`] }}
        transition={{
          duration: 20,
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate transform values based on direction
  const getTransformValue = () => {
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${speed * 100}%`]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${speed * 100}%`]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
      default:
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${speed * 100}%`]);
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? ['0%', `-${speed * 50}%`] : ['0%', `${speed * 50}%`]
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
};

export const ParallaxRotate = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

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
};
