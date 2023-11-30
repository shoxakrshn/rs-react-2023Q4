/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '',
        pathname: '/disney/**',
      },
    ],
  },
};

module.exports = nextConfig;
// https://static.wikia.nocookie.net/disney/images/3/3f/90%27s_Adventure_Bear_profile.png
