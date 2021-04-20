describe('Given I do not inform a city', () => {

    before(function () {
        cy.visit('http://localhost:3000/').then(function (base_url) {
            this.base_url = this.base_url
        })
    });

    it('Receive a confirmation message', () => {

        cy.get('.inputSearch').clear()
        cy.get('.iconSearch').click()

        cy.get('.notFound > :nth-child(1)').should('contain','Nenhum termo digitado')
        cy.get('.notFound > :nth-child(2)').should('contain', 'Por favor, verifique sua pesquisa e tente novamente para obter resultados.')


    });




});