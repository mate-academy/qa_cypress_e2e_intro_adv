const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.visit('/#/register');
    cy.get('input[type="text"]').type(user.username);
    cy.get('input[type="email"]').type(user.email);
    cy.get('input[type="password"]').type(user.password);
    cy.get('button[type="submit"]').click();
    cy.get('ul li:nth-child(4) a').should(
      'have.attr',
      'href',
      `#@${user.username}`
    );
  });
});
