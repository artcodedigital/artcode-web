import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: { unoptimized: true },
  // images: {
  //   domains: ['data'],
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '',
  //       port: '',
  //       pathname: '/media/**',
  //     },
  //   ],
  // },
};

export default nextConfig;
