import PageObject from "../PageObject";

class SignUpPageObject extends PageObject {
  url = '/#/register?_k=jj9fe0'

  get usernameField() {
    return cy.getByPlaceholder('Username');
  };

  get emailField() {
    return cy.getByPlaceholder('Email');
  };

  get passwordField() {
    return cy.getByPlaceholder('Password');
  };

  get signUpBtn() {
    return cy.contains('.btn', 'Sign in');
  };

  visitSignUpPage() {
    cy.visit(this.url);
  };

  fillUsernameField(username) {
    this.usernameField.type(username)
  };

  fillEmailField(email) {
    this.emailField.type(email);
  };

  fillPasswordField(password) {
    this.passwordField.type(password);
  };

  fillRegistrationFields(username, email, password) {
    this.fillUsernameField(username);
    this.fillEmailField(email);
    this.fillPasswordField(password);
  };

  clickSignUpBtn() {
    this.signUpBtn.click();
  };
}

export default SignUpPageObject;