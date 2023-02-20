import BasePage from './base.page.js';

class ComputersPage extends BasePage {
  private get sideBar() {
    return '.sidebar';
  }

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

  public async fillFilter() {
    await $(this.sideBar).waitForDisplayed();
    await $(this.rozetkaCheckbox).waitForClickable();
    await $(this.rozetkaCheckbox).click();
    await $(this.artlineCheckbox).click();
    await $(this.sliderMaxInput).setValue('60000');
    await $(this.sliderFilterButton).click();
    await $(this.expensiveCatalogFilter).click();
  }

  public async buyFirstComputer() {
    await $$(this.catalog)[0]
      .$$(this.link)[0]
      .$(this.buyButton)
      .waitForClickable();
    await $$(this.catalog)[0].$$(this.link)[0].$(this.buyButton).click();
  }
}

export default new ComputersPage();
