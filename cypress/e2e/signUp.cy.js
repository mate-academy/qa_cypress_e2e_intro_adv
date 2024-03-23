
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();

    cy.visit('https://react-redux.realworld.io/#/register');

    cy.findByPlaceholder('Username').type(username);
    cy.findByPlaceholder('Email').type(email);
    cy.findByPlaceholder('Password').type(password);

    cy.get('.btn').should('contain', 'Sign in').click();
    cy.get('.nav-link').should('contain', username);
  });
});
