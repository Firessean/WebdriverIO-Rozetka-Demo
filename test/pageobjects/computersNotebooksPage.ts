import basePage from './basePage.js';

class computersNotebooksPage extends basePage {
  // Selectors
  private get portalGrid() {
    return '.portal-grid';
  }

  private get computers() {
    return 'a[title="Комп\'ютери, неттопи, моноблоки\t"][class="tile-cats__picture"]';
  }

  // Functions
}

export default new computersNotebooksPage();
