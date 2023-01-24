/// <reference types='cypress' />
const { generateUser} = require("../support/generate.js");

describe('Sign Up page', () => {

  it('should provide an ability to register new account', () => {
    cy.visit('/#/register?_k=dvpuy7');
    const { 
      username,
      email, 
      password,     
    } = generateUser();

    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get("button[type='submit']").click()

    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', username)

   
  });
});
