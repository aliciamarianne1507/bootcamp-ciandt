describe('Given I inform a city that does not have breweries', () => {
    it('Receive a message and status code 400', () => {
        const NoBreweries = [
            {
                "data": null,
                "messages": [
                    "A lista de cervejarias não foi encontrada.Por favor, verifique sua pesquisa e tente novamente para obter resultados."
                ]
            }
        ]

        cy.request({
            method: 'GET',
            url: 'http://52.175.253.71:8080/brewery/list/Addy',
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.eql(400)
            expect(response.body).to.eql({
                "data": null,
                "messages": [
                    "A lista de cervejarias não foi encontrada.Por favor, verifique sua pesquisa e tente novamente para obter resultados."
                ]
            })

        });

    });
});