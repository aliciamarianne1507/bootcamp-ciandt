describe('Given I verify "DELETE" method to this endpoint: /brewery/list/Portland', () => {

    it('The status code returned is 404 - method not allowed', () => {

        cy.request({
            method: 'DELETE',
            url: 'http://52.175.253.71:8080/brewery/list/Portland',
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.eql(405)

        });
    });
});