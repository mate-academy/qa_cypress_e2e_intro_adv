const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

    it('should provide an ability to register new account', () => {
      const { email, password, username } = generateUser();

      cy.get(':nth-child(3) > .nav-link').click()

      cy.get(':nth-child(1) > .form-control').type(username)

      cy.get(':nth-child(2) > .form-control').type(email)

      cy.get(':nth-child(3) > .form-control').type(password)

      cy.get('.btn').should('contain', 'Sign in').click()

      cy.get(':nth-child(4) > .nav-link').should('contain', username)
    });
});
