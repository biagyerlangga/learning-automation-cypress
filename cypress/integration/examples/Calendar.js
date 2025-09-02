/// <reference types="cypress" />


describe('Automating Calendar', function() {
    it('Automate Calendar 1', function(){
        cy.visit(Cypress.env("url") + "/seleniumPractise/#/")
        
        cy.get("[href='#/offers']").then(function(el){
            const url=el.prop("href")
            cy.visit(url)
        })

        const monthNumber = "4"
        const date = "6"
        const year = "2023"
        const expectedList = [monthNumber,date,year]

        cy.get(".react-date-picker__inputGroup").click()
        cy.get(".react-calendar__navigation__label").click()
        cy.get(".react-calendar__navigation__label").click()
        cy.contains("button",year).click()
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click()
        cy.contains("abbr",date).click()

        // Assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>{
            
           cy.wrap($el).invoke("val").should("eq", expectedList[index])
        })
    })
})
    



//kalo mau run website dari terminal
// node_modules/.bin/cypress open