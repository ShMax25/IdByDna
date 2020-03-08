package pages;

import org.openqa.selenium.support.PageFactory;
import static support.TestContext.getDriver;

public class TaxonomerPages {
  private String url;

  public TaxonomerPages() {
    PageFactory.initElements(getDriver(), this);
  }

  public String getUrl () {
    return url;
  }

  public void setUrl (String url) {
    this.url = url;
  }

  public void open() {
    getDriver().get(url);
  }
}
