describe('Automate evaluate POST', () => {
    beforeEach(() => {
        cy.fixture("bodyrequest").then(function(bodyrequest){
            globalThis.bodyrequest = bodyrequest
        });
        cy.fixture("responserequest").then(function(responserequest){
            globalThis.responserequest = responserequest
        })
    })

    it("The request body is empy",()=>{
        cy.RequestPost('').as('requisicao')
        cy.get('@requisicao').should((response)=>{
            expect(response.status).to.equal(400),
            expect(response.body.error).to.equal("Bad Request")
        })

    });

    it("Request with body correct", ()=> {
        cy.RequestPost(bodyrequest.body_valid).as('requisicao')
        cy.get('@requisicao').should((response)=>{
            expect(response.status).to.equal(200),
            expect(response.body.messages).to.deep.equal(responserequest.valid.messages)
        })
    });

    it("Request with all body incorrect",()=>{
        cy.RequestPost(bodyrequest.body_invalid).as('requisicao')
        cy.get('@requisicao').should((response)=>{
            expect(response.status).to.equal(400),
            expect(response.body.messages).to.deep.equal(responserequest.invalid.messages)
        })
    });

    it("Request with an email already used",() =>{
        cy.RequestPost(bodyrequest.body_email_already_used).as('requisicao')
        cy.get('@requisicao').should((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.messages).to.deep.equal(responserequest.email_already_used.messages)
        })
    });

    it("Request with invalid email", () =>{
        cy.RequestPost(bodyrequest.body_email_invalid).as('requisicao')

        cy.get('@requisicao').should((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.messages).to.deep.equal(responserequest.email_invalid.messages)
        })
    });

    it("Request with invalid brewery id", () =>{
        cy.RequestPost(bodyrequest.body_brewery_id_invalid).as('requisicao')

        cy.get('@requisicao').should((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.messages).to.deep.equal(responserequest.brewery_id_invalid.messages)
        })
    });
    it("Request with invalid value", () =>{
        cy.RequestPost(bodyrequest.body_value_invalid).as('requisicao')

        cy.get('@requisicao').should((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.messages).to.deep.equal(responserequest.value_invalid.messages)
        })
    });

    it("Request with verb incorrect", () =>{
        cy.VerbIncorrect('PUT',bodyrequest.body_valid).as('requisicao');

        cy.get('@requisicao').should((response)=>{
            expect(response.status).to.equal(405)
            expect(response.body.error).to.equal("Method Not Allowed")
        })
    });
})