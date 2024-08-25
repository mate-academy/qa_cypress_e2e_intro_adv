import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    // eslint-disable-next-line max-len
    cy.visit('https://react-redux.realworld.io/#/register', { timeout: 120000 });
    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[placeholder="Email"]').type(user.email);
    cy.get('input[placeholder="Password"]').type(user.password);
    cy.get('button[type="submit"]').click();
    cy.get('.navbar').should('contain', user.username);
  });
});
