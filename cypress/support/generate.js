
const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + random;
  const email = `${username}@mail.com`;
  const password = 'SlavaUkraini!1';

  return { email, password, username };
}

module.exports = { generateUser };
