/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    getElementByPlaceholder(placeholder: string): Chainable<any>;
  }
}
