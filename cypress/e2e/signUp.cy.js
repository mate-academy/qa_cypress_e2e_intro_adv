/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/#/register');
  });

  it('should provide an ability to Sign up', () => {
    const {email, username, password} = generateUser();
      cy.get(':nth-child(1) > .form-control')
      .type(username);
      cy.get(':nth-child(2) > .form-control')
      .type(email);
      cy.get(':nth-child(3) > .form-control')
      .type(password);
      cy.get(':nth-child(4) > .nav-link')
      .should('contain', username);
      cy.contains('.nav-link', 'Sign up')
      .click();
  });
});
