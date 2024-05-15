/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [
    {
      source: '/api/:path*',
      destination: 'https://na2ru2.me:6378/api/:path*', // HTTPS로 변경
    },
  ],
};

module.exports = withPWA(nextConfig);
