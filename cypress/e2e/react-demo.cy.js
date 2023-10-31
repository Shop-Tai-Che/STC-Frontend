//react-demo.cy.js
describe('React calculator example', () => {
  it('Should validate addition operation', () => {
  cy.visit('https://ahfarmer.github.io/calculator/');
  cy.get('button').contains('7').click();
  cy.get('button').contains(/^\+$/).click();
  cy.get('button').contains('9').click();
  cy.get('button').contains('=').click();
  cy.get('div[class="component-display"]>div').should('have.text','16')
  })
  })