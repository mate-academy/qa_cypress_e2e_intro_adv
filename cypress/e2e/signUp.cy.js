/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/#/register')
  });

  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();

    cy.get('h1.text-xs-center')
      .should('contain.text', 'Sign Up');

    cy.get('[placeholder = "Username')
      .type(username);

    cy.get('[placeholder = "Email')
      .type(email);

    cy.get('[placeholder = "Password')
      .type(password);
    
    cy.contains('.btn', 'Sign in')
      .click();

    cy.url()
      .should('include', '/#/register');
    
    cy.contains('.nav-link', `${username}`)
      .should('exist');
  });
});
