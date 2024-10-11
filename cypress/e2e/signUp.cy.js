/// <reference types="cypress" />

const username = 'User ' + Date.now();
const email = username + '@i.ua';
const password = 'User123$';

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://conduit.mate.academy/');
  });

  it('should click on Sign Up and create a new account', () => {
    cy.contains('a', 'Sign up')
      .should('be.visible')
      .click();

    cy.get(':nth-child(1) > .form-control').type(username);
    cy.get(':nth-child(2) > .form-control').type(email);
    cy.get(':nth-child(3) > .form-control').type(password);
    cy.get('button[type="submit"]').click();

    cy.get('.nav-link')
      .should('contain.text', username.toLowerCase())
      .and('be.visible');
  });
});
