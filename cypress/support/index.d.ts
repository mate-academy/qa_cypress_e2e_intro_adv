/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    findByPlaceholder(placeholder: string): Chainable<any>
    assertPageURL(url: string): Chainable<any>
    assertAuthorized(username: string): Chainable<any>
  }
}
 