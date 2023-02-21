import BasePage from './base.page.js';

class HomePage extends BasePage {
  private get computersLink() {
    return '//ul[contains(@class, "menu-categories_type_main")]//a[text()="Ноутбуки та комп’ютери"]';
  }

  public async clickOnComputersLink() {
    await $(this.computersLink).click();
  }
}

export default new HomePage();
