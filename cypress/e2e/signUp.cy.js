

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {

    const { generateUser } = require('../support/generate');
    const { username, email, password } = generateUser();

    cy.visit('/register');

    cy.get('[placeholder=Username]').type(username);
    cy.get('[placeholder=Email]').type(email);
    cy.get('[placeholder=Password]').type(password);

    cy.contains('button', 'Sign in').click();

    cy.contains('.nav-link', username).should('be.visible');
  });
});
