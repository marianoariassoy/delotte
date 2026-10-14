import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marianoarias.soy",
        port: "",
        pathname: "/works/delotte/images/**",
      },
    ],
  },
};

export default nextConfig;
