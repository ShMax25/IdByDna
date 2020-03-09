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

  @FindBy (xpath = "//button[@id='select-reads']")
  private WebElement quickAnlysis_button;

  @FindBy (xpath = "//a[contains(text(),'Enter SRA Run ID')]")
  private WebElement enterSraRunId_option;

  @FindBy (xpath = "//tbody/tr[1]/td[1]")
  private WebElement firstAnalysisname_element;

  @FindBy (xpath = "//tbody/tr[1]/td[1]/a")
  private WebElement firstAnalysisname_link;

  @FindBy (xpath = "//tbody/tr[1]//a[contains(@title,'Edit')]")
  private WebElement firstDeleteanalysis_button;

  @FindBy (xpath = "//tbody/tr[1]/td[2]")
  private WebElement firstAnalysisDescription_element;

  @FindBy (xpath = "//tbody/tr[1]//a[contains(@title,'Edit')]")
  private WebElement firstEditAnalysis_button;

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

  public void initiateAnalyzeYourSeqData () {
    analyzeYourSeqData_button.click();
  }

  public void initializeQuickAnlysis () {
    quickAnlysis_button.click();
  }

  public void slectQuickAnlysisOption (String option) {
    switch (option) {
      case ("Enter SRA Run ID"): enterSraRunId_option.click();
        break;
      case ("Enter URL for FASTQ/FASTA(s)"):
        break;
      case ("Choose FASTQ/FASTA File(s)"):
        break;
      default: throw new RuntimeException("Unsupported option " + option);

    }

  }

  public String getFirtsAnalysisName () {
    return firstAnalysisname_element.getText();
  }

  public void deleteFirstAnalysis () {
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

  public String getFirtsAnalysisDescription () {
    return firstAnalysisDescription_element.getText();
  }

  public void editFirstAnalysis () {
    firstEditAnalysis_button.click();
  }

  public void navigateToResultsPage () {
    firstAnalysisname_link.click();
  }
}
