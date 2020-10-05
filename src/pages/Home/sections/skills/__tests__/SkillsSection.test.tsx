import React from "react";
import { RenderResult } from "@testing-library/react";

import SkillsSection from "<pages>/Home/sections/skills/SkillsSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / skills / SkillsSection", () => {
  test("should have correct structure", () => {
    const {
      ItemSpacingContainers,
      Masonries,
      SkillsItems,
      SkillsResponsiveDesktop,
      SkillsResponsiveMobile,
      SkillsResponsiveTablet,
      SkillsResponsiveTv,
      SkillsSectionContainer,
      VerticalIconsWithLabels 
    } = setup();

    expect(SkillsSectionContainer.children[4]).toEqual(SkillsResponsiveTv);
    expect(SkillsResponsiveTv.children[0]).toEqual(Masonries[0]);

    expect(SkillsSectionContainer.children[5]).toEqual(SkillsResponsiveDesktop);
    expect(SkillsResponsiveDesktop.children[0]).toEqual(Masonries[1]);

    expect(SkillsSectionContainer.children[6]).toEqual(SkillsResponsiveTablet);
    expect(SkillsResponsiveTablet.children[0]).toEqual(Masonries[2]);

    expect(SkillsSectionContainer.children[7]).toEqual(SkillsResponsiveMobile);

    Array(11).forEach((_, index: number) => {
      expect(SkillsResponsiveMobile.children[index]).toEqual(ItemSpacingContainers[index]);
      expect(ItemSpacingContainers[index].children[0]).toEqual(SkillsItems[index]);
      expect(ItemSpacingContainers[index].children[1].children[0].children[0].children[0].children[0]).toEqual(VerticalIconsWithLabels[index]);
    });
  });

  describe("SkillsSectionContainer", () => {
    describe("Props", () => {
      describe("title", () => {
        test("should have Skills", () => {
          const {
            SkillsSectionContainer
          } = setup();
  
          expect(SkillsSectionContainer.children[0].children[0].textContent).toEqual("Skills");
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("marginBottom", () => {
        test("should have 3.2rem", () => {
          const {
            ItemSpacingContainers
          } = setup();
  
          ItemSpacingContainers.forEach(ItemSpacingContainer => {
            expect(ItemSpacingContainer).toHaveStyleRule("margin-bottom", "3.2rem");
          });
        });
      });
    });
  });

  describe("SkillsItem", () => {
    describe("Props", () => {
      describe("data", () => {
        test("should have correct data for each item", () => {
          const {
            SkillsItems,
            VerticalIconsWithLabels
          } = setup();
  
          expect(SkillsItems[0].children[0].textContent).toEqual("Languages");
          expect(VerticalIconsWithLabels[0].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-JS.svg, Brand-TS.svg, Brand-CoffeeScript.svg, ");
          expect(VerticalIconsWithLabels[0].children[1].textContent).toEqual("JavaScriptTypeScriptCoffeeScript");
  
          expect(SkillsItems[1].children[0].textContent).toEqual("Frameworks");
          expect(VerticalIconsWithLabels[1].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-React.svg, Brand-React.svg, Brand-Node.svg, Brand-Node.svg, Brand-Ember.svg, Brand-PrestaShop.svg, Brand-jQuery.svg, ");
          expect(VerticalIconsWithLabels[1].children[1].textContent).toEqual("ReactReact NativeNode.jsExpressEmberPrestaShopjQuery");
  
          expect(SkillsItems[2].children[0].textContent).toEqual("State Management");
          expect(VerticalIconsWithLabels[2].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-Apollo.svg, Brand-Redux.svg, ");
          expect(VerticalIconsWithLabels[2].children[1].textContent).toEqual("ApolloRedux");
  
          expect(SkillsItems[3].children[0].textContent).toEqual("Web APIs");
          expect(VerticalIconsWithLabels[3].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-GraphQL.svg, Brand-Apollo.svg, Brand-REST.svg, Brand-Websocket.svg, ");
          expect(VerticalIconsWithLabels[3].children[1].textContent).toEqual("GraphQLApolloRESTWebSockets");
  
          expect(SkillsItems[4].children[0].textContent).toEqual("Web Technologies");
          expect(VerticalIconsWithLabels[4].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-HTML.svg, Brand-CSS.svg, ");
          expect(VerticalIconsWithLabels[4].children[1].textContent).toEqual("HTMLCSS");
  
          expect(SkillsItems[5].children[0].textContent).toEqual("CSS Tools");
          expect(VerticalIconsWithLabels[5].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-StyledComponents.svg, Brand-Sass.svg, Brand-CSSModules.svg, Brand-LESS.svg, ");
          expect(VerticalIconsWithLabels[5].children[1].textContent).toEqual("styled componentsSassCSS ModulesLESS");
  
          expect(SkillsItems[6].children[0].textContent).toEqual("Testing");
          expect(VerticalIconsWithLabels[6].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-JEST.svg, Brand-Airbnb.svg, Brand-TestingLibrary.svg, Brand-Cypress.svg, Brand-Qunit.svg, ");
          expect(VerticalIconsWithLabels[6].children[1].textContent).toEqual("JESTEnzymeReact Testing LibraryCypressQUnit");
  
          expect(SkillsItems[7].children[0].textContent).toEqual("CI / CD");
          expect(VerticalIconsWithLabels[7].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-Jenkins.svg, Brand-Buildkite.svg, Brand-Bamboo.svg, Icon-GitHub.svg, Icon-GitHub.svg, Brand-Docker.svg, Brand-Gitlab.svg, Brand-Stash.svg, ");
          expect(VerticalIconsWithLabels[7].children[1].textContent).toEqual("JenkinsBuildkiteBambooGitHub ActionsGitHub EnterpriseDockerGitLabStash");
  
          expect(SkillsItems[8].children[0].textContent).toEqual("Bundlers");
          expect(VerticalIconsWithLabels[8].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-Webpack.svg, Brand-Grunt.svg, Brand-Gulp.svg, ");
          expect(VerticalIconsWithLabels[8].children[1].textContent).toEqual("WebpackGruntGulp");
  
          expect(SkillsItems[9].children[0].textContent).toEqual("Task Management");
          expect(VerticalIconsWithLabels[9].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-JIRA.svg, Brand-Phabricator.svg, Brand-Redmine.svg, Brand-Quire.svg, Brand-Trello.svg, Brand-Taskade.svg, Brand-Basecamp.svg, ");
          expect(VerticalIconsWithLabels[9].children[1].textContent).toEqual("JIRAPhabricatorRedmineQuireTrelloTaskadeBasecamp");
  
          expect(SkillsItems[10].children[0].textContent).toEqual("Design Tools");
          expect(VerticalIconsWithLabels[10].children[0].textContent.replace(/.svg/gi, ".svg, ")).toEqual("Brand-Photoshop.svg, Brand-Sketch.svg, Brand-Figma.svg, Brand-Corel.svg, Brand-AfterEffects.svg, Brand-Zeplin.svg, Brand-Gallery.svg, ");
          expect(VerticalIconsWithLabels[10].children[1].textContent).toEqual("PhotoshopSketchFigmaCorelDRAWAfter EffectsZeplinGallery");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ItemSpacingContainers: Element[];
  Masonries: NodeListOf<Element>;
  SkillsItems: Element[];
  SkillsResponsiveDesktop: Element;
  SkillsResponsiveMobile: Element;
  SkillsResponsiveTablet: Element;
  SkillsResponsiveTv: Element;
  SkillsSectionContainer: Element;
  VerticalIconsWithLabels: Element[];
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <SkillsSection />
  );

  const { queryAllByTestId } = utils || {};

  const ItemSpacingContainers: Element[] = queryAllByTestId("ItemSpacingContainer");
  const Masonries: NodeListOf<Element> = document.querySelectorAll("[role='grid']");
  const SkillsItems: Element[] = queryAllByTestId("SkillsItem");
  const SkillsResponsiveDesktop: Element = queryAllByTestId("SkillsResponsiveDesktop")[0];
  const SkillsResponsiveMobile: Element = queryAllByTestId("SkillsResponsiveMobile")[0];
  const SkillsResponsiveTablet: Element = queryAllByTestId("SkillsResponsiveTablet")[0];
  const SkillsResponsiveTv: Element = queryAllByTestId("SkillsResponsiveTv")[0];
  const SkillsSectionContainer: Element = queryAllByTestId("SkillsSection")[0];
  const VerticalIconsWithLabels: Element[] = queryAllByTestId("VerticalIconsWithLabels");
  
  return {
    ...utils,
    ItemSpacingContainers,
    Masonries,
    SkillsItems,
    SkillsResponsiveDesktop,
    SkillsResponsiveMobile,
    SkillsResponsiveTablet,
    SkillsResponsiveTv,
    SkillsSectionContainer,
    VerticalIconsWithLabels
  };
}
 