class SignUpPage {
  constructor() {
    this.url = '/register';
  }

  get username() {
    return cy.getByPlaceholder('Username');
  }

  get email() {
    return cy.getByPlaceholder('Email');
  }

  get password() {
    return cy.getByPlaceholder('Password');
  }

  signUp() {
    cy.contains('[type="submit"]', 'Sign in')
      .click();
  }
}

export default SignUpPage;
