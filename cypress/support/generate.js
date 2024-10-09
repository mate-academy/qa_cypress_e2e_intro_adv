import { faker } from '@faker-js/faker';

function generateUser() {
  const username = faker.internet.userName();
  const email = `${username}@mail.com`;
  const password = '12345Qwert!';

  return { email, password, username };
}

module.exports = { generateUser };
