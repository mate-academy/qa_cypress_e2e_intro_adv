/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

describe('Sign Up page', () => {
  before(() => {
    cy.visit('/');
  });
  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();

    cy.contains('a', 'Sign up').should('exist').click();
    cy.url().should('include', '/register');

    cy.get('h1').should('contain.text', 'Sign Up');
    cy.get('[placeholder="Username"]').type(username);
    cy.get('[placeholder="Email"]').type(email);

    cy.get('[placeholder="Password"]').type(password);

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').contains(username).should('be.visible');
  });
});
