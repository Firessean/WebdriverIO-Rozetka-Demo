import homePage from '../pageobjects/homePage.js';
import computersPage from '../pageobjects/computersPage.js';
import header from '../pageobjects/components/header.js';
import cartPage from '../pageobjects/cartPage.js';
import computersNotebooksPage from '../pageobjects/computersNotebooksPage.js';
import checkoutPage from '../pageobjects/checkoutPage.js';

describe('Checkout Page', () => {
  beforeEach(async () => {
    await homePage.clickOnComputersLink();
    await computersNotebooksPage.clickOnComputersLink();
    await computersPage.fillFilter();
    await computersPage.buyFirstComputer();
    await header.clickOnCartButton();
    await cartPage.clickOnSubmitButton();
  });
  it('should see message for phone confirm', async () => {
    await checkoutPage.fillUserCheckoutForm();
    await checkoutPage.chooseDeliveriesCity();
    await checkoutPage.chooseDeliveryPickUp();
    await checkoutPage.chooseRecipient();
    await checkoutPage.clickOnCheckoutTotalButton();
    await checkoutPage.assertPhoneAttentionMessage();
  });
});
