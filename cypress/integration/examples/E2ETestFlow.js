import HomePage from "../../support/automationLearningCypress/pageObjects/homePage"

describe('E2E Test Flow', function () {

    //hook yang diexecute sebelum test case jalan
    before(function () {
        // transfer data dari fixtures JSON ke file kodingan yang lagi dikerjain
        cy.fixture("example").then(function (data) {
            this.data = data
            this.homePage = new HomePage()
            // ini berarti data udah global variable yang
            // berarti bisa dipake di satu file yang lagi dikerjain
        })
    })
    it('E2E Test Flow 1', function () {

        const productName = this.data.productName

        this.homePage.goTo(Cypress.env("url") +"/loginpagePractise/#")
        const productPage = this.homePage.login(this.data.username, this.data.password)
        // cy.get(".form-control").select("Teacher").should("have.value","Teacher")
        productPage.pageValidation().should("be.visible", 4)
        productPage.verifyCardLimit().should("have.length", 4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.gotoCart()
        cartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.be.lessThan(200000)
        })
        const confirmationPage = cartPage.checkoutProducts()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should("contain","Success")

    })
})

// # itu buat dapetin id


//kalo mau run website dari terminal
// node_modules/.bin/cypress open

// kalo mau ganti url pas env ganti misal ke SIT atau UAT, tulis di terminal 
// npx cypress run --spec cypress/integration/examples/E2ETestFlow.js --headed --browser chrome --env url="https://rahulshettyacademy.com"