import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales, type Locale} from '../../navigation';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) notFound();

  return {
    locale: locale,
    messages: (await import(`../../locales/${locale}/common.json`)).default
  };
});
