import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match any request starting with /api/
        destination: 'https://next-ecommerce-template-4.vercel.app/api/:path*', // Forward the request to this external API
      },
    ];
  },
};

export default nextConfig;
