import BasePage from "../pageObjects/basePage";

class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get notCustomer  () {
      return cy.get('#newCustomerLink');
  }
  
  static get loginEmail () {
      return cy.get('#email');
  }
  static get loginPassword () {
      return cy.get('#password');
  }
  static get loginButton () {
      return cy.get('#loginButton')
  }
  

}

export default LoginPage;
