'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// A more advanced page transition with overlay
export const AdvancedPageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="relative">
          {/* Page content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>

          {/* Overlay that slides in and out */}
          <motion.div
            className="fixed inset-0 z-50 bg-background pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              scaleX: 1,
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
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
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1
              },
            }}
            exit={{
              scaleX: 1,
              transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05
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

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
