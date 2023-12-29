const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  before(() => {
    cy.visit('/');
  });
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    cy.get('a.nav-link[href="#register"]').click();
    cy.findByPlaceholder('Username').type(user.username);
    cy.findByPlaceholder('Email').type(user.email);
    cy.findByPlaceholder('Password').type(user.password);
    cy.get('button.btn.btn-lg.btn-primary.pull-xs-right').click();
    cy.get('.navbar-light').should('contain', user.username);
  });
});
