import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import signUp from "../pages/Signup";

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})


// Cenário Automation exercise 2
// Complemento com Automation exercise 3

/*var pageaccess = "https://automationexercise.com/"
var loginaccess = '.shop-menu > .nav > :nth-child(4)'
var emailtype = '[data-qa="login-email"]'
var passtype = '[data-qa="login-password"]'*/

/*function webaccess() {
    cy.visit(pageaccess)
}

function dataaccess() {
    cy.get(loginaccess).click()
}

function emailinput() {
    cy.get(emailtype).type("teste@teste.com.br")
}

function passinput() {
    cy.get(nametype).type("123456")
}*/


Given("Eu acesso a home page", () => {
    signUp.webAccess()
})

When("Acesso a página de login", () => {
    signUp.dataAccess()
})

And("Digito dados inválidos", () => {
    cy.get('[data-qa="login-email"]').type("teste@teste.com.br")
    cy.get('[data-qa="login-password"]').type("123456")
    cy.get('[data-qa="login-button"]').click()
})

Then("Deve aparecer mensagem de erro", () => {
	cy.get('.login-form > form > p').should('have.text', "Your email or password is incorrect!");
})

And("Insiro meu nome e e-mail", () => {
	signUp.nameInput()
    signUp.emailInput()
    signUp.formAccess()
})

Then("Devo digitar meus dados", () => {
    signUp.genderInput()
    signUp.passwordInput()
    signUp.bDayInput()
    signUp.bMonthInput()
    signUp.bYearInput()
    signUp.firstNameInput()
    signUp.lastNameInput()
    signUp.companyInput()
    signUp.addressInput()
    signUp.complementInput()
    signUp.countryInput()
    signUp.stateInput()
    signUp.cityInput()
    signUp.zipCodeInput()
    signUp.cellPhoneInput()
    signUp.sendForm()
})