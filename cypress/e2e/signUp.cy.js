import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { email, username, password } = generateUser();

    cy.visit(Cypress.config().baseUrl);

    cy.get('[placeholder=Username]')
      .type(username);

    cy.get('[placeholder=Email]')
      .type(email);

    cy.get('[placeholder=Password]')
      .type(password);

    cy.get('button[type=submit]').click();

    cy.get('a.nav-link').contains(username).should('exist');
  });
});
