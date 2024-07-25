import { faker } from '@faker-js/faker';

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + randomNumber;
  const email = `${username}@mail.com`;
  const password = '12345Qwert!';

  return { email, password, username };
}

module.exports = { generateUser };

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    // Visit the Sign Up page
    cy.visit('https://react-redux.realworld.io/#/register');

    // Fill in username, email, and password fields
    cy.get('input[type="text"]').type(user.username);
    cy.get('input[type="email"]').type(user.email);
    cy.get('input[type="password"]').type(user.password);

    // Click on Sign up button
    cy.get('button[type="submit"]').click();

    // Assert your username in site navigation header menu
    cy.contains('.nav-link', user.username).should('be.visible');
  });
});
