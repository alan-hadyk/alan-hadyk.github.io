/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
import eyesPlugin from "@applitools/eyes-cypress";

export default eyesPlugin(
  defineConfig({
    animationDistanceThreshold: 5,
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000,
    e2e: {
      baseUrl: "http://localhost:3000",
      excludeSpecPattern: ["**/__snapshots__/*", "**/__image_snapshots__/*"],
      // We've imported your old cypress plugins here.
      // You may want to clean this up later by importing these.
      setupNodeEvents(on, config) {
        return require("./cypress/plugins/index.ts").default(on, config);
      },
      specPattern: "cypress/e2e/**/*.spec.ts"
    },
    fixturesFolder: "cypress/fixtures",
    numTestsKeptInMemory: 2,
    projectId: "tyivk1",
    retries: {
      openMode: 1,
      runMode: 3
    },
    screenshotsFolder: "cypress/artifacts",
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    videosFolder: "cypress/videos",
    viewportHeight: 900,
    viewportWidth: 1681,
    waitForAnimations: true
  })
);
