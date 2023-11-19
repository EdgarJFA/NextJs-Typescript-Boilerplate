describe('Navigation to Main Page', () => {
    it('Should navigate to main page', () => {
        cy.visit('/')
        cy.get('div').find('h1').should('contain', 'NextJS')
        cy.get('h2').should('contain', 'Boilerplate')
    })
})