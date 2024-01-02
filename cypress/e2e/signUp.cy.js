const { generateUser } = require("../support/genUser");


describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const {email, password, username } = generateUser();
    
    cy.visit('/');
    cy.get('a.nav-link[href="#register"]').contains('Sign up').click();
    cy.get('input[placeholder="Username"]')
      .type(username);
    cy.get('input[placeholder="Email"]')
      .type(email);
    cy.get('input[placeholder="Password"]')
      .type(password);
    cy.get('.btn').click();
    cy.get('a').should('contain.text', username);

  });
});