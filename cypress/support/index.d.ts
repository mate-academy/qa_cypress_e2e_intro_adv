/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        getByPlaceholder(placeholder: string): Chainable<any>
    }
  }