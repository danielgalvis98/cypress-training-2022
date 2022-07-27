class ShippingStepPage {
  private agreeTermsOfServiceBox: string;
  private proceedToCheckoutButton: string;

  constructor() {
    this.agreeTermsOfServiceBox = "#cgv";
    this.proceedToCheckoutButton = "[name='processCarrier']";
  }

  public agreeTermsOfService(): void {
    cy.get(this.agreeTermsOfServiceBox).click();
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedToCheckoutButton).click();
  }
}

export { ShippingStepPage }
