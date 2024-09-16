const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('should provide an ability to register new account', () => {
    const {email, username, password} = generateUser();

    cy.contains('a', 'Sign up')
      .click();
    cy.get('[placeholder="Username"]')
      .type(username)
    cy.get('[placeholder="Email"]')
      .type(email)
    cy.get('[placeholder="Password"]')
      .type(password)
    cy.contains('.btn', 'Sign in')
      .click();
    cy.get('.nav-link')
      .should('contain', username);
  });
});
