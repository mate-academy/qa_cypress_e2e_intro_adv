/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit(`https://react-redux.realworld.io/#/register`);
  });

  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.log(user.username);

    cy.get('input[placeholder="Username"]')
      .type(user.username);

    cy.get('input[placeholder="Email"]')
      .type(user.email);

    cy.get('input[placeholder="Password"]')
      .type(user.password);

    cy.get('button[type="submit"]')
      .click();

    cy.get('.navbar .nav-link').eq(3)
      .should('contain.text', user.username);
  });
});
