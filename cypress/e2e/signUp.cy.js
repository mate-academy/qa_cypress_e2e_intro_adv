/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

const baseUrl = `https://react-redux.realworld.io`

describe('Sign Up page', () => {
  before(()=> {
    cy.visit(baseUrl + '/#/register')
  })
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.get('[placeholder="Username"]')
      .type(user.username)
    
    cy.get('[placeholder="Email"]')
      .type(user.email)

    cy.get('[placeholder="Password"]')
      .type(user.password)

    cy.contains('.btn', 'Sign in')
      .click()

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', user.username)
  });
});
