import BasePage from './base.page.js';

class ComputersNotebooksPage extends BasePage {
  private get computers() {
    return 'a[title="Комп\'ютери, неттопи, моноблоки\t"][class="tile-cats__picture"]';
  }

  public async clickOnComputersLink() {
    await $(this.computers).click();
  }
}

export default new ComputersNotebooksPage();
