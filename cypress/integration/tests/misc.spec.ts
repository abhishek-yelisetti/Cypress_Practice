/// <reference types="cypress" />

it('.end() command test', () => {
  cy.visit('https://example.cypress.io/commands/misc')
  cy.get('.misc-table').within(() => {
    // we can end the chain of commands , it returns null
    cy.contains('Cheryl').click().end()
      cy.contains('Charles').click()
  })
})

it('.focussed() command test', () => {
  cy.visit('https://example.cypress.io/commands/misc')
  cy.get('.misc-form').find('#name').click()
  cy.focused().should('have.id', 'name')

  cy.get('.misc-form').find('#description').click()
  cy.focused().should('have.id', 'description')
  cy.get('.misc-form').find('#description').type('Hello world')
})

it('.each() command test', () => {
  cy.visit('https://example.cypress.io/commands/connectors')
  cy.get('.connectors-each-ul>li')
  .each(function($el, index, $list){
    console.log($el, index, $list)
  })
})

it('.invoke() command test', () => {
  cy.visit('https://example.cypress.io/commands/connectors')
  cy.get('.connectors-div').should('be.hidden')
  .invoke('show')  // jquery show
  .should('be.visible')
})

it('.then() command test', () => {
  cy.visit('https://example.cypress.io/commands/connectors')
  cy.get('.connectors-list>li').then(($items) => {
    expect($items).to.have.length(3)
    expect($items.eq(0)).to.contain('Walk the dog')
    expect($items.eq(1)).to.contain('Feed the cat')
    expect($items.eq(2)).to.contain('Write JavaScript')
  })
})

it('.as() command test', () => {
  cy.visit('https://example.cypress.io/commands/aliasing')
  cy.get('.as-table')
  .find('tbody>tr').first()
  .find('td').first()
  .find('button').as('firstBtn')
  // now firstBtn can be used directly

  cy.get('@firstBtn').click() // use @ to reference 
  cy.get('@firstBtn')
  .should('have.class', 'btn-success')
  .and('contain', 'Changed')
})







