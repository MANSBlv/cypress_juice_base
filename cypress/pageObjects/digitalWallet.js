import BasePage from "../pageObjects/basePage";

class DigitalWallet extends BasePage {
  static get url() {
    return "/#/wallet";
  }
  static get walletBalance() {
    return ".confirmation";
  }
  static get amount() {
    return "input[aria-label='Enter an amount']";
  }
  static get submitButton () {
    return cy.get('#submitButton');
}






  
}
export default DigitalWallet;