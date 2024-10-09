import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('https://react-redux.realworld.io');

    cy.get('h1')
      .should('contain.text', 'conduit');

    cy.get('a[href*="#register"]')
      .click();

    cy.get('h1')
      .should('contain.text', 'Sign Up');

    cy.get('[placeholder=Username]')
      .type(user.username);

    cy.get('[placeholder=Email]')
      .type(user.email);

    cy.get('[placeholder=Password]')
      .type(user.password);

    cy.get('.btn').click();

    cy.get('a.nav-link')
      .should('contain', user.username);
  });
});
