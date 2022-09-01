/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: function (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.experiments = { layers: true, topLevelAwait: true };

    return config;
  }
};

module.exports = nextConfig;
