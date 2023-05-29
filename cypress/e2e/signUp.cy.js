/// <reference types="cypress" />

const baseUrl = 'https://react-redux.realworld.io';
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit(baseUrl + '/#/register');

    cy.get(':nth-child(1) > .form-control')
      .type(user.username);

    cy.get(':nth-child(2) > .form-control')
      .type(user.email);

    cy.get(':nth-child(3) > .form-control')
      .type(user.password);

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .contains(user.username);
  });
});
