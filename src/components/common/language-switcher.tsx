'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function LanguageSwitcher({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const [language, setLanguage] = useState<'EN' | 'AR' | 'ES'>('EN');

  const toggleLanguage = () => {
    if (language === 'EN') {
      setLanguage('AR');
      document.documentElement.setAttribute('lang', 'ar');
    } else if (language === 'AR') {
      setLanguage('ES');
      document.documentElement.setAttribute('lang', 'es');
    } else {
      setLanguage('EN');
      document.documentElement.setAttribute('lang', 'en');
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-medium"
      data-testid="language-switcher"
      data-variant={variant}
    >
      <motion.span
        key={language}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {language}
      </motion.span>
    </Button>
  );
}
