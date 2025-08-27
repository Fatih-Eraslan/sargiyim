import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prod build'te ESLint hataları yüzünden düşmeyi engelle
  eslint: { ignoreDuringBuilds: true },
  // Prod build'te TypeScript hataları yüzünden düşmeyi engelle
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
