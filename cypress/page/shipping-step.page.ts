class ShippingStepPage {
  private agreeTermsOfServiceBox: string;
  private proceedToCheckoutButton: string;

  constructor() {
    this.agreeTermsOfServiceBox = "#cgv";
    this.proceedToCheckoutButton = ".cart_navigation > .button";
  }

  public agreeTermsOfService(): void {
    cy.get(this.agreeTermsOfServiceBox).click();
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedToCheckoutButton).click();
  }
}

export { ShippingStepPage }
