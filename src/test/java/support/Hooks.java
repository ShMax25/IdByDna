package support;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.TakesScreenshot;
import static support.TestContext.captureScreenshot;
import static support.TestContext.getDriver;

public class Hooks {
  @Before(order = 0)
  public void scenarioStart() {
    TestContext.initialize();
    getDriver().manage().window().fullscreen();
    getDriver().manage().deleteAllCookies();
    getDriver().manage().timeouts().pageLoadTimeout(100, TimeUnit.SECONDS);
    getDriver().manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
  }

  @After(order = 0)
  public void scenarioEnd(Scenario scenario) {
    captureScreenshot(scenario.getName());
    TestContext.teardown();
  }
}
