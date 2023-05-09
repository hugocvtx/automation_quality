/// <reference types="Cypress" />

const elSignUp = require('./elements').ELEMENTS

class signUp {
    webaccess() {
        cy.visit(elSignUp.pageaccess)
    }
    
    dataaccess() {
        cy.get(elSignUp.loginaccess).click()
    }
    
    emailinput() {
        cy.get(elSignUp.emailtype).type("1@teste.com.br")
    }
    
    nameinput() {
        cy.get(elSignUp.nametype).type("Hugão")
    }

    formaccess() {
        cy.get(elSignUp.formaccess).click()
    }

    genderinput() {
        cy.get(elSignUp.genderinput).click()
    }

    passwordinput() {
        cy.get(elSignUp.passwordinput).type("123456")
    }

    bdayinput() {
        cy.get(elSignUp.bdayinput).select("11")
    }

    bmonthinput() {
        cy.get(elSignUp.bmonthinput).select("11")
    }

    byearinput() {
        cy.get(elSignUp.byearinput).select("1992")
    }

    firstnameinput() {
        cy.get(elSignUp.firstnameinput).type("Hugão")
    }

    lastnameinput() {
        cy.get(elSignUp.lastnameinput).type("Teixeira")
    }

    companyinput() {
        cy.get(elSignUp.companyinput).type("Quality Digital")
    }

    addressinput() {
        cy.get(elSignUp.addressinput).type("Rua Tenente-Coronel Teste")
    }

    complementinput() {
        cy.get(elSignUp.complementinput).type("Número 41 - Teste")
    }

    countryinput() {
        cy.get(elSignUp.countryinput).select("United States")
    }

    stateinput() {
        cy.get(elSignUp.stateinput).type("Michigan")
    }

    cityinput() {
        cy.get(elSignUp.cityinput).type("Detroit")
    }

    zipcodeinput() {
        cy.get(elSignUp.zipcodeinput).type("48127")
    }

    celphoneinput() {
        cy.get(elSignUp.celphoneinput).type("+57995182122")
    }

    sendform() {
        cy.get(elSignUp.sendform).click()
    }
}

export default new signUp()