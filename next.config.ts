import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://nautical-ermine-997.convex.cloud/api/storage/**')],
  },
};

export default nextConfig;
