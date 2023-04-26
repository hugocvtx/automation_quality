import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})


// Cenário Automation exercise 2

Given("Eu acesso a home page", () => {
    cy.visit("https://automationexercise.com/");
})

When("Acesso a página de login", () => {
    cy.get('.shop-menu > .nav > :nth-child(4)').click();
})

And("Digito dados inválidos", () => {
    cy.get('[data-qa="login-email"]').type("teste@teste.com.br")
    cy.get('[data-qa="login-password"]').type("123456")
    cy.get('[data-qa="login-button"]').click()
})

Then("Deve aparecer mensagem de erro", () => {
	cy.get('.login-form > form > p').should('have.text', "Your email or password is incorrect!");
})
