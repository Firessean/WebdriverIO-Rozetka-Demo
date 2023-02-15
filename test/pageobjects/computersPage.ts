import basePage from './basePage.js';

class computersPage extends basePage {
  // Selectors
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

  private get buyButton() {
    return '.buy-button';
  }

  // Functions

  public async buyFirstComputer() {
    await $$(this.catalog)[0].$$('li')[0].$(this.buyButton).waitForClickable();
    await $$(this.catalog)[0].$$('li')[0].$(this.buyButton).click();
  }
}

export default new computersPage();
