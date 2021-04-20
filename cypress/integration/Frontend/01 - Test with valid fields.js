const faker = require ("faker");


describe('Given I evaluate a brewery with valid informations', () => {


    before(function () {
        cy.visit('http://localhost:3000/').then(function (base_url) {
            this.base_url = this.base_url
        })
    });

    it('Receive a confirmation message', () => {
        var faker = require('faker');
        var randomEmail = faker.internet.email();

        cy.get('.inputSearch').clear()
        cy.get('.inputSearch').type('los angeles')
        cy.get(':nth-child(3) > section > .brewName').click()

        cy.get('.title').should('have.text', 'Detalhes da cervejaria')

        cy.get('.rateBrewery > button').click()
        cy.get('input').invoke('attr','placeholder').should('contain','nome@email.com')
        cy.get(':nth-child(1) > .MuiSvgIcon-root').click()
        cy.get('input').type(faker.internet.email())
        cy.get('.saveRate > button').click()

        cy.get('.breweryName').should('contain','Um brinde!')
        cy.get('.beerIcon').should('be.visible');
        cy.get('.description').should('contain','Sua avaliação foi adicionada com sucesso!')


    });
});
