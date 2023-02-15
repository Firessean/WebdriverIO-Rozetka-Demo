import basePage from './basePage.js';

class CheckoutPage extends basePage {
  // Selectors
  private get checkoutForm() {
    return '.checkout-form';
  }

  private get lastNameInput() {
    return 'input[formcontrolname="surname"]';
  }

  private get firstNameInput() {
    return 'input[formcontrolname="name"]';
  }

  private get mobileInput() {
    return '#checkoutUserPhone';
  }

  private get deliveriesCityButton() {
    return '.deliveries__city';
  }

  private get deliveriesCityContent() {
    return '.modal__content';
  }

  private get linkDnipro() {
    return '.modal__content li:nth-child(4) a';
  }

  private get confirmDeliveriesCityButton() {
    return '.header-location__footer button';
  }

  private get dropdownButton() {
    return '.dropdown-button';
  }

  private get deliveryPickUpButton() {
    return '.autocomplete__list-inner li:nth-child(1) div';
  }

  private get checkoutTotalButton() {
    return '.checkout-total__buttons';
  }

  // Functions
}

export default new CheckoutPage();
