const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    cy.visit('/');

    cy.contains('a', 'Sign up').click();

    const user = generateUser();

    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[placeholder="Email"]').type(user.email);
    cy.get('input[placeholder="Password"]').type(user.password);

    cy.contains('button', 'Sign in').click();
  });
});
