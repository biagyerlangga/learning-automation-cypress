/// <reference types="cypress" />
 
 //cypress - spec

describe('Handling Mouse Hover', function() {

    it('Test Case 1', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cy.get("div.mouse-hover-content").invoke("show")
        cy.contains("Top").click({force: true})
        cy.url().should("include","top")
    })
})
    


// Cypress / JS itu Asynchronus yang berarti bisa jalan Task A tp bisa ngelakuin hal lain sembari menunggu proses A selesai

//kalo mau run website dari terminal
// node_modules/.bin/cypress run --browser chrome (buat chrome)
// node_modules/.bin/cypress run --browser edge (buat edge)
// node_modules/.bin/cypress run --browser firefox (buat firefox)
// node_modules/.bin/cypress run --browser electron (buat electron)