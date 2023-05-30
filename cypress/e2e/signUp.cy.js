/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();

    cy.visit('/#/register')

    cy.get('[placeholder="Username"]')
      .type(username)

    cy.get('[placeholder="Email"]')
      .type(email)

    cy.get('[placeholder="Password"]')
      .type(password)

    cy.contains('.btn', 'Sign in')
      .click()

    cy.get(`[href="#@${username}"]`)
      .should('contain', username)
  });
});
