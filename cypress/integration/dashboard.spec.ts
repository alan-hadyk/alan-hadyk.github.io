// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("Dashboard", () => {
  describe("TV", () => {    
    beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad: (win) => {
          cy.stub(win, "fetch").withArgs("https://api.github.com/repos/alan-hadyk/portfolio/commits")
            .resolves({
              json: () => [],
              ok: true
            });
        }
      });

      cy.viewport(1681, 900);
    });

    it("should contain Tech Stack, Flux, Code, Commits, Powered by, User Agent and Ip", () => {
      cy.dataCy("Dashboard")
        .should("be.visible")
        .within(() => {
          cy.dataCy("TechStack")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Tech Stack");
  
          cy.dataCy("Flux")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Flux");

          cy.dataCy("Code")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Code");

          cy.dataCy("Console")
            .should("be.visible")
            .find("[data-testid='Text']")
            .should("contain", "GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)");

          cy.dataCy("Console")
            .find("[data-testid='ConsoleText']")
            .should("contain", "Vision driven change agent with career-long record of front-end user strategy and UI development");
  
          cy.dataCy("Commits")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Commits");

          cy.dataCy("PoweredBy")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Powered by");

          cy.dataCy("UserAgent")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "User Agent");

          cy.dataCy("Ip")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "IP: 127.0.0.1");
        });
    });
  });

  describe("Desktop", () => {    
    beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad: (win) => {
          cy.stub(win, "fetch").withArgs("https://api.github.com/repos/alan-hadyk/portfolio/commits")
            .resolves({
              json: () => [],
              ok: true
            });
        }
      });
      
      cy.viewport(1281, 900);
    });

    it("should contain Tech Stack, Flux, Code, Commits, Powered by, User Agent and Ip", () => {
      cy.dataCy("Dashboard")
        .should("be.visible")
        .within(() => {
          cy.dataCy("TechStack")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Tech Stack");
  
          cy.dataCy("Flux")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Flux");

          cy.dataCy("Code")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Code");

          cy.dataCy("Console")
            .should("be.visible")
            .find("[data-testid='Text']")
            .should("contain", "GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)");

          cy.dataCy("Console")
            .find("[data-testid='ConsoleText']")
            .should("contain", "Vision driven change agent with career-long record of front-end user strategy and UI development");
  
          cy.dataCy("Commits")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Commits");

          cy.dataCy("PoweredBy")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Powered by");

          cy.dataCy("UserAgent")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "User Agent");

          cy.dataCy("Ip")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "IP: 127.0.0.1");
        });
    });
  });

  describe("Tablet", () => {    
    beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad: (win) => {
          cy.stub(win, "fetch").withArgs("https://api.github.com/repos/alan-hadyk/portfolio/commits")
            .resolves({
              json: () => [],
              ok: true
            });
        }
      });

      cy.viewport(641, 900);
    });

    it("should contain Tech Stack, Flux, Code, Commits, Powered by, User Agent and Ip", () => {
      cy.dataCy("Dashboard")
        .should("be.visible")
        .within(() => {
          cy.dataCy("TechStack")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Tech Stack");
  
          cy.dataCy("Flux")
            .should("not.be.visible");

          cy.dataCy("Code")
            .should("not.be.visible");

          cy.dataCy("Console")
            .should("be.visible")
            .find("[data-testid='Text']")
            .should("contain", "GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)");

          cy.dataCy("Console")
            .find("[data-testid='ConsoleText']")
            .should("contain", "Vision driven change agent with career-long record of front-end user strategy and UI development");
  
          cy.dataCy("Commits")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Commits");

          cy.dataCy("PoweredBy")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Powered by");

          cy.dataCy("UserAgent")
            .should("not.be.visible");

          cy.dataCy("Ip")
            .should("not.be.visible");
        });
    });
  });

  describe("Mobile", () => {    
    beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad: (win) => {
          cy.stub(win, "fetch").withArgs("https://api.github.com/repos/alan-hadyk/portfolio/commits")
            .resolves({
              json: () => [],
              ok: true
            });
        }
      });

      cy.viewport(640, 900);
    });

    it("should contain Tech Stack, Flux, Code, Commits, Powered by, User Agent and Ip", () => {
      cy.dataCy("Dashboard")
        .should("be.visible")
        .within(() => {
          cy.dataCy("TechStack")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Tech Stack");
  
          cy.dataCy("Flux")
            .should("not.be.visible");

          cy.dataCy("Code")
            .should("not.be.visible");

          cy.dataCy("Console")
            .should("be.visible")
            .find("[data-testid='Text']")
            .should("contain", "GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)");

          cy.dataCy("Console")
            .find("[data-testid='ConsoleText']")
            .should("contain", "Vision driven change agent with career-long record of front-end user strategy and UI development");
  
          cy.dataCy("Commits")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Commits");

          cy.dataCy("PoweredBy")
            .should("be.visible")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Powered by");

          cy.dataCy("UserAgent")
            .should("not.be.visible");

          cy.dataCy("Ip")
            .should("not.be.visible");
        });
    });
  });
});
