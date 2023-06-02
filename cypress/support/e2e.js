// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + random;
  const email = `${username}@mail.com`;
  const password = '12345Qwert!';

  return { email, password, username };
}

module.exports = { generateUser };