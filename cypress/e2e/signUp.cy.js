/// <reference types="cypress"/>

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(3) > .nav-link')
      .should('contain', 'Sign up')
      .click();

    cy.get('h1.text-xs-center')
      .should('contain', 'Sign Up');

    cy.get(':nth-child(1) > .form-control')
      .type(user.username);

    cy.get(':nth-child(2) > .form-control')
      .type(user.email);

    cy.get(':nth-child(3) > .form-control')
      .type(user.password);

    cy.get('.btn')
      .should('contain', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', user.username);
  });
});
