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
  "name": "Click the New Analysis button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.clickTheNewAnalysisButton()"
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
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression /*[name()\u003d\u0027svg\u0027]/*[name()\u003d\u0027SVG OBJECT\u0027]\u0027] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027/*[name()\u003d\u0027svg\u0027]/*[name()\u003d\u0027SVG OBJECT\u0027]\u0027]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d80.0.3987.132)\n  (Driver info: chromedriver\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052),platform\u003dMac OS X 10.14.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027msmuli-mac.local\u0027, ip: \u0027192.168.0.155\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600229 (3fae4d0cda5334..., userDataDir: /var/folders/cc/f0q2z4ln5rg...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:58598}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 80.0.3987.132, webStorageEnabled: true}\nSession ID: fec5840107ab860911383db143ba0a22\n*** Element info: {Using\u003dxpath, value\u003d/*[name()\u003d\u0027svg\u0027]/*[name()\u003d\u0027SVG OBJECT\u0027]\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\n\tat pages.AnalysisPage.isTestGraphShown(AnalysisPage.java:78)\n\tat definitions.StepDefinitions.verifyThatAnalysisStarted(StepDefinitions.java:73)\n\tat ✽.Verify that Analysis started(file:src/test/resources/features/idbydna.feature:19)\n",
  "status": "failed"
});
});