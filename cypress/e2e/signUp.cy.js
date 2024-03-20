
const { generateUser } = require('../support/generateUser');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to register a new account', () => {
    const user = generateUser();
    cy.contains('a', 'Sign up')
      .click();

    cy.url()
      .should('include', '/register');

    cy.get('h1')
      .should('contain.text', 'Sign Up');

    cy.get('[placeholder=Username]')
      .type(user.username);

    cy.get('[placeholder=Email]')
      .type(user.email);

    cy.get('[placeholder=Password]')
      .type(user.password);

    cy.get('button[type="submit"]')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', user.username);
  });
});
