Cypress.Commands.add('RequestPost',(body)=>{
    const url_request = 'http://52.175.253.71:8080/brewery/rate'
    cy.request({
        method: 'POST',
        url : url_request,
        body: body,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('VerbIncorrect',(verb,body)=>{
    const url_request = 'http://52.175.253.71:8080/brewery/rate'
    cy.request({
        method: verb,
        url : url_request,
        body: body,
        failOnStatusCode: false
    })
})