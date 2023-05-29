/// <reference types="cypress" />
const { generateUser } = require('../support/e2e');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser()

    cy.visit('https://react-redux.realworld.io');
    cy.contains('Sign up')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type(username)
    
    cy.get(':nth-child(2) > .form-control')
      .type(email)

    cy.get(':nth-child(3) > .form-control')
      .type(password)

    cy.contains('.btn', 'Sign in')
      .click()
    
    cy.get('.navbar')
      .should('contain', username)
  });
});
