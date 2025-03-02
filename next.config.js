/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "de-DE", "pl-PL"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
