const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    viewportWidth: 1024,
    viewportHeight: 768,
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
    }
  }
});