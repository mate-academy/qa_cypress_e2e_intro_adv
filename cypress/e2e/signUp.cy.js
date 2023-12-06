const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.get('.nav-link').contains('Sign up').click();
    cy.get('input[placeholder=Username]').type(user.username);
    cy.get('input[placeholder=Email]').type(user.email);
    cy.get('input[placeholder=Password]').type(user.password);
    cy.get('[type="submit"]').click();
    cy.get('a.nav-link').should('contain', user.username);
  });
});
