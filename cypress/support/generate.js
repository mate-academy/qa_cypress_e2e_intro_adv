
const { faker } = require('@faker-js/faker');

function generateUser() {
  const randomNumber =Math.random().toString().slice(2, 6);
  const username = faker.name.firstName()+randomNumber+faker.name.firstName();
  const password = faker.internet.password(10);+'Qa!1'
  const email = `${username}@test${randomNumber}.com`;

  return {
    username,
    email, 
    password,
   
  };

};

module.exports = {generateUser}