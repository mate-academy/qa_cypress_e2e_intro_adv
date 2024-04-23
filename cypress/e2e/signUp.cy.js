import { generateUser } from '../support/generateUser';
const user = generateUser();

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    cy.visit('/register');

    cy.findByPlaceholder('Username')
      .type(user.username);

    cy.findByPlaceholder('Email')
      .type(user.email);

    cy.findByPlaceholder('Password')
      .type(user.password);

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get('.nav-link')
      .should('contain', user.username);
  });
});
