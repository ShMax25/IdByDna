package support;

import cucumber.api.java8.Fi;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.yaml.snakeyaml.Yaml;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Map;

public class TestContext {
  //Here could be selected which browser will be used
  private static WebDriver driver;

  public static WebDriver getDriver() {
    return driver;
  }

  public static WebElement waitForElement(WebElement element) {
    return new WebDriverWait(getDriver(), 15, 200).until(ExpectedConditions.visibilityOf(element));
  }

  public static void teardown() {
    driver.quit();
  }

  public static void captureScreenshot(String screenshotName) {
    try {
      TakesScreenshot ts = (TakesScreenshot)driver;
      File file = ts.getScreenshotAs(OutputType.FILE);
      String path = "";
      String osName = System.getProperty("os.name");
      if (osName.contains("Windows")) {
        FileUtils.copyFile(file, new File(System.getProperty("user.dir") + "\\src\\test\\resources\\drivers\\"+screenshotName+".png"));
      }
      if (osName.contains("Mac")) {
        FileUtils.copyFile(file, new File(System.getProperty("user.dir") + "/src/test/resources/screenshots/"+screenshotName+".png"));
      }
    } catch (IOException e) {
      System.out.println("Exception while taking screenshot");
    }
  }

  public static void initialize() {
    initialize("chrome");
  }

  //data rider
  public static Map<String, String> getData(String filename) {
    String osName = System.getProperty("os.name");
    String path = "";
    if (osName.contains("Windows")) {
      path = System.getProperty("user.dir") + "\\src\\test\\resources\\drivers\\" + filename;
    }
    if (osName.contains("Mac")) {
      path = System.getProperty("user.dir") + "/src/test/resources/data/" + filename;
    }
    File file = new File(path);
    FileInputStream stream = null;
    try {
      stream = new FileInputStream(file);
    } catch (FileNotFoundException exception) {
      System.err.println(exception.getMessage());
    }
    return new Yaml().load(stream);
  }

  //Base on os name will be used chromedriver or geckodriver.exe
  private static WebDriver initialize (String browser) {
    String osName = System.getProperty("os.name");

    switch (browser) {
      case ("chrome"):
        if (osName.contains("Windows")) {
          System.setProperty("webdriver.chrome.driver", "/Users/msmuli/IdeaProjects/SalesforceTests/src/test/resources/drivers/macOS/chromedriver");
        }
        driver = new ChromeDriver();
        break;

      case ("firefox"):
        if (osName.startsWith("Windows")) {
          System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\test\\resources\\drivers\\win64\\geckodriver.exe");
        }

        if (osName.startsWith("Mac")) {
          //System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "src/test/resources/drivers/macOS/chromedriver");
          System.setProperty("webdriver.chrome.driver", "/Users/msmuli/IdeaProjects/SalesforceTests/src/test/resources/drivers/macOS/geckodriver");
        }

        driver = new FirefoxDriver();
        break;
      case ("explorer"):
        //TBD here could be added ieDriver
        break;
      default:
        throw new RuntimeException("Driver is not implemented for: " + browser);
    }
    return driver;
  }
}
