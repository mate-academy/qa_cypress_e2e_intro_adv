import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=1t7pel');
  });
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.get(':nth-child(1) > .form-control').type(user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password);
    cy.get('.btn').click();
    cy.get('.navbar').should('contain', user.username);
  });
});
