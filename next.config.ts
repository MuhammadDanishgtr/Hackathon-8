// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains:['cdn.sanity.io'],
//   },
// }


// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig;

