import BasePage from './base.page.js';

class CheckoutPage extends BasePage {
  private get userLastNameInput() {
    return 'input[formcontrolname="surname"]';
  }

  private get userFirstNameInput() {
    return 'input[formcontrolname="name"]';
  }

  private get userMobileInput() {
    return '#checkoutUserPhone';
  }

  private get deliveriesCityButton() {
    return '.deliveries__city';
  }

  private deliveriesCity(city: string) {
    return `//common-city//a[contains(text(),"${city}")]`;
  }

  private get link() {
    return 'li';
  }

  private get confirmDeliveriesCityButton() {
    return '.header-location__footer button';
  }

  private get dropdownButton() {
    return '.dropdown-button';
  }

  private deliveryPickUpButton(address) {
    return `//rz-checkout-dropdown//div[contains(text(),"${address}")]`;
  }

  private get checkoutTotalButton() {
    return '.checkout-total__buttons';
  }

  private get checkoutDropdownButton() {
    return 'rz-checkout-user-recipients button';
  }

  private get checkoutDropdownContent() {
    return 'ul.autocomplete__list-inner';
  }

  private get phoneAttentionMessage() {
    return 'div[validclass="form__hint_type_attention"]';
  }

  public async fillUserLastNameInput(lastName: string) {
    await $(this.userLastNameInput).setValue(lastName);
  }

  public async fillUserFirstNameInput(firstName: string) {
    await $(this.userFirstNameInput).setValue(firstName);
  }

  public async fillPhoneNumberInput() {
    const randomPhoneNumber = `050${await this.generateRandomNumber(
      100000001,
      199999998
    )}`;
    await $(this.userMobileInput).setValue(randomPhoneNumber);
  }

  public async clickOnDeliveriesCityButton() {
    await $(this.deliveriesCityButton).click();
  }

  public async clickOnDniproDeliveryButton(city: string) {
    await $(this.deliveriesCity(city)).click();
  }

  public async clickOnConfirmDeliveriesCityButton() {
    await $(this.confirmDeliveriesCityButton).click();
  }

  public async clickOnDropdownDeliveryPickUpButton() {
    await $(this.dropdownButton).click();
  }

  public async clickOnDeliveryPickUpButton(address) {
    await $(this.deliveryPickUpButton(address)).click();
  }

  public async clickOnDropdownRecipientButton() {
    await $(this.checkoutDropdownButton).click();
  }

  public async waitForDisplayedCheckoutDropdownContent() {
    await browser.pause(100);
    await $$(this.checkoutDropdownContent)[0].waitForDisplayed();
    await $$(this.checkoutDropdownContent)[0]
      .$$(this.link)[0]
      .waitForDisplayed();
  }

  public async chooseUserRecipient() {
    await $$(this.checkoutDropdownContent)[0].$$(this.link)[0].click();
  }

  public async clickOnCheckoutTotalButton() {
    await $(this.checkoutTotalButton).click();
  }

  public async assertPhoneAttentionMessage() {
    await expect($(this.phoneAttentionMessage)).toHaveTextContaining(
      'Необхідно підтвердити номер телефону'
    );
  }
}

export default new CheckoutPage();
