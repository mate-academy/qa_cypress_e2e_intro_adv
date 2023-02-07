/// <reference types="cypress" />

import { generateUser } from '../support/generate_user'

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const { username, email, password } = generateUser();

    cy.visit('/' + '/#/register');

    cy.findPlaceholder('Username').type(username);

    cy.findPlaceholder('Email').type(email);

    cy.findPlaceholder('Password').type(password);

    cy.get('[type="submit"]').click();

    cy.get(`[href="#@${username}"]`).should('contain.text', username);
  });
});
