package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HeaderMenu extends TaxonomerPages{
  @FindBy(xpath = "//div[@id='main-menu']//a[contains(text(),'Analyses')]")
  private WebElement analyses_menuElement;


  public void navigateTo(String menuOption) {
    switch (menuOption) {
      case ("Analyses"):
        analyses_menuElement.click();
        break;
      case ("Home"):
        break;
      default: throw new RuntimeException ("Unrecognized menu option " + menuOption);
    }
  }
}


