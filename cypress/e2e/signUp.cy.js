/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register')
  })

  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();
    cy.url()
      .should('include', '/register')

    cy.get('h1')
      .should('contain.text', 'Sign Up')

    cy.get('[placeholder="Username"]')
      .type(username)

    cy.get('[placeholder="Email"]')
      .type(email)

    cy.get('[placeholder="Password"]')
      .type(password)

    cy.contains('.btn', 'Sign in')
      .click()

    cy.get('.navbar')
      .should('contain', username);
  });
});
