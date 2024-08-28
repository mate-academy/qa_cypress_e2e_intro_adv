/// <reference types="cypress" />

import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    cy.visit('#/register');

    cy.wrap(generateUser()).as('user');

    cy.get('@user').then((user) => {
      cy.getByPlaceholder('Username')
        .type(user.username);

      cy.getByPlaceholder('Email')
        .type(user.email);

      cy.getByPlaceholder('Password')
        .type(user.password);

      cy.get('button[type=submit]')
        .click();

      cy.get('.navbar')
        .should('contain.text', user.username);
    });
  });
});
