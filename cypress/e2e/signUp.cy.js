const { generateUser } = require('../../../cypress/support/generate');

describe('Sign Up page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.get('[href="#register"]').click();
    cy.get('[placeholder="Username"]').type(user.username);
    cy.get('[placeholder="Email"]').type(user.email);
    cy.get('[placeholder="Password"]').type(user.password);
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain',user.username);
  });

});
