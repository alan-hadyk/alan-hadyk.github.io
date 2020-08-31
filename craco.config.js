/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      options: {
        baseUrl: "./src",
        source: "tsconfig",
        tsConfigPath: "./tsconfig.paths.json"
      },
      plugin: CracoAlias
    }
  ]
};