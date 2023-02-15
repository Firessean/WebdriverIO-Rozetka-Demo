import basePage from './basePage.js';

class homePage extends basePage {
  // Selectors
  public get computersLink() {
    return '//ul[contains(@class, "menu-categories_type_main")]//a[text()="Ноутбуки та комп’ютери"]';
  }

  private get menuCategories() {
    return '.menu-categories_type_main';
  }

  // Functions
}

export default new homePage();
