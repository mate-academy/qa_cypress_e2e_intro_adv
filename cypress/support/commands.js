/// <reference types="cypress" />

Cypress.Commands.add('getByPlaceholder', (selector) => {
  return cy.get(`[placeholder="${selector}"]`);
});
