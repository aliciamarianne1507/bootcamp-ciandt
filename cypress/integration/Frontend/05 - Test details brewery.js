describe('Given I access the app', () => {

    before(function () {
        cy.visit('http://localhost:3000/').then(function (base_url) {
            this.base_url = this.base_url
        })
    });

    it('Check all details of the page', () => {

        cy.get('.inputSearch').clear()
        cy.get(':nth-child(3) > section > .brewName').click()
        cy.get('.brewLogo').should('be.visible')
        cy.get('.brewName').should('be.visible')
        cy.get('.rating').should('be.visible')
        cy.get('.stars').should('be.visible')
        cy.get(':nth-child(3) > .breweryType').should('be.visible')
        cy.get(':nth-child(1) > .breweryType').should('be.visible')
        cy.get('.seeMap > div').should('be.visible')

    
    });

});