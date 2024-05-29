/// <reference types="Cypress"/>

describe('spec.cy.js', function(){
    it('should visit', function(){
        cy.visit("https://saucedemo.com/")
        cy.get("#user-name').type('standard_user")
        cy.get("#password').type('secret_sauce")
        cy.get("#login-button").click()
        cy.get("span.title").contains("Products")
    })
})