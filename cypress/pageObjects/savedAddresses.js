import BasePage from "../pageObjects/basePage";

class SavedAddresses extends BasePage {
  static get url() {
    return "/#/address/saved";
  }
  static get addAddressButton () {
      return cy.get('button[aria-label="Add a new address"]');
  }
  
  static get addCountry () {
      return cy.get("input[data-placeholder='Please provide a country.']");
  }
  static get addName () {
        return cy.get("input[data-placeholder='Please provide a name.']");
    }
    static get addMobile () {
        return cy.get("input[data-placeholder='Please provide a mobile number.']");
    }
    static get addZip () {
        return cy.get("input[data-placeholder='Please provide a ZIP code.']");
    }
    static get addAddress() {
        return cy.get("#address");
    }
    static get addCity () {
        return cy.get("input[data-placeholder='Please provide a city.']");
    }
    static get addState () {
        return cy.get("input[data-placeholder='Please provide a state.']");
    }
    static get submitInfo () {
        return cy.get('#submitButton');
    }
    static get ValidateInfo () {
        return cy.get('[role="row"]');
    }
  

  
//#mat-input-17
}

export default SavedAddresses;
