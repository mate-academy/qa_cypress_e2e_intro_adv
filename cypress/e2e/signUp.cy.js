const {generateUser} = require('../support/generateUser');
describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();

    cy.findByPlaceholder('Username').type(username);
    cy.findByPlaceholder('Email').type(email);
    cy.findByPlaceholder('Password').type(password);

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain.text', username);
  });
});
