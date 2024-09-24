/// <reference types="Cypress"/>

describe('Ecomerce Suite', function(){
    it('Login Ecomerce Site', async function(){
        await cy.visit("www.google.com")
         await cy.get("#APjFqb").type("www.saucedemo.com")
         await cy.get("[value='Buscar con Google']").click()
        // await cy.get("#login-button").click()
        // await cy.get("span.title").contains("Products")
    })
})