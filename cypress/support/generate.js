import { faker } from '@faker-js/faker';

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + randomNumber;
  const email = `${username}@mail.com`;
  const password = faker.internet.password();

  return { email, password, username };
}

module.exports = { generateUser };
