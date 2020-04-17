describe('pages', () => {
  it('/bout', () => {
    cy.visit('/about')
    cy.get('h1.PageTitle').should('have.text', 'About')
  })
})
