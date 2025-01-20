import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY, // Include this to expose the variable to the client-side
  },       // Example additional config option (optional)
};

export default nextConfig;
