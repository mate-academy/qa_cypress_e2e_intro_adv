const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.visit('/');

    cy.get('.nav-link')
      .contains('Sign up')
      .click();

    cy.findByPlacehoder('Username')
      .type(user.username);

    cy.findByPlacehoder('Email')
      .type(user.email);

    cy.findByPlacehoder('Password')
      .type(user.password);

    cy.get('form').submit();

    cy.contains('.nav-link', user.username)
      .should('be.visible');
  });
});
