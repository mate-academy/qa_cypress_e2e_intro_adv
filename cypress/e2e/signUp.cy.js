const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  before(() => {
    cy.visit('/register');
  });
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.get('input[type="text"]').type(user.username);
    cy.get('input[type="email"]').type(user.email);
    cy.get('input[type="password"]').type(user.password);
    cy.contains('.btn', 'Sign in')
      .click();
    cy.get('.navbar').should('contain', user.username);
  });
});
