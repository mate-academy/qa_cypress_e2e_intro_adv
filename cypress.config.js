const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-mobx.realworld.io/#/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
