class PaymentStepPage {
  private payByBankwireOption: string;
  private confirmOrderButton: string;
  private confirmationMessage: string;
  private confirmButtonLocation: string;

  constructor() {
    this.payByBankwireOption = "bank wire";
    this.confirmOrderButton = "confirm my order";
    this.confirmationMessage = ".cheque-indent strong";
    this.confirmButtonLocation = "#cart_navigation";
  }

  public payByBankwire(): void {
    cy.contains(this.payByBankwireOption).click();
  }

  public confirmOrder(): void {
    cy.get(this.confirmButtonLocation).contains(this.confirmOrderButton).click();
  }

  public getConfirmationMessage(): Cypress.Chainable {
    return cy.get(this.confirmationMessage);
  }
}

export { PaymentStepPage }
