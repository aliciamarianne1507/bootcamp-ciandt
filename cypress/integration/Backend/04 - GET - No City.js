describe('Given I make GET without informing a city', () => {
    it('The status code returned is 404', () => {
      cy.request({
        method: 'GET',
        url: 'http://52.175.253.71:8080/brewery/list/',
        failOnStatusCode: false

      }).then((response) => {
        expect(response.status).to.eql(404)
      });
    });

});