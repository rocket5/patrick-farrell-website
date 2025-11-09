import type { NextConfig } from "next";

// When using a custom domain (patrickfarrell.ca), GitHub Pages serves from root
// basePath is NOT needed for custom domains, only for username.github.io/repo-name URLs
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
