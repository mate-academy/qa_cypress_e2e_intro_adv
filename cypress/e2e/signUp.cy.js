import { generateUser } from '../support/generate';

describe('User Registration', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to register new account', () => {
    cy.get(':nth-child(3) > .nav-link').click();

    const user = generateUser();

    cy.get(':nth-child(1) > .form-control').type(user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password);

    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link')
      .should('be.visible')
      .and('contain.text', user.username);
  });
});
