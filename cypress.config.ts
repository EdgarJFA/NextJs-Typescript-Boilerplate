import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'src/tests/e2e/**/*.cy.ts',
    supportFile: 'src/tests/e2e/support/e2e.ts'
  },
  trashAssetsBeforeRuns: true,
    screenshotsFolder: 'src/tests/e2e/screenshots',
    fixturesFolder: 'src/tests/e2e/fixtures',
    downloadsFolder: 'src/tests/e2e/downloads',
    supportFolder: 'src/tests/e2e/support'
});
