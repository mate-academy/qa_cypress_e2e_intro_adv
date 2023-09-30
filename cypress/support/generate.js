const faker = require('faker');

function generateUser() {
  const username = faker.name.findName();
  const email = faker.internet.email();
  const password = 'Password123!';


  return { username, email, password }
};

module.exports = { generateUser };