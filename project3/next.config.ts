import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: [
        "http://localhost:3000",
        "https://project3-production-ba56.up.railway.app",
      ],
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
