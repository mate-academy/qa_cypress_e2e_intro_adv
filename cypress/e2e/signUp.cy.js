const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=r6xws3');
  });

  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();

    cy.url()
      .should('include', '/register');

    cy.get('h1')
      .should('contain.text', 'Sign Up');

    cy.get(':nth-child(1) > .form-control')
      .type(username);

    cy.get(':nth-child(2) > .form-control')
      .type(email);

    cy.get(':nth-child(3) > .form-control')
      .type(password);

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', username);
  });
});
