import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['1solutions.biz', 'isolutions.biz'],
    formats: ['image/webp', 'image/avif'],
  },
  // Agar koi aur configuration chahiye toh yahan add kar sakte hain
};

export default nextConfig;