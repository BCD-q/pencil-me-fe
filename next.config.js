/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com'],
  },
  rewrites: async () => {
    const { NEXT_PUBLIC_API_URL } = process.env;
    return [
      {
        source: '/api/v1/todos/:path*',
        destination: NEXT_PUBLIC_API_URL
          ? NEXT_PUBLIC_API_URL.replace('http://', 'https://') +
            '/api/v1/todos/:path*'
          : '/api/v1/todos/:path*',
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
