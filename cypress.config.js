const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://opensource-demo.orangehrmlive.com/web/index.php/auth',
    viewportWidth: 1920,
    viewportHeight: 1080,
    scrollBehavior: false,
    chromeWebSecurity: false,
    video: false,
    downloads: false,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
