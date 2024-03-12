/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit(`https://react-redux.realworld.io/#/register`);
  });
  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();

    cy.visit('https://react-redux.realworld.io/#/register?_k=a5xtmi');
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('a[class="nav-link"]').should('contain.text', username);
  });
});
