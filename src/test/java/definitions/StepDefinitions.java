package definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.it.Ma;
import pages.HeaderMenu;
import pages.LoginPage;
import pages.MainPage;
import pages.AnalysisPage;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static support.TestContext.getData;

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
    Map<String, String> data = getData("usersCredentials");
    loginPage.login(data.get("username"), data.get("password"));
  }

  @Then("Click the New Analysis button")
  public void clickTheNewAnalysisButton () {
    new MainPage().initiateNewAnalysis();
  }

  @And("Fill in the form and submit")
  public void fillInTheFormAndSubmit () {
    String analysisName = "test" + Math.random();
    String description = "description of" + analysisName;
    new AnalysisPage().fillForm(analysisName, description);
  }

  @And("Click Select Rads and choose {string}")
  public void clickSelectRadsAndChoose (String readsOption) throws InterruptedException {
    new AnalysisPage().choseReadsOption(readsOption);


  }

  @And("Enter a {string} SRA Run ID")
  public void enterASRARunID (String option) {
    AnalysisPage analysisForm = new AnalysisPage();
    switch (option) {
      case ("valid"):
        Map<String, String> data = getData("runList");
        analysisForm.enterRunId(data.get("firstRun"));
        break;
      case ("invalid"):
        analysisForm.enterRunId("INVALID1978315");
        break;
      default: throw new RuntimeException("Unsuported option" + option);
    }
  }

  @When("Click submit analysis")
  public void clickSubmitAnalysis () throws InterruptedException {
    new AnalysisPage().submitAnalysis();
  }

//  @Then("Verify that Analysis started")
//  public void verifyThatAnalysisStarted () throws InterruptedException {
//     boolean visibilityOfGraph = new AnalysisPage().isTestGraphShown();
//  }

  @Then("click Analyze your sequencing data button")
  public void clickAnalyzeYourSequencingDataButton () {
    new MainPage().initiateAnalyzeYourSeqData();
  }

  @Then("Verify that system shows error message")
  public void verifyThatSystemShowsErrorMessage () {
    String errorMessage = new AnalysisPage().getErrorMessageText();
    assertThat(errorMessage).contains("Currently we only accept SRR, ERR, and DRR.");
  }

  @Then("Click Quick Analysis button")
  public void clickQuickAnalysisButton () {
    new MainPage().initializeQuickAnlysis();
  }

  @Then("Select {string} option")
  public void selectOption (String option) {
    new MainPage().slectQuickAnlysisOption(option);

  }

  @Then("Verify that user is able to delete analysis from Home page")
  public void verifyThatUserIsAbleToDeleteAnalysisFromHomePage () throws InterruptedException {
    MainPage mainPage = new MainPage();
    String analysisName = mainPage.getFirtsAnalysisName();
    mainPage.deleteFirstAnalysis();
    new AnalysisPage().confirmDeleteAnalysis();
    boolean isAnalysisDeleted = mainPage.checkIfAnalysisInList(analysisName);
    assertThat(isAnalysisDeleted).isFalse();

  }

  @Then("Verify that user is able to cancel delete Analysis action")
  public void verifyThatUserIsAbleToCancelDeleteAnalysisAction () throws InterruptedException {
    MainPage mainPage = new MainPage();
    String analysisName = mainPage.getFirtsAnalysisName();
    mainPage.deleteFirstAnalysis();
    new AnalysisPage().cancelDeleteAnalysis();
    boolean isAnalysisDeleted = mainPage.checkIfAnalysisInList(analysisName);
    assertThat(isAnalysisDeleted).isTrue();
  }

  @Then("Go to the {string} page")
  public void goToThePage (String pageName) throws InterruptedException {
    new HeaderMenu().navigateTo(pageName);
  }

  @Then("Verify that user is able to delete Analysis from Analyses page")
  public void verifyThatUserIsAbleToDeleteAnalysisFromAnalysesPage () throws InterruptedException {
    AnalysisPage analysisPage = new AnalysisPage();
    String analysisName = analysisPage.getFirtsAnalysisName();
    analysisPage.deleteFirtsElement();
    analysisPage.confirmDeleteAnalysis();
    boolean isAnalysisDeleted = analysisPage.checkIfAnalysisInList(analysisName);
    assertThat(isAnalysisDeleted).isFalse();
  }

  @Then("Verify that user is able to edit Analysis at Home page")
  public void verifyThatUserIsAbleToEditAnalysisAtHomePage () {
    String updatedName = "updated" + Math.random();
    String updatedDescription = "updatedDescription" + Math.random();
    MainPage mainPage = new MainPage();
    AnalysisPage analysisPage = new AnalysisPage();
    mainPage.editFirstAnalysis();
    analysisPage.updateForm(updatedName,updatedDescription);
    analysisPage.confirmUpdate();
    new HeaderMenu().navigateTo("Home");
    assertThat(updatedName).isEqualTo(mainPage.getFirtsAnalysisName());
    assertThat(updatedDescription).isEqualTo(mainPage.getFirtsAnalysisDescription());

  }

  @Then("Verify that user is able to edit Analysis at Analyses page")
  public void verifyThatUserIsAbleToEditAnalysisAtAnalysesPage () {
    AnalysisPage analysisPage = new AnalysisPage();
    new HeaderMenu().navigateTo("Analyses");
    String updatedName = "updated" + Math.random();
    String updatedDescription = "updatedDescription" + Math.random();
    analysisPage.editFirstAnalysis();
    analysisPage.updateForm(updatedName, updatedDescription);
    assertThat(updatedName).isEqualTo(analysisPage.getFirtsAnalysisName());
    assertThat(updatedDescription).isEqualTo(analysisPage.getFirstAbalysisDescription());
  }

  @Then("Verify that user is able to edit Analysis at Results page")
  public void verifyThatUserIsAbltToEditAnalysisAtResultsPage () {
    String updatedName = "updated" + Math.random();
    String updatedDescription = "updatedDescription" + Math.random();
    AnalysisPage analysisPage = new AnalysisPage();
    new MainPage().navigateToResultsPage();
    analysisPage.editAnalysisDetails(updatedName, updatedDescription);
    assertThat(updatedName).isEqualTo(analysisPage.getAnalysisResultsName());
    assertThat(updatedDescription).isEqualTo(analysisPage.getAnalysisResultsdescription());

  }


  @Then("Verify that user is able to start analysis from Analysis page")
  public void verifyThatUserIsAbleToStartAnalysisFromAnalysisPage () throws InterruptedException {
    new HeaderMenu().navigateTo("Analyses");
    AnalysisPage analysisPage = new AnalysisPage();
    analysisPage.initiateNewAnalysis();

    Map<String, String> data = getData("runList");

    String analysisName = "test" + Math.random();
    String description = "description of" + analysisName;

    analysisPage.fillForm(analysisName, description);
    analysisPage.choseReadsOption("Enter SRA Run ID");
    analysisPage.enterRunId(data.get("firstRun"));
    analysisPage.submitAnalysis();
    assertThat(analysisPage.isTestGraphShown(data.get("firstRun"))).isTrue();
  }

  @Then("Verify that user is able to start analysis from Home page")
  public void verifyThatUserIsAbleToStartAnalysisFromHomePage () throws InterruptedException {
    AnalysisPage analysisPage = new AnalysisPage();
    new MainPage().initiateNewAnalysis();

    Map<String, String> data = getData("runList");

    String analysisName = "test" + Math.random();
    String description = "description of" + analysisName;

    analysisPage.fillForm(analysisName, description);
    analysisPage.choseReadsOption("Enter SRA Run ID");
    analysisPage.enterRunId(data.get("firstRun"));
    analysisPage.submitAnalysis();
    assertThat(analysisPage.isTestGraphShown(data.get("firstRun"))).isTrue();

  }
}

