import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["raw.githubusercontent.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },

  output: "export",
};

export default nextConfig;