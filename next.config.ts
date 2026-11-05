import type { NextConfig } from "next";

// Set automatically by the GitHub Pages workflow (e.g. "/my-repo" or "" for username.github.io).
// Locally this is empty, so `npm run dev` works at http://localhost:3000.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
