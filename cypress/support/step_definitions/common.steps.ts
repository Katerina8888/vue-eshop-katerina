import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

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
