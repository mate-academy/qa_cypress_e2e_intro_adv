const { generateUser } = require('../support/generateUser');

describe('Sign Up page', () => {
  let user;

  before(() => {
    user = generateUser();
  });

  it('should provide an ability to register new account', () => {
    cy.visit('/#/register');
    cy.getElementByPlaceholder('Username').type(user.username);
    cy.getElementByPlaceholder('Email').type(user.email);
    cy.getElementByPlaceholder('Password').type(user.password + '{Enter}');
    cy.contains('a.nav-link', user.username).should('exist');
  });
});
