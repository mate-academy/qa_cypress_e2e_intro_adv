const { defineConfig } = require("cypress");
const faker = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://react-redux.realworld.io`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
