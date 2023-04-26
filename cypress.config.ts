/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
import getCompareSnapshotsPlugin from "cypress-visual-regression/dist/plugin";

export default defineConfig({
  animationDistanceThreshold: 5,
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  e2e: {
    baseUrl: "http://localhost:3000",
    excludeSpecPattern: ["**/__snapshots__/*", "**/__image_snapshots__/*"],
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);

      return require("./cypress/plugins/index.ts").default(on, config);
    },
    specPattern: "cypress/e2e/**/*.spec.ts"
  },
  env: {
    failSilently: false,
    screenshotsFolder: "./cypress/snapshots/base",
    trashAssetsBeforeRuns: true,
    type: "base",
    video: false
  },
  fixturesFolder: "cypress/fixtures",
  numTestsKeptInMemory: 2,
  projectId: "vmrh43",
  retries: {
    openMode: 1,
    runMode: 3
  },
  screenshotsFolder: "./cypress/snapshots/base",
  videoUploadOnPasses: false,
  videosFolder: "cypress/videos",
  viewportHeight: 900,
  viewportWidth: 1681,
  waitForAnimations: true
});
