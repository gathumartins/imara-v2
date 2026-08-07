import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.admin.imarafellowship.org",
      },
      {
        protocol: "https",
        hostname: "admin.imarafellowship.org",
      },
    ],
  },
};

export default nextConfig;
