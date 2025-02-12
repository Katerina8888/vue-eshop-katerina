import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

Then(/the "(.+)" should be visible/, (heading: string) => {
  cy.contains(heading).should('be.visible')
})

When(/the user clicks on the "(.+)" button/i, (buttonText: string) => {
  cy.get('.big-button').contains(buttonText).click()
})

When(/the user clicks on the first order tab button/, () => {
  cy.get('button.big-button').first().click()
})

Then(/the order page should not be empty/, () => {
  cy.get('.order-tabs-wrapper').should('not.be.empty')
})

// v případě dvojího podobnýho zadání
Then(/^the user should see "(.+)"$/, (text: string) => {
  cy.contains(text).should('exist')
})
