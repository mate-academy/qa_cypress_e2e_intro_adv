const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/#/register')
  });
  
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.get('[placeholder="Username"]')
      .type(user.username)

    cy.get('[placeholder="Email"]')
      .type(user.email)

    cy.get('[placeholder="Password"]')
      .type(user.password)

    cy.get('.btn') /* The button is called "Sign in", but it should be called "Sign up" */ 
      .click();
    
    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', `${user.username}`)
  });
});
