describe('Given I inform a valid city:', () => {

  it('Receive a message and status code 200', () => {

    const ValidCity = [{
      "data": [
        {
          "id": 8040,
          "name": "10 Barrel Brewing Co",
          "brewery_type": "large",
          "street": "1411 NW Flanders St",
          "address_2": null,
          "address_3": null,
          "city": "Portland",
          "state": "Oregon",
          "county_province": null,
          "postal_code": "97209-2620",
          "country": "United States",
          "longitude": "-122.6855056",
          "latitude": "45.5259786",
          "phone": "5032241700",
          "website_url": "http://www.10barrel.com",
          "updated_at": "2018-08-24T15:45:43.000Z",
          "created_at": "2018-07-24T01:34:04.000Z",
          "average": null,
          "rate_count": null
        },
        {
          "id": 8059,
          "name": "13 Virtues Brewing Co",
          "brewery_type": "brewpub",
          "street": "6410 SE Milwaukie Ave",
          "address_2": null,
          "address_3": null,
          "city": "Portland",
          "state": "Oregon",
          "county_province": null,
          "postal_code": "97202-5518",
          "country": "United States",
          "longitude": "-122.6487531",
          "latitude": "45.4762536",
          "phone": "5032393831",
          "website_url": "http://www.13virtuesbrewing.com",
          "updated_at": "2018-08-24T15:45:45.000Z",
          "created_at": "2018-07-24T01:34:04.000Z",
          "average": null,
          "rate_count": null
        }
      ],
      "messages": []
    }
    ]

    cy.request({
      method: 'GET',
      url: 'http://52.175.253.71:8080/brewery/list/Portland',

    }).then((response) => {
      expect(response.status).to.eql(200)
      expect(response.body).to.eql({
        "data": [
            {
                "id": 8040,
                "name": "10 Barrel Brewing Co",
                "brewery_type": "large",
                "street": "1411 NW Flanders St",
                "address_2": null,
                "address_3": null,
                "city": "Portland",
                "state": "Oregon",
                "county_province": null,
                "postal_code": "97209-2620",
                "country": "United States",
                "longitude": "-122.6855056",
                "latitude": "45.5259786",
                "phone": "5032241700",
                "website_url": "http://www.10barrel.com",
                "updated_at": "2018-08-24T15:45:43.000Z",
                "created_at": "2018-07-24T01:34:04.000Z",
                "average": null,
                "rate_count": null
            },
            {
                "id": 8059,
                "name": "13 Virtues Brewing Co",
                "brewery_type": "brewpub",
                "street": "6410 SE Milwaukie Ave",
                "address_2": null,
                "address_3": null,
                "city": "Portland",
                "state": "Oregon",
                "county_province": null,
                "postal_code": "97202-5518",
                "country": "United States",
                "longitude": "-122.6487531",
                "latitude": "45.4762536",
                "phone": "5032393831",
                "website_url": "http://www.13virtuesbrewing.com",
                "updated_at": "2018-08-24T15:45:45.000Z",
                "created_at": "2018-07-24T01:34:04.000Z",
                "average": null,
                "rate_count": null
            }
        ],
        "messages": []
    })

    });

  });
});