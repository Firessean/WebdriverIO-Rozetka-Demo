Feature: Checkout Page

  Scenario: Choose and order product and get message for confirm phone number

    Given I am on the checkout page
    When I fill user checkout form
    When I choose deliveries city
    When I choose delivery pick up
    When I choose recipient
    When I click on checkout button
    Then I should see message for phone confirm
