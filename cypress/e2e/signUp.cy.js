/// <reference types="cypress" />

import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  const user = generateUser();

  it('should click on Sign Up and create a new account', () => {
    cy.visit('https://conduit.mate.academy/');
    cy.contains('a', 'Sign up')
      .should('be.visible')
      .click();

    cy.get(':nth-child(1) > .form-control').type(user.username);

    cy.get(':nth-child(2) > .form-control').type(user.email);

    cy.get(':nth-child(3) > .form-control').type(user.password);
    cy.get('button[type="submit"]').click();

    cy.get('.nav-link')
      .should('contain.text', user.username.toLowerCase())
      .and('be.visible');
  });
});
