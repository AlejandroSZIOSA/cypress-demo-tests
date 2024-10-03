///<reference types="Cypress" />;
describe("initials tests", () => {
  it("should open and close a modal", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Open The Modal").click();
    cy.contains("Close").click();
    cy.get(".modal-overlay").should("not.exist");
    cy.get(".modal").should("not.exist");
  });
});
