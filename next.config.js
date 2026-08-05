/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = [
  "default-src 'self'",
  // Allow inline styles from next/Tailwind and Google Fonts stylesheet
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  // Self-hosted images only after launch; data URIs for next/image placeholders
  "img-src 'self' data: blob:",
  // No third-party scripts; allow inline Next.js bootstrap
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests"
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()"
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" }
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      }
    ];
  }
};

module.exports = nextConfig;
