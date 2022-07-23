/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "s4.anilist.co",
      "upload.wikimedia.org", "occ-0-1190-2774.1.nflxso.net"
    ],
  },
};

module.exports = nextConfig;
