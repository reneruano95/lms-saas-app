import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Set to true to allow production builds to complete even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Set to true to allow production builds to complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
