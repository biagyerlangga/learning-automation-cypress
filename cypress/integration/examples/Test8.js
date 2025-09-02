/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe"


describe('Frames Test', function() {
    it('Test1', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        
        cy.wait(4000)
        
        cy.iframe().find("h1[class*='pricing-title']").should("have.length",2)
    })
})
    



//kalo mau run website dari terminal
// node_modules/.bin/cypress open