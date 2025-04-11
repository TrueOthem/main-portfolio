"use client";

import { useEffect } from "react";
import { motion } from 'framer-motion';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added attributes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    // Remove Grammarly extension attributes that cause hydration errors
    if (document.body.hasAttribute('data-new-gr-c-s-check-loaded')) {
      document.body.removeAttribute('data-new-gr-c-s-check-loaded');
    }
    if (document.body.hasAttribute('data-gr-ext-installed')) {
      document.body.removeAttribute('data-gr-ext-installed');
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
