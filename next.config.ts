import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirects
  async redirects() {
    return [
      {
        source: '/teste/:slug*',
        destination: '/testes/:slug*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
