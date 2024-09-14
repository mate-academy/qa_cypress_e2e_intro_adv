/// <reference types="cypress" />
import { generateUser } from '../support/generateUser';

const url = 'https://react-redux.realworld.io';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit(url + '/#/register');

    cy.get(`input[placeholder='Username']`)
      .type(user.username);
    cy.get(`input[placeholder='Email']`)
      .type(user.email);
    cy.get(`input[placeholder='Password']`)
      .type(user.password);

    cy.get(`button[type='submit']`)
      .click();

    cy.get(`a[class='nav-link']`)
      .contains(user.username)
      .should('exist');
  });
});
