const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('https://react-redux.realworld.io/#/register');

    cy.get('input[type="text"]').type(user.username);
    cy.get('input[type="email"]').type(user.email);
    cy.get('input[type="password"]').type(user.password);

    cy.get('button[type="submit"]').click();

    cy.get('.navbar').should('contain', user.username);
  });
});
