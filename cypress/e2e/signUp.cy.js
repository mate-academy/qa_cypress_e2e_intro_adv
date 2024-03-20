const { generateUser } = require("../support/generate");

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/')
    });
  
    it('should provide an ability to register new account', () => {
      const {username, email, password} = generateUser()
    
    cy.contains('a', 'Sign up')
     .click()

    cy.url()
     .should('include', '/register')

    cy.get('h1')
     .should('contain.text', 'Sign Up')

    cy.get('[placeholder=Username]')
     .type(username)

     cy.get('[placeholder=Email]')
     .type(email)

    cy.get('[placeholder=Password]')
    .type(password)

    cy.get('button[type="submit"]')
     .click()

    cy.get('[class="navbar navbar-light"]')
     .last()
     .should('contain.text', `${username}`) 

  });
});
