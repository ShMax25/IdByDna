package definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import pages.LoginPage;
import pages.MainPage;

public class StepDefinitions {
  @Given("Open {string} page")
  public void openPage(String pageName) {
    switch (pageName) {
      case ("login"): new LoginPage().open();
      break;
      case ("main"): new MainPage().open();
      break;
      default: throw new RuntimeException("Unknown page " + pageName);
    }
  }

  @And("Login to the app")
  public void loginToTheApp () {
    LoginPage loginPage = new LoginPage();
    loginPage.login();
  }
}
