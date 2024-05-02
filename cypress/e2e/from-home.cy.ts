describe('go-home', () => {
  it('click title and go back index', () => {
    cy.visit('/')
    cy.get('[data-cy="grid-content"] > [data-cy="podcastCard"]:nth-child(1)').click()
    cy.wait(1000)
    cy.get('a').contains('Podcaster').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })

  it('set text in search input', () => {
    cy.visit('/')
    cy.get('input').type('The JOE')
    cy.get('input').should('have.value', 'The JOE')
    cy.get('[data-cy="grid-content"] > [data-cy="podcastCard"]:nth-child(1)').should('have.length', 1)
  })

  it('remove text in search input', () => {
    cy.visit('/')
    cy.get('input').type('The JOE')
    cy.get('input').should('have.value', 'The JOE')
    cy.get('[data-cy="grid-content"] > [data-cy="podcastCard"]:nth-child(1)').should('have.length', 1)
    cy.wait(1000)
    cy.get('input').clear()
    cy.get('[data-cy="grid-content"] > [data-cy="podcastCard"]').should('have.length', 100)
  })
})
