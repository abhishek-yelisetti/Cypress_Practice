/// <reference types="cypress" />

it('.type() test', () => {
  cy.visit('https://example.cypress.io/commands/actions')
  cy.get('.action-email')
  .type('abhishek@gmail.com').should('have.value', 'abhishek@gmail.com')

  .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
  .type('{del}{selectall}{backspace}')

  .type('slow.typing@email.com', { delay: 100 })
  .should('have.value', 'slow.typing@email.com')
})

it('.focus() test', () => {
  cy.visit('https://example.cypress.io/commands/actions')
  cy.get('.action-focus').focus()
  .should('have.class', 'focus')
  .prev().should('have.attr', 'style', 'color: orange;')
})

it('.submit() test', () => {
  cy.visit('https://example.cypress.io/commands/actions')
  cy.get('.action-form')
  .find('[type="text"]').type('Abhishek')
cy.get('.action-form').submit()
  .next().should('contain', 'Your form has been submitted!')
})

it('.clear() test', () => {
  cy.visit('https://example.cypress.io/commands/actions')
  cy.get('.action-clear').type('This text would be cleared')
  .should('have.value', 'This text would be cleared')
  .clear()
  .should('have.value', '')
})

it('.dblclick() test', () => {
  cy.visit('https://example.cypress.io/commands/actions')
  cy.get('.action-div').dblclick().should('not.be.visible')
  cy.get('.action-input-hidden').should('be.visible')
})

it('.select() test', () => {
  cy.visit('https://example.cypress.io/commands/actions')
  cy.get('.action-select')
  .should('have.value', '--Select a fruit--')

  cy.get('.action-select').select('apples')
  cy.get('.action-select').should('have.value', 'fr-apples')

  cy.get('.action-select-multiple')
    .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
    .invoke('val')
    .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
  cy.get('.action-select-multiple')
    .invoke('val').should('include', 'fr-oranges')
})







