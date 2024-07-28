const RegistraionElement_Locators = require('../PageElements/RegistrationPageElements.json')
export class Registration_PageElement {

    RegisterButton_HomePage() {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_RegisterButton_HomePage).click()
    }

    Gender() {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_Gender).check()
    }

    Firstname(firstname) {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_Firstname).type(firstname)
    }

    Lastname(lastname) {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_Lastname).type(lastname)
    }

    Day(day) {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_Day).select(day)
    }

    Month(month) {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_Month).select(month)
    }

    Year(year) {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_Year).select(year)
    }

    Email(email) {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_Email).type(email)
    }

    CompanyName(companyname) {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_CompanyName).type(companyname)
    }

    Password(password) {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_Password).type(password)
    }

    ConfirmPassword(confirmpassword) {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_ConfirmPassword).type(confirmpassword)
    }

    RegisterButton() {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_RegisterButton).click()
    }

    CheckSuccessfuly() {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_Successfuly).should('contain', 'Your registration completed')
    }

    CheckFailed() {
        cy.get(RegistraionElement_Locators.RegistraionPage_Locators.Locator_Failed).find('li').should('contain', 'The specified email already exists')
    }

}