const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('should provide an ability to register new account', () => {
    const {email, username, password} = generateUser();

    cy.contains('a', 'Sign up')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type(username)
    cy.get(':nth-child(2) > .form-control')
      .type(email)
    cy.get(':nth-child(3) > .form-control')
      .type(password)
    cy.contains('.btn', 'Sign in')
      .click();
    cy.get('.nav-link')
      .should('contain', username);
  });
});