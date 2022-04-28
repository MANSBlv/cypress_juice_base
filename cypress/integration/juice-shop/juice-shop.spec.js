import DigitalWallet from "../../pageObjects/digitalWallet";
import HomePage from "../../pageObjects/HomePage";
import LemonSearch from "../../pageObjects/lemonSearch";
import LoginPage from "../../pageObjects/loginPage";
import PaymentOption from "../../pageObjects/paymentOption";
import RegisterPage from "../../pageObjects/registerPage";
import SavedAddresses from "../../pageObjects/savedAddresses";
import WalletPaymentPage from "../../pageObjects/walletPaymentPage";

/*describe("Juice-shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });
*/
 /* it("Registration", () => {
   // TODO: Implement me
   HomePage.accountButton.click();
   HomePage.loginButton.click();
   LoginPage.assertIsCurrentPage();
   LoginPage.notCustomer.click();
   RegisterPage.assertIsCurrentPage();
   let email= "randomEmail" + Math.floor(Math.random()*1000)+'@gmail.com';
    RegisterPage.emailInput.type(email);
    RegisterPage.passwordInput.type('m123123');
    RegisterPage.repeatPasswordInput.type('m123123');
    RegisterPage.securityQ.click();
    RegisterPage.securityQFieldItems.contains("Mother's maiden name?").click();
    RegisterPage.securityAnswer.type('Random');
    RegisterPage.registerButton.click();
    RegisterPage.toastMessage.should('contain','Registration completed successfully. You can now log in.');



  });*/  
  /*
  it("Login", () => {
    HomePage.accountButton.click();
    HomePage.loginButton.click();
    LoginPage.assertIsCurrentPage();
    LoginPage.loginEmail.type('demo');
    LoginPage.loginPassword.type('demo');
    LoginPage.loginButton.click();
    HomePage.assertIsCurrentPage();
    HomePage.accountButton.click();
    HomePage.userProfileButton.should('contain','demo');





  });
  
});*/
describe("Juice-shop auth", () => {
  beforeEach(() => {
  cy.login("demo","demo")
  HomePage.visit();
 });
 it("Login", () => {
  HomePage.accountButton.click();
  HomePage.userProfileButton.should('contain','demo');

  });
  /*
  it("Search and validate Lemon", () => {
    HomePage.searchLemon.click();
    HomePage.typeLemon.type('Lemon{enter}');
    HomePage.lemonCard.contains('Lemon').click();
    HomePage.lemonCardlogBox.should('contain',"Sour but full of vitamins");
  });*/
  /*
  it("Search for 500ml lemon", () => {
    HomePage.searchLemon.click();
    HomePage.typeLemon.type('500ml{enter}');
    HomePage.lemonCard.contains('Lemon').click();
    HomePage.lemonCardlogBox.should('contain',"Sour but full of vitamins");

  });*/
  /*
  it("Search for 500ml and validate all cards", () => {
    HomePage.searchLemon.click();
    HomePage.typeLemon.type('500ml{enter}');
    HomePage.lemonCard.contains('Eggfruit').click();
    HomePage.lemonCardlogBox.should('contain',"Now with even more exotic flavour.");
    HomePage.logBoxCloseButton.click();
    HomePage.lemonCard.contains('Lemon').click();
    HomePage.lemonCardlogBox.should('contain',"Sour but full of vitamins.");
    HomePage.logBoxCloseButton.click();
    HomePage.lemonCard.contains('Strawberry').click();
    HomePage.lemonCardlogBox.should('contain',"Sweet & tasty!");
    HomePage.logBoxCloseButton.click();
  });*/
  /*
  it("Read a review for king", () => {
    HomePage.searchLemon.click();
    HomePage.typeLemon.type('King{enter}');
    HomePage.lemonCard.contains('King of the Hill').click();
    HomePage.reviewButton.wait(500).click();
    HomePage.comments.should('contain','K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');


  });*/
  /*
  it("Add review for Raspberry", () => {
    HomePage.searchLemon.click();
    HomePage.typeLemon.type('Raspberry{enter}');
    HomePage.lemonCard.contains('Raspberry').click();
    HomePage.review.click().type('Very nice');
    HomePage.reviewSubmit.click();
    HomePage.reviewButton.wait(500).click();
    HomePage.comments.should('contain','Very nice');


  });*/
  /*
  it("Add address", () => {
    SavedAddresses.visit();
    SavedAddresses.addAddressButton.click();
    SavedAddresses.addCountry.type("Iceland");
    SavedAddresses.addName.type("Random");
    SavedAddresses.addMobile.type("12764728");
    SavedAddresses.addZip.type("1534");
    SavedAddresses.addAddress.type("RandomAddress");
    SavedAddresses.addCity.type("Reykjavik");
    SavedAddresses.addState.type("Dunno");
    SavedAddresses.submitInfo.click();
    SavedAddresses.toastMessage.should('contain',"The address at Reykjavik has been successfully added to your addresses.")
    SavedAddresses.ValidateInfo.contains("Reykjavik").should('contain',"1534");

  });*/
  /*
  it("Add Payment option", () => {
    PaymentOption.visit();
    PaymentOption.addNewCard.click();
    PaymentOption.cardInfoInput("Name").type("Brian");
    PaymentOption.cardInfoInput("Card Number").type("1234567890112233");
    PaymentOption.cardInfoMenuInput("Expiry Month").select("11");
    PaymentOption.cardInfoMenuInput("Expiry Year").select("2098");
    PaymentOption.submitButton.click();
    PaymentOption.toastMessage.should('contain',"Your card ending with 2233 has been saved for your convenience");
    PaymentOption.validateCard.contains('Brian').parent().should('contain',"************2233");
  });*/
  it.only("Increase wallet balance", () => {
    DigitalWallet.visit();
    DigitalWallet.walletBalance.should('be.visible').then((el) => {
      cy.wrap(el.text()).as("startingValue");
   });
    const addValue= 150;
    DigitalWallet.amount.type(addValue);
    DigitalWallet.submitButton.click();
    WalletPaymentPage.assertIsCurrentPage();
    WalletPaymentPage.choosePaymentOption("Tim Tester");
    WalletPaymentPage.continueButton.click();
    WalletPaymentPage.toastMessage.should('contain',"Wallet successfully charged.");
    DigitalWallet.assertIsCurrentPage();

    DigitalWallet.walletBalance.should('be.visible').then((el) => {
       cy.get('@startingValue').then(startingValue => {
        expect(parseFloat(el.text())).to.eq(parseFloat(startingValue) + addValue);
      });
      //cy.log(startingValue); let startingValue=
     // cy.wrap(el.text()).as("startingValue");
    });



  });
});
