/// <reference types='cypress' />
import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  const { username, email, password } = generateUser();

  it('should provide an ability to register new account', () => {
    cy.visit('/user/register');

    cy.getByPlaceholder('Username', username);
    cy.getByPlaceholder('Email', email);
    cy.getByPlaceholder('Password', password);
    cy.get('button[type="submit"]').click();
    cy.get('a[class=nav-link]')
      .contains(username.toLowerCase())
      .should('be.visible');
  });
});
