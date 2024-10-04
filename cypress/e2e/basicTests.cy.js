///<reference types="Cypress" />;
describe("tests", () => {
  it("should open and close a modal", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Open The Modal").click();
    cy.get(".modal-overlay").should("exist");
    cy.contains("Close").click();
    cy.get(".modal-overlay").should("not.exist");
  });

  it("should fetch a list from API", () => {
    cy.intercept("GET", "http://localhost:4000/", {
      statusCode: 200,
      //Mock data
      body: [
        { id: 1, title: "r1", cocking_time: "10 min" },
        { id: 2, title: "r2", cocking_time: "20 min" },
        { id: 3, title: "r3", cocking_time: "30 min" },
      ],
    }).as("getProducts");

    //Visit the page that makes the API call
    cy.visit("http://localhost:5173/");

    //Wait for the intercepted request
    cy.wait("@getProducts"); //Fix a problem

    // Verify the content on the page
    cy.get("tbody tr").should("have.length", 3);
    cy.contains("10 min").should("be.visible");
    cy.contains("r2").should("be.visible");
    cy.contains("30 min").should("be.visible");
    /* cy.contains("r7").should("be.visible"); */
  });
});
