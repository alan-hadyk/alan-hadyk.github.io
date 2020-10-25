import React from "react";
import { RenderResult } from "@testing-library/react";

import AboutMeSection from "pages/Home/sections/about/AboutMeSection";

import renderWithTheme from "helpers/tests/renderWithTheme";

describe("pages / Home / sections / about / AboutMeSection", () => {
  test("should have correct structure", () => {
    const {
      AboutMeSectionContainer,
      HexagonWithDescription,
      HexagonWithDescriptionContents,
      IconContainer
    } = setup();

    expect(AboutMeSectionContainer.children[4]).toEqual(HexagonWithDescription);

    HexagonWithDescriptionContents.forEach(
      (HexagonWithDescriptionContent: Element) => {
        expect(
          HexagonWithDescriptionContent.children[0].children[0].children[0]
        ).toEqual(IconContainer);
      }
    );
  });

  describe("AboutMeSectionContainer", () => {
    describe("Props", () => {
      describe("id", () => {
        test("should equal about-me", () => {
          const { AboutMeSectionContainer } = setup();

          expect(AboutMeSectionContainer.getAttribute("id")).toEqual(
            "about-me"
          );
        });
      });

      describe("title", () => {
        test("should have About me", () => {
          const { AboutMeSectionContainer } = setup();

          expect(
            AboutMeSectionContainer.children[0].children[0].textContent
          ).toEqual("About me");
        });
      });
    });
  });

  describe("HexagonWithDescription", () => {
    describe("Props", () => {
      describe("children", () => {
        test("should render correct image", () => {
          const { HexagonWithDescriptionContents } = setup();

          HexagonWithDescriptionContents.forEach(
            (HexagonWithDescriptionContent: Element) => {
              expect(
                HexagonWithDescriptionContent.children[0].children[0]
                  .children[1].textContent
              ).toEqual("Company-SAP.svg");
            }
          );
        });
      });

      describe("description", () => {
        test("should have correct description", () => {
          const { HexagonWithDescriptionContents } = setup();

          HexagonWithDescriptionContents.forEach(
            (HexagonWithDescriptionContent: Element) => {
              expect(
                HexagonWithDescriptionContent.children[1].children[0]
                  .children[0].textContent
              ).toEqual(
                "Proven talent for aligning software development strategy and objectives with established user interface implementation and technology management paradigms to achieve maximum operational impacts with minimum resource expenditures. Growth-focused thought leader with expertise spanning application layering, polygot language coding expertise, best practice compliance, agile methodology, cross-functional team leadership, REST & GraphQL architectural styles, comprehensive components, and project management. Exceptionally dedicated technical professional with keen organizational skills."
              );
            }
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  AboutMeSectionContainer: Element;
  HexagonWithDescription: Element;
  HexagonWithDescriptionContents: Element[];
  IconContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<AboutMeSection />);

  const { queryAllByTestId } = utils || {};

  const AboutMeSectionContainer: Element = queryAllByTestId(
    "AboutMeSection"
  )[0];
  const HexagonWithDescription: Element = queryAllByTestId(
    "HexagonWithDescription"
  )[0];
  const HexagonWithDescriptionContents: Element[] = queryAllByTestId(
    "HexagonWithDescriptionContent"
  );
  const IconContainer: Element = queryAllByTestId("IconContainer")[0];

  return {
    ...utils,
    AboutMeSectionContainer,
    HexagonWithDescription,
    HexagonWithDescriptionContents,
    IconContainer
  };
}
