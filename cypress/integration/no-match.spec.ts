// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("NoMatchPage", () => {
  beforeEach(() => {
    cy.visit("/no-match-page", {});
  });

  it("should contain link with icon, error message and button", () => {
    cy.dataCy("NoMatchPage").should("be.visible");

    cy.dataCy("NoMatchPage").within(() => {
      cy.dataCy("SiteLogo").should("be.visible");

      cy.dataCy("NoMatchPageError").should("be.visible");

      cy.dataCy("NoMatchPageButton").should("be.visible");
    });
  });

  describe("SiteLogo", () => {
    it("should contain correct href and icon", () => {
      cy.dataCy("SiteLogo").within(() => {
        cy.get("a").should("have.attr", "href", "/");
      });

      cy.dataCy("SiteLogo").within(() => {
        cy.dataCy("logo").should("be.visible");
      });
    });
  });

  describe("NoMatchPageError", () => {
    it("should contain correct title, description and icon", () => {
      cy.dataCy("NoMatchPageDashboardElement").should("be.visible");

      cy.dataCy("NoMatchPageError").within(() => {
        cy.dataCy("ErrorTitle").should("be.visible").should("contain", "Error");
      });

      cy.dataCy("NoMatchPageError").within(() => {
        cy.dataCy("ErrorDescription")
          .should("be.visible")
          .should("contain", "Page not found");
      });

      cy.dataCy("NoMatchPageError")
        .find("[data-testid='ErrorIcon']")
        .should("be.visible");
    });
  });

  describe("NoMatchPageButton", () => {
    it("should contain correct text", () => {
      cy.dataCy("NoMatchPageButton")
        .find("[data-testid='ButtonText']")
        .should("be.visible")
        .should("contain", "Return to Portfolio");
    });
  });
});
