// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("AboutMe", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should contain title and hexagon with description", () => {
    cy.dataCy("AboutMe")
      .should("be.visible")
      .find("[data-testid='Text']")
      .should("contain", "About me");

    cy.dataCy("AboutMe").within(() => {
      cy.dataCy("HexagonWithDescription").should("be.visible");
    });
  });

  describe("HexagonWithDescription", () => {
    it("should contain image and description", () => {
      cy.dataCy("HexagonWithDescription")
        .should("be.visible")
        .within(() => {
          cy.get("[data-testid='HexagonWithDescriptionContent']")
            .find("[data-testid='Text']")
            .should(
              "contain",
              "Proven talent for aligning software development strategy and objectives with established user interface implementation and technology management paradigms to achieve maximum operational impacts with minimum resource expenditures. Growth-focused thought leader with expertise spanning application layering, polygot language coding expertise, best practice compliance, agile methodology, cross-functional team leadership, REST & GraphQL architectural styles, comprehensive components, and project management. Exceptionally dedicated technical professional with keen organizational skills."
            );

          cy.get("[data-testid='HexagonWithDescriptionContent']")
            .find("[data-cy='AboutMeImage']")
            .should("be.visible");

          cy.dataCy("AboutMeImage").should(
            "have.attr",
            "src",
            "/images/alan.png"
          );
        });
    });
  });
});
