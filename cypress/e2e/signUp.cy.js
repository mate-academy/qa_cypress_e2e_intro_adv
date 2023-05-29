/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    
    cy.visit('https://react-redux.realworld.io');

    cy.contains('a', 'Sign up')
    .should('exist')
    .click();

    cy.url()
    .should('include', '/register');

    cy.get('[placeholder="Username"]')
    .type(user.username);

    cy.get('[placeholder="Email"]')
    .type(user.email);

    cy.get('[placeholder="Password"]')
    .type(user.password);

    cy.contains('.btn', 'Sign in')
    .click();

    cy.contains('a', `${user.username}`)
    .should('exist');
  });
});
