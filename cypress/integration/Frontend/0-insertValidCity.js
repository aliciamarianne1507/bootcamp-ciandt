describe('Given I insert a valid city', () => {

    before(function () {
        cy.visit('http://localhost:3000/').then(function (base_url) {
            this.base_url = this.base_url
        })
    });

    it('Recive a valid city', () => {

        cy.get('.inputSearch').clear()
        cy.get('.inputSearch').type('San Diego')
        cy.get('.inputSearch').click()

        cy.get('.textOpinion').should('contain', 'Segundo a opinião dos usuários:')
        cy.get('.showingAnyResults').should('contain', 'Exibindo 5 de 20 resultados.')

        cy.get('.breweriesListContainer > :nth-child(3)').should('have.text', '22Kids Brewing Companymicro2')
        cy.get('.brewType').should('have.text', 'micromicromicrolargelarge')
        cy.get('.brewerieCardContainer').its('length').should('be.eq',5)
        /*cy.get('.brewerieCardContainer').should('have.text', '22Kids Brewing Companymicro2332 North Brewing Comicro2AAcoustic Ales Brewing Experimentmicro2BBallast Point Brewing Companylarge2110 Barrel Brewing Colarge1')
        cy.get('.brewType').should('have.text', 'micromicromicrolargelarge')
        cy.get('.brewerieCardContainer').should('have.text', '22Kids Brewing Companymicro2332 North Brewing Comicro222Kids Brewing Companymicro2AAcoustic Ales Brewing Experimentmicro2BBallast Point Brewing Companylarge2110 Barrel Brewing Colarge1')
        cy.get('.brewType').should('have.text', 'micromicromicrolargelarge')
        cy.get('.brewerieCardContainer').should('have.text', '22Kids Brewing Companymicro2332 North Brewing Comicro222Kids Brewing Companymicro2AAcoustic Ales Brewing Experimentmicro2BBallast Point Brewing Companylarge2110 Barrel Brewing Colarge1')
        cy.get('.brewType').should('have.text', 'micromicromicrolargelarge')
        cy.get('.brewerieCardContainer').should('have.text', '22Kids Brewing Companymicro2332 North Brewing Comicro222Kids Brewing Companymicro2AAcoustic Ales Brewing Experimentmicro2BBallast Point Brewing Companylarge2110 Barrel Brewing Colarge1')
        cy.get('.brewType').should('have.text', 'micromicromicrolargelarge')*/

       cy.get('.breweriesListContainer > :nth-child(3)').click()
       cy.get('.rating').should('contains.text', '2')
    });
});