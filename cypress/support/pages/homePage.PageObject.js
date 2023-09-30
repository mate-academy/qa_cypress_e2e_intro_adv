import PageObject from "../PageObject";

class HomePageObject extends PageObject {

  get usernameInHeader() {
    return cy.get(':nth-child(4) > .nav-link');
  };

  accertUsername(username) {
    this.usernameInHeader.should('contain', username);
  };

}

export default HomePageObject;