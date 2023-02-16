import basePage from './basePage.js';

class CheckoutPage extends basePage {
  private get checkoutForm() {
    return '.checkout-form';
  }

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
    return 'rz-checkout-dropdown[trackby=id]';
  }

  private get checkoutDropdownContent() {
    return 'ul.autocomplete__list-inner';
  }

  private get phoneAttentionMessage() {
    return 'div[validclass="form__hint_type_attention"]';
  }

  public async clickOnDniproDeliveryButton() {
    await $$(this.deliveriesCityContent)[0].$$(this.link)[3].$('a').click();
  }

  public async clickOnDeliveryPickUpButton() {
    await $$(this.deliveryPickUpButtons)[0].$$(this.link)[0].click();
  }

  public async clickOnCheckoutTotalButton() {
    await $(this.checkoutTotalButton).click();
  }

  public async assertPhoneAttentionMessage() {
    await expect($(this.phoneAttentionMessage)).toHaveTextContaining(
      'Необхідно підтвердити номер телефону'
    );
  }

  public async fillUserCheckoutForm() {
    await $(this.checkoutForm).waitForDisplayed();
    await $(this.userLastNameInput).setValue('Тест');
    await $(this.userFirstNameInput).setValue('Тест');
    await $(this.userMobileInput).setValue('0504564861');
  }

  public async chooseDeliveriesCity() {
    await $(this.deliveriesCityButton).click();
    await $(this.deliveriesCityContent).waitForDisplayed();
    await this.clickOnDniproDeliveryButton();
    await $(this.confirmDeliveriesCityButton).click();
  }

  public async chooseDeliveryPickUp() {
    await $(this.dropdownButton).click();
    await this.clickOnDeliveryPickUpButton();
  }

  public async chooseRecipient() {
    await $(this.checkoutDropdownButton).click();
    await $$(this.checkoutDropdownContent)[0]
      .$$(this.link)[0]
      .waitForClickable();
    await $$(this.checkoutDropdownContent)[0].$$(this.link)[0].click();
  }
}

export default new CheckoutPage();
