import { apiGithubCom } from "../../mock/apiGithubCom";

const eyesOpenCommonSettings = {
  appName: "Alan Hadyk - Portfolio",
  ignore: { selector: ".typingAnimation" }
};

describe("Header", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.github.com/repos/alan-hadyk/portfolio/commits",
      (req) => {
        req.reply(apiGithubCom["repos/alan-hadyk/portfolio/commits"]);
      }
    );
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it("should display header at tv width", () => {
    cy.viewport(1921, 1080);

    cy.visit("/");

    cy.wait(1000);

    cy.eyesOpen({
      ...eyesOpenCommonSettings,
      browser: {
        height: 1080,
        width: 1921
      },
      testName: "should display header at tv width"
    });

    cy.eyesCheckWindow({
      selector: {
        selector: "#header",
        type: "css"
      },
      target: "region"
    });

    cy.get("#side-menu-desktop").should("not.be.visible");
  });

  it("should display header at wide desktop width", () => {
    cy.viewport(1700, 1080);

    cy.visit("/");

    cy.wait(1000);

    cy.eyesOpen({
      ...eyesOpenCommonSettings,
      browser: {
        height: 1080,
        width: 1700
      },
      testName: "should display header at wide desktop width"
    });

    cy.eyesCheckWindow({
      selector: {
        selector: "#header",
        type: "css"
      },
      target: "region"
    });

    cy.get("#side-menu-desktop").should("not.be.visible");
  });

  it("should display header at narrow desktop width", () => {
    cy.viewport(1300, 1080);

    cy.visit("/");

    cy.wait(1000);

    cy.eyesOpen({
      ...eyesOpenCommonSettings,
      browser: {
        height: 1080,
        width: 1300
      },
      testName: "should display header at narrow desktop width"
    });

    cy.eyesCheckWindow({
      selector: {
        selector: "#header",
        type: "css"
      },
      target: "region"
    });
  });

  it("should display side menu at narrow desktop width", () => {
    cy.viewport(1300, 1080);

    cy.visit("/");
    cy.get("#side-menu-desktop").should("not.be.visible");

    cy.get("#menu-button-desktop").click();

    cy.wait(1000);

    cy.eyesOpen({
      ...eyesOpenCommonSettings,
      browser: {
        height: 1080,
        width: 1300
      },
      testName: "should display side menu at narrow desktop width"
    });

    cy.eyesCheckWindow({
      selector: {
        selector: "#side-menu-desktop",
        type: "css"
      },
      target: "region"
    });
  });

  it("should display header at tablet width", () => {
    cy.viewport(1000, 1080);

    cy.visit("/");

    cy.wait(1000);

    cy.eyesOpen({
      ...eyesOpenCommonSettings,
      browser: {
        height: 1080,
        width: 1000
      },
      testName: "should display header at tablet width"
    });

    cy.eyesCheckWindow({
      selector: {
        selector: "#header",
        type: "css"
      },
      target: "region"
    });
  });

  it("should display side menu at tablet width", () => {
    cy.viewport(1000, 1080);

    cy.visit("/");

    cy.get("#side-menu-tablet-mobile").should("not.be.visible");

    cy.get("#menu-button-tablet-mobile").click();

    cy.wait(1000);

    cy.eyesOpen({
      ...eyesOpenCommonSettings,
      browser: {
        height: 1080,
        width: 1000
      },
      testName: "should display side menu at tablet width"
    });

    cy.eyesCheckWindow({
      selector: {
        selector: "#side-menu-tablet-mobile",
        type: "css"
      },
      target: "region"
    });
  });

  it("should display header at mobile width", () => {
    cy.viewport(650, 1080);

    cy.visit("/");

    cy.wait(1000);

    cy.eyesOpen({
      ...eyesOpenCommonSettings,
      browser: {
        height: 1080,
        width: 650
      },
      testName: "should display header at mobile width"
    });

    cy.eyesCheckWindow({
      selector: {
        selector: "#header",
        type: "css"
      },
      target: "region"
    });
  });

  it("should display side menu at mobile width", () => {
    cy.viewport(650, 1080);

    cy.visit("/");

    cy.get("#side-menu-tablet-mobile").should("not.be.visible");

    cy.get("#menu-button-tablet-mobile").click();

    cy.wait(1000);

    cy.eyesOpen({
      ...eyesOpenCommonSettings,
      browser: {
        height: 1080,
        width: 650
      },
      testName: "should display side menu at mobile width"
    });

    cy.eyesCheckWindow({
      selector: {
        selector: "#side-menu-tablet-mobile",
        type: "css"
      },
      target: "region"
    });
  });
});
