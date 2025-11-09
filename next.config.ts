import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from a subdirectory for project repos
  basePath: '/patrick-farrell-website',
  assetPrefix: '/patrick-farrell-website',
};

export default nextConfig;
