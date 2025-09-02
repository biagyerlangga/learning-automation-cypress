/// <reference types="cypress" />
 
 //cypress - spec

describe('Handling Web Tables', function() {

    it('Test Case 1', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
            const text=$el.text() 
            if(text.includes("Phyton")){
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                    const priceText= price.text()        
                    expect(priceText).to.equal("25")
                })
            }
        })
    })
})
    


// Cypress / JS itu Asynchronus yang berarti bisa jalan Task A tp bisa ngelakuin hal lain sembari menunggu proses A selesai

//kalo mau run website dari terminal
// node_modules/.bin/cypress run --browser chrome (buat chrome)
// node_modules/.bin/cypress run --browser edge (buat edge)
// node_modules/.bin/cypress run --browser firefox (buat firefox)
// node_modules/.bin/cypress run --browser electron (buat electron)