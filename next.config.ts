import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d7qa3jut6wkj0.cloudfront.net",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;
