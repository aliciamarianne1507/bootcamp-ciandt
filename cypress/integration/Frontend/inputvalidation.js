describe('Evaluation Automatizion - Input Validation', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
        cy.wait(300)
        cy.contains('2Kids Brewing Company').click()
        cy.get('.title').should('have.text', 'Detalhes da cervejaria')
        cy.contains('Avaliar Cervejaria').click()
    });

    it("Click on button Evaluate Brewery",()=>{
        cy.get('input').should('be.empty')
        cy.get('input').invoke('attr','placeholder').should('contain','nome@email.com')
        cy.get('input').should('contain','')
        cy.get('.saveRate > button').should('be.disabled')
        cy.get('.breweryName').should('contain','Avalie a cervejaria 2Kids Brewing Company') 
        cy.get('button:nth-child(1) > .MuiSvgIcon-root').invoke('attr','class').should('contain','MuiSvgIcon-root empty MuiSvgIcon-fontSizeLarge') 

    })

    it("Evaluate correct",()=>{
        cy.get('input').invoke('attr', 'placeholder').should('contain', 'nome@email.com')
        cy.get('input').type('aliciap346@ciandt.com')
        cy.get(':nth-child(1) > .MuiSvgIcon-root').click()
        cy.get('.saveRate > button').should('not.disabled')
    })

    it("Invalid email",()=>{
        cy.get('input').invoke('attr', 'placeholder').should('contain', 'nome@email.com')
        cy.get(':nth-child(1) > .MuiSvgIcon-root').click()
        cy.get('input').type('teste.com')
        cy.get('.saveRate > button').click()
        cy.get('.errorEmail').should('have.text', 'Favor inserir um e-mail válido.')
    });
    it("Try to evaluate withot giving the grade",()=>{
        cy.get('input').invoke('attr', 'placeholder').should('contain', 'nome@email.com')
        cy.get('button:nth-child(1) > .MuiSvgIcon-root').invoke('attr','class').should('contain','MuiSvgIcon-root empty MuiSvgIcon-fontSizeLarge') 
        cy.get('input').type('aliciap@ciandt.com')
        cy.get('.saveRate > button').should('be.disabled')
        cy.get('input').clear()
    });

    it("Try to evaluate with invalid email",()=>{
        cy.get('input').invoke('attr', 'placeholder').should('contain', 'nome@email.com')
        cy.get('input').type('aliciap-ciandt.com')
        cy.get(':nth-child(1) > .MuiSvgIcon-root').click()
        cy.get('.saveRate > button').click()
        cy.get('.errorEmail').should('have.text', 'Favor inserir um e-mail válido.')
        cy.get('input').clear()
    });

})