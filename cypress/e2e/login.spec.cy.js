/// <reference types="cypress" />


describe('Orange HRM Tests', () => {
    beforeEach(() => {
    cy.visit('/login')
  
  })

  const selectorsList = {
    userNameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: '.oxd-alert'
  
  }
  it('Login -Success', () => {

    cy.get(selectorsList.userNameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login -Fail', () => {
    
    cy.get(selectorsList.userName).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  
  })
})