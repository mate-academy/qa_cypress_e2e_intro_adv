/// <reference types='cypress' />
const {generateUser} = require('../support/generateUser');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register')
  });

  it('should contains Sign Up form', () => {
    cy.get('h1').should('contain.text', 'Sign Up').and('be.visible');
    cy.contains('a', 'Have an account?').should('exist').and('be.visible');
    cy.findByPlaceholder('Username').should('exist').and('be.visible');
    cy.findByPlaceholder('Email').should('exist').and('be.visible');
    cy.findByPlaceholder('Password').should('exist').and('be.visible');
    cy.contains('button', 'Sign in').should('exist').and('be.visible');
  });

  it('should provide an ability to register new account', () => {
    const {username, email, password} = generateUser();

    cy.findByPlaceholder('Username').type(username)
    cy.findByPlaceholder('Email').type(email)
    cy.findByPlaceholder('Password').type(password)
    cy.contains('button', 'Sign in').click();
    cy.contains('a', username).should('exist').and('be.visible');
  });

  it('should not provide the ability to send empty form', () => {
    cy.contains('button', 'Sign in').click();
    cy.contains('li', `email can't be blank`).should('exist').and('be.visible');
  });

  it('should not provide the ability to register without username', () => {
    const {username, email, password} = generateUser();

    cy.findByPlaceholder('Email').type(email)
    cy.findByPlaceholder('Password').type(password)
    cy.contains('button', 'Sign in').click();
    cy.contains('li', `username can't be blank`).should('exist').and('be.visible');
  });

  it('should not provide the ability to register without email', () => {
    const {username, email, password} = generateUser();

    cy.findByPlaceholder('Username').type(username)
    cy.findByPlaceholder('Password').type(password)
    cy.contains('button', 'Sign in').click();
    cy.contains('li', `email can't be blank`).should('exist').and('be.visible');
  });

  it('should not provide the ability to register without password', () => {
    const {username, email, password} = generateUser();

    cy.findByPlaceholder('Username').type(username)
    cy.findByPlaceholder('Email').type(email)
    cy.contains('button', 'Sign in').click();
    cy.contains('li', `password can't be blank`).should('exist').and('be.visible');
  });

  it('should not provide the ability to register with an existing username', () => {
    const {username, email, password} = generateUser();

    cy.request('POST', 'https://api.realworld.io/api/users', {
      user: {
        username,
        email,
        password
      }
    })
    cy.findByPlaceholder('Username').type(username)
    cy.findByPlaceholder('Email').type(`a${email}`)
    cy.findByPlaceholder('Password').type(password)
    cy.contains('button', 'Sign in').click();
    cy.contains('li', 'username has already been taken').should('exist').and('be.visible');

  });

  it('should not provide the ability to register with an existing email', () => {
    const {username, email, password} = generateUser();

    cy.request('POST', 'https://api.realworld.io/api/users', {
      user: {
        username,
        email,
        password
      }
    })
    cy.findByPlaceholder('Username').type(`${username}new`)
    cy.findByPlaceholder('Email').type(email)
    cy.findByPlaceholder('Password').type(password)
    cy.contains('button', 'Sign in').click();
    cy.contains('li', 'email has already been taken').should('exist').and('be.visible');

  });
});
