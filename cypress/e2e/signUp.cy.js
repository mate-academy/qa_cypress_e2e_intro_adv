/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('/');
    cy.contains('Sign up').click();
    cy.getByPlaceholder('Username').type(user.username);
    cy.getByPlaceholder('Email').type(user.email);
    cy.getByPlaceholder('Password').type(user.password);
    cy.get('.btn').click();
    cy.get('.nav-link').should('contain.text', user.username);
  });
});
