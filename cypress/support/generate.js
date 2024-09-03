import { faker } from '@faker-js/faker';

export function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + randomNumber;
  const email = `${username}@mail.com`;
  const password = '12345Qwert!';

  return { email, password, username };
}
