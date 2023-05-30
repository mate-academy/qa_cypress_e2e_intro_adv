/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  before(() => {cy.visit('https://react-redux.realworld.io');});
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    
  
    cy.contains('.nav-link', 'Sign up')
     .click ();
    cy.contains('h1', 'Sign Up')
     .should('be.visible');
    cy.url()
     .should('include', 'register');
    cy.get('[placeholder = "Username"]')  
     .type (user.username);
    cy.get('[placeholder = "Email"]')
     .type (user.email);
    cy.get('[placeholder = "Password"]')
     .type(user.password);
    cy.get('.btn')
     .click();
    cy.contains('.nav-link', user.username)
     .should('be.visible')
  });
});


