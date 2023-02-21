import BasePage from './base.page.js';

class ComputersPage extends BasePage {
  private get rozetkaCheckbox() {
    return 'a[data-id="Rozetka"]';
  }

  private get artlineCheckbox() {
    return 'a[data-id="ARTLINE"]';
  }

  private get sliderMaxInput() {
    return 'input[formcontrolname="max"]';
  }

  private get sliderFilterButton() {
    return '.slider-filter__button';
  }

  private get expensiveCatalogFilter() {
    return 'option[value="2: expensive"]';
  }

  private get catalog() {
    return 'ul.catalog-grid';
  }

  private get link() {
    return 'li';
  }

  private get buyButton() {
    return '.buy-button';
  }

  public async clickOnRozetkaCheckbox() {
    await $(this.rozetkaCheckbox).click();
  }

  public async clickOnArtlineCheckbox() {
    await $(this.artlineCheckbox).click();
  }

  public async setSliderMaxInput() {
    await $(this.sliderMaxInput).setValue('60000');
  }

  public async clickOnFilterButton() {
    await $(this.sliderFilterButton).click();
  }

  public async clickOnExpensiveCatalogFilter() {
    await $(this.expensiveCatalogFilter).click();
  }

  public async waitForClickableFirstProductBuyButton() {
    await $$(this.catalog)[0]
      .$$(this.link)[0]
      .$(this.buyButton)
      .waitForClickable();
  }

  public async buyFirstProduct() {
    await $$(this.catalog)[0].$$(this.link)[0].$(this.buyButton).click();
  }
}

export default new ComputersPage();
