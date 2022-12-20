const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();
    cy.visit('/');

    //Go to "Sign Up" page.
    cy.get('[href="#register"]').should('contain.text', 'Sign up').click();
    cy.url().should('contain','#/register');
  
    //Fill in username, email, and password fields using `generateUser` method.
    cy.get('[placeholder="Username"]').type(username);
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);

    //Click on [Sign up] button.
    cy.get('[type="submit"]').click();

    //Assert your username appeared in site navigation (header) menu.
    cy.get(':nth-child(4) > .nav-link').should('contain.text',username);

  });
});
