import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register a new account', () => {
    const user = generateUser();

    // Go to the Sign Up page
    cy.visit('https://react-redux.realworld.io/#/register'); // Ensure this is the correct URL

    // Fill in the username, email, and password fields
    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[placeholder="Email"]').type(user.email);
    cy.get('input[placeholder="Password"]').type(user.password);

    // Click on the "Sign up" button
    cy.get('button[type="submit"]').contains('Sign up').click();

    // Assert that the username appears in the header/navigation menu
    cy.get('nav').should('contain', user.username);
  });
});
