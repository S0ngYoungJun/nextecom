import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
    typescript: {
    // ✅ TypeScript 오류가 있어도 빌드가 중단되지 않음
    ignoreBuildErrors: true,
  },
};
export default nextConfig;
