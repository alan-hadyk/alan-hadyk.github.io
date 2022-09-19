import { defineConfig } from 'cypress'

export default defineConfig({
  animationDistanceThreshold: 5,
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  fixturesFolder: 'cypress/fixtures',
  maxFailedTests: 1,
  modifyObstructiveCode: false,
  numTestsKeptInMemory: 2,
  projectId: 'vmrh43',
  retries: {
    runMode: 3,
    openMode: 1,
  },
  screenshotsFolder: 'cypress/artifacts',
  trashAssetsBeforeRuns: true,
  video: false,
  videosFolder: 'cypress/artifacts',
  videoUploadOnPasses: false,
  viewportHeight: 900,
  viewportWidth: 1681,
  waitForAnimations: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts').default(on, config)
    },
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
    specPattern: 'cypress/e2e/**/*.spec.ts',
  },
})
