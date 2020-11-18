// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("each nav link should become active when given section is scrolled into view", () => {
    cy.dataCy("NavItemLink")
      .each((link) => {
        cy.wrap(link).should("have.attr", "data-isactive", "false");
      })
      .spread((experience, skills, aboutMe, contact) => {
        cy.get("#experience").scrollIntoView();

        cy.get(experience).should("have.attr", "data-isactive", "true");
        cy.get(skills).should("have.attr", "data-isactive", "false");
        cy.get(aboutMe).should("have.attr", "data-isactive", "false");
        cy.get(contact).should("have.attr", "data-isactive", "false");

        cy.get("#skills").scrollIntoView();

        cy.get(experience).should("have.attr", "data-isactive", "false");
        cy.get(skills).should("have.attr", "data-isactive", "true");
        cy.get(aboutMe).should("have.attr", "data-isactive", "false");
        cy.get(contact).should("have.attr", "data-isactive", "false");

        cy.get("#about-me").scrollIntoView();

        cy.get(experience).should("have.attr", "data-isactive", "false");
        cy.get(skills).should("have.attr", "data-isactive", "false");
        cy.get(aboutMe).should("have.attr", "data-isactive", "true");
        cy.get(contact).should("have.attr", "data-isactive", "false");

        cy.get("#contact").scrollIntoView();

        cy.get(experience).should("have.attr", "data-isactive", "false");
        cy.get(skills).should("have.attr", "data-isactive", "false");
        cy.get(aboutMe).should("have.attr", "data-isactive", "false");
        cy.get(contact).should("have.attr", "data-isactive", "true");
      });
  });

  describe("TV", () => {
    beforeEach(() => {
      cy.viewport(2000, 1681);
    });

    it("should contain logo, nav links, cv button and social links", () => {
      cy.dataCy("Header")
        .should("be.visible")
        .within(() => {
          cy.dataCy("SiteLogo").should("be.visible").should("not.be.disabled");

          cy.dataCy("SiteLogoMobile").should("not.be.visible");

          cy.dataCy("NavItemLink")
            .should("have.length", 4)
            .each((link) => {
              cy.wrap(link).should("be.visible").should("not.be.disabled");
            })
            .spread((experience, skills, aboutMe, contact) => {
              cy.get(experience).should("contain", "Experience");

              cy.get(skills).should("contain", "Skills");

              cy.get(aboutMe).should("contain", "About me");

              cy.get(contact).should("contain", "Contact");
            });

          cy.dataCy("CvButton")
            .should("be.visible")
            .should("not.be.disabled")
            .should("contain", "cv");

          cy.dataCy("gitHub")
            .should("be.visible")
            .should("not.be.disabled")
            .should("have.attr", "href", "https://github.com/alan-hadyk");

          cy.dataCy("codeSandbox")
            .should("be.visible")
            .should("not.be.disabled")
            .should("have.attr", "href", "https://codesandbox.io/u/alan-hadyk");

          cy.dataCy("linkedIn")
            .should("be.visible")
            .should("not.be.disabled")
            .should(
              "have.attr",
              "href",
              "https://www.linkedin.com/in/alan-hadyk-78738099/"
            );
        });
    });
  });

  describe("Desktop", () => {
    beforeEach(() => {
      cy.viewport(1680, 1281);
    });

    it("should contain logo, nav links, cv button and menu button; should contain and social links inside side menu", () => {
      cy.dataCy("Header")
        .should("be.visible")
        .within(() => {
          cy.dataCy("SiteLogo").should("be.visible").should("not.be.disabled");

          cy.dataCy("SiteLogoMobile").should("not.be.visible");

          cy.dataCy("NavItemLink")
            .should("have.length", 4)
            .each((link) => {
              cy.wrap(link).should("be.visible").should("not.be.disabled");
            })
            .spread((experience, skills, aboutMe, contact) => {
              cy.get(experience).should("contain", "Experience");

              cy.get(skills).should("contain", "Skills");

              cy.get(aboutMe).should("contain", "About me");

              cy.get(contact).should("contain", "Contact");
            });

          cy.dataCy("CvButton")
            .should("be.visible")
            .should("not.be.disabled")
            .should("contain", "cv");

          cy.dataCy("gitHub").should("not.be.visible");
          cy.dataCy("codeSandbox").should("not.be.visible");
          cy.dataCy("linkedIn").should("not.be.visible");

          cy.dataCy("SideMenu").should("not.be.visible");

          // Open side menu
          cy.dataCy("MenuButton")
            .should("be.visible")
            .should("not.be.disabled")
            .click();
        });

      cy.dataCy("SideMenu")
        .should("be.visible")
        .within(() => {
          cy.dataCy("gitHub")
            .should("be.visible")
            .should("not.be.disabled")
            .should("have.attr", "href", "https://github.com/alan-hadyk");

          cy.dataCy("codeSandbox")
            .should("be.visible")
            .should("not.be.disabled")
            .should("have.attr", "href", "https://codesandbox.io/u/alan-hadyk");

          cy.dataCy("linkedIn")
            .should("be.visible")
            .should("not.be.disabled")
            .should(
              "have.attr",
              "href",
              "https://www.linkedin.com/in/alan-hadyk-78738099/"
            );
        });

      // Close side menu
      cy.dataCy("MenuButton")
        .should("be.visible")
        .should("not.be.disabled")
        .click();

      cy.dataCy("SideMenu").should("not.be.visible");
    });
  });

  describe("Tablet", () => {
    beforeEach(() => {
      cy.viewport(1280, 641);
    });

    it("should contain logo and menu button; should contain nav links, cv button and social links inside side menu", () => {
      cy.dataCy("Header")
        .should("be.visible")
        .within(() => {
          cy.dataCy("SiteLogo").should("be.visible").should("not.be.disabled");

          cy.dataCy("SiteLogoMobile").should("not.be.visible");

          cy.dataCy("NavItemLink").should("not.be.visible");
          cy.contains("cv").should("not.be.visible");
          cy.dataCy("gitHub").should("not.be.visible");
          cy.dataCy("codeSandbox").should("not.be.visible");
          cy.dataCy("linkedIn").should("not.be.visible");

          cy.dataCy("SideMenu").should("not.be.visible");

          // Open side menu
          cy.dataCy("MenuButton")
            .should("be.visible")
            .should("not.be.disabled")
            .click();
        });

      cy.dataCy("SideMenu")
        .should("be.visible")
        .within(() => {
          cy.dataCy("NavItemLink")
            .should("have.length", 4)
            .each((link) => {
              cy.wrap(link).should("be.visible").should("not.be.disabled");
            })
            .spread((experience, skills, aboutMe, contact) => {
              cy.get(experience).should("contain", "Experience");

              cy.get(skills).should("contain", "Skills");

              cy.get(aboutMe).should("contain", "About me");

              cy.get(contact).should("contain", "Contact");
            });

          cy.dataCy("CvButton")
            .should("be.visible")
            .should("not.be.disabled")
            .should("contain", "cv");

          cy.dataCy("gitHub")
            .should("be.visible")
            .should("not.be.disabled")
            .should("have.attr", "href", "https://github.com/alan-hadyk");

          cy.dataCy("codeSandbox")
            .should("be.visible")
            .should("not.be.disabled")
            .should("have.attr", "href", "https://codesandbox.io/u/alan-hadyk");

          cy.dataCy("linkedIn")
            .should("be.visible")
            .should("not.be.disabled")
            .should(
              "have.attr",
              "href",
              "https://www.linkedin.com/in/alan-hadyk-78738099/"
            );
        });

      // Close side menu
      cy.dataCy("MenuButton")
        .should("be.visible")
        .should("not.be.disabled")
        .click();

      cy.dataCy("SideMenu").should("not.be.visible");
    });
  });

  describe("Mobile", () => {
    beforeEach(() => {
      cy.viewport(400, 640);
    });

    it("should contain mobile logo and menu button; should contain nav links, cv button and social links inside side menu", () => {
      cy.dataCy("Header")
        .should("be.visible")
        .within(() => {
          cy.dataCy("SiteLogo").should("not.be.visible");

          cy.dataCy("SiteLogoMobile")
            .should("be.visible")
            .should("not.be.disabled");

          cy.dataCy("NavItemLink").should("not.be.visible");
          cy.contains("cv").should("not.be.visible");
          cy.dataCy("gitHub").should("not.be.visible");
          cy.dataCy("codeSandbox").should("not.be.visible");
          cy.dataCy("linkedIn").should("not.be.visible");

          cy.dataCy("SideMenu").should("not.be.visible");

          // Open side menu
          cy.dataCy("MenuButton")
            .should("be.visible")
            .should("not.be.disabled")
            .click();
        });

      cy.dataCy("SideMenu")
        .should("be.visible")
        .within(() => {
          cy.dataCy("NavItemLink")
            .should("have.length", 4)
            .each((link) => {
              cy.wrap(link).should("be.visible").should("not.be.disabled");
            })
            .spread((experience, skills, aboutMe, contact) => {
              cy.get(experience).should("contain", "Experience");

              cy.get(skills).should("contain", "Skills");

              cy.get(aboutMe).should("contain", "About me");

              cy.get(contact).should("contain", "Contact");
            });

          cy.dataCy("CvButton")
            .should("be.visible")
            .should("not.be.disabled")
            .should("contain", "cv");

          cy.dataCy("gitHub")
            .should("be.visible")
            .should("not.be.disabled")
            .should("have.attr", "href", "https://github.com/alan-hadyk");

          cy.dataCy("codeSandbox")
            .should("be.visible")
            .should("not.be.disabled")
            .should("have.attr", "href", "https://codesandbox.io/u/alan-hadyk");

          cy.dataCy("linkedIn")
            .should("be.visible")
            .should("not.be.disabled")
            .should(
              "have.attr",
              "href",
              "https://www.linkedin.com/in/alan-hadyk-78738099/"
            );
        });

      // Close side menu
      cy.dataCy("MenuButton")
        .should("be.visible")
        .should("not.be.disabled")
        .click();

      cy.dataCy("SideMenu").should("not.be.visible");
    });
  });
});
