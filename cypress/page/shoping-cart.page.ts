class ShoppingCartPage {
  private proceedTocheckoutButton: string;

  constructor() {
    this.proceedTocheckoutButton = "#center_column [title='Proceed to checkout']";
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedTocheckoutButton).click();
  }
}

export { ShoppingCartPage }
