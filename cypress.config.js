const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  viewportHeight: 1440,
  viewportWidth: 1920
});
