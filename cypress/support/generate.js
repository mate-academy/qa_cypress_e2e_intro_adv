const faker = require('faker');

function generateUser() {
    const randomNumber = Math.random().toString().slice(2, 6);
    const username = faker.internet.userName() + '_' + randomNumber;
    const email = faker.internet.email();
    const password = 'Password123';

    return { username, email, password };
  };
  
  module.exports = { generateUser };