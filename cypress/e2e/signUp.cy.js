/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();
    
    cy.findByPlaceholder('Username').type(username);
    cy.findByPlaceholder('Email').type(email);
    cy.findByPlaceholder('Password').type(password);
    cy.contains('button', 'Sign in').click();

    cy.assertPageURL('/?');
    cy.assertAuthorized(username);
  });
});
