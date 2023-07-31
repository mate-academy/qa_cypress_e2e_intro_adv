/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    getByPlaceholder(selector: string): Chainable<any>
  }
}
