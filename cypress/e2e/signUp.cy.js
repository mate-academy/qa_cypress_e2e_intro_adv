const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=4fftua')
  });

  it('should provide an ability to register new account', () => {
    const {username,  email, password} = generateUser();

    cy.get('[placeholder="Username"]')
      .type(username);

    cy.get('[placeholder="Email"]')
      .type(email);

    cy.get('[placeholder="Password"]')
      .type(password);

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', username);
    
  });
});



