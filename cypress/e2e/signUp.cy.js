import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    // Go to Sign Up page
    cy.visit('https://react-redux.realworld.io/#/register');

    // Fill in username, email, and password fields
    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[placeholder="Email"]').type(user.email);
    cy.get('input[placeholder="Password"]').type(user.password);

    // Click [Sign up]
    cy.get('button[type="submit"]').click();

    // Assert username appeared in site navigation menu
    cy.get('.navbar').contains(user.username).should('be.visible');
  });
});
