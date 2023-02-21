import BasePage from '../base.page.js';

class Header extends BasePage {
  private get cartButton() {
    return 'rz-cart .header__button';
  }

  public async clickOnCartButton() {
    await $(this.cartButton).click();
  }
}

export default new Header();
