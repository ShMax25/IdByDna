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
  "name": "Create an Analysis from the Quick Analysis button",
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
  "name": "Click Quick Analysis button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.clickQuickAnalysisButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"Enter SRA Run ID\" option",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.selectOption(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter a \"valid\" SRA Run ID",
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
  "name": "Verify that Analysis started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verifyThatAnalysisStarted()"
});
formatter.result({
  "status": "passed"
});
});