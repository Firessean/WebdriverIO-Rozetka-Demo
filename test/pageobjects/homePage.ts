import basePage from './basePage.js';

class homePage extends basePage {
  private get computersLink() {
    return '//ul[contains(@class, "menu-categories_type_main")]//a[text()="Ноутбуки та комп’ютери"]';
  }

  private get menuCategories() {
    return '.menu-categories_type_main';
  }

  public async clickOnComputersLink() {
    await $(this.menuCategories).waitForDisplayed();
    await $(this.computersLink).click();
  }
}

export default new homePage();
