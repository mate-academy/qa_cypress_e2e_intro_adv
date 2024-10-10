import { faker } from '@faker-js/faker';

/// <reference types="cypress" />

const userName = faker.person.firstName() +
  Math.floor(Math.random() * 3435);
const email = faker.internet.email();

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    cy.visit('https://conduit.mate.academy/');
    cy.get('.nav-link').contains('Sign up').click();
    cy.get('.form-control.form-control-lg[type="text"]')
      .type(userName);
    cy.get('.form-control.form-control-lg[type="email"]')
      .type(email);
    cy.get('.form-control.form-control-lg[type="password"]')
      .type(email);
    cy.get('.btn').click();
    cy.get('.nav-link')
      .should('contain.text', userName.toLocaleLowerCase())
      .and('be.visible');
  });
});
