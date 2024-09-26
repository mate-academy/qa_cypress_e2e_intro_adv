/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  let user;
  beforeEach(() => {
    cy.visit('/');
    user = generateUser();
  });
  it('should provide an ability to register new account', () => {
    cy.contains('.nav-link', 'Sign up').click();

    cy.getByPlaceholder('Username').type(user.username);
    cy.getByPlaceholder('Email').type(user.email);
    cy.getByPlaceholder('Password').type(user.password);

    cy.contains('.btn', 'Sign in').click();
    cy.get('.nav-link').should('contain', user.username);
  });
});
