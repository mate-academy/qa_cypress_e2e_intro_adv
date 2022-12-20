const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    
    cy.visit('https://react-redux.realworld.io');

    cy.get('nav')
      .contains('Sign up')
      .click();
    
      cy.get('fieldset:nth-child(1) > input')
      .type(user.username);  
    

    cy.get('fieldset:nth-child(2) > input')
      .type(user.email);

    cy.get('fieldset:nth-child(3) > input')
      .type(user.password);

    cy.get('.btn')
      .contains('Sign in')
      .click();

    cy.get('.navbar')
      .should('contain', user.username);
  });
});
