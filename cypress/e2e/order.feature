Feature: Order Operations

  Background: The user visits the home page
    Given the user is on the "store" page
    When the user adds "fugiat fugiat" to the cart
    And the user adds "sint elit" to the cart

  Scenario: Make an order
    When the user clicks on the "Cart" navigation link
    Then the url should contain "/cart"
    And the "Cart items" should be visible
    When the user clicks on the "Order" button
    Then the url should contain "/orders"
    And the order page should not be empty
    When the user clicks on the first order tab button
    Then the user should see "Order Details for Order #"
    When the user clicks on the "Cart" navigation link
    Then the url should contain "/cart"
    And the user should see "Back to product page"
