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
  
  describe("AboutMeSectionDescription", () => {
    describe("Styles", () => {
      describe("color", () => {
        test("should have #bcd8db", () => {
          const { AboutMeSectionDescription } = setup();
  
          expect(AboutMeSectionDescription).toHaveStyleRule("color", "#bcd8db", {
            modifier: "& strong"
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  AboutMeSectionContainer: Element;
  AboutMeSectionDescription: Element;
  HexagonWithDescription: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <AboutMeSection />
  );

  const { queryAllByTestId } = utils || {};
  
  const AboutMeSectionContainer: Element = document.querySelectorAll("#about-me")[0];
  const AboutMeSectionDescription: Element = queryAllByTestId("AboutMeSectionDescription")[0];
  const HexagonWithDescription: Element = queryAllByTestId("HexagonWithDescription")[0];

  return {
    ...utils,
    AboutMeSectionContainer,
    AboutMeSectionDescription,
    HexagonWithDescription
  };
}
 