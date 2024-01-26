/** @type {import('next').NextConfig} */

// const nextConfig = {
//   images: {
//     remotePatterns: [{ protocol: "https", port: "", hostname: "ik.imagekit.io", pathname: "/hpapi/**" }],
//   },
// };

// module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['ik.imagekit.io'],
  },
};