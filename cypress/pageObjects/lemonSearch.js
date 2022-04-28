import BasePage from "../pageObjects/basePage";

class LemonSearch extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get searchLemon () {
      return cy.get('#searchQuery');
  }
  static get typeLemon () {
      return cy.get('#mat-input-0');
  }


}

export default LemonSearch;