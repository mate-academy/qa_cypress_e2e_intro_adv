const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const random = Math.random().toString().slice(2, 6);
          const username = faker.internet.userName() + '_' + random;
          const email = `${username}@mail.com`;
          const password = '12345Qwert!';
        
          return { email, password, username };
        }
      })
    }
  }
});
