/// <reference types='cypress' />
const { generateUser } = require('../support/generate');
const { email, password, username } = generateUser();

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    cy.visit('/');

    cy.contains('a', 'Sign up')
      .click();

    cy.get('[placeholder="Username"]')
      .type(username);

    cy.get('[placeholder="Email"]')
      .type(email);

    cy.get('[placeholder="Password"]')
      .type(password);

    cy.contains('.btn', 'Sign in')
    // I don't know why 'Sign in')))
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', username);
  });
});
