import homePage from '../pageobjects/homePage.js';
import computersPage from '../pageobjects/computersPage.js';

describe('Checkout Page', () => {
  beforeEach(async () => {
    await $('.menu-categories_type_main').waitForDisplayed();
    await $(homePage.computersLink).click();
    await $('.portal-grid').waitForDisplayed();
    await $(
      'a[title="Комп\'ютери, неттопи, моноблоки\t"][class="tile-cats__picture"]'
    ).click();
    await $('.sidebar').waitForDisplayed();
    await $('a[data-id="Rozetka"]').click();
    await $('a[data-id="ARTLINE"]').click();
    await $('input[formcontrolname="max"]').setValue('60000');
    await $('.slider-filter__button').click();
    await $('option[value="2: expensive"]').click();
    await computersPage.buyFirstComputer();
  });
  it('should ', async () => {
    await browser.pause(5000);
  });
});
