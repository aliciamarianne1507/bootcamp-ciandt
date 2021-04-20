var addressAplication, nameBrewery, latitude, longitude;

describe('Address validation', function () {
  it('Should open application', function () {
    cy.visit('http://localhost:3000/');
  });

  it('Should search the city', function () {
    cy.get("[type='text']")
      .clear()
      .type('Orlando')
      .type('{enter}')
      .should('have.value', 'Orlando');
  });

  it('Should open the details breweries', function () {
    cy.wait(5000);
    cy.get('.brewerieCardContainer>div').eq(0).click();
    cy.get('*[class^="title"').contains('Detalhes da cervejaria');
  });

  it('Should compare the address', function () {
    cy.get('*[class^="breweryType"').eq(2).contains('1300 Alden Rd, Orlando');
  });

  it('Should validate link the Google Maps', function () {
    cy.get('div').contains('Ver no mapa').click();
    cy.wait(5000);
  });

  it('Should get the coordenates and open Google Maps', () => {
    cy.request('http://52.175.253.71:8080/brewery/list/orlando').then(
      (response) => {
        expect(response.status).to.equal(200);
        var foundBrewery = response.body.data.find(
          (brewery) => brewery.name === 'Ivanhoe Park Brewing Company',
        );
        latitude = foundBrewery.latitude;
        longitude = foundBrewery.longitude;
        cy.wrap(latitude).as('latitude');
        cy.wrap(longitude).as('longitude');
        cy.get('@latitude').then((mylatitude) => {
          cy.visit(
            'https://www.google.com/maps?q=' + latitude + ',' + longitude,
          );
        });
      },
    );
  });

  it('Should validate the address Google Maps', function () {
    cy.get('*[class^="widget-pane-link"')
      .eq(2)
      .contains('1300 Alden Rd, Orlando');
  });
});
