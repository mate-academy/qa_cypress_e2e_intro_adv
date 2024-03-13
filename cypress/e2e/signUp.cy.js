/// <reference types="cypress" />
const { generateUser } = require('../support/generate');
describe('Sign Up page', () => {
  before(() => {
    const URL_SIGN_UP = 'https://react-redux.realworld.io/#/register?_k=usft36';
    cy.visit(URL_SIGN_UP);
  });
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.get('[placeholder="Username"]').type(user.username);
    cy.get('[placeholder="Email"]').type(user.email);
    cy.get('[placeholder="Password"]').type(user.password);
    cy.get('[type="submit"]').click();
    cy.get('.navbar .nav-item').last().should('have.text', user.username);
  });
});
