import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mastermind-react',
  assetPrefix: '/mastermind-react',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;