/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "https://nextjs-message-board.vercel.app/api", // production api
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
