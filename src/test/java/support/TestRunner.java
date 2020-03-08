package support;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.Dimension;

import java.util.concurrent.TimeUnit;

import static support.TestContext.getDriver;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber/report.json"},
        features = "src/test/resources/features",
        glue = {"definitions", "support"}
)

public class TestRunner {
  @BeforeClass
  public static void setup() {
    System.out.println("BeforeAll");
    getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    getDriver().manage().window().fullscreen();
  }

  @AfterClass
  public static void teardown() {
    System.out.println("AfterAll");
    getDriver().quit();
  }
}
