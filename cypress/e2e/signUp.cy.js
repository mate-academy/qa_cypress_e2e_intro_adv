import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('https://react-redux.realworld.io/#/register/');

    cy.get('[placeholder="Username"]')
      .type(user.username);

    cy.get('[placeholder="Email"]')
      .type(user.email);

    cy.get('[placeholder="Password"]')
      .type(user.password);

    cy.contains('[type="submit"]', 'Sign in')
      .click();

    cy.contains('[class="nav-link"]', user.username);
  });
});
