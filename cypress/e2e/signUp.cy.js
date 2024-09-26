const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register');
  });

  it('should provide an ability to register new account', () => {
    const {username, email, password} = generateUser();

    cy.get('[placeholder="Username"]').type(username);
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);

    cy.contains('.btn', 'Sign up').click();

    cy.contains('.nav-link', username).should('be.visisble');
  });
});
