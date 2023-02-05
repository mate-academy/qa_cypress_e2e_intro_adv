/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.visit('https://react-redux.realworld.io');

    cy.get('.nav').contains('Sign up').click(); // та де той ваший сайн ап

    cy.url().should('include', '/register'); // де я?

    cy.get('[type="text"]').type(user.username); // хто я?

    cy.get('[type="email"]').type(user.email); // а яка в мене пошта?

    cy.get('[type="password"]').type(user.password); // пароль - Слава Україні

    cy.get('.btn').click(); //тиць на кнопку (назву кнопки не уточнив бо на сайті вона неправильна)

    cy.wait(1000); // більш костильного метода очікування прогрузки сторінки я не знаю

    cy.get('[class="navbar navbar-light"]').should('contain', user.username); //не знаю чи то критично але в readme вказано шо треба навігацію саме в хедері перевірити, а .nav перевіряє обидві полоси навігації

  });
});
