import BasePage from "../pageObjects/basePage";

class RegisterPage extends BasePage {
  static get url() {
    return "/#/register";
  }
  
  static get emailInput() {
        return cy.get('#emailControl');
    }   
    static get passwordInput() {
      return cy.get('#passwordControl');
    }
  static get repeatPasswordInput() {
      return cy.get('#repeatPasswordControl');
  } 
  static get securityQ() {
        return cy.get('div .mat-select-placeholder');
    }   
    static get securityQFieldItems() {
        return cy.get('span.mat-option-text');
    }
    static get securityAnswer() {
        return cy.get('#securityAnswerControl');
    }
    static get registerButton() {
        return cy.get('#registerButton');
    }      

}

export default RegisterPage;
