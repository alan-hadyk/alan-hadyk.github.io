import React from "react";
import { RenderResult } from "@testing-library/react";

import AboutMeSection from "<pages>/Home/sections/about/AboutMeSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / about / AboutMeSection", () => {
  test("should have correct structure", () => {
    const {
      AboutMeSectionContainer,
      HexagonWithDescription
    } = setup();

    expect(AboutMeSectionContainer.children[1]).toEqual(HexagonWithDescription);
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
  
});

interface Setup extends RenderResult {
  AboutMeSectionContainer: Element;
  HexagonWithDescription: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <AboutMeSection />
  );

  const { queryAllByTestId } = utils || {};
  
  const AboutMeSectionContainer: Element = document.querySelectorAll("#about-me")[0];
  const HexagonWithDescription: Element = queryAllByTestId("HexagonWithDescription")[0];

  return {
    ...utils,
    AboutMeSectionContainer,
    HexagonWithDescription
  };
}
 