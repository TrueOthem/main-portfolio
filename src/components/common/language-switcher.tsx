'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const [language, setLanguage] = useState<'EN' | 'AR' | 'ES'>('EN');
  const router = useRouter();
  const pathname = usePathname();

  // Initialize language based on HTML lang attribute
  useEffect(() => {
    const htmlLang = document.documentElement.lang.toLowerCase();
    if (htmlLang === 'ar') {
      setLanguage('AR');
    } else if (htmlLang === 'es') {
      setLanguage('ES');
    } else {
      setLanguage('EN');
    }
  }, []);

  const toggleLanguage = () => {
    let newLang: 'en' | 'ar' | 'es';
    let newDisplay: 'EN' | 'AR' | 'ES';

    if (language === 'EN') {
      newLang = 'ar';
      newDisplay = 'AR';
    } else if (language === 'AR') {
      newLang = 'es';
      newDisplay = 'ES';
    } else {
      newLang = 'en';
      newDisplay = 'EN';
    }

    // Update the display state
    setLanguage(newDisplay);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', newLang);

    // Update direction attribute for RTL support
    if (newLang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }

    // Force a page reload to apply the language change
    window.location.reload();
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
