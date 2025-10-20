import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
    typescript: {
    // ✅ TypeScript 오류가 있어도 빌드가 중단되지 않음
    ignoreBuildErrors: true,
  },
   eslint: {
    // ✅ ESLint 오류가 있어도 빌드 중단하지 않음
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
