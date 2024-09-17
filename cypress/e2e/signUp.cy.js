import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();
    cy.visit('https://react-redux.realworld.io/#/register');
    cy.get('[placeholder="Username"]')
      .type(username);
    cy.get('[placeholder="Email"]')
      .type(email);
    cy.get('[placeholder="Password"]')
      .type(password);
    cy.contains('button', 'Sign in')
      .click();
    cy.get('a.nav-link')
      .should('contain', username);
  });
});
