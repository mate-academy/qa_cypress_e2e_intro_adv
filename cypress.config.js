const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    viewportHeight: 1600,
    viewportWidth: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
