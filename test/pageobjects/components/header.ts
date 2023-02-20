import BasePage from '../base.page.js';

class Header extends BasePage {
  // Selectors
  private get appHeader() {
    return 'rz-header.app-header';
  }

  private get cartButton() {
    return 'rz-cart .header__button';
  }

  // Functions
  public async clickOnCartButton() {
    await $(this.cartButton).waitForClickable();
    await $(this.cartButton).click();
  }
}

export default new Header();
