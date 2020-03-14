import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSection from "<pages>/Home/sections/dashboard/DashboardSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("vivus");

describe("pages / Home / sections / dashboard / DashboardSection", () => {
  test("should have correct structure", () => {
    const { 
      Code,
      Coords,
      FlexContainer,
      Section,
      SpacingContainer,
      TechStack,
      Flux
    } = setup();

    expect(Section.children[0]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(TechStack);
    expect(FlexContainer.children[1]).toEqual(Coords);
    expect(FlexContainer.children[2]).toEqual(Flux);
    expect(FlexContainer.children[3]).toEqual(Code);
  });

  describe("Section", () => {    
    describe("Props", () => {
      describe("id", () => {
        test("should be dashboard", () => {
          const { Section } = setup();

          expect(Section.getAttribute("id")).toEqual("dashboard");
        });
      });

      describe("minHeight", () => {
        test("should have 100vh", () => {
          const { Section } = setup();

          expect(Section).toHaveStyleRule("min-height", "100vh");
        });
      });
    });
  });

  describe("SpacingContainer", () => {    
    describe("Styles", () => {
      describe("padding-top", () => {      
        test("should have 2.4rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", "2.4rem");
        });
      });
    });
  });

  describe("FlexContainer", () => {    
    describe("Props", () => {
      describe("align-items", () => {      
        test("should have flex-start", () => {
          const { FlexContainer } = setup();
    
          expect(FlexContainer).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("flex-flow", () => {      
        test("should have row nowrap", () => {
          const { FlexContainer } = setup();
    
          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("gap", () => {
        test("should have row 4.8rem", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("margin-left", "4.8rem", {
            modifier: "& > *"
          });
          expect(FlexContainer).toHaveStyleRule("margin-left", "0", {
            modifier: "& > *:first-child"
          });
        });
      });

      describe("height", () => {
        test("should have row 22rem", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("height", "22rem");
        });
      });

      describe("justify-content", () => {      
        test("should have center", () => {
          const { FlexContainer } = setup();
    
          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Code: Element;
  Coords: Element;
  FlexContainer: Element;
  Flux: Element;
  Section: Element;
  SpacingContainer: Element;
  TechStack: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <DashboardSection />
  );

  const { queryByTestId }: RenderResult = utils;
  const Code: Element = queryByTestId("Code");
  const Coords: Element = queryByTestId("Coords");
  const FlexContainer: Element = queryByTestId("DashboardSectionFlexContainerr");
  const Section: Element = queryByTestId("Section");
  const SpacingContainer: Element = queryByTestId("DashboardSectionSpacingContainer");
  const TechStack: Element = queryByTestId("TechStack");
  const Flux: Element = queryByTestId("Flux");

  return {
    ...utils,
    Code,
    Coords,
    FlexContainer,
    Flux,
    Section,
    SpacingContainer,
    TechStack
  };
}
