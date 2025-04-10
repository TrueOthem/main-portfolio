import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from '../../navigation';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.includes(locale as Locale);
  if (!isValidLocale) notFound();

  return {
    messages: (await import(`../../locales/${locale}/common.json`)).default
  };
});
