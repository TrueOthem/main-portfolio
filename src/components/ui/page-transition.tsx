'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { shouldReduceMotion, useDeviceDetection } from '@/lib/utils';

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [transitionY, setTransitionY] = useState(20);
  const [duration, setDuration] = useState(0.3);

  useEffect(() => {
    setIsMounted(true);

    // Apply device-specific optimizations once mounted
    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Reduce motion for mobile
      if (isMobile) {
        setTransitionY(10);
        setDuration(0.2);
      } else if (isTablet) {
        setTransitionY(15);
        setDuration(0.25);
      }

      // Respect reduced motion preference
      if (isReducedMotion) {
        setTransitionY(5);
        setDuration(0.15);
      }
    }
  }, [isMounted]);

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: transitionY }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -transitionY }}
        transition={{ duration, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// A more advanced page transition with overlay
export const AdvancedPageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [duration, setDuration] = useState(0.5);
  const [overlayDelay, setOverlayDelay] = useState(0.1);
  const [useSimplifiedTransition, setUseSimplifiedTransition] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Apply device-specific optimizations once mounted
    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Use simpler transitions for mobile/tablets
      if (isMobile) {
        setDuration(0.3);
        setOverlayDelay(0.05);

        // On slower mobile devices, use simplified transitions
        if (window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency < 4) {
          setUseSimplifiedTransition(true);
        }
      } else if (isTablet) {
        setDuration(0.4);
        setOverlayDelay(0.07);
      }

      // Respect reduced motion preference
      if (isReducedMotion) {
        setUseSimplifiedTransition(true);
        setDuration(0.2);
      }
    }
  }, [isMounted]);

  if (!isMounted) {
    return <>{children}</>;
  }

  // Use simplified transition for mobile or reduced motion preference
  if (useSimplifiedTransition) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration * 0.8 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="relative">
          {/* Page content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration * 0.6 }}
          >
            {children}
          </motion.div>

          {/* Overlay that slides in and out */}
          <motion.div
            className="fixed inset-0 z-50 bg-background pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 0,
              transition: { duration: duration, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              scaleX: 1,
              transition: { duration: duration * 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
            style={{ transformOrigin: 'right' }}
          />

          {/* Secondary overlay for a layered effect */}
          <motion.div
            className="fixed inset-0 z-40 bg-primary/20 pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 0,
              transition: {
                duration: duration,
                ease: [0.22, 1, 0.36, 1],
                delay: overlayDelay
              },
            }}
            exit={{
              scaleX: 1,
              transition: {
                duration: duration * 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: overlayDelay * 0.5
              },
            }}
            style={{ transformOrigin: 'right' }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// A page transition specifically for modal-like behaviors
export const ModalPageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [duration, setDuration] = useState(0.3);
  const [scale, setScale] = useState({ initial: 0.98, exit: 1.02 });

  useEffect(() => {
    setIsMounted(true);

    // Apply device-specific optimizations once mounted
    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Reduce motion on mobile
      if (isMobile) {
        setDuration(0.2);
        setScale({ initial: 0.99, exit: 1.01 });
      } else if (isTablet) {
        setDuration(0.25);
        setScale({ initial: 0.985, exit: 1.015 });
      }

      // Respect reduced motion preference
      if (isReducedMotion) {
        setDuration(0.15);
        setScale({ initial: 0.995, exit: 1.005 });
      }
    }
  }, [isMounted]);

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: scale.initial }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: scale.exit }}
        transition={{ duration, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
