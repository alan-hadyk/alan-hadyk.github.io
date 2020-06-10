import React from "react";
import { RenderResult } from "@testing-library/react";

import AboutMeSection from "<pages>/Home/sections/about/AboutMeSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / about / AboutMeSection", () => {
  test("should have correct structure", () => {
    const {
      AboutMeSectionContainer,
      HexagonWithDescription,
      IconContainer
    } = setup();

    expect(AboutMeSectionContainer.children[1]).toEqual(HexagonWithDescription);
    expect(HexagonWithDescription.children[0].children[0].children[0].children[0]).toEqual(IconContainer);
  });

  describe("AboutMeSectionContainer", () => {
    describe("Props", () => {
      describe("title", () => {
        test("should have About me", () => {
          const {
            AboutMeSectionContainer
          } = setup();
  
          expect(AboutMeSectionContainer.children[0].children[0].textContent).toEqual("About me");
        });
      });
    });
  });

  describe("HexagonWithDescription", () => {
    describe("Props", () => {
      describe("description", () => {
        test("should have correct description", () => {
          const {
            HexagonWithDescription
          } = setup();
  
          expect(HexagonWithDescription.children[0].children[1].children[0].children[0].textContent).toEqual("Proven talent for aligning software development strategy and objectives with established user interface implementation and technology management paradigms to achieve maximum operational impacts with minimum resource expenditures. Growth-focused thought leader with expertise spanning application layering, polygot language coding expertise, best practice compliance, agile methodology, cross-functional team leadership, REST & GraphQL architectural styles, comprehensive components, and project management. Exceptionally dedicated technical professional with keen organizational skills.");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  AboutMeSectionContainer: Element;
  HexagonWithDescription: Element;
  IconContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <AboutMeSection />
  );

  const { queryAllByTestId } = utils || {};
  
  const AboutMeSectionContainer: Element = document.querySelectorAll("#about-me")[0];
  const HexagonWithDescription: Element = queryAllByTestId("HexagonWithDescription")[0];
  const IconContainer: Element = queryAllByTestId("IconContainer")[0];

  return {
    ...utils,
    AboutMeSectionContainer,
    HexagonWithDescription,
    IconContainer
  };
}
 