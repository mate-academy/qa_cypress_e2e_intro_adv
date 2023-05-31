/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', ()=> {
  before(()=> {
    cy.visit('https://react-redux.realworld.io/'); 
});

  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.contains('Sign up')
      .click()
    cy.get('[placeholder="Username"]')
      .type(user.username); 
    cy.get('[placeholder="Email"]')
      .type(user.email);
    cy.get('[placeholder="Password"]')
      .type(user.password);
    cy.contains('.btn', 'Sign in')
      .click()
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', user.username) 
  });
});
