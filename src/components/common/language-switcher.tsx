'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { locales, type Locale, localeConfig } from '../../../navigation';

export default function LanguageSwitcher({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  // Function to create a path with a different locale
  const createLocalizedPath = (newLocale: Locale) => {
    const segments = pathname.split('/');
    // Check if the first segment (after the empty string) is a locale
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
      return segments.join('/');
    }
    // If no locale in the path, add the new locale
    return `/${newLocale}${pathname}`;
  };

  if (variant === 'desktop') {
    return (
      <div className="flex items-center space-x-2">
        {locales.map((l) => (
          <Link
            key={l}
            href={createLocalizedPath(l)}
            className={`px-2 py-1 text-xs rounded ${l === locale ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {localeConfig[l].name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {locales.map((l) => (
        <Link
          key={l}
          href={createLocalizedPath(l)}
          className={`px-3 py-2 text-sm rounded ${l === locale ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
        >
          {localeConfig[l].name}
        </Link>
      ))}
    </div>
  );
}
