/// <reference types="cypress" />
 
 //cypress - spec

describe('Handling Mouse Hover', function() {

    it('Test Case 1', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            cy.get("#opentab").then(function(el){
            const url=el.prop("href")
                cy.visit(url)
                cy.origin(url, ()=>{ 
                    cy.get("div.sub-menu-bar a[href*='about']").click()
                })
            })
    })
})
    



//kalo mau run website dari terminal
// node_modules/.bin/cypress open