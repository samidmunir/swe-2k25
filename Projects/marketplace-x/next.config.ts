import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'fakestoreapi.com',
        protocol: 'https',
        port: '',
      },
    ]
  }
};

export default nextConfig;
