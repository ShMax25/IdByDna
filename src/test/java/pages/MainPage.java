package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

import static support.TestContext.getDriver;

public class MainPage extends TaxonomerPages {
  @FindBy (xpath = "//a[@class='btn btn-primary btn-xs pull-right ember-view']")
  private WebElement newAnalysis_button;

  @FindBy (xpath = "//button[@class='btn btn-analyze-data ember-view']")
  private WebElement analyzeYourSeqData_button;

  public MainPage() {
    setUrl("https://www.taxonomer.com/");
  }

  public void initiateNewAnalysis () {
    List<WebElement> webElements = getDriver().findElements(By.xpath("//a[@class='btn btn-primary btn-xs pull-right ember-view']"));
    if (webElements.size() > 0) {
      webElements.get(0).click();
    } else {
      analyzeYourSeqData_button.click();
    }
  }
}
