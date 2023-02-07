/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

function generateUser() {
  const randomNumber = Math.floor(Math.random() * 1000).toString();
  const username = faker.internet.userName() + randomNumber;
  const email = `${username}@mail.com`;
  const password = faker.internet.password();

  return { username, email, password }
}

module.exports = { generateUser };
