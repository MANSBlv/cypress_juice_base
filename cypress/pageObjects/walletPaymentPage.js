import BasePage from "../pageObjects/basePage";

class WalletPaymentPage extends BasePage {
  static get url() {
    return "/#/payment/wallet";
  }
  static get walletBalance() {
    return cy.get(".confirmation");
  }
  static choosePaymentOption(value) {
    return this.rows.contains(value).parent.find("mat-radio-button").click();
  }
  static get continueButton () {
    return cy.get('.nextButton');
  }
  static get submitButton () {
    return cy.get('#submitButton');
  }
}


export default WalletPaymentPage;