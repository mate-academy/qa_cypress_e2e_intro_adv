const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    cy.visit('https://react-redux.realworld.io');
    const user = generateUser();
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').click()
      .type(user.username);
    cy.get(':nth-child(2) > .form-control').click()
      .type(user.email);
    cy.get(':nth-child(3) > .form-control').click()
      .type(user.password);
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('exist');
  });
});
