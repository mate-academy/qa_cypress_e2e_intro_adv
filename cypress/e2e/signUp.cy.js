/// <reference types="cypress" />

const { generateUser } = require("../support/generate");

describe('Sign Up page', () => {
  const { username, email, password } = generateUser();

  it('should provide an ability to register new account', () => {
    cy.visit('/register')
    
    cy.get('[placeholder="Username"]').type(username);

    cy.get('[placeholder="Email"]').type(email);

    cy.get('[placeholder="Password"]').type(password);

    cy.contains('.btn', 'Sign in').click();

    cy.get('.nav-link').should('contain.text', username);
  });
});
