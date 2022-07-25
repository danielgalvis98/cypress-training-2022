class ShoppingCartPage {
  private proceedTocheckoutButton: string;

  constructor() {
    this.proceedTocheckoutButton = ".cart_navigation span";
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedTocheckoutButton).click();
  }
}

export { ShoppingCartPage }
