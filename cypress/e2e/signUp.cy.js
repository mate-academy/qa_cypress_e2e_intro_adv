/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('/#/register');

    cy.get('h1')
      .contains('Sign Up');

    cy.findByPlaceholder('Username')
      .type(user.username);

    cy.findByPlaceholder('Email')
      .type(user.email);

    cy.findByPlaceholder('Password')
      .type(user.password);

    cy.get('.btn')
      .should('contain.text', 'Sign in')
      .click();

    cy.get('.nav-link')
      .should('contain.text', user.username);
  });
});
