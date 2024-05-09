import { generateUser } from '../support/generatye';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();
    cy.visit('https://react-redux.realworld.io/#/register?_k=ryt77u');
    cy.get(':nth-child(1) > .form-control').type(username);
    cy.get(':nth-child(2) > .form-control').type(email);
    cy.get(':nth-child(3) > .form-control').type(password);
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('be.visible');
  });
});