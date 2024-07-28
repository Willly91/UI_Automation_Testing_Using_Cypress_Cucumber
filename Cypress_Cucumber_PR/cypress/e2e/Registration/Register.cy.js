/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

import { Registration_PageElement } from "../../../PageObjects/PageActions/RegistrationPageActions.cy"

export const registration_Elements = new Registration_PageElement

Given('Go to Website URL', function () {
    cy.visit('https://demo.nopcommerce.com/')
})

When('Go to Registration Page', function () {
    registration_Elements.RegisterButton_HomePage()
})
When('Enter Valid Cradentials', function () {
    registration_Elements.Gender()
    registration_Elements.Firstname('Mohamed')
    registration_Elements.Lastname('Waleed')
    registration_Elements.Day('9')
    registration_Elements.Month('1')
    registration_Elements.Year('2001')
    registration_Elements.Email('mohamedwaleed1d@gmail.com')
    registration_Elements.CompanyName('BM DF')
    registration_Elements.Password('123456')
    registration_Elements.ConfirmPassword('123456')
})
Then('Press Register Button', function () {
    registration_Elements.RegisterButton()
})
And('Check Registration Successfuly', function () {
    registration_Elements.CheckSuccessfuly()
})

