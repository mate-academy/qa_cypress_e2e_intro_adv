/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.visit('https://react-redux.realworld.io');
    cy.get('[href="#register"]')
      .click();
    cy.get('[placeholder="Username"]')
      .type(user.username);
    cy.get('[placeholder="Email"]')
      .type(user.email);
    cy.get('[placeholder="Password"]')
      .type(user.password);
    cy.get('[type="submit"]')
      .click();
    cy.get('[class="navbar navbar-light"]')
      .should('contain.text', user.username);
  });
});
