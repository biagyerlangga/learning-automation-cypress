/// <reference types="cypress" />
 
 //cypress - spec

describe('Handling Child Tab', function() {

    it('Test Case 1', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get("#opentab").invoke("removeAttr","target").click()
 
        cy.origin ("https://www.qaclickacademy.com", ()=>{
            cy.get("#navbarSupportedContent a[href*='about']").click()
        })
    })
    
})

// Cypress / JS itu Asynchronus yang berarti bisa jalan Task A tp bisa ngelakuin hal lain sembari menunggu proses A selesai

//kalo mau run website dari terminal
// node_modules/.bin/cypress run --browser chrome (buat chrome)
// node_modules/.bin/cypress run --browser edge (buat edge)
// node_modules/.bin/cypress run --browser firefox (buat firefox)
// node_modules/.bin/cypress run --browser electron (buat electron)