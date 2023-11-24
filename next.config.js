/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/1',
      },
    ];
  },
};

module.exports = nextConfig;
