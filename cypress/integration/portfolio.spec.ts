// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("Portfolio", () => {
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
  });

  it("should contain title and project", () => {
    cy.dataCy("Portfolio")
      .should("be.visible")
      .find("[data-testid='Text']")
      .should("contain", "Portfolio");

    cy.dataCy("Portfolio")
      .within(() => {
        cy.dataCy("Project")
          .should("be.visible");
      });
  });

  describe("Project", () => {
    it("should contain title, description, image, technologies and buttons", () => {
      cy.dataCy("Project")
        .should("be.visible")
        .within(() => {
          cy.get("[data-testid='ProjectDescriptionTitle']")
            .should("be.visible")
            .should("contain", "Roland tb 303");

          cy.get("[data-testid='ProjectDescriptionText']")
            .should("be.visible")
            .should("contain", "A tribute to an iconic bass synthesizer released by Roland Corporation in 1981.");

          cy.dataCy("ProjectImage")
            .should("be.visible");

          cy.dataCy("ProjectDescriptionTechnologies")
            .should("be.visible");

          cy.dataCy("ProjectDescriptionButtons")
            .should("be.visible");
        });
    });

    describe("ProjectImage", () => {  
      it("should contain correct svg", () => {
        cy.dataCy("react")
          .should("be.visible");
      });
    });

    describe("ProjectDescriptionTechnologies", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("ProjectDescriptionTechnologies")
          .find("[data-testid='Text']")
          .should("contain", "Made with:");
            

        cy.dataCy("ProjectDescriptionTechnologies")
          .should("be.visible")
          .within(() => {
            cy.dataCy("IconWithLabel")
              .should("have.length", 3)
              .each((iconWithLabel) => {
                cy.wrap(iconWithLabel)
                  .should("be.visible");
              });

            cy.dataCy("IconWithLabel")
              .spread((react, javascript, webpack) => {
                cy.get(react)
                  .find("[data-testid='LabelText']")
                  .should("contain", "React");
                
                cy.get(react)
                  .find("[data-cy='brandReact']")
                  .should("be.visible");

                cy.get(javascript)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Javascript");
                
                cy.get(javascript)
                  .find("[data-cy='brandJS']")
                  .should("be.visible");

                cy.get(webpack)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Webpack");
                
                cy.get(webpack)
                  .find("[data-cy='brandWebpack']")
                  .should("be.visible");
              }); 
          });
      });
    });

    describe("ProjectDescriptionButtons", () => {
      it("should contain correct text and icon (tv, desktop and tablet)", () => {
        cy.viewport(1681, 900);
      
        cy.dataCy("ProjectDescriptionButtons")
          .should("be.visible")
          .within(() => {
            cy.dataCy("Button")
              .should("have.length", 2)
              .each((button) => {
                cy.wrap(button)
                  .should("be.visible");
              });

            cy.dataCy("Button")
              .spread((externalLink, codesandbox) => {
                cy.get(externalLink)
                  .find("[data-testid='ButtonText']")
                  .should("contain", "Launch project");
                
                cy.get(externalLink)
                  .find("[data-cy='btnExternalLink']")
                  .should("be.visible");

                cy.get(codesandbox)
                  .find("[data-testid='ButtonText']")
                  .should("contain", "Open in codesandbox");
                
                cy.get(codesandbox)
                  .find("[data-cy='btnCodeSandbox']")
                  .should("be.visible");
              }); 
          });
      });
      
      it("should contain correct text and icon (mobile)", () => {
        cy.viewport(640, 900);

        cy.dataCy("ProjectDescriptionButtons")
          .should("be.visible")
          .within(() => {
            cy.dataCy("Button")
              .should("have.length", 2)
              .each((button) => {
                cy.wrap(button)
                  .should("be.visible");
              });

            cy.dataCy("Button")
              .spread((externalLink, codesandbox) => {
                cy.get(externalLink)
                  .find("[data-testid='ButtonText']")
                  .should("contain", "Launch");
                
                cy.get(externalLink)
                  .find("[data-cy='btnExternalLink']")
                  .should("be.visible");

                cy.get(codesandbox)
                  .find("[data-testid='ButtonText']")
                  .should("contain", "Codesandbox");
                
                cy.get(codesandbox)
                  .find("[data-cy='btnCodeSandbox']")
                  .should("be.visible");
              }); 
          });
      });
    });
  });
});
