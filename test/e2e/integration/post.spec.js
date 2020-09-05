it('pages are not 404', () => {
  cy.task('getPageList').then((urls) => {
    urls.forEach((url) => {
      cy.visit(url)
      cy.get('h1.PageTitle').should(
        'not.have.text',
        'ページが見つかりませんでした。',
      )
    })
  })
})
