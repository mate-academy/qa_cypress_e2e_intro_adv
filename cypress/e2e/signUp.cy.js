/// <reference types="cypress" />

import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('user/register');
    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[type="email"]').type(user.email);
    cy.get('input[type="password"]').type(user.password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.get('.nav-link').should('contain', user.username.toLowerCase());
  });
});
