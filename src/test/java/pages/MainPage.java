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
}
