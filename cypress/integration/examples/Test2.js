/// <reference types="cypress" />
 
 //cypress - spec

describe('My First Test Scenario', function() {

it('Test Case 1', function(){

//1 Checkbox Option
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")
cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
cy.get("input[type='checkbox']").check(["option2","option3"]) //ini buat check box multiple box sekaligus
})
    
})

//2 Dropdown Option

describe("My Second Test Scenario", function(){

    it("Test Case 2", function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("select").select("option2").should("have.value", "option2")
    })

})

//3 Dynamic dropdown
describe("My Third Test Scenario", function () {
    it("Test Case 3", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#autocomplete").type("Indo")

        cy.get(".ui-menu-item div").each(($el, index, $list) => {
            if ($el.text()=== "Indonesia") {
                cy.wrap($el).click()
            }

        })
        cy.get("#autocomplete").should("have.value","Indonesia")
    })
})

//4 visible invisible
describe("My Fourth Test Scenario", function () {
    it("Test Case 4", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")

    })
})

//5 Radio Button 
describe("Fifth Test Scenario", function () {
    it("Test Case 5", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("[value='radio1']").check().should("be.checked")
    })
    
})
// Cypress / JS itu Asynchronus yang berarti bisa jalan Task A tp bisa ngelakuin hal lain sembari menunggu proses A selesai

//kalo mau run website dari terminal
// node_modules/.bin/cypress run --browser chrome (buat chrome)
// node_modules/.bin/cypress run --browser edge (buat edge)
// node_modules/.bin/cypress run --browser firefox (buat firefox)
// node_modules/.bin/cypress run --browser electron (buat electron)