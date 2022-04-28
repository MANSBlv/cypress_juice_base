import BasePage from "../pageObjects/basePage";

class PaymentOption extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }
  static get addNewCard  () {
      return cy.get('.mat-expansion-panel-header');
  }
  static cardInfoInput(fieldName){
      return cy.get("mat-label").contains(fieldName).parents(".mat-form-field-infix").find("input");

  }
  static cardInfoMenuInput(fieldName){
    return cy.get("mat-label").contains(fieldName).parents(".mat-form-field-infix").find("select");

}
  static get submitButton () {
      return cy.get('#submitButton');
  }
 static get validateCard () {
     return cy.get('[role="row"]');
 }

}

export default PaymentOption;
