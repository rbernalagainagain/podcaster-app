describe('template spec', () => {
  console.log(import.meta.env.MODE)
  const url = import.meta.env.MODE ? 'http://localhost:5173' : 'https://example.cypress.io'
  it('passes', () => {
    cy.visit(url)
  })
})
