/// <reference types="cypress" />

const { generateUser } = require("../support/generate");

describe("Sign Up page", () => {
  it("should provide an ability to register new account", () => {
    const user = generateUser();

    cy.visit("https://react-redux.realworld.io");
    const { username, email, password } = generateUser();

    cy.get(".nav-link").contains("Sign up").click();

    cy.findByPlaceholder("Username").type(username);

    cy.findByPlaceholder("Email").type(email);

    cy.findByPlaceholder("Password").type(password);

    cy.contains(".btn", "Sign in").click();

    cy.get(".nav-link").contains(username);
  });
});
