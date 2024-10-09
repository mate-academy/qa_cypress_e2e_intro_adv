import { generateUser } from '../support/generate';

Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { email, username, password } = generateUser();

    cy.visit('/#/register?_k=spysa9');

    cy.get('[placeholder=Username]')
      .type(username);

    cy.get('[placeholder=Email]')
      .type(email);

    cy.get('[placeholder=Password]')
      .type(password);

    cy.get('button[type=submit]').click();

    cy.url().should('contain', '/#/?_k=c1q9kl');

    cy.get('a.nav-link').contains(username).should('exist');
  });
});
