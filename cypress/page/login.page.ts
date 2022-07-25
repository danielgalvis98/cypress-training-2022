class LoginPage {

  private emailAddressInput: string;
  private passwordInput: string;
  private signInButton: string;

  constructor() {
    this.emailAddressInput = "#email";
    this.passwordInput = "#passwd";
    this.signInButton = "#SubmitLogin";
  }

  public login(email: string, password: string) {
    cy.get(this.emailAddressInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.signInButton).click();
  }
}

export { LoginPage };
