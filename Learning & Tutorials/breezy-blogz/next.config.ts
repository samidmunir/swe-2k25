import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.boeing.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'upload.wikimedia.org',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
        port: '',
      }
    ]
  }
};

export default nextConfig;