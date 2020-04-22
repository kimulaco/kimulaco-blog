describe('pages', () => {
  it('/about', () => {
    cy.visit('/about')
    cy.get('h1.PageTitle').should('have.text', 'About')
  })
})
