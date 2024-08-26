import { generateUser } from '../support/generate.js';

// describe("Sign Up page", () => {
//   before(() => {
//     cy.visit("/");
//   });
//   it("should provide an ability to register new account", () => {
//     const user = generateUser();
//     cy.contains("a", "Sign up").should("exist").click();
//     cy.url().should("include", "/register");
//     cy.get(":nth-child(1) > .form-control").type(user.username);

//     cy.get("[type=email]").type(user.email);

//     cy.get("input[type=password]").type(user.password);
//     cy.get("[type=submit]").click();
//     cy.get(":nth-child(4) > .nav-link")
//       .contains(user.username)
//       .should("be.visible");
//   });
// });
describe('Sign Up page', () => {
  const user = generateUser();
  it('should provide an ability to register new account', () => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=529pfd');
    cy.get(':nth-child(1) > .form-control').type(user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password);
    cy.get('.btn').click();
    cy.get('a.nav-link').should('contain', user.username);
  });
});
