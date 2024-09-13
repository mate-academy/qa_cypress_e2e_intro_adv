import { generateUser } from '../support/generate.js';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('/#/register?_k=t01ofk');
    cy.get('[placeholder="Username"]').type(user.username);
    cy.get('[placeholder="Email"]').type(user.email);
    cy.get('[placeholder="Password"]').type(user.password);
    cy.get('[type="submit"]').click();
    cy.get('[class="navbar-brand"]').click();
    cy.get('.pull-xs-right.navbar-nav').should('contain', user.username);
  });
});
