class PaymentStepPage {
  private payByBankwireOption: string;
  private confirmOrderButton: string;
  private confirmationMessage: string;

  constructor() {
    this.payByBankwireOption = ".bankwire";
    this.confirmOrderButton = "#cart_navigation > .button";
    this.confirmationMessage = "#center_column > div > p > strong";
  }

  public payByBankwire(): void {
    cy.get(this.payByBankwireOption).click();
  }

  public confirmOrder(): void {
    cy.get(this.confirmOrderButton).click();
  }

  public getConfirmationMessage(): Cypress.Chainable {
    return cy.get(this.confirmationMessage);
  }
}

export { PaymentStepPage }
