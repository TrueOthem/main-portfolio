export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export interface LocaleConfig {
  name: string;
  direction: 'ltr' | 'rtl';
  label: string;
}

export const localeConfig: Record<Locale, LocaleConfig> = {
  en: {
    name: 'English',
    direction: 'ltr',
    label: 'EN'
  },
  ar: {
    name: 'العربية',
    direction: 'rtl',
    label: 'AR'
  }
};
