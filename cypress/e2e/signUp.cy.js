/// <reference types="cypress" />

const { generateUser } = require("../support/generate");

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    cy.visit('https://react-redux.realworld.io');
    const {username, email, password} = generateUser();

    cy.get(':nth-child(3) > .nav-link')
      .click();
      
    cy.get('input[placeholder="Username"]')
      .type(username);

    cy.get('input[placeholder="Email"]')
      .type(email);

    cy.get('input[placeholder="Password"]')
      .type(password);

    cy.contains('.btn', 'Sign in')
      .click();  // this is not correct, because the [Sign up] button on this page doesn't exists
    cy.wait(600);

    cy.get(':nth-child(4) > .nav-link')
      cy.should('contain.text', username)
  });
});
