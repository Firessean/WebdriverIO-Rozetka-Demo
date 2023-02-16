import basePage from './basePage.js';

class computersNotebooksPage extends basePage {
  private get portalGrid() {
    return '.portal-grid';
  }

  private get computers() {
    return 'a[title="Комп\'ютери, неттопи, моноблоки\t"][class="tile-cats__picture"]';
  }

  public async clickOnComputersLink() {
    await $(this.portalGrid).waitForDisplayed();
    await $(this.computers).click();
  }
}

export default new computersNotebooksPage();
