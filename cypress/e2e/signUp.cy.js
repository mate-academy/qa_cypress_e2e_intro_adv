import SignUpPage from '../support/pages/signUp.objectPage';

const { faker } = require('@faker-js/faker');

const signUp = new SignUpPage();

describe('Sign Up page', () => {
  before(() => {
    cy.visit('/register');
  });

  it('should provide an ability to register new account', () => {
    const username = faker.person.fullName();
    const email = faker.internet.email();
    const password = username + '_P@$$w0rd';

    signUp.username.type(username);
    signUp.email.type(email);
    signUp.password.type(password);

    signUp.signUp();

    cy.contains('.nav-link', username)
      .should('exist');
  });
});
