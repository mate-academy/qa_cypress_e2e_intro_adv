import SignUpPageObject from '../support/pages/signUp.PageObject';
import HomePageObject from '../support/pages/homePage.PageObject';

const { generateUser } = require ('../support/generate');

const user = generateUser();
const signUpPage = new SignUpPageObject();
const homePage = new HomePageObject();

describe('Sign Up page', () => {

  it('should provide an ability to register new account', () => {
    signUpPage.visitSignUpPage();
    signUpPage.fillRegistrationFields(user.username, user.email, user.password);
    signUpPage.clickSignUpBtn();
    homePage.accertUsername(user.username);
  });
});
