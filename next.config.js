/** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpackDevMiddleware: config => {
//     config.watchOptions = {
//       poll: 1000,
//       aggregateTimeout: 300,
//     }
//     return config
//   },
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  // webpackDevMiddleware: config => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   }

  //   return config
  // },
  experimental: {
    outputStandalone: true,
  },
}
