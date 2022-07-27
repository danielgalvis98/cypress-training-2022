class AddressStepPage {
  private proceedToCheckoutButton: string;

  constructor() {
    this.proceedToCheckoutButton = "#center_column [name='processAddress']"
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedToCheckoutButton).click();
  }
}

export { AddressStepPage }
