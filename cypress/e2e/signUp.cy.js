/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('Should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();

    cy.contains('Sign up')
      .click();

    cy.get('[placeholder="Username"]')
      .type(username);

    cy.get('[placeholder="Email"]')
      .type(email);

    cy.get('[placeholder="Password"]')
      .type(password);

    cy.contains('button', 'Sign in')
      .click();

    cy.get('[class="nav-link"]')
      .should('contain', username);
  });
});
