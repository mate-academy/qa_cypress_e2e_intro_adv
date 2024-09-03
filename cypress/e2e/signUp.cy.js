/// <reference types="cypress" />

import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    // Перехід на сторінку реєстрації з правильним URL
    cy.visit('/#/register');

    // Взаємодія з елементами форми реєстрації
    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[placeholder="Email"]').type(user.email);
    cy.get('input[placeholder="Password"]').type(user.password);
    cy.get('button[type="submit"]').click();

    // Перевірка успішної реєстрації
    cy.get('.navbar').should('contain', user.username);
  });
});
