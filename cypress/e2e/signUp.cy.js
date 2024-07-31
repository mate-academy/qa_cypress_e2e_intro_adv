import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=v0avdp');
  });

  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.findByPlaceholder('Username').type(user.username);
    cy.findByPlaceholder('Email').type(user.email);
    cy.findByPlaceholder('Password').type(user.password);
    cy.get('.btn').contains('Sign in').click();
    
    cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
  });
});
