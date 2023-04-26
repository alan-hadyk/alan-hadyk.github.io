import { apiGithubCom } from "../../mock/apiGithubCom";

describe("Header", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.github.com/repos/alan-hadyk/portfolio/commits",
      (req) => {
        req.reply(apiGithubCom["repos/alan-hadyk/portfolio/commits"]);
      }
    );
  });

  it("should display header at tv width", () => {
    cy.viewport(1921, 1080);

    cy.visit("/");

    cy.wait(1000);

    cy.get("#header").compareSnapshot("header-tv", 0.6);
    cy.get("#side-menu-desktop").should("not.be.visible");
  });

  it("should display header at wide desktop width", () => {
    cy.viewport(1700, 1080);

    cy.visit("/");

    cy.wait(1000);

    cy.get("#header").compareSnapshot("header-desktop-wide", 0.6);
    cy.get("#side-menu-desktop").should("not.be.visible");
  });

  it("should display header at narrow desktop width", () => {
    cy.viewport(1300, 1080);

    cy.visit("/");

    cy.wait(1000);

    cy.get("#header").compareSnapshot("header-desktop-narrow", 0.6);
  });

  it("should display side menu at narrow desktop width", () => {
    cy.viewport(1300, 1080);

    cy.visit("/");
    cy.get("#side-menu-desktop").should("not.be.visible");

    cy.get("#menu-button-desktop").click();

    cy.wait(1000);

    cy.get("#side-menu-desktop").compareSnapshot(
      "side-menu-desktop-narrow",
      0.1
    );
  });

  it("should display header at tablet width", () => {
    cy.viewport(1000, 1080);

    cy.visit("/");

    cy.wait(1000);

    cy.get("#header").compareSnapshot("header-tablet", 0.6);
  });

  it("should display side menu at tablet width", () => {
    cy.viewport(1000, 1080);

    cy.visit("/");

    cy.get("#side-menu-tablet-mobile").should("not.be.visible");

    cy.get("#menu-button-tablet-mobile").click();

    cy.wait(1000);

    cy.get("#side-menu-tablet-mobile").compareSnapshot("side-menu-tablet", 0.6);
  });

  it("should display header at mobile width", () => {
    cy.viewport(650, 1080);

    cy.visit("/");

    cy.wait(1000);

    cy.get("#header").compareSnapshot("header-mobile", 0.6);
  });

  it("should display side menu at mobile width", () => {
    cy.viewport(650, 1080);

    cy.visit("/");

    cy.get("#side-menu-tablet-mobile").should("not.be.visible");

    cy.get("#menu-button-tablet-mobile").click();

    cy.wait(1000);

    cy.get("#side-menu-tablet-mobile").compareSnapshot("side-menu-mobile", 0.6);
  });
});
