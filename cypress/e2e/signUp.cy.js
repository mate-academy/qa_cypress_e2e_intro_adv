/// <reference types='cypress' />
const { generateUser } = require('../support/generateUser');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    // Go page
    cy.visit('https://react-redux.realworld.io');
    // Assert page
    cy.url().should('contain', 'https://react-redux.realworld.io');

    cy.get('.nav-link').contains('Sign up').click();
    cy.get('[placeholder="Username"]').type(user.username);
    cy.get('[placeholder="Email"]').type(user.email);
    cy.get('[placeholder="Password"]').type(user.password);
    cy.get('button').get('[type="submit"]').contains('Sign in').click();
    // Assert username on top menu
    cy.get('a').parent('li').get('.nav-link').should('contain', user.username);
  });
});
