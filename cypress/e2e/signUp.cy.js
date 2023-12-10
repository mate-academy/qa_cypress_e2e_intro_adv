const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register a new account', () => {
    cy.visit('https://react-redux.realworld.io');
    const user = generateUser();

    cy.get(':nth-child(3) > .nav-link').click();

    cy.get(':nth-child(1) > .form-control').type(user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password);
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
  });
});
