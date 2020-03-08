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
  "name": "Create an Analysis from the Analysis list page",
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
});