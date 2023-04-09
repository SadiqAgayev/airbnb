/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.unsplash.com',
  //       port: '',
  //       pathname: '/photo',
  //     },
  //   ],
  // },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "links.papareact.com",
  //       port: "",
  //       pathname: "",
  //     },
  //   ],
  // },

  
  images: {
    domains: ['links.papareact.com'],
  }
};

module.exports = nextConfig;
