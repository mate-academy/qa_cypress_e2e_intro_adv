/// <reference types="cypress" />

Cypress.Commands.add('getByPlaceholder', (selector) => {
  cy.get(`[placeholder="${selector}"]`);
});
