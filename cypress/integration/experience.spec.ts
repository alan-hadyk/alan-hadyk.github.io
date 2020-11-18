// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("Experience", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("TV, Desktop, Tablet and Mobile", () => {
    beforeEach(() => {
      cy.viewport(1681, 640);
    });

    it("should contain title, company Omise, company Shiji, company Sap, Company DiH and personally employment", () => {
      cy.dataCy("Experience")
        .should("be.visible")
        .find("[data-testid='Text']")
        .should("contain", "Experience");

      cy.dataCy("Experience").within(() => {
        cy.dataCy("CompanyOmise").should("be.visible");

        cy.dataCy("CompanyShiji").should("be.visible");

        cy.dataCy("CompanySAP").should("be.visible");

        cy.dataCy("CompanyDiH").should("be.visible");

        cy.dataCy("CompanyPersonallyEmployed").should("be.visible");
      });
    });

    describe("CompanyOmise", () => {
      it("should contain logo, title and date", () => {
        cy.dataCy("CompanyOmise")
          .should("be.visible")
          .within(() => {
            cy.dataCy("CompanyDescriptionMainTitle")
              .should("be.visible")
              .should("contain", "Software engineer");

            cy.dataCy("CompanyLogo").should("be.visible");

            cy.dataCy("IconWithLabel")
              .find("[data-testid='LabelText']")
              .should("be.visible")
              .should("contain", "August 2018 to present");
          });
      });

      describe("CompanyLogo", () => {
        it("should contain correct svg", () => {
          cy.dataCy("companyOmise").should("be.visible");
        });
      });

      describe("CompanyTechStack", () => {
        it("should contain correct title and icons with labels", () => {
          cy.dataCy("CompanyTechStack")
            .find("[data-testid='TechStackTitle']")
            .should("contain", "Tech stack");

          cy.dataCy("CompanyOmise").within(() => {
            cy.dataCy("CompanyTechStack")
              .should("be.visible")
              .within(() => {
                cy.dataCy("IconWithLabel")
                  .should("have.length", 20)
                  .each((iconWithLabel) => {
                    cy.wrap(iconWithLabel).should("be.visible");
                  });

                cy.dataCy("IconWithLabel").spread(
                  (
                    javascript,
                    ruby,
                    react,
                    rubyOnRails,
                    sinatra,
                    styledComponents,
                    webpack,
                    jest,
                    airbnb,
                    testingLibrary,
                    cypress,
                    node,
                    express,
                    apollo,
                    graphql,
                    docker,
                    jenkins,
                    buildkite,
                    basecamp,
                    gallery
                  ) => {
                    cy.get(javascript)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Javascript");

                    cy.get(javascript)
                      .find("[data-cy='brandJS']")
                      .should("be.visible");

                    cy.get(ruby)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Ruby");

                    cy.get(ruby)
                      .find("[data-cy='brandRuby']")
                      .should("be.visible");

                    cy.get(react)
                      .find("[data-testid='LabelText']")
                      .should("contain", "React");

                    cy.get(react)
                      .find("[data-cy='brandReact']")
                      .should("be.visible");

                    cy.get(rubyOnRails)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Ruby on Rails");

                    cy.get(rubyOnRails)
                      .find("[data-cy='brandRails']")
                      .should("be.visible");

                    cy.get(sinatra)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Sinatra");

                    cy.get(sinatra)
                      .find("[data-cy='brandSinatra']")
                      .should("be.visible");

                    cy.get(styledComponents)
                      .find("[data-testid='LabelText']")
                      .should("contain", "styled components");

                    cy.get(styledComponents)
                      .find("[data-cy='brandStyledComponents']")
                      .should("be.visible");

                    cy.get(webpack)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Webpack");

                    cy.get(webpack)
                      .find("[data-cy='brandWebpack']")
                      .should("be.visible");

                    cy.get(jest)
                      .find("[data-testid='LabelText']")
                      .should("contain", "JEST");

                    cy.get(jest)
                      .find("[data-cy='brandJEST']")
                      .should("be.visible");

                    cy.get(airbnb)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Enzyme");

                    cy.get(airbnb)
                      .find("[data-cy='brandAirbnb']")
                      .should("be.visible");

                    cy.get(testingLibrary)
                      .find("[data-testid='LabelText']")
                      .should("contain", "React Testing Library");

                    cy.get(testingLibrary)
                      .find("[data-cy='brandTestingLibrary']")
                      .should("be.visible");

                    cy.get(cypress)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Cypress");

                    cy.get(cypress)
                      .find("[data-cy='brandCypress']")
                      .should("be.visible");

                    cy.get(node)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Node.js");

                    cy.get(node)
                      .find("[data-cy='brandNode']")
                      .should("be.visible");

                    cy.get(express)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Express");

                    cy.get(express)
                      .find("[data-cy='brandExpress']")
                      .should("be.visible");

                    cy.get(apollo)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Apollo");

                    cy.get(apollo)
                      .find("[data-cy='brandApollo']")
                      .should("be.visible");

                    cy.get(graphql)
                      .find("[data-testid='LabelText']")
                      .should("contain", "GraphQL");

                    cy.get(graphql)
                      .find("[data-cy='brandGraphQL']")
                      .should("be.visible");

                    cy.get(docker)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Docker");

                    cy.get(docker)
                      .find("[data-cy='brandDocker']")
                      .should("be.visible");

                    cy.get(jenkins)
                      .find("[data-cy='brandJenkins']")
                      .should("be.visible");

                    cy.get(jenkins)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Jenkins");

                    cy.get(buildkite)
                      .find("[data-cy='brandBuildkite']")
                      .should("be.visible");

                    cy.get(buildkite)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Buildkite");

                    cy.get(basecamp)
                      .find("[data-cy='brandBasecamp']")
                      .should("be.visible");

                    cy.get(basecamp)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Basecamp");

                    cy.get(gallery)
                      .find("[data-cy='brandGallery']")
                      .should("be.visible");

                    cy.get(gallery)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Gallery");
                  }
                );
              });
          });
        });
      });

      describe("CompanyResponsibilities", () => {
        it("should contain correct text", () => {
          cy.dataCy("CompanyOmise").within(() => {
            cy.dataCy("CompanyResponsibilities")
              .should("be.visible")
              .within(() => {
                cy.dataCy("ListItem")
                  .should("have.length", 9)
                  .each((listItem) => {
                    cy.wrap(listItem).should("be.visible");
                  });

                cy.dataCy("ListItem").spread(
                  (
                    createScalable,
                    orchestrateAndDirect,
                    applyAndCertify,
                    streamlineProjectTimelines,
                    developApiGateway,
                    transformAndCreate,
                    authorUnit,
                    demonstrateExpertise,
                    mentorJunior
                  ) => {
                    cy.get(createScalable)
                      .find("[data-testid='CreateScalable']")
                      .should(
                        "contain",
                        "Create scalable and sane front-end architecture"
                      );

                    cy.get(orchestrateAndDirect)
                      .find("[data-testid='OrchestrateAndDirect']")
                      .should(
                        "contain",
                        "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systems"
                      );

                    cy.get(applyAndCertify)
                      .find("[data-testid='ApplyAndCertify']")
                      .should(
                        "contain",
                        "Apply development and certify adherence to best practices to deliver application based on React.js"
                      );

                    cy.get(streamlineProjectTimelines)
                      .find("[data-testid='StreamlineProjectTimelines']")
                      .should(
                        "contain",
                        "Streamline project timelines to ensure application is being developed"
                      );

                    cy.get(developApiGateway)
                      .find("[data-testid='DevelopApiGateway']")
                      .should(
                        "contain",
                        "Develop API gateway in the form of Express / Node.js server, along with Apollo / GraphQL stack"
                      );

                    cy.get(transformAndCreate)
                      .find("[data-testid='TransformAndCreate']")
                      .should(
                        "contain",
                        "Transform and create reusable components"
                      );

                    cy.get(authorUnit)
                      .find("[data-testid='AuthorUnit']")
                      .should(
                        "contain",
                        "Author unit, integration and acceptance tests"
                      );

                    cy.get(demonstrateExpertise)
                      .find("[data-testid='DemonstrateExpertise']")
                      .should(
                        "contain",
                        "Demonstrate expertise in the utilization of GraphQL to communicate with backend"
                      );

                    cy.get(mentorJunior)
                      .find("[data-testid='MentorJunior']")
                      .should("contain", "Mentor junior front-end developers");
                  }
                );
              });
          });
        });
      });
    });

    describe("CompanyShiji", () => {
      it("should contain logo, title and date", () => {
        cy.dataCy("CompanyShiji")
          .should("be.visible")
          .within(() => {
            cy.dataCy("CompanyDescriptionMainTitle")
              .should("be.visible")
              .should("contain", "Front end developer");

            cy.dataCy("CompanyLogo").should("be.visible");

            cy.dataCy("IconWithLabel")
              .find("[data-testid='LabelText']")
              .should("be.visible")
              .should("contain", "June 2017 to July 2018");
          });
      });

      describe("CompanyLogo", () => {
        it("should contain correct svg", () => {
          cy.dataCy("companyShiji").should("be.visible");
        });
      });

      describe("CompanyTechStack", () => {
        it("should contain correct title and icons with labels", () => {
          cy.dataCy("CompanyTechStack")
            .find("[data-testid='TechStackTitle']")
            .should("contain", "Tech stack");

          cy.dataCy("CompanyShiji").within(() => {
            cy.dataCy("CompanyTechStack")
              .should("be.visible")
              .within(() => {
                cy.dataCy("IconWithLabel")
                  .should("have.length", 15)
                  .each((iconWithLabel) => {
                    cy.wrap(iconWithLabel).should("be.visible");
                  });

                cy.dataCy("IconWithLabel").spread(
                  (
                    javascript,
                    typescript,
                    react,
                    redux,
                    ember,
                    sass,
                    docker,
                    qunit,
                    webpack,
                    node,
                    rest,
                    zeplin,
                    jira,
                    jenkins,
                    gitlab
                  ) => {
                    cy.get(javascript)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Javascript");

                    cy.get(javascript)
                      .find("[data-cy='brandJS']")
                      .should("be.visible");

                    cy.get(typescript)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Typescript");

                    cy.get(typescript)
                      .find("[data-cy='brandTS']")
                      .should("be.visible");

                    cy.get(react)
                      .find("[data-testid='LabelText']")
                      .should("contain", "React");

                    cy.get(react)
                      .find("[data-cy='brandReact']")
                      .should("be.visible");

                    cy.get(redux)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Redux");

                    cy.get(redux)
                      .find("[data-cy='brandRedux']")
                      .should("be.visible");

                    cy.get(ember)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Ember");

                    cy.get(ember)
                      .find("[data-cy='brandEmber']")
                      .should("be.visible");

                    cy.get(sass)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Sass");

                    cy.get(sass)
                      .find("[data-cy='brandSass']")
                      .should("be.visible");

                    cy.get(docker)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Docker");

                    cy.get(docker)
                      .find("[data-cy='brandDocker']")
                      .should("be.visible");

                    cy.get(qunit)
                      .find("[data-testid='LabelText']")
                      .should("contain", "QUnit");

                    cy.get(qunit)
                      .find("[data-cy='brandQunit']")
                      .should("be.visible");

                    cy.get(webpack)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Webpack");

                    cy.get(webpack)
                      .find("[data-cy='brandWebpack']")
                      .should("be.visible");

                    cy.get(node)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Node.js");

                    cy.get(node)
                      .find("[data-cy='brandNode']")
                      .should("be.visible");

                    cy.get(rest)
                      .find("[data-testid='LabelText']")
                      .should("contain", "REST");

                    cy.get(rest)
                      .find("[data-cy='brandREST']")
                      .should("be.visible");

                    cy.get(zeplin)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Zeplin");

                    cy.get(zeplin)
                      .find("[data-cy='brandZeplin']")
                      .should("be.visible");

                    cy.get(jira)
                      .find("[data-testid='LabelText']")
                      .should("contain", "JIRA");

                    cy.get(jira)
                      .find("[data-cy='brandJIRA']")
                      .should("be.visible");

                    cy.get(jenkins)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Jenkins");

                    cy.get(jenkins)
                      .find("[data-cy='brandJenkins']")
                      .should("be.visible");

                    cy.get(gitlab)
                      .find("[data-testid='LabelText']")
                      .should("contain", "GitLab");

                    cy.get(gitlab)
                      .find("[data-cy='brandGitlab']")
                      .should("be.visible");
                  }
                );
              });
          });
        });
      });

      describe("CompanyResponsibilities", () => {
        it("should contain correct text", () => {
          cy.dataCy("CompanyShiji").within(() => {
            cy.dataCy("CompanyResponsibilities")
              .should("be.visible")
              .within(() => {
                cy.dataCy("ListItem")
                  .should("have.length", 7)
                  .each((listItem) => {
                    cy.wrap(listItem).should("be.visible");
                  });

                cy.dataCy("ListItem").spread(
                  (
                    orchestrateAndDirect,
                    applyAndCertify,
                    streamlineProjectTimelines,
                    transformAndCreate,
                    authorUnit,
                    demonstrateExpertise,
                    mentorJunior
                  ) => {
                    cy.get(orchestrateAndDirect)
                      .find("[data-testid='OrchestrateAndDirect']")
                      .should(
                        "contain",
                        "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage hotels"
                      );

                    cy.get(applyAndCertify)
                      .find("[data-testid='ApplyAndCertify']")
                      .should(
                        "contain",
                        "Apply development and certify adherence to best practices to deliver PoC based on React.js"
                      );

                    cy.get(streamlineProjectTimelines)
                      .find("[data-testid='StreamlineProjectTimelines']")
                      .should(
                        "contain",
                        "Streamline project timelines to ensure application is being developed in Ember.js with TypeScript"
                      );

                    cy.get(transformAndCreate)
                      .find("[data-testid='TransformAndCreate']")
                      .should(
                        "contain",
                        "Transform and create reusable components and manage adapters, models and serializers"
                      );

                    cy.get(authorUnit)
                      .find("[data-testid='AuthorUnit']")
                      .should(
                        "contain",
                        "Author unit, integration and acceptance tests"
                      );

                    cy.get(demonstrateExpertise)
                      .find("[data-testid='DemonstrateExpertise']")
                      .should(
                        "contain",
                        "Demonstrate expertise in the utilization of REST to communicate with backend"
                      );

                    cy.get(mentorJunior)
                      .find("[data-testid='MentorJunior']")
                      .should("contain", "Mentor junior front-end developers");
                  }
                );
              });
          });
        });
      });
    });

    describe("CompanySAP", () => {
      it("should contain logo, title and date", () => {
        cy.dataCy("CompanySAP")
          .should("be.visible")
          .within(() => {
            cy.dataCy("CompanyDescriptionMainTitle")
              .should("be.visible")
              .should("contain", "Front end developer");

            cy.dataCy("CompanyLogo").should("be.visible");

            cy.dataCy("IconWithLabel")
              .find("[data-testid='LabelText']")
              .should("be.visible")
              .should("contain", "November 2015 to May 2017");
          });
      });

      describe("CompanyLogo", () => {
        it("should contain correct svg", () => {
          cy.dataCy("companySAP").should("be.visible");
        });
      });

      describe("CompanyTechStack", () => {
        it("should contain correct title and icons with labels", () => {
          cy.dataCy("CompanyTechStack")
            .find("[data-testid='TechStackTitle']")
            .should("contain", "Tech stack");

          cy.dataCy("CompanySAP").within(() => {
            cy.dataCy("CompanyTechStack")
              .should("be.visible")
              .within(() => {
                cy.dataCy("IconWithLabel")
                  .should("have.length", 13)
                  .each((iconWithLabel) => {
                    cy.wrap(iconWithLabel).should("be.visible");
                  });

                cy.dataCy("IconWithLabel").spread(
                  (
                    javascript,
                    coffeeScript,
                    react,
                    redux,
                    cssModules,
                    webpack,
                    node,
                    docPad,
                    jest,
                    enzyme,
                    jira,
                    stash,
                    bamboo
                  ) => {
                    cy.get(javascript)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Javascript");

                    cy.get(javascript)
                      .find("[data-cy='brandJS']")
                      .should("be.visible");

                    cy.get(coffeeScript)
                      .find("[data-testid='LabelText']")
                      .should("contain", "CoffeeScript");

                    cy.get(coffeeScript)
                      .find("[data-cy='brandCoffeeScript']")
                      .should("be.visible");

                    cy.get(react)
                      .find("[data-testid='LabelText']")
                      .should("contain", "React");

                    cy.get(react)
                      .find("[data-cy='brandReact']")
                      .should("be.visible");

                    cy.get(redux)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Redux");

                    cy.get(redux)
                      .find("[data-cy='brandRedux']")
                      .should("be.visible");

                    cy.get(cssModules)
                      .find("[data-testid='LabelText']")
                      .should("contain", "CSS Modules");

                    cy.get(cssModules)
                      .find("[data-cy='brandCSSModules']")
                      .should("be.visible");

                    cy.get(webpack)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Webpack");

                    cy.get(webpack)
                      .find("[data-cy='brandWebpack']")
                      .should("be.visible");

                    cy.get(node)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Node.js");

                    cy.get(node)
                      .find("[data-cy='brandNode']")
                      .should("be.visible");

                    cy.get(docPad)
                      .find("[data-testid='LabelText']")
                      .should("contain", "DocPad");

                    cy.get(docPad)
                      .find("[data-cy='brandDocpad']")
                      .should("be.visible");

                    cy.get(jest)
                      .find("[data-testid='LabelText']")
                      .should("contain", "JEST");

                    cy.get(jest)
                      .find("[data-cy='brandJEST']")
                      .should("be.visible");

                    cy.get(enzyme)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Enzyme");

                    cy.get(enzyme)
                      .find("[data-cy='brandAirbnb']")
                      .should("be.visible");

                    cy.get(jira)
                      .find("[data-testid='LabelText']")
                      .should("contain", "JIRA");

                    cy.get(jira)
                      .find("[data-cy='brandJIRA']")
                      .should("be.visible");

                    cy.get(stash)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Stash");

                    cy.get(stash)
                      .find("[data-cy='brandStash']")
                      .should("be.visible");

                    cy.get(bamboo)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Bamboo");

                    cy.get(bamboo)
                      .find("[data-cy='brandBamboo']")
                      .should("be.visible");
                  }
                );
              });
          });
        });
      });

      describe("CompanyResponsibilities", () => {
        it("should contain correct text", () => {
          cy.dataCy("CompanySAP").within(() => {
            cy.dataCy("CompanyResponsibilities")
              .should("be.visible")
              .within(() => {
                cy.dataCy("ListItem")
                  .should("have.length", 5)
                  .each((listItem) => {
                    cy.wrap(listItem).should("be.visible");
                  });

                cy.dataCy("ListItem").spread(
                  (
                    alignedAndBridged,
                    promotedSynchronized,
                    engageAndDeliver,
                    navigatedToDrive,
                    enabledTapInto
                  ) => {
                    cy.get(alignedAndBridged)
                      .find("[data-testid='AlignedAndBridged']")
                      .should(
                        "contain",
                        "Aligned objectives and bridged communication for UI development and monitoring of various projects and services"
                      );

                    cy.get(promotedSynchronized)
                      .find("[data-testid='PromotedSynchronized']")
                      .should(
                        "contain",
                        "Promoted synchronized communication to produce Agile methodology across projects"
                      );

                    cy.get(engageAndDeliver)
                      .find("[data-testid='EngageAndDeliver']")
                      .should(
                        "contain",
                        "Sought as speaker to engage and deliver university lectures"
                      );

                    cy.get(navigatedToDrive)
                      .find("[data-testid='NavigatedToDrive']")
                      .should(
                        "contain",
                        "Navigated rapidly evolving digital technology landscapes to drive team comprehension of JavaScript frameworks"
                      );

                    cy.get(enabledTapInto)
                      .find("[data-testid='EnabledTapInto']")
                      .should(
                        "contain",
                        "Enabled our product team to tap into valuable data sources and build incredible features for our customers"
                      );
                  }
                );
              });
          });
        });
      });
    });

    describe("CompanyDiH", () => {
      it("should contain logo, title and date", () => {
        cy.dataCy("CompanyDiH")
          .should("be.visible")
          .within(() => {
            cy.dataCy("CompanyDescriptionMainTitle")
              .should("be.visible")
              .should("contain", "Front end developer");

            cy.dataCy("CompanyLogo").should("be.visible");

            cy.dataCy("IconWithLabel")
              .find("[data-testid='LabelText']")
              .should("be.visible")
              .should("contain", "October 2010 to October 2015");
          });
      });

      describe("CompanyLogo", () => {
        it("should contain correct svg", () => {
          cy.dataCy("companyDIH").should("be.visible");
        });
      });

      describe("CompanyTechStack", () => {
        it("should contain correct title and icons with labels", () => {
          cy.dataCy("CompanyTechStack")
            .find("[data-testid='TechStackTitle']")
            .should("contain", "Tech stack");

          cy.dataCy("CompanyDiH").within(() => {
            cy.dataCy("CompanyTechStack")
              .should("be.visible")
              .within(() => {
                cy.dataCy("IconWithLabel")
                  .should("have.length", 6)
                  .each((iconWithLabel) => {
                    cy.wrap(iconWithLabel).should("be.visible");
                  });

                cy.dataCy("IconWithLabel").spread(
                  (javascript, sass, less, jQuery, prestaShop, redmine) => {
                    cy.get(javascript)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Javascript");

                    cy.get(javascript)
                      .find("[data-cy='brandJS']")
                      .should("be.visible");

                    cy.get(sass)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Sass");

                    cy.get(sass)
                      .find("[data-cy='brandSass']")
                      .should("be.visible");

                    cy.get(less)
                      .find("[data-testid='LabelText']")
                      .should("contain", "LESS");

                    cy.get(less)
                      .find("[data-cy='brandLESS']")
                      .should("be.visible");

                    cy.get(jQuery)
                      .find("[data-testid='LabelText']")
                      .should("contain", "jQuery");

                    cy.get(jQuery)
                      .find("[data-cy='brandJQuery']")
                      .should("be.visible");

                    cy.get(prestaShop)
                      .find("[data-testid='LabelText']")
                      .should("contain", "PrestaShop");

                    cy.get(prestaShop)
                      .find("[data-cy='brandPrestaShop']")
                      .should("be.visible");

                    cy.get(redmine)
                      .find("[data-testid='LabelText']")
                      .should("contain", "Redmine");

                    cy.get(redmine)
                      .find("[data-cy='brandRedmine']")
                      .should("be.visible");
                  }
                );
              });
          });
        });
      });

      describe("CompanyResponsibilities", () => {
        it("should contain correct text", () => {
          cy.dataCy("CompanyDiH").within(() => {
            cy.dataCy("CompanyResponsibilities")
              .should("be.visible")
              .within(() => {
                cy.dataCy("ListItem")
                  .should("have.length", 5)
                  .each((listItem) => {
                    cy.wrap(listItem).should("be.visible");
                  });

                cy.dataCy("ListItem").spread(
                  (
                    optimizedAndSystematized,
                    bolstered,
                    presentedInnovative,
                    fosteredCrossFunctional,
                    informedDecisions
                  ) => {
                    cy.get(optimizedAndSystematized)
                      .find("[data-testid='OptimizedAndSystematized']")
                      .should(
                        "contain",
                        "Optimized and systematized UI development (and sometimes design) of various e-commerce projects"
                      );

                    cy.get(bolstered)
                      .find("[data-testid='Bolstered']")
                      .should(
                        "contain",
                        "Bolstered continued professional development with concepts and technologies, such as: CSS preprocessors, UI pattern libraries and JavaScript task runners"
                      );

                    cy.get(presentedInnovative)
                      .find("[data-testid='PresentedInnovative']")
                      .should(
                        "contain",
                        "Presented innovative approaches in the form of brown bags to all engineers to help shape our technical market presence"
                      );

                    cy.get(fosteredCrossFunctional)
                      .find("[data-testid='FosteredCrossFunctional']")
                      .should(
                        "contain",
                        "Fostered cross-functional communication with information technology, end users, and other stakeholders to translate needs into system requirements, solid solutions, and reliable results"
                      );

                    cy.get(informedDecisions)
                      .find("[data-testid='InformedDecisions']")
                      .should(
                        "contain",
                        "Informed decisions to incorporate the use of defect and enhancement tracking software and processes"
                      );
                  }
                );
              });
          });
        });
      });
    });

    describe("CompanyPersonallyEmployed", () => {
      it("should contain logo, title and date", () => {
        cy.dataCy("CompanyPersonallyEmployed")
          .should("be.visible")
          .within(() => {
            cy.dataCy("CompanyDescriptionMainTitle")
              .should("be.visible")
              .should("contain", "Freelancer");

            cy.dataCy("CompanyLogo").should("be.visible");

            cy.dataCy("IconWithLabel")
              .find("[data-testid='LabelText']")
              .should("be.visible")
              .should("contain", "May 2008 to September 2010");
          });
      });

      describe("CompanyLogo", () => {
        it("should contain correct svg", () => {
          cy.dataCy("logo").should("be.visible");
        });
      });

      describe("CompanyTechStack", () => {
        it("should contain correct title and icons with labels", () => {
          cy.dataCy("CompanyTechStack")
            .find("[data-testid='TechStackTitle']")
            .should("contain", "Tech stack");

          cy.dataCy("CompanyPersonallyEmployed").within(() => {
            cy.dataCy("CompanyTechStack")
              .should("be.visible")
              .within(() => {
                cy.dataCy("IconWithLabel")
                  .should("have.length", 2)
                  .each((iconWithLabel) => {
                    cy.wrap(iconWithLabel).should("be.visible");
                  });

                cy.dataCy("IconWithLabel").spread((javascript, jQuery) => {
                  cy.get(javascript)
                    .find("[data-testid='LabelText']")
                    .should("contain", "Javascript");

                  cy.get(javascript)
                    .find("[data-cy='brandJS']")
                    .should("be.visible");

                  cy.get(jQuery)
                    .find("[data-testid='LabelText']")
                    .should("contain", "jQuery");

                  cy.get(jQuery)
                    .find("[data-cy='brandJQuery']")
                    .should("be.visible");
                });
              });
          });
        });
      });

      describe("CompanyResponsibilities", () => {
        it("should contain correct text", () => {
          cy.dataCy("CompanyPersonallyEmployed").within(() => {
            cy.dataCy("CompanyResponsibilities")
              .should("be.visible")
              .within(() => {
                cy.dataCy("ListItem")
                  .should("have.length", 4)
                  .each((listItem) => {
                    cy.wrap(listItem).should("be.visible");
                  });

                cy.dataCy("ListItem").spread(
                  (
                    employedPersonalReferral,
                    initializedPersonalMotivation,
                    cultivatedStrongTies,
                    coordinatedDevelopment
                  ) => {
                    cy.get(employedPersonalReferral)
                      .find("[data-testid='EmployedPersonalReferral']")
                      .should(
                        "contain",
                        "Employed personal referral networks to attain small job order contracts"
                      );

                    cy.get(initializedPersonalMotivation)
                      .find("[data-testid='InitializedPersonalMotivation']")
                      .should(
                        "contain",
                        "Initialized personal motivation to acquire front-end development skills"
                      );

                    cy.get(cultivatedStrongTies)
                      .find("[data-testid='CultivatedStrongTies']")
                      .should(
                        "contain",
                        "Cultivated strong ties to the technology community through exemplified demonstration of abilities"
                      );

                    cy.get(coordinatedDevelopment)
                      .find("[data-testid='CoordinatedDevelopment']")
                      .should(
                        "contain",
                        "Coordinated development of interactive web-based data visualizations, including interactive charts and maps"
                      );
                  }
                );
              });
          });
        });
      });
    });
  });
});
