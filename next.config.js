/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "occ-0-1190-2774.1.nflxso.net",
      "image.tmdb.org",
      "assets.nflxext.com"
    ],
  },
};

module.exports = nextConfig;
