import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirects
  async redirects() {
    return [
      {
        source: '/artigo/:slug*',
        destination: '/artigos/:slug*',
        permanent: false, // TODO: Change to true in production
      },
    ];
  },

  // Rewrites
  async rewrites() {
    return [
      {
        source: '/artigos/:slug*',
        destination: '/articles/:slug*',
        permanent: false, // TODO: Change to true in production
      },
      {
        source: '/contato/*',
        destination: '/contact/*',
        permanent: false, // TODO: Change to true in production
      },
      {
        source: '/sobre/*',
        destination: '/about/*',
        permanent: false, // TODO: Change to true in production
      },
    ];
  },

  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
