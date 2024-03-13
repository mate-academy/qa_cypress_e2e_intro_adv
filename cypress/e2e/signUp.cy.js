const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  before(() => {
    cy.visit('/register');
  });

  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();

    cy.get('h1')
      .should('contain.text', 'Sign Up');

    cy.get('[placeholder=Username]')
      .type(username);

    cy.get('[placeholder=Email]')
      .type(email);

    cy.get('[placeholder=Password]')
      .type(password);

    cy.contains('button', 'Sign in')
      .click();

    cy.get('.navbar .nav-item')
      .last()
      .should('contain.text', username);
  });
});
