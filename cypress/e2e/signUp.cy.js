/// <reference types="cypress"/>

 const { generateUser }  = require('../support/commands');

 describe('Sign Up page', () => {
   it('should provide an ability to register new account', () => {
     const user = generateUser();

     cy.visit('https://react-redux.realworld.io/#/register');
     cy.findByPlaceholder('Username').type(user.username);
     cy.findByPlaceholder('Email').type(user.email);
     cy.findByPlaceholder('Password'). type(user.password);
     cy.get('.btn').click();
     cy.get('.navbar').should('contain', user.username);
     cy.url().should('not.include', '/login');    
     
    });
  });
