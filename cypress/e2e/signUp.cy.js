/// <reference types="cypress" />

import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.visit('https://conduit.mate.academy/');
    cy.contains('a', 'Sign up').click();
    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[placeholder="Email"]').type(user.email);
    cy.get('input[placeholder="Password"]').type(user.password);
    cy.get('button').contains('Sign up').click();
    cy.get('.nav-link').should('contain', user.username.toLowerCase());
  });
});
