import React from "react";
import { RenderResult } from "@testing-library/react";

import SkillsSection from "pages/Home/sections/skills/SkillsSection";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("pages / Home / sections / skills / SkillsSection", () => {
  test("should have correct structure", () => {
    const {
      ColumnsContainers,
      ItemSpacingContainers,
      SkillsItems,
      SkillsResponsiveDesktop,
      SkillsResponsiveMobile,
      SkillsResponsiveTablet,
      SkillsResponsiveTv,
      SkillsSectionContainer
    } = setup();

    expect(SkillsSectionContainer.children[2]).toEqual(SkillsResponsiveTv);
    expect(SkillsResponsiveTv.children[0]).toEqual(ColumnsContainers[0]);

    expect(SkillsSectionContainer.children[3]).toEqual(SkillsResponsiveDesktop);
    expect(SkillsResponsiveDesktop.children[0]).toEqual(ColumnsContainers[1]);

    expect(SkillsSectionContainer.children[4]).toEqual(SkillsResponsiveTablet);
    expect(SkillsResponsiveTablet.children[0]).toEqual(ColumnsContainers[2]);

    expect(SkillsSectionContainer.children[5]).toEqual(SkillsResponsiveMobile);

    [...Array(11)].forEach((_, index: number) => {
      expect(SkillsResponsiveTv.children[0].children[index]).toEqual(
        ItemSpacingContainers[index]
      );
      expect(ItemSpacingContainers[index].children[0]).toEqual(
        SkillsItems[index]
      );

      expect(SkillsResponsiveDesktop.children[0].children[index]).toEqual(
        ItemSpacingContainers[index + 11]
      );
      expect(ItemSpacingContainers[index + 11].children[0]).toEqual(
        SkillsItems[index + 11]
      );

      expect(SkillsResponsiveTablet.children[0].children[index]).toEqual(
        ItemSpacingContainers[index + 22]
      );
      expect(ItemSpacingContainers[index + 22].children[0]).toEqual(
        SkillsItems[index + 22]
      );

      expect(SkillsResponsiveMobile.children[index]).toEqual(
        ItemSpacingContainers[index + 33]
      );
      expect(ItemSpacingContainers[index + 33].children[0]).toEqual(
        SkillsItems[index + 33]
      );
    });
  });

  describe("SkillsSectionContainer", () => {
    describe("Props", () => {
      describe("id", () => {
        test("should equal skills", () => {
          const { SkillsSectionContainer } = setup();

          expect(SkillsSectionContainer.getAttribute("id")).toEqual("skills");
        });
      });

      describe("title", () => {
        test("should have Skills", () => {
          const { SkillsSectionContainer } = setup();

          expect(
            SkillsSectionContainer.children[0].children[0].textContent
          ).toEqual("Skills");
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("marginBottom", () => {
        test("should have 3.2rem", () => {
          const { ItemSpacingContainers } = setup();

          ItemSpacingContainers.forEach((ItemSpacingContainer) => {
            expect(ItemSpacingContainer).toHaveStyleRule(
              "margin-bottom",
              "3.2rem"
            );
          });
        });
      });
    });
  });

  describe("SkillsItem", () => {
    describe("Props", () => {
      describe("data", () => {
        test("should have correct data for each item", () => {
          const { SkillsItems, VerticalIconsWithLabels } = setup();

          expect(SkillsItems[0].children[0].textContent).toEqual("Languages");
          expect(
            VerticalIconsWithLabels[0].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJS.svg");

          expect(
            VerticalIconsWithLabels[0].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandTS.svg");

          expect(
            VerticalIconsWithLabels[0].children[0].children[2].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandCoffeeScript.svg");

          expect(
            VerticalIconsWithLabels[0].children[0].children[3].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandRuby.svg");

          expect(VerticalIconsWithLabels[0].children[1].textContent).toEqual(
            "JavaScriptTypeScriptCoffeeScriptRuby"
          );

          expect(SkillsItems[1].children[0].textContent).toEqual("Frameworks");

          expect(
            VerticalIconsWithLabels[1].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandReact.svg");

          expect(
            VerticalIconsWithLabels[1].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandReact.svg");

          expect(
            VerticalIconsWithLabels[1].children[0].children[2].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandNode.svg");

          expect(
            VerticalIconsWithLabels[1].children[0].children[3].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandNode.svg");

          expect(
            VerticalIconsWithLabels[1].children[0].children[4].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandEmber.svg");

          expect(
            VerticalIconsWithLabels[1].children[0].children[5].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandPrestaShop.svg");

          expect(
            VerticalIconsWithLabels[1].children[0].children[6].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJQuery.svg");

          expect(
            VerticalIconsWithLabels[1].children[0].children[7].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandRails.svg");

          expect(
            VerticalIconsWithLabels[1].children[0].children[8].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandSinatra.svg");

          expect(VerticalIconsWithLabels[1].children[1].textContent).toEqual(
            "ReactReact NativeNode.jsExpressEmberPrestaShopjQueryRuby on RailsSinatra"
          );

          expect(SkillsItems[2].children[0].textContent).toEqual(
            "State Management"
          );

          expect(
            VerticalIconsWithLabels[2].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandApollo.svg");

          expect(
            VerticalIconsWithLabels[2].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandRedux.svg");

          expect(SkillsItems[3].children[0].textContent).toEqual("Web APIs");

          expect(
            VerticalIconsWithLabels[3].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandGraphQL.svg");

          expect(
            VerticalIconsWithLabels[3].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandApollo.svg");

          expect(
            VerticalIconsWithLabels[3].children[0].children[2].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandREST.svg");

          expect(
            VerticalIconsWithLabels[3].children[0].children[3].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandWebsocket.svg");

          expect(VerticalIconsWithLabels[3].children[1].textContent).toEqual(
            "GraphQLApolloRESTWebSockets"
          );

          expect(SkillsItems[4].children[0].textContent).toEqual(
            "Web Technologies"
          );

          expect(
            VerticalIconsWithLabels[4].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandHTML.svg");

          expect(
            VerticalIconsWithLabels[4].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandCSS.svg");

          expect(VerticalIconsWithLabels[4].children[1].textContent).toEqual(
            "HTMLCSS"
          );

          expect(SkillsItems[5].children[0].textContent).toEqual("CSS Tools");

          expect(
            VerticalIconsWithLabels[5].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandStyledComponents.svg");

          expect(
            VerticalIconsWithLabels[5].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandSass.svg");

          expect(
            VerticalIconsWithLabels[5].children[0].children[2].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandCSSModules.svg");

          expect(
            VerticalIconsWithLabels[5].children[0].children[3].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandLESS.svg");

          expect(VerticalIconsWithLabels[5].children[1].textContent).toEqual(
            "styled componentsSassCSS ModulesLESS"
          );

          expect(SkillsItems[6].children[0].textContent).toEqual("Testing");

          expect(
            VerticalIconsWithLabels[6].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJEST.svg");

          expect(
            VerticalIconsWithLabels[6].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandAirbnb.svg");

          expect(
            VerticalIconsWithLabels[6].children[0].children[2].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandTestingLibrary.svg");

          expect(
            VerticalIconsWithLabels[6].children[0].children[3].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandCypress.svg");

          expect(
            VerticalIconsWithLabels[6].children[0].children[4].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandQunit.svg");

          expect(VerticalIconsWithLabels[6].children[1].textContent).toEqual(
            "JESTEnzymeReact Testing LibraryCypressQUnit"
          );

          expect(SkillsItems[7].children[0].textContent).toEqual("CI / CD");

          expect(
            VerticalIconsWithLabels[7].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJenkins.svg");

          expect(
            VerticalIconsWithLabels[7].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandBuildkite.svg");

          expect(
            VerticalIconsWithLabels[7].children[0].children[2].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandBamboo.svg");

          expect(
            VerticalIconsWithLabels[7].children[0].children[3].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandGithub.svg");

          expect(
            VerticalIconsWithLabels[7].children[0].children[4].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandGithub.svg");

          expect(
            VerticalIconsWithLabels[7].children[0].children[5].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandDocker.svg");

          expect(
            VerticalIconsWithLabels[7].children[0].children[6].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandGitlab.svg");

          expect(
            VerticalIconsWithLabels[7].children[0].children[7].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandStash.svg");

          expect(VerticalIconsWithLabels[7].children[1].textContent).toEqual(
            "JenkinsBuildkiteBambooGitHub ActionsGitHub EnterpriseDockerGitLabStash"
          );

          expect(SkillsItems[8].children[0].textContent).toEqual("Bundlers");

          expect(
            VerticalIconsWithLabels[8].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandWebpack.svg");

          expect(
            VerticalIconsWithLabels[8].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandGrunt.svg");

          expect(
            VerticalIconsWithLabels[8].children[0].children[2].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandGulp.svg");

          expect(VerticalIconsWithLabels[8].children[1].textContent).toEqual(
            "WebpackGruntGulp"
          );

          expect(SkillsItems[9].children[0].textContent).toEqual(
            "Task Management"
          );

          expect(
            VerticalIconsWithLabels[9].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJIRA.svg");

          expect(
            VerticalIconsWithLabels[9].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandPhabricator.svg");

          expect(
            VerticalIconsWithLabels[9].children[0].children[2].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandRedmine.svg");

          expect(
            VerticalIconsWithLabels[9].children[0].children[3].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandQuire.svg");

          expect(
            VerticalIconsWithLabels[9].children[0].children[4].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandTrello.svg");

          expect(
            VerticalIconsWithLabels[9].children[0].children[5].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandTaskade.svg");

          expect(
            VerticalIconsWithLabels[9].children[0].children[6].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandBasecamp.svg");

          expect(VerticalIconsWithLabels[9].children[1].textContent).toEqual(
            "JIRAPhabricatorRedmineQuireTrelloTaskadeBasecamp"
          );

          expect(SkillsItems[10].children[0].textContent).toEqual(
            "Design Tools"
          );

          expect(
            VerticalIconsWithLabels[10].children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandPhotoshop.svg");

          expect(
            VerticalIconsWithLabels[10].children[0].children[1].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandSketch.svg");

          expect(
            VerticalIconsWithLabels[10].children[0].children[2].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandFigma.svg");

          expect(
            VerticalIconsWithLabels[10].children[0].children[3].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandCorel.svg");

          expect(
            VerticalIconsWithLabels[10].children[0].children[4].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandAfterEffects.svg");

          expect(
            VerticalIconsWithLabels[10].children[0].children[5].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandZeplin.svg");

          expect(
            VerticalIconsWithLabels[10].children[0].children[6].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandGallery.svg");

          expect(VerticalIconsWithLabels[10].children[1].textContent).toEqual(
            "PhotoshopSketchFigmaCorelDRAWAfter EffectsZeplinGallery"
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ColumnsContainers: Element[];
  ItemSpacingContainers: Element[];
  SkillsItems: Element[];
  SkillsResponsiveDesktop: Element;
  SkillsResponsiveMobile: Element;
  SkillsResponsiveTablet: Element;
  SkillsResponsiveTv: Element;
  SkillsSectionContainer: Element;
  VerticalIconsWithLabels: Element[];
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<SkillsSection />);

  const { queryAllByTestId } = utils || {};

  const ItemSpacingContainers: Element[] = queryAllByTestId(
    "ItemSpacingContainer"
  );
  const ColumnsContainers: Element[] = queryAllByTestId("ColumnsContainer");
  const SkillsItems: Element[] = queryAllByTestId("SkillsItem");
  const SkillsResponsiveDesktop: Element = queryAllByTestId(
    "SkillsResponsiveDesktop"
  )[0];
  const SkillsResponsiveMobile: Element = queryAllByTestId(
    "SkillsResponsiveMobile"
  )[0];
  const SkillsResponsiveTablet: Element = queryAllByTestId(
    "SkillsResponsiveTablet"
  )[0];
  const SkillsResponsiveTv: Element = queryAllByTestId("SkillsResponsiveTv")[0];
  const SkillsSectionContainer: Element = queryAllByTestId("SkillsSection")[0];
  const VerticalIconsWithLabels: Element[] = queryAllByTestId(
    "VerticalIconsWithLabels"
  );

  return {
    ...utils,
    ColumnsContainers,
    ItemSpacingContainers,
    SkillsItems,
    SkillsResponsiveDesktop,
    SkillsResponsiveMobile,
    SkillsResponsiveTablet,
    SkillsResponsiveTv,
    SkillsSectionContainer,
    VerticalIconsWithLabels
  };
}
