import BasePage from './base.page.js';

class CartPage extends BasePage {
  private get submitButton() {
    return 'a[data-testid="cart-receipt-submit-order"]';
  }

  public async clickOnSubmitButton() {
    await $(this.submitButton).click();
  }
}

export default new CartPage();
