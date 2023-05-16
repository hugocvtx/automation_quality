/// <reference types="Cypress" />

const elSignUp = require('./elements').ELEMENTS

class signUp {
    webAccess() {
        cy.visit(elSignUp.pageAccess)
    }
    
    dataAccess() {
        cy.get(elSignUp.loginAccess).click()
    }
    
    emailInput() {
        cy.get(elSignUp.emailType).type("4@teste.com.br")
    }
    
    nameInput() {
        cy.get(elSignUp.nameType).type("Hugão")
    }

    formAccess() {
        cy.get(elSignUp.formAccess).click()
    }

    genderInput() {
        cy.get(elSignUp.genderInput).click()
    }

    passwordInput() {
        cy.get(elSignUp.passwordInput).type("123456")
    }

    bDayInput() {
        cy.get(elSignUp.bDayInput).select("11")
    }

    bMonthInput() {
        cy.get(elSignUp.bMonthInput).select("11")
    }

    bYearInput() {
        cy.get(elSignUp.bYearInput).select("1992")
    }

    firstNameInput() {
        cy.get(elSignUp.firstNameInput).type("Hugão")
    }

    lastNameInput() {
        cy.get(elSignUp.lastNameInput).type("Teixeira")
    }

    companyInput() {
        cy.get(elSignUp.companyInput).type("Quality Digital")
    }

    addressInput() {
        cy.get(elSignUp.addressInput).type("Rua Tenente-Coronel Teste")
    }

    complementInput() {
        cy.get(elSignUp.complementInput).type("Número 41 - Teste")
    }

    countryInput() {
        cy.get(elSignUp.countryInput).select("United States")
    }

    stateInput() {
        cy.get(elSignUp.stateInput).type("Michigan")
    }

    cityInput() {
        cy.get(elSignUp.cityInput).type("Detroit")
    }

    zipCodeInput() {
        cy.get(elSignUp.zipCodeInput).type("48127")
    }

    cellPhoneInput() {
        cy.get(elSignUp.cellPhoneInput).type("+57995182122")
    }

    sendForm() {
        cy.get(elSignUp.sendForm).click()
    }
}

export default new signUp()