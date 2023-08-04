const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('https://react-redux.realworld.io');
    cy.get('[href="#register"]')
      .click();
    cy.get('[placeholder="Username"]')
      .type(`${user.userName}`);
    cy.get('[placeholder="Email"]')
      .type(`${user.email}`);
    cy.get('[placeholder="Password"]')
      .type(`${user.password}`);
    cy.get('[type="submit"]')
      .click();
    cy.get(`[href="#@${user.userName}"]`)
      .should('contain', `${user.userName}`);
  });
});
