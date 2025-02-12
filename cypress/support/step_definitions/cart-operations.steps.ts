import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

Given(/the user is on the "(.+)" page/i, (page: string) => {
  cy.visit(page.toLowerCase())
})
When(/the user clicks on the "(.+)" navigation link/, (link: string) => {
  cy.get('header nav').find('a').contains(link).click()
})
Then(/the url should contain "(.+)"/, (url: string) => {
  // namísto include můžeš napsat i constain, je to stejné
  cy.url().should('include', url)
})
// ty proměnné, jako "what" atd. si volíme samy
Then(/the user should not see "(.+)" displayed on the page/, (what: string) => {
  // když nevíš, co zadat, stačí kliknout na ctrlamezerník a zobrazí se nabídka
  cy.contains(what).should('not.exist')
})
// closest najde nejbližšího rodiče, který je div v tomto případě
When(/the user adds "(.+)" to the cart/, (productName: string) => {
  cy.contains(productName).closest('.shop-item').find('button').click()
})

// productName je v tomto případě ta proměnná  v těch závorkách a zároveň ta proměnná v tom feature
When(/the user increases the quantity of "(.+)"/, (productName: string) => {
  cy.contains(productName).closest('.shop-item').find('.plus-button').click()
})

Then(/the cart should contain the following items/, (dataTable: DataTable) => {
  // dataTable.hashes() returns an array of objects
  // each object contains the header as key and the cell as value
  const dataTableObject = dataTable.hashes()

  dataTableObject.forEach((row, index) => {
    cy.get('.cart-item')
      .eq(index)
      .contains(row.name)
      .closest('.cart-item')
      .contains(row.quantity)
      .closest('.cart-item')
      .contains(row.price + ' €')
  })
})

Then(/the user should see "(.+)" displayed on the page/, (what: string) => {
  cy.get('.total-price').contains(what).should('exist')
})

When(/the user removes "(.+)" from the cart/, (productName: string) => {
  cy.contains('.cart-item', productName).find('button').click()
})

Then(/the total price should be "(.+)"/, (totalPrice: string) => {
  cy.get('.price').contains(totalPrice).should('exist')
})

Then(/the cart should contain "(.+)" item/, (count: string) => {
  cy.get('.cart-items').find('.cart-item').should('have.length', parseInt(count))
})

Then(/the product "(.+)" should contain "(.+)"/, (product: string, buttonText: string) => {
  cy.contains('.shop-item', product).find('button').should('contain', buttonText)
})

Then(/the product "(.+)" should not contain "(.+)"/, (product: string, buttonText: string) => {
  cy.contains('.shop-item', product).find('button').should('not.contain', buttonText)
})
