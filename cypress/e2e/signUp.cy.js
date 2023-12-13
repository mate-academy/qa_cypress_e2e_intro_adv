describe('Sign Up page', () => {
  let user;

  before (() => {
    cy.task('generateUser').then(genereatedUser => {
      user = genereatedUser;
    })
  })

  it('should provide an ability to register new account', () => {
    cy.visit('/');
    //Go to the 'Sign up' page
    cy.get('.nav-link').contains('Sign up').click();
    //Create new acount
    cy.get('[placeholder="Username"]').type(user.username);
    cy.get('[placeholder="Email"]').type(user.email);
    cy.get('[placeholder="Password"]').type(user.password);
    cy.get('fieldset button').contains('Sign in').click();
    //Assertion
    cy.get('.nav-link').should('contain.text', user.username);
  });
});
