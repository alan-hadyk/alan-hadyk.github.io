// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

import commits from "../fixtures/commits";

describe("Skills", () => {
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

  describe("TV, Desktop, Tablet and Mobile", () => {
    beforeEach(() => {
      cy.viewport(1681, 640);
    });

    it("should contain title, languagesCategory, frameworksCategory, stateManagementCategory, webApisCategory, webTechnologiesCategory, cssToolsCategory, testingCategory, cicdCategory, bundlersCategory, taskManagementCategory, designToolsCategory", () => {
      cy.dataCy("Skills")
        .should("be.visible")
        .find("[data-testid='Text']")
        .should("contain", "Skills");

      cy.dataCy("Skills").within(() => {
        cy.dataCy("SkillsLanguages").should("be.visible");

        cy.dataCy("SkillsFrameworks").should("be.visible");

        cy.dataCy("SkillsStateManagement").should("be.visible");

        cy.dataCy("SkillsWebTechnologies").should("be.visible");

        cy.dataCy("SkillsWebAPIs").should("be.visible");

        cy.dataCy("SkillsTesting").should("be.visible");

        cy.dataCy("SkillsCSSTools").should("be.visible");

        cy.dataCy("SkillsCICD").should("be.visible");

        cy.dataCy("SkillsBundlers").should("be.visible");

        cy.dataCy("SkillsTaskManagement").should("be.visible");

        cy.dataCy("SkillsDesignTools").should("be.visible");
      });
    });

    describe("LanguagesCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsLanguages")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Languages");

          cy.dataCy("SkillsLanguages").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 4)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 4)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread(
              (javascript, typescript, coffeeScript, ruby) => {
                cy.get(javascript)
                  .find("[data-cy='brandJS']")
                  .should("be.visible");

                cy.get(typescript)
                  .find("[data-cy='brandTS']")
                  .should("be.visible");

                cy.get(coffeeScript)
                  .find("[data-cy='brandCoffeeScript']")
                  .should("be.visible");

                cy.get(ruby).find("[data-cy='brandRuby']").should("be.visible");
              }
            );

            cy.dataCy("VerticalLabel").spread(
              (javascript, typescript, coffeeScript, ruby) => {
                cy.get(javascript)
                  .find("[data-testid='LabelText']")
                  .should("contain", "JavaScript");

                cy.get(typescript)
                  .find("[data-testid='LabelText']")
                  .should("contain", "TypeScript");

                cy.get(coffeeScript)
                  .find("[data-testid='LabelText']")
                  .should("contain", "CoffeeScript");

                cy.get(ruby)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Ruby");
              }
            );
          });
        });
      });
    });

    describe("FrameworksCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsFrameworks")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Frameworks");

          cy.dataCy("SkillsFrameworks").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 9)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 9)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread(
              (
                react,
                reactNative,
                node,
                express,
                ember,
                prestaShop,
                jQuery,
                rails,
                sinatra
              ) => {
                cy.get(react)
                  .find("[data-cy='brandReact']")
                  .should("be.visible");

                cy.get(reactNative)
                  .find("[data-cy='brandReact']")
                  .should("be.visible");

                cy.get(node).find("[data-cy='brandNode']").should("be.visible");

                cy.get(express)
                  .find("[data-cy='brandNode']")
                  .should("be.visible");

                cy.get(ember)
                  .find("[data-cy='brandEmber']")
                  .should("be.visible");

                cy.get(prestaShop)
                  .find("[data-cy='brandPrestaShop']")
                  .should("be.visible");

                cy.get(jQuery)
                  .find("[data-cy='brandJQuery']")
                  .should("be.visible");

                cy.get(rails)
                  .find("[data-cy='brandRails']")
                  .should("be.visible");

                cy.get(sinatra)
                  .find("[data-cy='brandSinatra']")
                  .should("be.visible");
              }
            );

            cy.dataCy("VerticalLabel").spread(
              (
                react,
                reactNative,
                node,
                express,
                ember,
                prestaShop,
                jQuery,
                rails,
                sinatra
              ) => {
                cy.get(react)
                  .find("[data-testid='LabelText']")
                  .should("contain", "React");

                cy.get(reactNative)
                  .find("[data-testid='LabelText']")
                  .should("contain", "React Native");

                cy.get(node)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Node.js");

                cy.get(express)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Express");

                cy.get(ember)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Ember");

                cy.get(prestaShop)
                  .find("[data-testid='LabelText']")
                  .should("contain", "PrestaShop");

                cy.get(jQuery)
                  .find("[data-testid='LabelText']")
                  .should("contain", "jQuery");

                cy.get(rails)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Ruby on Rails");

                cy.get(sinatra)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Sinatra");
              }
            );
          });
        });
      });
    });

    describe("StateManagementCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsStateManagement")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "State Management");

          cy.dataCy("SkillsStateManagement").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 2)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 2)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread((apollo, redux) => {
              cy.get(apollo)
                .find("[data-cy='brandApollo']")
                .should("be.visible");

              cy.get(redux).find("[data-cy='brandRedux']").should("be.visible");
            });

            cy.dataCy("VerticalLabel").spread((apollo, redux) => {
              cy.get(apollo)
                .find("[data-testid='LabelText']")
                .should("contain", "Apollo");

              cy.get(redux)
                .find("[data-testid='LabelText']")
                .should("contain", "Redux");
            });
          });
        });
      });
    });

    describe("WebApisCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsWebAPIs")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Web APIs");

          cy.dataCy("SkillsWebAPIs").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 4)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 4)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread(
              (graphql, apollo, rest, websocket) => {
                cy.get(graphql)
                  .find("[data-cy='brandGraphQL']")
                  .should("be.visible");

                cy.get(apollo)
                  .find("[data-cy='brandApollo']")
                  .should("be.visible");

                cy.get(rest).find("[data-cy='brandREST']").should("be.visible");

                cy.get(websocket)
                  .find("[data-cy='brandWebsocket']")
                  .should("be.visible");
              }
            );

            cy.dataCy("VerticalLabel").spread(
              (graphql, apollo, rest, websocket) => {
                cy.get(graphql)
                  .find("[data-testid='LabelText']")
                  .should("contain", "GraphQL");

                cy.get(apollo)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Apollo");

                cy.get(rest)
                  .find("[data-testid='LabelText']")
                  .should("contain", "REST");

                cy.get(websocket)
                  .find("[data-testid='LabelText']")
                  .should("contain", "WebSockets");
              }
            );
          });
        });
      });
    });

    describe("WebTechnologiesCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsWebTechnologies")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Web Technologies");

          cy.dataCy("SkillsWebTechnologies").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 2)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 2)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread((html, css) => {
              cy.get(html).find("[data-cy='brandHTML']").should("be.visible");

              cy.get(css).find("[data-cy='brandCSS']").should("be.visible");
            });

            cy.dataCy("VerticalLabel").spread((html, css) => {
              cy.get(html)
                .find("[data-testid='LabelText']")
                .should("contain", "HTML");

              cy.get(css)
                .find("[data-testid='LabelText']")
                .should("contain", "CSS");
            });
          });
        });
      });
    });

    describe("CssToolsCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsCSSTools")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "CSS Tools");

          cy.dataCy("SkillsCSSTools").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 4)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 4)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread(
              (styledComponents, sass, cssModules, less) => {
                cy.get(styledComponents)
                  .find("[data-cy='brandStyledComponents']")
                  .should("be.visible");

                cy.get(sass).find("[data-cy='brandSass']").should("be.visible");

                cy.get(cssModules)
                  .find("[data-cy='brandCSSModules']")
                  .should("be.visible");

                cy.get(less).find("[data-cy='brandLESS']").should("be.visible");
              }
            );

            cy.dataCy("VerticalLabel").spread(
              (graphql, apollo, rest, websocket) => {
                cy.get(graphql)
                  .find("[data-testid='LabelText']")
                  .should("contain", "styled components");

                cy.get(apollo)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Sass");

                cy.get(rest)
                  .find("[data-testid='LabelText']")
                  .should("contain", "CSS Modules");

                cy.get(websocket)
                  .find("[data-testid='LabelText']")
                  .should("contain", "LESS");
              }
            );
          });
        });
      });
    });

    describe("TestingCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsTesting")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Testing");

          cy.dataCy("SkillsTesting").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 5)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 5)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread(
              (jest, enzyme, reactTestingLibrary, cypress, qUnit) => {
                cy.get(jest).find("[data-cy='brandJEST']").should("be.visible");

                cy.get(enzyme)
                  .find("[data-cy='brandAirbnb']")
                  .should("be.visible");

                cy.get(reactTestingLibrary)
                  .find("[data-cy='brandTestingLibrary']")
                  .should("be.visible");

                cy.get(cypress)
                  .find("[data-cy='brandCypress']")
                  .should("be.visible");

                cy.get(qUnit)
                  .find("[data-cy='brandQunit']")
                  .should("be.visible");
              }
            );

            cy.dataCy("VerticalLabel").spread(
              (jest, enzyme, reactTestingLibrary, cypress, qUnit) => {
                cy.get(jest)
                  .find("[data-testid='LabelText']")
                  .should("contain", "JEST");

                cy.get(enzyme)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Enzyme");

                cy.get(reactTestingLibrary)
                  .find("[data-testid='LabelText']")
                  .should("contain", "React Testing Library");

                cy.get(cypress)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Cypress");

                cy.get(qUnit)
                  .find("[data-testid='LabelText']")
                  .should("contain", "QUnit");
              }
            );
          });
        });
      });
    });

    describe("CICDCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsCICD")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "CI / CD");

          cy.dataCy("SkillsCICD").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 8)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 8)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread(
              (
                jenkins,
                buildkite,
                bamboo,
                githubActions,
                githubEnterprise,
                docker,
                gitlab,
                stash
              ) => {
                cy.get(jenkins)
                  .find("[data-cy='brandJenkins']")
                  .should("be.visible");

                cy.get(buildkite)
                  .find("[data-cy='brandBuildkite']")
                  .should("be.visible");

                cy.get(bamboo)
                  .find("[data-cy='brandBamboo']")
                  .should("be.visible");

                cy.get(githubActions)
                  .find("[data-cy='brandGithub']")
                  .should("be.visible");

                cy.get(githubEnterprise)
                  .find("[data-cy='brandGithub']")
                  .should("be.visible");

                cy.get(docker)
                  .find("[data-cy='brandDocker']")
                  .should("be.visible");

                cy.get(gitlab)
                  .find("[data-cy='brandGitlab']")
                  .should("be.visible");

                cy.get(stash)
                  .find("[data-cy='brandStash']")
                  .should("be.visible");
              }
            );

            cy.dataCy("VerticalLabel").spread(
              (
                jenkins,
                buildkite,
                bamboo,
                githubActions,
                githubEnterprise,
                docker,
                gitlab,
                stash
              ) => {
                cy.get(jenkins)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Jenkins");

                cy.get(buildkite)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Buildkite");

                cy.get(bamboo)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Bamboo");

                cy.get(githubActions)
                  .find("[data-testid='LabelText']")
                  .should("contain", "GitHub Actions");

                cy.get(githubEnterprise)
                  .find("[data-testid='LabelText']")
                  .should("contain", "GitHub Enterprise");

                cy.get(docker)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Docker");

                cy.get(gitlab)
                  .find("[data-testid='LabelText']")
                  .should("contain", "GitLab");

                cy.get(stash)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Stash");
              }
            );
          });
        });
      });
    });

    describe("BundlersCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsBundlers")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Bundlers");

          cy.dataCy("SkillsBundlers").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 3)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 3)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread((webpack, grunt, gulp) => {
              cy.get(webpack)
                .find("[data-cy='brandWebpack']")
                .should("be.visible");

              cy.get(grunt).find("[data-cy='brandGrunt']").should("be.visible");

              cy.get(gulp).find("[data-cy='brandGulp']").should("be.visible");
            });

            cy.dataCy("VerticalLabel").spread((webpack, grunt, gulp) => {
              cy.get(webpack)
                .find("[data-testid='LabelText']")
                .should("contain", "Webpack");

              cy.get(grunt)
                .find("[data-testid='LabelText']")
                .should("contain", "Grunt");

              cy.get(gulp)
                .find("[data-testid='LabelText']")
                .should("contain", "Gulp");
            });
          });
        });
      });
    });

    describe("TaskManagementCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsTaskManagement")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Task Management");

          cy.dataCy("SkillsTaskManagement").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 7)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 7)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread(
              (
                jira,
                phabricator,
                redmine,
                quire,
                trello,
                taskade,
                basecamp
              ) => {
                cy.get(jira).find("[data-cy='brandJIRA']").should("be.visible");

                cy.get(phabricator)
                  .find("[data-cy='brandPhabricator']")
                  .should("be.visible");

                cy.get(redmine)
                  .find("[data-cy='brandRedmine']")
                  .should("be.visible");

                cy.get(quire)
                  .find("[data-cy='brandQuire']")
                  .should("be.visible");

                cy.get(trello)
                  .find("[data-cy='brandTrello']")
                  .should("be.visible");

                cy.get(taskade)
                  .find("[data-cy='brandTaskade']")
                  .should("be.visible");

                cy.get(basecamp)
                  .find("[data-cy='brandBasecamp']")
                  .should("be.visible");
              }
            );

            cy.dataCy("VerticalLabel").spread(
              (
                jira,
                phabricator,
                redmine,
                quire,
                trello,
                taskade,
                basecamp
              ) => {
                cy.get(jira)
                  .find("[data-testid='LabelText']")
                  .should("contain", "JIRA");

                cy.get(phabricator)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Phabricator");

                cy.get(redmine)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Redmine");

                cy.get(quire)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Quire");

                cy.get(trello)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Trello");

                cy.get(taskade)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Taskade");

                cy.get(basecamp)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Basecamp");
              }
            );
          });
        });
      });
    });

    describe("DesignToolsCategory", () => {
      it("should contain correct title and icons with labels", () => {
        cy.dataCy("Skills").within(() => {
          cy.dataCy("SkillsDesignTools")
            .find("[data-testid='DashboardElementTitleText']")
            .should("contain", "Design Tools");

          cy.dataCy("SkillsDesignTools").within(() => {
            cy.dataCy("VerticalIcon")
              .should("have.length", 7)
              .each((icon: string) => {
                cy.wrap(icon).should("be.visible");
              });

            cy.dataCy("VerticalLabel")
              .should("have.length", 7)
              .each((label: string) => {
                cy.wrap(label).should("be.visible");
              });

            cy.dataCy("VerticalIcon").spread(
              (
                photoshop,
                sketch,
                figma,
                corelDraw,
                afterEffects,
                zeplin,
                gallery
              ) => {
                cy.get(photoshop)
                  .find("[data-cy='brandPhotoshop']")
                  .should("be.visible");

                cy.get(sketch)
                  .find("[data-cy='brandSketch']")
                  .should("be.visible");

                cy.get(figma)
                  .find("[data-cy='brandFigma']")
                  .should("be.visible");

                cy.get(corelDraw)
                  .find("[data-cy='brandCorel']")
                  .should("be.visible");

                cy.get(afterEffects)
                  .find("[data-cy='brandAfterEffects']")
                  .should("be.visible");

                cy.get(zeplin)
                  .find("[data-cy='brandZeplin']")
                  .should("be.visible");

                cy.get(gallery)
                  .find("[data-cy='brandGallery']")
                  .should("be.visible");
              }
            );

            cy.dataCy("VerticalLabel").spread(
              (
                photoshop,
                sketch,
                figma,
                corelDraw,
                afterEffects,
                zeplin,
                gallery
              ) => {
                cy.get(photoshop)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Photoshop");

                cy.get(sketch)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Sketch");

                cy.get(figma)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Figma");

                cy.get(corelDraw)
                  .find("[data-testid='LabelText']")
                  .should("contain", "CorelDRAW");

                cy.get(afterEffects)
                  .find("[data-testid='LabelText']")
                  .should("contain", "After Effects");

                cy.get(zeplin)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Zeplin");

                cy.get(gallery)
                  .find("[data-testid='LabelText']")
                  .should("contain", "Gallery");
              }
            );
          });
        });
      });
    });
  });
});
