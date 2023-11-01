const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.get(':nth-child(3) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type(user.username);
    cy.get(':nth-child(2) > .form-control')
      .type(user.email);
    cy.get(':nth-child(3) > .form-control')
      .type(user.password);
    cy.contains('.btn', 'Sign in')
      .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', user.username);
  });
});
