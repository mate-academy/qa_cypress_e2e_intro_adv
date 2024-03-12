/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should', () => {
    const { email, password, username } = generateUser();

    cy.visit('https://react-redux.realworld.io/#/register?_k=a5xtmi');
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('button[type="submit"]').should('contain.text', 'Sign in').click();
  });
});
