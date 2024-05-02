describe('from-episodes', () => {
  it('return to detail podcast', () => {
    cy.visit('/')
    cy.get('[data-cy="grid-content"] > [data-cy="podcastCard"]:nth-child(1)').click()
    cy.get('[data-cy="row-table"] > tr:nth-child(1) > td > a').click()
    cy.wait(1000)
    cy.get('[data-test-id="title-podcast-link"]').click()
    const RE_DETAIL_PODCAST = /\/podcast\/\w+/
    cy.url().should('match', RE_DETAIL_PODCAST)
  })

  it('should show audio player', () => {
    cy.visit('/')
    cy.get('[data-cy="grid-content"] > [data-cy="podcastCard"]:nth-child(1)').click()
    cy.get('[data-cy="row-table"] > tr:nth-child(1) > td > a').click()
    cy.get('[data-cy="audio-player"]').should('exist')

  })
})
