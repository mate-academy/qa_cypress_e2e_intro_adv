const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const {username, email, password} = generateUser();

cy.visit('https://react-redux.realworld.io')
cy.get(':nth-child(3) > .nav-link').click()
cy.get('[placeholder="Username"]').type(username)
cy.get('[placeholder="Email"]').type(email)
cy.get('[placeholder="Password"]').type(password)
cy.get('.btn').click()
cy.get(':nth-child(4) > .nav-link').should('contain', username)
    
  });
});


