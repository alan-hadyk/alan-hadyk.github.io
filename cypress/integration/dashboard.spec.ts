// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

import commits from "../fixtures/commits";

describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad: (win) => {
        cy.stub(win, "fetch").withArgs("https://api.github.com/repos/alan-hadyk/portfolio/commits")
          .resolves({
            json: () => commits,
            ok: true
          });
      }
    });
  });

  describe("TV", () => {    
    beforeEach(() => {
      cy.viewport(1681, 900);
    });

    it("should contain Tech Stack, Flux, Code, Console, Commits, Powered by, User Agent and Ip", () => {
      cy.dataCy("Dashboard")
        .should("be.visible")
        .find("[data-testid='DashboardSectionTv']")
        .should("be.visible")
        .within(() => {
          cy.dataCy("TechStack")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Tech Stack");

          cy.dataCy("TechStack")
            .within(() => {
              cy.dataCy("react").should("be.visible");
              cy.dataCy("javascript").should("be.visible");
              cy.dataCy("typescript").should("be.visible");
              cy.dataCy("webpack").should("be.visible");
              cy.dataCy("node").should("be.visible");
              cy.dataCy("apollo").should("be.visible");
            });

          cy.dataCy("Flux")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Flux");

          cy.dataCy("Flux")
            .within(() => {
              cy.get("svg[id='flow-chart']").should("be.visible");
            });

          cy.dataCy("Code")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Code");

          cy.dataCy("ConsoleTvDesktopAndTablet")
            .should("be.visible")
            .find("[data-testid='Text']")
            .should("contain", "GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)");

          cy.dataCy("ConsoleTvDesktopAndTablet")
            .find("[data-testid='ConsoleTvDesktopAndTabletText']")
            .should("contain", "Vision driven change agent with career-long record of front-end user strategy and UI development");
  
          cy.dataCy("Commits")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Commits");

          cy.dataCy("PoweredBy")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Powered by");

          cy.dataCy("PoweredBy")
            .within(() => {
              cy.dataCy("reactLogo").should("be.visible");
            });

          cy.dataCy("UserAgent")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "User Agent");

          cy.dataCy("UserAgent")
            .within(() => {
              cy.dataCy("chrome").should("be.visible");
              cy.dataCy("firefox").should("be.visible");
              cy.dataCy("ie").should("be.visible");
              cy.dataCy("opera").should("be.visible");
              cy.dataCy("safari").should("be.visible");
              cy.dataCy("unknown").should("be.visible");
            });

          cy.dataCy("Ip")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "IP: 127.0.0.1");

          cy.dataCy("Ip")
            .within(() => {
              cy.dataCy("earth").should("be.visible");
            });
        });
    });
  });

  describe("Desktop", () => {    
    beforeEach(() => {
      cy.viewport(1281, 900);
    });

    it("should contain Tech Stack, Flux, Code, Console, Commits, Powered by, User Agent and Ip", () => {
      cy.dataCy("Dashboard")
        .should("be.visible")
        .find("[data-testid='DashboardSectionDesktop']")
        .should("be.visible")
        .within(() => {
          cy.dataCy("TechStack")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Tech Stack");
  
          cy.dataCy("TechStack")
            .within(() => {
              cy.dataCy("react").should("be.visible");
              cy.dataCy("javascript").should("be.visible");
              cy.dataCy("typescript").should("be.visible");
              cy.dataCy("webpack").should("be.visible");
              cy.dataCy("node").should("be.visible");
              cy.dataCy("apollo").should("be.visible");
            });

          cy.dataCy("Flux")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Flux");

          cy.dataCy("Flux")
            .within(() => {
              cy.get("svg[id='flow-chart']").should("be.visible");
            });

          cy.dataCy("Code")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Code");

          cy.dataCy("ConsoleTvDesktopAndTablet")
            .should("be.visible")
            .find("[data-testid='Text']")
            .should("contain", "GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)");

          cy.dataCy("ConsoleTvDesktopAndTablet")
            .find("[data-testid='ConsoleTvDesktopAndTabletText']")
            .should("contain", "Vision driven change agent with career-long record of front-end user strategy and UI development");
  
          cy.dataCy("Commits")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Commits");

          cy.dataCy("PoweredBy")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Powered by");

          cy.dataCy("PoweredBy")
            .within(() => {
              cy.dataCy("reactLogo").should("be.visible");
            });

          cy.dataCy("UserAgent")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "User Agent");

          cy.dataCy("UserAgent")
            .within(() => {
              cy.dataCy("chrome").should("be.visible");
              cy.dataCy("firefox").should("be.visible");
              cy.dataCy("ie").should("be.visible");
              cy.dataCy("opera").should("be.visible");
              cy.dataCy("safari").should("be.visible");
              cy.dataCy("unknown").should("be.visible");
            });

          cy.dataCy("Ip")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "IP: 127.0.0.1");

          cy.dataCy("Ip")
            .within(() => {
              cy.dataCy("earth").should("be.visible");
            });
        });
    });
  });

  describe("Tablet", () => {    
    beforeEach(() => {
      cy.viewport(641, 900);
    });

    it("should contain Tech Stack, Console, Commits, Powered by", () => {
      cy.dataCy("Dashboard")
        .should("be.visible")
        .find("[data-testid='DashboardSectionTablet']")
        .should("be.visible")
        .within(() => {
          cy.dataCy("TechStack")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Tech Stack");
  
          cy.dataCy("TechStack")
            .within(() => {
              cy.dataCy("react").should("be.visible");
              cy.dataCy("javascript").should("be.visible");
              cy.dataCy("typescript").should("be.visible");
              cy.dataCy("webpack").should("be.visible");
              cy.dataCy("node").should("be.visible");
              cy.dataCy("apollo").should("be.visible");
            });

          cy.dataCy("Flux")
            .should("not.be.visible");

          cy.dataCy("Code")
            .should("not.be.visible");

          cy.dataCy("ConsoleTvDesktopAndTablet")
            .should("be.visible")
            .find("[data-testid='Text']")
            .should("contain", "GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)");

          cy.dataCy("ConsoleTvDesktopAndTablet")
            .find("[data-testid='ConsoleTvDesktopAndTabletText']")
            .should("contain", "Vision driven change agent with career-long record of front-end user strategy and UI development");
  
          cy.dataCy("Commits")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Commits");

          cy.dataCy("PoweredBy")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Powered by");

          cy.dataCy("PoweredBy")
            .within(() => {
              cy.dataCy("reactLogo").should("be.visible");
            });

          cy.dataCy("UserAgent")
            .should("not.be.visible");

          cy.dataCy("Ip")
            .should("not.be.visible");
        });
    });
  });

  describe("Mobile", () => {    
    beforeEach(() => {
      cy.viewport(640, 900);
    });

    it("should contain Console", () => {
      cy.dataCy("Dashboard")
        .should("be.visible")
        .find("[data-testid='DashboardSectionMobile']")
        .should("be.visible")
        .within(() => {
          cy.dataCy("TechStack")
            .should("not.be.visible");

          cy.dataCy("Flux")
            .should("not.be.visible");

          cy.dataCy("Code")
            .should("not.be.visible");

          cy.dataCy("ConsoleMobile")
            .find("[data-testid='ConsoleMobileText']")
            .should("contain", "Vision driven change agent with career-long record of front-end user strategy and UI development");
  
          cy.dataCy("Commits")
            .should("not.be.visible");

          cy.dataCy("PoweredBy")
            .should("not.be.visible");

          cy.dataCy("PoweredBy")
            .should("not.be.visible");

          cy.dataCy("UserAgent")
            .should("not.be.visible");

          cy.dataCy("Ip")
            .should("not.be.visible");
        });
    });
  });
});
