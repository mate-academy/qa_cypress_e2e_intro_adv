/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();

    //looking for the link and click on it
    cy.get(':nth-child(3) > .nav-link')
      .contains('a', 'Sign up')
      .click();

    //username field
    cy.get('[placeholder="Username"]')
      .should('contains.text', '')
      .type(username);

    //email field
    cy.get('[placeholder="Email"]')
      .should('contains.text', '')
      .type(email);

    //password field
    cy.get('[placeholder="Password"]')
      .should('contains.text', '')
      .type(password);

    //button (can't be found by the correct text)
    cy.get('.btn')
      .click();
    
    //username assertion
    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', username)
  });
});
