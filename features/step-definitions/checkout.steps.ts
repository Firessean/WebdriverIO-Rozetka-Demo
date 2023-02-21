import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.js';
import ComputersPage from '../pageobjects/computers.page.js';
import Header from '../pageobjects/components/header.js';
import CartPage from '../pageobjects/cart.page.js';
import ComputersNotebooksPage from '../pageobjects/ComputersNotebooks.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';

Given(/^I am on the checkout page$/, async () => {
  await HomePage.clickOnComputersLink();
  await ComputersNotebooksPage.clickOnComputersLink();
  await ComputersPage.clickOnRozetkaCheckbox();
  await ComputersPage.clickOnArtlineCheckbox();
  await ComputersPage.setSliderMaxInput();
  await ComputersPage.clickOnFilterButton();
  await ComputersPage.clickOnExpensiveCatalogFilter();
  await ComputersPage.waitForClickableFirstProductBuyButton();
  await ComputersPage.buyFirstProduct();
  await Header.clickOnCartButton();
  await CartPage.clickOnSubmitButton();
});

When(
  /^I fill user checkout form with (.*) last name, (.*) first name and random phone number$/,
  async (lastName: string, firstName: string) => {
    await CheckoutPage.fillUserLastNameInput(lastName);
    await CheckoutPage.fillUserFirstNameInput(firstName);
    await CheckoutPage.fillPhoneNumberInput();
  }
);

When(/^I choose deliveries city (.*)$/, async (city: string) => {
  await CheckoutPage.clickOnDeliveriesCityButton();
  await CheckoutPage.clickOnDniproDeliveryButton(city);
  await CheckoutPage.clickOnConfirmDeliveriesCityButton();
});

When(/^I choose delivery pick up (.*)$/, async (address) => {
  await CheckoutPage.clickOnDropdownDeliveryPickUpButton();
  await CheckoutPage.clickOnDeliveryPickUpButton(address);
});

When(/^I choose recipient$/, async () => {
  await CheckoutPage.clickOnDropdownRecipientButton();
  await CheckoutPage.waitForDisplayedCheckoutDropdownContent();
  await CheckoutPage.chooseUserRecipient();
});

When(/^I click on checkout button$/, async () => {
  await CheckoutPage.clickOnCheckoutTotalButton();
});

Then(/^I should see message for phone confirm$/, async () => {
  await CheckoutPage.assertPhoneAttentionMessage();
});
