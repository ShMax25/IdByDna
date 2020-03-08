package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends TaxonomerPages{
  @FindBy(id = "username")
  private WebElement userName_field;

  @FindBy(id = "password")
  private WebElement password_field;

  @FindBy(xpath = "//button[@class='btn btn-lg btn-primary btn-block']")
  private WebElement logIn_button;

  public LoginPage() {
    setUrl("https://www.taxonomer.com/login");
  }

  public void login (String userName, String password) {
    userName_field.sendKeys(userName);
    password_field.sendKeys(password);
    logIn_button.click();
  }
}
