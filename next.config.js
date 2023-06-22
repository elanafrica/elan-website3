/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;
// const withVideos = require("next-videos");

// module.exports = withVideos({
//   distDir: "../../.next",
// });

// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(png|jpe?g|gif)$/i,
//       use: [
//         {
//           loader: "file-loader",
//           options: {
//             publicPath: "/_next",
//             name: "static/media/[name].[hash].[ext]",
//           },
//         },
//       ],
//     });

//     config.module.rules.push({
//       test: /\.mp4$/,
//       use: [
//         {
//           loader: "file-loader",
//           options: {
//             publicPath: "/_next",
//             name: "static/media/[name].[hash].[ext]",
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;
