import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'export',
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
