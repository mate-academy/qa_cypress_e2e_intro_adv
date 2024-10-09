import { generateUser } from '../support/generate';

Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { email, username, password } = generateUser();

    cy.visit('https://react-redux.realworld.io/#/register?_k=spysa9');

    cy.get('[placeholder=Username]')
      .type(username);

    cy.get('[placeholder=Email]')
      .type(email);

    cy.get('[placeholder=Password]')
      .type(password);

    cy.get('button[type=submit]')
      .should('exist').click();

    cy.url().should('not.contain', '/register');

    cy.get('a.nav-link').contains(username).should('exist');
  });
});
