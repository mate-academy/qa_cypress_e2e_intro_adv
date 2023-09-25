const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.visit('https://react-redux.realworld.io');
    cy.get('a[href = "#register"]').click();
    cy.get('input[placeholder = "Username"]').type(user.username);
    cy.get('input[placeholder = "Email"]').type(user.email);
    cy.get('input[placeholder = "Password"]').type(user.password);
    cy.contains('button', 'Sign in').click();
    cy.contains('a', user.username).should('exist');
  });
});
