import CartPage from "./CartPage"

class ProductPage{
    pageValidation(){
        return cy.contains("Shop Name")
    }
    verifyCardLimit(){
        return cy.get("app-card")
    }

    selectProduct(productName){
            cy.get("app-card").filter(`:contains('${productName}')`).then($el=>{
                // mesti pakai command button semisalkan ada const disediain terus pake ${} didalem contains
                cy.wrap($el).should("have.length",1)
                cy.wrap($el).contains("button","Add").click()

            })
    }
    selectFirstProduct(){
        cy.get("app-card").eq(0).contains("button","Add").click()
    }
    gotoCart(){
        cy.contains("a","Checkout").click()
        return new CartPage()
    }
}
export default ProductPage