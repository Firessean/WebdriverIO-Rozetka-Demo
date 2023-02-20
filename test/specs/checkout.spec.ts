import HomePage from '../pageobjects/home.page.js';
import ComputersPage from '../pageobjects/computers.page.js';
import Header from '../pageobjects/components/header.js';
import CartPage from '../pageobjects/cart.page.js';
import ComputersNotebooksPage from '../pageobjects/ComputersNotebooks.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';

describe('Checkout Page', () => {
  beforeEach(async () => {
    await HomePage.clickOnComputersLink();
    await ComputersNotebooksPage.clickOnComputersLink();
    await ComputersPage.fillFilter();
    await ComputersPage.buyFirstComputer();
    await Header.clickOnCartButton();
    await CartPage.clickOnSubmitButton();
  });
  it('should see message for phone confirm', async () => {
    await CheckoutPage.fillUserCheckoutForm();
    await CheckoutPage.chooseDeliveriesCity();
    await CheckoutPage.chooseDeliveryPickUp();
    await CheckoutPage.chooseRecipient();
    await CheckoutPage.clickOnCheckoutTotalButton();
    await CheckoutPage.assertPhoneAttentionMessage();
  });
});
