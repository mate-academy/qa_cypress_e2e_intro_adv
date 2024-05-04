import { generateUser } from '../support/generate';
const users = generateUser();

beforeEach(() => {
  cy.visit('/#/register');
});

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    cy.get(':nth-child(1) > .form-control').type(users.username);

    cy.get(':nth-child(2) > .form-control').type(users.email);

    cy.get(':nth-child(3) > .form-control').type(users.password);

    cy.get('.btn').click();

    cy.get('.navbar .nav-item').should('contain.text', users.username);
  });
});
