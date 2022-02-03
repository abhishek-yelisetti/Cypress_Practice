/// <reference types="cypress" />


it('cypress docs implicit assertions test', () => {
  cy.visit('https://example.cypress.io/')
  cy.contains('get').click()

  // Implicit assertions


  //should notation
  cy.get('#query-btn')
    .should('contain', 'Button')
    .should('have.class', 'query-btn')
    .should('be.visible')
    .should('be.enabled')

  cy.get('#query-btn').invoke('attr','id')
    .should('equal', 'query-btn')
  

  // and can also be used for chaining
  cy.get('#query-btn')
    .should('contain', 'Button')
    .and('have.class', 'query-btn')
    .and('be.visible')

})

it('test for contains keyword', () => {

  cy.visit('https://example.cypress.io/')
  cy.contains('contains').click()

  cy.get('.query-list')
  .contains('bananas').should('have.class', 'third')


  cy.get('.query-list')
    .contains('apples').should('have.class', 'first')

  cy.get('#querying')
    .contains('ul', 'oranges')
    .should('have.class', 'query-list')

  cy.get('.query-button')
    .contains('Save Form')
    .should('have.class', 'btn')
})
