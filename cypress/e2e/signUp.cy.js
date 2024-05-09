import { generateUser } from '../support/generateUser.js';

describe('Sign Up page', () => {

  const { userName, email, password } = generateUser();

  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register');
  });

  it('should provide an ability to register new account', () => {
    cy.get(':nth-child(1) > .form-control').type(userName);
    cy.get(':nth-child(2) > .form-control').type(email);
    cy.get(':nth-child(3) > .form-control').type(password);
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').contains(userName).should('be.visible');
  });
});
