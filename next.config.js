/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "export",
  // basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
