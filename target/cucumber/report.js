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
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003dusername\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027msmuli-mac.local\u0027, ip: \u0027192.168.0.155\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\n\tat pages.LoginPage.login(LoginPage.java:21)\n\tat definitions.StepDefinitions.loginToTheApp(StepDefinitions.java:34)\n\tat ✽.Login to the app(file:src/test/resources/features/idbydna.feature:26)\n",
  "status": "failed"
});
formatter.step({
  "name": "Click Quick Analysis button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.clickQuickAnalysisButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select \"Enter SRA Run ID\" option",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.selectOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter a \"valid\" SRA Run ID",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.enterASRARunID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click submit analysis",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.clickSubmitAnalysis()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that Analysis started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verifyThatAnalysisStarted()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify invalid SRA Run ID Quick Analysis",
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d80.0.3987.132)\n  (Driver info: chromedriver\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052),platform\u003dMac OS X 10.14.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027msmuli-mac.local\u0027, ip: \u0027192.168.0.155\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600229 (3fae4d0cda5334..., userDataDir: /var/folders/cc/f0q2z4ln5rg...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52196}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 80.0.3987.132, webStorageEnabled: true}\nSession ID: c9d4c48b34cf511e3c968410c91e3967\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat pages.TaxonomerPages.open(TaxonomerPages.java:22)\n\tat definitions.StepDefinitions.openPage(StepDefinitions.java:22)\n\tat ✽.Open \"login\" page(file:src/test/resources/features/idbydna.feature:34)\n",
  "status": "failed"
});
formatter.step({
  "name": "Login to the app",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.loginToTheApp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Quick Analysis button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.clickQuickAnalysisButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select \"Enter SRA Run ID\" option",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.selectOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter a \"invalid\" SRA Run ID",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.enterASRARunID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click submit analysis",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.clickSubmitAnalysis()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that system shows error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verifyThatSystemShowsErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Delete an analysis on the home page",
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d80.0.3987.132)\n  (Driver info: chromedriver\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052),platform\u003dMac OS X 10.14.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027msmuli-mac.local\u0027, ip: \u0027192.168.0.155\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600229 (3fae4d0cda5334..., userDataDir: /var/folders/cc/f0q2z4ln5rg...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52196}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 80.0.3987.132, webStorageEnabled: true}\nSession ID: c9d4c48b34cf511e3c968410c91e3967\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat pages.TaxonomerPages.open(TaxonomerPages.java:22)\n\tat definitions.StepDefinitions.openPage(StepDefinitions.java:22)\n\tat ✽.Open \"login\" page(file:src/test/resources/features/idbydna.feature:43)\n",
  "status": "failed"
});
formatter.step({
  "name": "Login to the app",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.loginToTheApp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that user is able to delete analysis from Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verifyThatUserIsAbleToDeleteAnalysisFromHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Delete an analysis on the home page and cancel",
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d80.0.3987.132)\n  (Driver info: chromedriver\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052),platform\u003dMac OS X 10.14.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027msmuli-mac.local\u0027, ip: \u0027192.168.0.155\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600229 (3fae4d0cda5334..., userDataDir: /var/folders/cc/f0q2z4ln5rg...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52196}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 80.0.3987.132, webStorageEnabled: true}\nSession ID: c9d4c48b34cf511e3c968410c91e3967\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat pages.TaxonomerPages.open(TaxonomerPages.java:22)\n\tat definitions.StepDefinitions.openPage(StepDefinitions.java:22)\n\tat ✽.Open \"login\" page(file:src/test/resources/features/idbydna.feature:48)\n",
  "status": "failed"
});
formatter.step({
  "name": "Login to the app",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.loginToTheApp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that user is able to cancel delete Analysis action",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verifyThatUserIsAbleToCancelDeleteAnalysisAction()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Delete an analysis from the Analysis list page",
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d80.0.3987.132)\n  (Driver info: chromedriver\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052),platform\u003dMac OS X 10.14.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027msmuli-mac.local\u0027, ip: \u0027192.168.0.155\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600229 (3fae4d0cda5334..., userDataDir: /var/folders/cc/f0q2z4ln5rg...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52196}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 80.0.3987.132, webStorageEnabled: true}\nSession ID: c9d4c48b34cf511e3c968410c91e3967\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat pages.TaxonomerPages.open(TaxonomerPages.java:22)\n\tat definitions.StepDefinitions.openPage(StepDefinitions.java:22)\n\tat ✽.Open \"login\" page(file:src/test/resources/features/idbydna.feature:53)\n",
  "status": "failed"
});
formatter.step({
  "name": "Login to the app",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.loginToTheApp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Go to the \"Analyses\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.goToThePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that user is able to delete Analysis from Analyses page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verifyThatUserIsAbleToDeleteAnalysisFromAnalysesPage()"
});
formatter.result({
  "status": "skipped"
});
});