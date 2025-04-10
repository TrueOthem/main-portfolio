import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale,
  // Internationalized URLs will look like `/en/about` and `/ar/about`
  localePrefix: 'as-needed'
});

export const config = {
  // Skip all paths that should not be internationalized. This includes
  // api routes, static files, Next.js internals, etc.
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
