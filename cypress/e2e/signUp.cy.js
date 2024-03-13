const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register');
  });

  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();
    cy.get('[placeholder="Username"]').type(username);
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('.navbar .nav-item').last().should('contain.text', username);
  });
});
