/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/portfolio" : "", // Apply basePath only in production
  assetPrefix: isProd ? "/portfolio/" : "", // Apply assetPrefix only in production
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
