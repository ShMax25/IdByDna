package pages;

import cucumber.api.java8.Ru;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static support.TestContext.getDriver;
import static support.TestContext.waitForElement;

public class AnalysisPage extends TaxonomerPages{
  @FindBy(xpath = "//input[@id='analysis-name']")
  private WebElement analysisName_field;

  @FindBy(xpath = "//textarea[@id='analysis-description']")
  private WebElement analysisDescriprion_field;

  @FindBy(xpath = "//button[@class='btn btn-primary']")
  private WebElement create_button;

  @FindBy(id = "select-reads")
  private WebElement selectReads_button;

  @FindBy(xpath = "//input[@id='sra-run-id']")
  private WebElement sraRunId_field;

  @FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/section[2]/div[1]/ul[1]/li[3]/a[1]")
  private WebElement runId_option;

  @FindBy(xpath = "//button[@class='btn btn-primary']")
  private WebElement go_button;

  @FindBy(xpath = "big-binner")
  private WebElement graph_element;

  @FindBy(xpath = "//div[@class='ember-view alert alert-danger active']")
  private WebElement invalidRun_errorMessage;

  public AnalysisPage () {
    setUrl("https://www.taxonomer.com/analyses/new");
  }


  public void fillForm (String analysisName) {
    analysisName_field.sendKeys(analysisName);
    analysisDescriprion_field.sendKeys("Description");
    create_button.click();
  }


  public void choseReadsOption (String readsOption) throws InterruptedException {
    Thread.sleep(1000);
    selectReads_button.click();
   switch (readsOption) {
     case ("Choose FASTQ/FASTA File(s)"):
       break;
     case ("Enter URL for FASTQ/FASTA(s)"):
       break;
     case ("Enter SRA Run ID"): runId_option.click();
       break;
     default: throw new RuntimeException("Unsuported option " + readsOption);
   }
  }


  public void enterRunId (String firstRun) {
    sraRunId_field.sendKeys(firstRun);
  }

  public void submitAnalysis () {
    go_button.click();
  }

  public boolean isTestGraphShown () {
    //need to be doone
//    return getDriver().findElement(By.xpath("//div[@id='big-binner']")).getAttribute();
//    return getDriver().findElement(By.cssSelector("#big-binner")).isDisplayed();
    return true;
  }

  public String getErrorMessageText () {
    return invalidRun_errorMessage.getText();
  }
}
