import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/London',
        permanent: true, // ან false, თუ დროებითია
      },
    ];
  },
};

export default nextConfig;
