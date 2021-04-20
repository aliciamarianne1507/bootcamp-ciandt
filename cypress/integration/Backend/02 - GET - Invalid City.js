describe('Given I inform an invalid city', () => {
    it('Receive a message and status code 400', () => {
        const InvalidCity = [
            {
                "data": null,
                "messages": [
                    "A lista de cervejarias não foi encontrada.Por favor, verifique sua pesquisa e tente novamente para obter resultados."
                ]
            }
        ]

        cy.request({
            method: 'GET',
            url: 'http://52.175.253.71:8080/brewery/list/A',
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