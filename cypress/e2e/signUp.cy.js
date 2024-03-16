const { generateUser } = require('../support/generateNewUser');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();

    cy.visit('/');

    cy.contains('a', 'Sign up').click();

    cy.registerNewUser(username, email, password);

    cy.contains('a', username).should('be.visible');
  });
});
