/// <reference types="cypress" />
 
 //cypress - spec

describe('Alert function', function() {

    it('Test Case 1', function(){
//1 Alert Option
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#alertbtn").click()
    cy.get("[value='Confirm']").click()

        cy.on("window:alert",(str)=>{
        expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

        cy.on("window:confirm",(str)=>{
        expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })
    })
    
})

// Cypress / JS itu Asynchronus yang berarti bisa jalan Task A tp bisa ngelakuin hal lain sembari menunggu proses A selesai

//kalo mau run website dari terminal
// node_modules/.bin/cypress run --browser chrome (buat chrome)
// node_modules/.bin/cypress run --browser edge (buat edge)
// node_modules/.bin/cypress run --browser firefox (buat firefox)
// node_modules/.bin/cypress run --browser electron (buat electron)