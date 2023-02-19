

const { generateUser } = require('../support/generate.js');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.visit('/');
    cy.contains('[href="#register"]', 'Sign up')
      .click();
    cy.url().should('include', 'register');
    cy.findByPlaceholder('Username')
      .type(user.username);
    cy.findByPlaceholder('Email')
      .type(user.email);
    cy.findByPlaceholder('Password')
      .type(user.password);
    cy.contains('.btn', 'Sign in')
      .click();
    cy.contains('.nav-link', user.username)
      .should('contain.text', user.username);
  });
});
  

