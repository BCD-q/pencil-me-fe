/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: 'http://na2ru2.me:6378/api/v1/members/sign-in',
        destination: 'https://na2ru2.me:6378/api/v1/members/sign-in',
      },
      {
        source: `apiKey/members/sign-in`,
        destination: 'https://na2ru2.me:6378/api/v1/members/sign-in',
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
