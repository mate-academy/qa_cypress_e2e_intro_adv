/// <reference types='cypress' />

Cypress.Commands.add('getByPlaceholder', (placeholder, value) => {
  cy.get(`input[placeholder="${placeholder}"]`).type(value);
});
