const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: 'https://react-redux.realworld.io/#',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
