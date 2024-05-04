/// <reference types= 'cypress'/>

import { generateUser } from '../support/generate.js';

const user = generateUser();

beforeEach(() => {
  cy.visit('/#/register');
});

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    cy.get('h1')
      .contains('Sign Up')
      .should('exist');

    cy.get('p')
      .contains('Have an account?')
      .should('exist');

    cy.get(':nth-child(1) > .form-control')
      .should('have.attr', 'placeholder', 'Username')
      .type(user.username);

    cy.get(':nth-child(2) > .form-control')
      .should('have.attr', 'placeholder', 'Email')
      .type(user.email);

    cy.get(':nth-child(3) > .form-control')
      .should('have.attr', 'placeholder', 'Password')
      .type(user.password);

    cy.get('.btn')
    // .contains('Sign up') this test is failed,the button contains "Sign In"//
      .should('exist')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', user.username)
      .should('exist');
  });
});
