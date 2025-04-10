export const locales = ['en', 'es', 'ar'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export interface LocaleConfig {
  name: string;
  direction: 'ltr' | 'rtl';
}

export const localeConfig: Record<Locale, LocaleConfig> = {
  en: {
    name: 'English',
    direction: 'ltr'
  },
  es: {
    name: 'Español',
    direction: 'ltr'
  },
  ar: {
    name: 'العربية',
    direction: 'rtl'
  }
};
