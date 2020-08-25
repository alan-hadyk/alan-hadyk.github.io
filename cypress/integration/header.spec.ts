// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("Header", () => {
  it("should contain logo, nav links, resume button and social links", () => {
    cy.visit("/");

    cy.dataCy("Header")
      .should("be.visible")
      .within(() => {
        cy.dataCy("siteLogo").should("be.visible").should("not.be.disabled");

        cy.contains("Portfolio").should("be.visible");
        cy.contains("Experience").should("be.visible");
        cy.contains("Skills").should("be.visible");
        cy.contains("About me").should("be.visible");
        cy.contains("Contact").should("be.visible");

        cy.contains("resume").should("be.visible").should("not.be.disabled");

        cy.get("a[href=\"https://github.com/alan-hadyk\"]").should("be.visible").should("not.be.disabled");
        cy.get("a[href=\"https://codesandbox.io/u/alan-hadyk\"]").should("be.visible").should("not.be.disabled");
        cy.get("a[href=\"https://www.linkedin.com/in/alan-hadyk-78738099/\"]").should("be.visible").should("not.be.disabled");
      });

    expect(true).to.equal(false);
  });
});