const { locales, defaultLocale } = require('./navigation');

/** @type {import('next-intl').NextIntlConfig} */
module.exports = {
  locales,
  defaultLocale,
  localeDetection: true,
};
