const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();

    cy.visit('https://react-redux.realworld.io');

    cy.contains('a', 'Sign up')
      .should('have.attr', 'href', '#register')
      .click();

    cy.findByPlaceholder('Username').type(username);
    cy.findByPlaceholder('Email').type(email);
    cy.findByPlaceholder('Password').type(password);

    cy.get('.btn').should('contain.text', 'Sign Up').click();

    cy.get(':nth-child(4) > .nav-link').should('contain.text', username);
  });
});
