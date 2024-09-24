# Cypress
# cd /your/project/path
# npm install cypress --save-dev or yarn add cypress --dev
# npm -i init will create a package.json or a js project in your machine
# In cypress we can chain the css selector with get(.products).find('.products').eq or contains, click(), should(''), parent child chaining
# To iterate over an array cypress has a method called .each()
# Includes method in JS it is possible to find a subtext
# To grab the text in the webpage use the method .text()
# Cypress also has an asyncrounous behavior in nature
# There are three types of promises, resolved, rejected, and pending. The promise to be resolved we must use the method .then(). Cypress already uses the method on the backend to avoid been used in the tests.Cypress supports Jquery methods
# To store a common variable in Cypress use cy.get('.products').as('Locator')->alias
# Assertion in Cypress is used with .should('have.text','') method
# describe('My First Test Suite', function(){
# it('My FirstTest Case', function(){

# })
# })
