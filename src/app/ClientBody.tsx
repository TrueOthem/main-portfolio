"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added attributes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    // Remove Grammarly extension attributes that cause hydration errors
    if (document.body.hasAttribute("data-new-gr-c-s-check-loaded")) {
      document.body.removeAttribute("data-new-gr-c-s-check-loaded");
    }
    if (document.body.hasAttribute("data-gr-ext-installed")) {
      document.body.removeAttribute("data-gr-ext-installed");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
      data-oid="9ku.n7y"
    >
      {children}
      <motion.div key={pathname} className="relative" data-oid="fduet2a">
        {/* Page content */}

        {/* Overlay that slides in and out */}

        {/* Secondary overlay for a layered effect */}
        <div data-oid="_29a28d">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration * 0.6 }}
            data-oid="t18i_qs"
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
