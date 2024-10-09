import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('https://react-redux.realworld.io');
    cy.contains('Sign up').click();
    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[placeholder="Email"]').type(user.email);
    cy.get('input[placeholder="Password"]').type(user.password);
    cy.get('button[type="submit"]').click();
    cy.get('.navbar').should('contain', user.username);
  });
});
