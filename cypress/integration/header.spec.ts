// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("Header", () => {
  it("should contain logo, nav links, resume button and social links", () => {
    cy.visit("/");

    cy.dataCy("Header")
      .should("be.visible")
      .within(() => {
        cy.dataCy("SiteLogo")
          .should("be.visible")
          .should("not.be.disabled");

        cy.dataCy("NavItemLink")
          .should("have.length", 5)
          .each((link) => {
            cy.wrap(link)
              .should("be.visible")
              .should("not.be.disabled");
          })  
          .spread((portfolio, experience, skills, aboutMe, contact) => {
            cy.get(portfolio)
              .should("contain", "Portfolio");
              
            cy.get(experience)
              .should("contain", "Experience");
              
            cy.get(skills)
              .should("contain", "Skills");
              
            cy.get(aboutMe)
              .should("contain", "About me");
              
            cy.get(contact)
              .should("contain", "Contact");
          });

        cy.contains("resume").should("be.visible").should("not.be.disabled");

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
          .should("have.attr", "href", "https://www.linkedin.com/in/alan-hadyk-78738099/");
      });
  });

  it("each nav link should become active when given section is scrolled into view", () => {
    cy.visit("/");

    cy.dataCy("NavItemLink")
      .each((link) => {
        cy.wrap(link).should("have.attr", "data-isactive", "false");
      })  
      .spread((portfolio, experience, skills, aboutMe, contact) => {
        cy.get("#portfolio").scrollIntoView(); 

        cy.get(portfolio).should("have.attr", "data-isactive", "true");
        cy.get(experience).should("have.attr", "data-isactive", "false");
        cy.get(skills).should("have.attr", "data-isactive", "false");
        cy.get(aboutMe).should("have.attr", "data-isactive", "false");
        cy.get(contact).should("have.attr", "data-isactive", "false");

        cy.get("#experience").scrollIntoView(); 

        cy.get(portfolio).should("have.attr", "data-isactive", "false");
        cy.get(experience).should("have.attr", "data-isactive", "true");
        cy.get(skills).should("have.attr", "data-isactive", "false");
        cy.get(aboutMe).should("have.attr", "data-isactive", "false");
        cy.get(contact).should("have.attr", "data-isactive", "false");

        cy.get("#skills").scrollIntoView(); 

        cy.get(portfolio).should("have.attr", "data-isactive", "false");
        cy.get(experience).should("have.attr", "data-isactive", "false");
        cy.get(skills).should("have.attr", "data-isactive", "true");
        cy.get(aboutMe).should("have.attr", "data-isactive", "false");
        cy.get(contact).should("have.attr", "data-isactive", "false");

        cy.get("#about-me").scrollIntoView(); 

        cy.get(portfolio).should("have.attr", "data-isactive", "false");
        cy.get(experience).should("have.attr", "data-isactive", "false");
        cy.get(skills).should("have.attr", "data-isactive", "false");
        cy.get(aboutMe).should("have.attr", "data-isactive", "true");
        cy.get(contact).should("have.attr", "data-isactive", "false");

        cy.get("#contact").scrollIntoView(); 

        cy.get(portfolio).should("have.attr", "data-isactive", "false");
        cy.get(experience).should("have.attr", "data-isactive", "false");
        cy.get(skills).should("have.attr", "data-isactive", "false");
        cy.get(aboutMe).should("have.attr", "data-isactive", "false");
        cy.get(contact).should("have.attr", "data-isactive", "true");
      });
  });
});
