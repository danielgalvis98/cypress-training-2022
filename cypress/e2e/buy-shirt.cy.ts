import {
  MenuContentPage,
  ProductsListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.addToCart();
    productsListPage.proceedToCheckout();
    shoppingCartPage.proceedToCheckout();

    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");

    addressStepPage.proceedToCheckout();
    shippingStepPage.agreeTermsOfService();
    shippingStepPage.proceedToCheckout();

    paymentStepPage.payByBankwire();
    paymentStepPage.confirmOrder();

    paymentStepPage.getConfirmationMessage().should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
