import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },

  // Performance & Build Optimizations
  reactStrictMode: true,
  poweredByHeader: false,

  // Easy-to-remember address for the blog editor, which is hosted by Sanity
  async redirects() {
    return [
      {
        source: "/studio/:path*",
        destination: "https://patrickfarrell.sanity.studio/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
