const { generateUser } = require('../support/generateUser');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const {
      userName,
      email,
      password
    } = generateUser();

    cy.visit('/#/register');

    cy.findByPlaceholder('Username').type(userName);
    cy.findByPlaceholder('Email').type(email);
    cy.findByPlaceholder('Password').type(password);

    cy.get('.btn, Sign in').click();

    cy.get('.nav-link').should('contain', userName);
  });
});
