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

  @FindBy(xpath = "//button[@class='btn btn-primary']")
  private WebElement confirmDeleteAnalysis_button;

  @FindBy(xpath = "//button[@class='btn btn-danger']")
  private WebElement cancelDeleteAnalysis_button;

  @FindBy (xpath = "//tbody/tr[1]/td[1]")
  private WebElement firstAnalysisname_element;

  @FindBy (xpath = "//tbody/tr[1]//button[contains(@title,'Delete')]")
  private WebElement firstDeleteanalysis_button;

  @FindBy (xpath = "//button[@class='btn btn-primary']")
  private WebElement updateAnalysis_button;

  @FindBy (xpath = "//tbody/tr[1]//a[contains(@title,'Edit')]")
  private WebElement firstEditAnalysis_button;

  @FindBy (xpath = "//tbody/tr[1]/td[2]")
  private WebElement firstAnalysisDescription_element;

  @FindBy (xpath = "//a[@class='header-icon info pull-right']")
  private WebElement analysisDetails_button;

  @FindBy (xpath = "//button[@class='btn btn-primary'][contains(text(),'Edit')]")
  private WebElement editAnalysis_button;

  @FindBy (xpath = "//h2[@class='pull-left']")
  private WebElement analysisName_element;

  @FindBy (xpath = "//div[@class='panel panel-info']/div[@class='panel-body']")
  private WebElement analysisDetailsDescription_field;

  public AnalysisPage () {
    setUrl("https://www.taxonomer.com/analyses/new");
  }

  public String getFirtsAnalysisName () {
   return firstAnalysisname_element.getText();
  }


  public void fillForm (String analysisName, String description) {
    analysisName_field.sendKeys(analysisName);
    analysisDescriprion_field.sendKeys(description);
    create_button.click();
  }

  public void updateForm (String updatedName, String updatedDescription) {
    analysisName_field.clear();
    analysisName_field.sendKeys(updatedName);
    analysisDescriprion_field.clear();
    analysisDescriprion_field.sendKeys(updatedDescription);
    updateAnalysis_button.click();
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

  public void submitAnalysis () throws InterruptedException {
    Thread.sleep(2000);
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

  public void confirmDeleteAnalysis () {
    confirmDeleteAnalysis_button.click();
  }

  public void cancelDeleteAnalysis () {
    cancelDeleteAnalysis_button.click();
  }

  public void deleteFirtsElement () {
    firstDeleteanalysis_button.click();
  }

  public boolean checkIfAnalysisInList (String analysisName) throws InterruptedException {
    Thread.sleep(1000);
    List<WebElement> analysisList = getDriver().findElements(By.xpath("//tbody/tr/td[1]"));
    String[] analysisNames = new String[analysisList.size()];
    for (int i = 0; i < analysisList.size(); i++) {
      analysisNames[i] = analysisList.get(i).getText();
    }

    for (String n : analysisNames) {
      if (n.equals(analysisName)) {
        return true;
      }
    }
    return false;
  }

  public void confirmUpdate () {
    updateAnalysis_button.click();
  }

  public void editFirstAnalysis () {
    firstEditAnalysis_button.click();
  }

  public String getFirstAbalysisDescription() {
    return firstAnalysisDescription_element.getText();
  }

  public void openAnalysisDetails () {
    analysisDetails_button.click();
  }

  public void editAnalysisDetails (String name, String description) {
    analysisDetails_button.click();
    editAnalysis_button.click();
    updateForm(name, description);
  }

  public String getAnalysisResultsName() {
    return analysisName_element.getText();
  }

  public String getAnalysisResultsdescription () {
    analysisDetails_button.click();
    return waitForElement(analysisDetailsDescription_field).getText();
  }
}
