/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com'],
  },
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: 'https://na2ru2.me:6378/api/:path*',
    },
  ],
};

module.exports = withPWA(nextConfig);
