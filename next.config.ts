import type { NextConfig } from "next";

// Only use basePath for production builds (GitHub Pages deployment)
// This allows local development to work without the basePath
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from a subdirectory for project repos
  // Only apply basePath in production to avoid 404s in local dev
  ...(isProduction && {
    basePath: '/patrick-farrell-website',
    assetPrefix: '/patrick-farrell-website',
  }),
};

export default nextConfig;
