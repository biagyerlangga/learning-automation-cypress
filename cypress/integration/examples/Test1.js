/// <reference types="cypress" />
 
 //cypress - spec

describe('My First Test Scenario', function() {

it('Test Case 1', function(){

//1 
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')
cy.wait(3000)
cy.get('.product:visible').should('have.length', 4)

//Parent Child Chaining
//.as itu aliasing
cy.get('.products').as('productLocator')
cy.get('.products').find('.product').should('have.length', 4)
cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
cy.get('.products').find('.product'). each(($el, index, $list) => {

const textVeg=$el.find(".product-name").text()
if (textVeg.includes("Cashews"))
{
    cy.wrap($el).find("button").click()
}
})
//assert if logo text is currently displayed
cy.get('.brand').should('have.text', 'GREENKART')
//this is to print in logs
cy.get('.brand').then(function (logoelement) {
    cy.log(logoelement.text())
})
    
})
    
})
// Cypress / JS itu Asynchronus yang berarti bisa jalan Task A tp bisa ngelakuin hal lain sembari menunggu proses A selesai

//kalo mau run website dari terminal
// node_modules/.bin/cypress run --browser chrome (buat chrome)
// node_modules/.bin/cypress run --browser edge (buat edge)
// node_modules/.bin/cypress run --browser firefox (buat firefox)
// node_modules/.bin/cypress run --browser electron (buat electron)