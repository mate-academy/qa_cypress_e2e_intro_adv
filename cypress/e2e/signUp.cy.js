import { generateUser } from '../support/e2e';

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.get(':nth-child(3) > .nav-link').click();

    cy.get('[placeholder="Username"]').type(user.username);
    cy.get('[placeholder="Email"]').type(user.email);
    cy.get('[placeholder="Password"]').type(user.password);

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
  });
});