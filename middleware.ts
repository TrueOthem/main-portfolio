import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './navigation';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname from the request
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If we're already on a locale path, don't redirect
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // If the pathname doesn't have a locale, redirect to the default locale
  // Get the preferred locale from the Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  let locale = defaultLocale;

  if (acceptLanguage) {
    // Extract the language code from the Accept-Language header
    const preferredLocale = acceptLanguage
      .split(',')
      .map((lang) => {
        const [code, priority] = lang.split(';');
        return { code: code.trim().split('-')[0], priority: priority ? parseFloat(priority.split('=')[1]) : 1 };
      })
      .sort((a, b) => b.priority - a.priority)
      .find((lang) => locales.includes(lang.code as any));

    if (preferredLocale) {
      locale = preferredLocale.code;
    }
  }

  // Create the new URL with the locale
  const url = request.nextUrl.clone();
  if (pathname === '/') {
    url.pathname = `/${locale}`;
  } else {
    url.pathname = `/${locale}${pathname}`;
  }

  // Redirect to the new URL
  return NextResponse.redirect(url);
}

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. favicon.ico)
  // - API routes
  // - _next paths (Next.js internals)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
