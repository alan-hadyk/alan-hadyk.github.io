// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("Loader", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should contain Loader", () => {
    cy.dataCy("Loader").should("be.visible");
  });
});
