Feature: Cart Operations
 
    Background: The user visits the home page
        Given the user is on the "store" page
 
    Scenario: Viewing items in the cart
        When the user adds "fugiat fugiat" to the cart
        And the user increases the quantity of "fugiat fugiat"
        And the user increases the quantity of "fugiat fugiat" again
 
        When the user adds "laborum culpa" to the cart
        And the user adds "culpa cupidatat" to the cart
        And the user adds "ex qui" to the cart
 
        When the user clicks on the "Cart" navigation link
        Then the url should contain "/cart"
 
        And the cart should contain the following items
            | name            | quantity | price |
            | ex qui          | 1        | 41    |
            | fugiat fugiat   | 3        | 60    |
            | laborum culpa   | 1        | 200   |
            | culpa cupidatat | 1        | 139   |
 
        And the user should see "Total440 €" displayed on the page
 
 