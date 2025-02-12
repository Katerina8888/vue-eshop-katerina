import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

Then(/the cart icon should contain "(.+)"/, (itemsInCart: string) => {
  cy.get('.cart-icon').should('contain', itemsInCart)
})

When(/the user decreases the quantity of "(.+)"/, (product: string) => {
  cy.contains(product).closest('.shop-item').find('.minus-button').click()
})
