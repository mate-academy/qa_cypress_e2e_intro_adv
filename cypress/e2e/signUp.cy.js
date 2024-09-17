const { generateUser } = require("../support/generate");
import SignUp from "../SignUp";

describe("Sign Up page", () => {
  it("should provide an ability to register new account", () => {
    const user = generateUser();
    SignUp.navigate();
    SignUp.enterUsername(user.username);
    SignUp.enterEmail(user.email);
    SignUp.enterPassword(user.password);
    SignUp.clickSubmit();
    SignUp.verifyUsername(user.username);
  });
});
