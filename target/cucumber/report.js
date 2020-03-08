$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/idbydna.feature");
formatter.feature({
  "name": "testfeature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tested"
    }
  ]
});
formatter.scenario({
  "name": "Create an Analysis on homepage from aninvalid SRA Run ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tested"
    }
  ]
});
formatter.step({
  "name": "Open \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.openPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login to the app",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.loginToTheApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Analyze your sequencing data button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.clickAnalyzeYourSequencingDataButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill in the form and submit",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillInTheFormAndSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Select Rads and choose \"Enter SRA Run ID\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickSelectRadsAndChoose(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter a \"invalid\" SRA Run ID",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.enterASRARunID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click submit analysis",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.clickSubmitAnalysis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that system shows error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verifyThatSystemShowsErrorMessage()"
});
formatter.result({
  "status": "passed"
});
});