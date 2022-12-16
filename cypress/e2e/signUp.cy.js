/// <reference types="cypress" />
const { generateUser } = require('../support/commands');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register')
  });

  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();
    
    cy.get('[placeholder="Username"]').type(username)

    cy.get('[placeholder="Email"]').type(email)

    cy.get('[placeholder="Password"]').type(password)

    cy.contains('.btn', 'Sign in').click()

    cy.wait(4000)

     cy.get(':nth-child(4) > .nav-link').should('contain.text', username);


  });
});
