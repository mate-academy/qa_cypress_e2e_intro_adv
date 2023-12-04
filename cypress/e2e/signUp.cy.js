const { generateUser } = require('../support/generate.js');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.visit('https://react-redux.realworld.io');
    cy.get('.navbar a')
      .contains('Sign up')
      .click();
    cy.get('input[placeholder = "Username"]')
      .type(user.username);
    cy.get('input[type="email"]')
      .type(user.email);
    cy.get('input[type ="password"]')
      .type(user.password);
    cy.get('button[type="submit"]')
      .click();
    cy.get('.navbar')
      .should('contain', user.username);
  });
});
