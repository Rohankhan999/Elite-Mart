import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    domains: ['cdn.sanity.io']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://next-ecommerce-template-4.vercel.app/api/:path*',
      },
    ];
  },
  // Adding security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ];
  },
  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default config;
