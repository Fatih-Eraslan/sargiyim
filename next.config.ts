// @ts-check
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build sırasında linter/TS hataları nedeniyle fail etme
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // (İsteğe bağlı) Image uyarılarını susturmak ve optimize için remote hostları tanımla
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" }
    ]
  },

  // Node runtime (yukarıda layout’ta da nodejs seçtik)
  experimental: {
    // Next 15 için ekstradan bir şey gerekmiyor; burada boş bırakıyoruz
  }
};

export default nextConfig;
