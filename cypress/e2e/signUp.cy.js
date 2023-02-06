/// <reference types='cypress' />

const { generateUser } = require("../support/generate")

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();

    cy.contains('Sign up')
      .click();
    
    cy.get('[placeholder="Username"]')
      .type(username);
    
    cy.get('[placeholder="Email"]')
      .type(email);
    
    cy.get('[placeholder="Password"]')
      .type(password);
    
    cy.get('button')
      .contains('Sign in')
      .click();
    
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', username)
  });
});
