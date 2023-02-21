Feature: Checkout Page

  Scenario: Choose and order product and get message for confirm phone number

    Given I am on the checkout page
    When I fill user checkout form with ТестФамилия last name, ТестИмя first name and random phone number
    When I choose deliveries city Дніпро
    When I choose delivery pick up Зоряний, 1А, (ТЦ Дафі)
    When I choose recipient
    When I click on checkout button
    Then I should see message for phone confirm
