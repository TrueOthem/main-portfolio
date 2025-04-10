"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light" || theme === "system") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 15
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={springTransition}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className={cn(
          "rounded-full w-8 h-8 border",
          theme === "dark" ? "border-muted-foreground" : "border-border"
        )}
        aria-label="Toggle theme"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: theme === "dark" ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {theme === "dark" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="h-4 w-4" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-4 w-4" />
            </motion.div>
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
}
