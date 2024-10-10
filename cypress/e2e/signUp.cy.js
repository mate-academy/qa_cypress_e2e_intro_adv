/// <reference types="cypress" />

import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.visit('/register');

    cy.findByPlaceholder('Username')
      .type(user.username);

    cy.findByPlaceholder('Email')
      .type(user.email);

    cy.findByPlaceholder('Password')
      .type(user.password);

    cy.get('button[type="submit"]').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
  });
});
