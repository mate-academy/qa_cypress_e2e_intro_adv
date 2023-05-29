const { generateUser } = require('../support/generateUser');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register')
  })

  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();

    cy.get(':nth-child(1) > .form-control')
      .type(username)

    cy.get(':nth-child(2) > .form-control')
      .type(email)

    cy.get(':nth-child(3) > .form-control')
      .type(password)

    cy.contains('.btn', 'Sign in') // should be here 'sign up' text instead of 'sign in' ?
      .click()

    cy.contains(':nth-child(4) > .nav-link', username)
  });
});


