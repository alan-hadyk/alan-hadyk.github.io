// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

const baseUrl = Cypress.config().baseUrl;

describe("NoMatchPage", () => {
  beforeEach(() => {
    cy.visit("/no-match-page");
  });

  it("should contain link with icon, error message and button", () => {
    cy.url().should("eq", `${baseUrl}/no-match-page`);

    cy.dataCy("NoMatchPage").should("be.visible");

    cy.dataCy("NoMatchPage").within(() => {
      cy.dataCy("SiteLogo").should("be.visible");

      cy.dataCy("NoMatchPageError").should("be.visible");

      cy.dataCy("NoMatchPageButton").should("be.visible");
    });
  });

  describe("SiteLogo", () => {
    it("should contain correct href and icon", () => {
      cy.url().should("eq", `${baseUrl}/no-match-page`);

      cy.dataCy("SiteLogo").within(() => {
        cy.get("a").should("have.attr", "href", "/");
      });

      cy.dataCy("SiteLogo").within(() => {
        cy.dataCy("logo").should("be.visible");
      });
    });

    it("should be able to go back to /", () => {
      cy.url().should("eq", `${baseUrl}/no-match-page`);

      cy.dataCy("SiteLogo").within(() => {
        cy.get("a").click();
      });

      cy.url().should("eq", `${baseUrl}/`);
    });
  });

  describe("NoMatchPageError", () => {
    it("should contain correct title, description and icon", () => {
      cy.url().should("eq", `${baseUrl}/no-match-page`);

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
      cy.url().should("eq", `${baseUrl}/no-match-page`);

      cy.dataCy("NoMatchPageButton")
        .find("[data-testid='ButtonText']")
        .should("be.visible")
        .should("contain", "Return to Portfolio");
    });

    it("should be able to go back to /", () => {
      cy.url().should("eq", `${baseUrl}/no-match-page`);

      cy.dataCy("NoMatchPageButton").click();

      cy.url().should("eq", `${baseUrl}/`);
    });
  });
});
