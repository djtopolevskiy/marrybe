import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.pinterest.com',
        port: '',
        pathname: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
