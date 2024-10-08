/// <reference types="cypress" />

import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Orange HRM Tests', () => {
    beforeEach(() => {
    cy.visit('/auth/login')
  
  })

  const selectorsList = {
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField:"[placeholder='yyyy-dd-mm']",
    genericCambobox:".oxd-select-text--active",
    secondItemCombobox:".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox:".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton:".--close",
    submitButton: "[type='submit']"


  
  }


  it('Login -Success', () => {

    cy.get(selectorsList.userNameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

  it('Login -Fail', () => {
    
    cy.get(selectorsList.userNameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  
  })

  it.only('User Info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Gleyciana')
    cy.get(selectorsList.middleNameField).clear().type('Campelo')
    cy.get(selectorsList.lastNameField).clear().type('Sombra')
    cy.get(selectorsList.genericField).eq(4).clear().type('123')
    cy.get(selectorsList.genericField).eq(4).clear().type('12389998')
    cy.get(selectorsList.genericField).eq(5).clear().type('teste123')
    cy.get(selectorsList.genericField).eq(6).clear().type('2024-10-23')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCambobox).eq(0).click({force:true})
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCambobox).eq(1).click({force:true})
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('2020-10-23')
    cy.get(selectorsList.submitButton).eq(0).click({force:true})
    cy.get('body').should('contain', 'Successfully Updated')
  
   

    
  })

})