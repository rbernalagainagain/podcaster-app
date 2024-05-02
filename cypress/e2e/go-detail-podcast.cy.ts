describe('go-detail-podcast', () => {
  it('show table with episodes', () => {
    cy.visit('/')
    cy.get('[data-cy="grid-content"] > [data-cy="podcastCard"]:nth-child(1)').click()

    cy.get('[data-cy="row-table"]').should('exist').get('tr').should('have.length.below', 22)
  })

  it('click episode and go to episode detail', () => {
    cy.visit('/')
    cy.get('[data-cy="grid-content"] > [data-cy="podcastCard"]:nth-child(1)').click()
    cy.get('[data-cy="row-table"] > tr:nth-child(1) > td > a').click()
    const RE_DETAIL_PODCAST = /\/podcast\/\w+\/episode\/\w+/
    cy.url().should('match', RE_DETAIL_PODCAST)
  })
})
