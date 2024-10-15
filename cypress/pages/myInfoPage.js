class MyInfoPage {
    selectorsList(){
        const selectors = {
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

        return selectors
    }

    fillPersonalDetails(firstName,middleName,lastName,){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    }

    fillEmployeeDetails(employeeId,otherId,drivesLicenseNumber,drivesLicenseDate){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(drivesLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(drivesLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force:true})
        cy.get('body').should('contain', 'Successfully Updated')

    }

    fillStatus(){
        cy.get(this.selectorsList().genericCambobox).eq(0).click({force:true})
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCambobox).eq(1).click({force:true})
        cy.get(this.selectorsList().thirdItemCombobox).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type('2020-10-23')
    }

   
   
}

export default MyInfoPage