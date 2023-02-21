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

  private get deliveriesCityContent() {
    return 'ul.header-location__popular';
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

  private get deliveryPickUpButtons() {
    return 'ul.autocomplete__list-inner';
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

  public async fillUserLastNameInput() {
    await $(this.userLastNameInput).setValue('Тест');
  }

  public async fillUserFirstNameInput() {
    await $(this.userFirstNameInput).setValue('Тест');
  }

  public async fillPhoneNumberInput() {
    const randomPhoneNumber = `050${await this.generateRandomNumber(
      100000000,
      199999998
    )}`;
    await $(this.userMobileInput).setValue(randomPhoneNumber);
  }

  public async clickOnDeliveriesCityButton() {
    await $(this.deliveriesCityButton).click();
  }

  public async clickOnDniproDeliveryButton() {
    await $$(this.deliveriesCityContent)[0].$$(this.link)[3].$('a').click();
  }

  public async clickOnConfirmDeliveriesCityButton() {
    await $(this.confirmDeliveriesCityButton).click();
  }

  public async clickOnDropdownDeliveryPickUpButton() {
    await $(this.dropdownButton).click();
  }

  public async clickOnDeliveryPickUpButton() {
    await $$(this.deliveryPickUpButtons)[0].$$(this.link)[0].click();
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
