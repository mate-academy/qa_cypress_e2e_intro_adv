/// <reference types="cypress" />

const baseUrl = 'https://react-redux.realworld.io';
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit(baseUrl + '/#/register');

    cy.get('[placeholder = "Username"]')
      .type(user.username);

    cy.get('[placeholder = "Email"]')
      .type(user.email);

    cy.get('[placeholder = "Password"]')
      .type(user.password);

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .contains(user.username);
  });
});
