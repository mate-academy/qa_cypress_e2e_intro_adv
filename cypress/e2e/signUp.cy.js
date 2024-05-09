import { generateUser } from '../support/generate.js';
describe('Sign Up page', () => {
  const { username, email, password } = generateUser();

  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to register new account', () => {
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type(username);
    cy.get(':nth-child(2) > .form-control').type(email);
    cy.get(':nth-child(3) > .form-control').type(password);
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', username);
  });
});
