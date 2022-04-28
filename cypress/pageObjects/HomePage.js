import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }
  static get accountButton  () {
    return cy.get('#navbarAccount');
  }
  static get loginButton () {
    return cy.get('#navbarLoginButton') ;
  }
  static get userProfileButton () {
    return cy.get("button[aria-label='Go to user profile']") ;
  }
  static get searchLemon () {
    return cy.get('#searchQuery');
  }
  static get typeLemon () {
    return cy.get('#mat-input-0');

  }
  static get lemonCard () {
    return cy.get(".item-name");
  }
  static get lemonCardlogBox () {
    return cy.get("app-product-details");
  }
  static get logBoxCloseButton () {
    return cy.get("button[aria-label='Close Dialog']");
  }
  static get reviewButton () {
    return cy.get("mat-expansion-panel[aria-label='Expand for Reviews']");
  }
  static get comments () {
    return cy.get(".comment");
  }
  static get review () {
    return cy.get("textarea[aria-label='Text field to review a product']");
  }
  static get reviewSubmit () {
    return cy.get("#submitButton");
  }


}

export default HomePage;
