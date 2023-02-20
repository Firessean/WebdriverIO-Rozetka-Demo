import BasePage from './base.page.js';

class CartPage extends BasePage {
  // Selectors
  private get submitButton() {
    return 'a[data-testid="cart-receipt-submit-order"]';
  }

  // Functions
  public async clickOnSubmitButton() {
    await $(this.submitButton).waitForClickable();
    await $(this.submitButton).click();
  }
}

export default new CartPage();
