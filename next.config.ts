import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirects
  async redirects() {
    return [
      {
        source: '/artigo/:slug*',
        destination: '/articles/:slug*',
        permanent: false, // TODO: Change to true in production
      },
    ];
  },

  // Rewrites
  async rewrites() {
    return [
      {
        source: '/artigos',
        destination: '/articles',
      },
      {
        source: '/artigos/:slug*',
        destination: '/articles/:slug*',
      },
      {
        source: '/contato',
        destination: '/contact',
      },
      {
        source: '/sobre',
        destination: '/about',
      },
    ];
  },

  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
