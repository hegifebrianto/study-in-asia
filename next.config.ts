import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["cdn.myanimelist.net"], // Tambahkan domain ini
  },
};

export default nextConfig;
