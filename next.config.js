/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/sign-in',
        destination: 'https://na2ru2:6378/:path*',
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
