/// <reference types="cypress" />

const { generateUser } = require('../support/generateUser');

describe('Sign Up page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to register new account', () => {
    const { userName, email, password } = generateUser();

    cy.contains('a', 'Sign up').click();

    cy.get('input[type="text"]')
      .type(userName);

    cy.get('input[type="email"]')
      .type(email);

    cy.get('input[type="password"]')
      .type(password);

    cy.get('button[type="submit"]')
      .click();

    cy.get('.nav-link')
      .should('contain', userName);
  });
});
