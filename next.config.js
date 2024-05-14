/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com'],
  },
  rewrites: () => [
    {
      source: '/api/v1/:path*',
      destination: 'https://na2ru2.me:6378/api/v1/:path*', // HTTPS로 변경
    },
  ],
};

module.exports = withPWA(nextConfig);
