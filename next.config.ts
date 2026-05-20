import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gw.alipayobjects.com",
      },
    ],
  },
};

export default nextConfig;

