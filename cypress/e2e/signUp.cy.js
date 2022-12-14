import { faker } from '@faker-js/faker';
const random = Math.random().toString().slice(2, 6);
const username = faker.internet.userName() + '_' + random;
const email = `${username}@mail.com`;
const password = '12345Qwert!';

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    cy.visit('https://react-redux.realworld.io/');

    cy.get(':nth-child(3) > .nav-link').should('contain', 'Sign up').click();
    cy.url().should('include', '/register');
    cy.get('h1.text-xs-center').should('contain', 'Sign Up');

    cy.get(':nth-child(1) > .form-control').type(username);
    cy.get(':nth-child(2) > .form-control').type(email);
    cy.get(':nth-child(3) > .form-control').type(password);
    cy.get('.btn').should('contain', 'Sign up').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', username);
  });
});
