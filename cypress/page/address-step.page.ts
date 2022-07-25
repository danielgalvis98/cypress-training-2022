class AddressStepPage {
  private proceedToCheckoutButton: string;

  constructor() {
    this.proceedToCheckoutButton = ".cart_navigation > .button"
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedToCheckoutButton).click();
  }
}

export { AddressStepPage }