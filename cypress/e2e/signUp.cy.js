import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.get('[href="#register"]').click();

    cy.get('[placeholder="Username"]').type(user.username);
    cy.get('[placeholder="Email"]').type(user.email);
    cy.get('[placeholder="Password"]').type(user.password);
    cy.get('[type="submit"]').click();

    cy.get('.nav-link').should('contain', user.username);
  });
});
