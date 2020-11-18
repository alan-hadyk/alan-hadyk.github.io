// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("Contact", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should contain title and email", () => {
    cy.dataCy("Contact")
      .should("be.visible")
      .find("[data-testid='Text']")
      .should("contain", "Contact");

    cy.dataCy("Contact").within(() => {
      cy.dataCy("EmailLink").should("be.visible");
    });
  });

  describe("EmailLink", () => {
    it("should contain correct href", () => {
      cy.dataCy("EmailLink").should(
        "have.attr",
        "href",
        "mailto:alan.hadyk@gmail.com"
      );
    });

    it("should contain correct email", () => {
      cy.dataCy("EmailLink")
        .should("be.visible")
        .within(() => {
          cy.get("[data-testid='EmailText']").should(
            "contain",
            "alan.hadyk@gmail.com"
          );
        });
    });
  });
});
