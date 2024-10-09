const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io/#/register?_k=blrz2w',
    setupNodeEvents(on, config) {
    }
  }
});
