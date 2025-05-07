"use client";

import React from "react";
import { motion } from "framer-motion";

// Enhanced performance animations with reduced layout shifts
// Added optimization attributes to prevent unnecessary reflows

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  className?: string;
  viewport?: boolean;
  threshold?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = "up",
  duration = 0.5,
  delay = 0,
  className = "",
  viewport = false,
  threshold = 0.1,
}) => {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 20 };
      case "down":
        return { y: -20 };
      case "left":
        return { x: 20 };
      case "right":
        return { x: -20 };
      default:
        return { y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getDirectionOffset() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      viewport={viewport ? { once: true, amount: threshold } : undefined}
      className={`optimize-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface StaggerProps {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  viewport?: boolean;
  threshold?: number;
}

export const StaggerContainer: React.FC<StaggerProps> = ({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className = "",
  viewport = false,
  threshold = 0.1,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      viewport={viewport ? { once: true, amount: threshold } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={`optimize-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  viewport?: boolean;
  threshold?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  delay = 0,
  className = "",
  viewport = false,
  threshold = 0.1,
}) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.33, 1, 0.68, 1],
      }}
      viewport={viewport ? { once: true, amount: threshold } : undefined}
      className={`optimize-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.1,
  className = "",
  duration = 0.6,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: duration,
        ease: "easeOut",
      }}
      className={`optimize-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
  className?: string;
}

export const HoverScale: React.FC<HoverScaleProps> = ({
  children,
  scale = 1.05,
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={`optimize-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  viewport?: boolean;
  threshold?: number;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  viewport = false,
  threshold = 0.1,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      viewport={viewport ? { once: true, amount: threshold } : undefined}
      className={`optimize-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Animation wrapper that detects if reduced motion is preferred
export const ReducedMotionOptimizer: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={prefersReducedMotion ? "motion-reduce" : ""}>
      {children}
    </div>
  );
};
