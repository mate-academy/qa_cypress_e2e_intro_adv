const faker = require('faker');

function generateUser() {
    const randomNumber = Math.random().toString().slice(2, 6);
    const username = faker.name.firstName().toLowerCase() + '_' + randomNumber;
    const email = `${username}@mail.com`;
    const password = '12345Qwert!';
  
    return { email, password, username };
  }
  
  module.exports = { generateUser };