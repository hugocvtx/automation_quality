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
    signUp.webaccess()
})

When("Acesso a página de login", () => {
    signUp.dataaccess()
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
	signUp.nameinput()
    signUp.emailinput()
    signUp.formaccess()
})

Then("Devo digitar meus dados", () => {
    signUp.genderinput()
    signUp.passwordinput()
    signUp.bdayinput()
    signUp.bmonthinput()
    signUp.byearinput()
    signUp.firstnameinput()
    signUp.lastnameinput()
    signUp.companyinput()
    signUp.addressinput()
    signUp.complementinput()
    signUp.countryinput()
    signUp.stateinput()
    signUp.cityinput()
    signUp.zipcodeinput()
    signUp.celphoneinput()
    signUp.sendform()
})