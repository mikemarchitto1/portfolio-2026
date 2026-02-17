/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next-custom",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
