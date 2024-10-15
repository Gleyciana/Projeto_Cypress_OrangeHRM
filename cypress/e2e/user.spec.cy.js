/// <reference types="cypress" />

import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboarPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboarPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
    beforeEach(() => {
    cy.visit('/auth/login')
  
  })

  const SelectorsList = {

  }


  it('User Info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboarPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('Gleyciana','Campelo', 'Sombra')
    myInfoPage.fillEmployeeDetails('123654','12365987','987544','2025-07-23')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

  it.only('Login - fail',() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

})