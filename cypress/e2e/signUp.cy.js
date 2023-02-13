const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    
    cy.visit('/');

    cy.contains('a','Sign up')
    .click();
    
  cy.get('[placeholder="Username"]')
    .type(user.username);
  
  cy.get('[placeholder="Email"]')
    .type(user.email);

  cy.get('[placeholder="Password"]')
    .type(user.password);
    
  cy.contains('button', 'Sign in')
    .click();

  cy.get('.navbar')
    .should('contain.text',user.username)
  });
});