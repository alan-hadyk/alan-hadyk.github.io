// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

import commits from "../fixtures/commits";

describe("Loader", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad: (win) => {
        cy.stub(win, "fetch")
          .withArgs("https://api.github.com/repos/alan-hadyk/portfolio/commits")
          .resolves({
            json: () => commits,
            ok: true
          });
      }
    });
  });

  it("should contain Loader", () => {
    cy.dataCy("Loader").should("be.visible");
  });
});
