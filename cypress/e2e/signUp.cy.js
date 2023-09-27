/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/#/register');
  });

  it('should provide an ability to Sign up', () => {
    const { email, username, password } = generateUser();
    cy.get('[placeholder="Username"]')
      .type(username);
    cy.get('[placeholder="Email"]')
      .type(email);
    cy.get('[placeholder="Password"]')
      .type(password);
    cy.contains('.btn', 'Sign in')
      .click();
    cy.get('.nav-link')
      .should('contain', username);
  });
});
