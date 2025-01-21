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
};

export default config;
