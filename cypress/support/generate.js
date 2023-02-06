import { faker } from '@faker-js/faker';

function generateUser() {
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const password = 'Test123!';

  return { username, email, password };
} 

module.exports = { generateUser };