class SignUp {
  elements = {
    usernameInput: () => cy.get(":nth-child(1) > .form-control"),
    emailInput: () => cy.get(":nth-child(2) > .form-control"),
    passwordInput: () => cy.get(":nth-child(3) > .form-control"),
    submitBtn: () => cy.get(".btn"),
    userSignIn: () => cy.get(":nth-child(4) > .nav-link"),
  };
  navigate() {
    cy.visit("https://react-redux.realworld.io/#/register");
  }
  enterUsername(input) {
    this.elements.usernameInput().type(input);
  }
  enterEmail(input) {
    this.elements.emailInput().type(input);
  }
  enterPassword(input) {
    this.elements.passwordInput().type(input);
  }
  clickSubmit(text = "Sign in") {
    this.elements.submitBtn().should("contain.text", text).click();
  }
  verifyUsername(input) {
    this.elements.userSignIn().should("have.attr", "href", `#@${input}`);
  }
}
module.exports = new SignUp();
