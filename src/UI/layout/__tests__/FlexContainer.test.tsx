import React from "react";
import { RenderResult } from "@testing-library/react";

import FlexContainer from "<layout>/FlexContainer";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  FlexContainerProps
} from "<layout>/__typings__/FlexContainer";

describe("layout / FlexContainer", () => {
  test("should render children", () => {
    const { FlexContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(FlexContainer.textContent).toEqual("Custom children");
  });
  
  describe("Styles", () => {
    describe("align-items", () => {      
      test("should have center by default", () => {
        const { FlexContainer } = setup();
  
        expect(FlexContainer).toHaveStyleRule("align-items", "center");
      });
  
      test("should have stretch by when passed via prop", () => {
        const { FlexContainer } = setup({
          alignItems: "stretch"
        });
  
        expect(FlexContainer).toHaveStyleRule("align-items", "stretch");
      });
  
      test("should have flex-start by when passed via prop", () => {
        const { FlexContainer } = setup({
          alignItems: "flex-start"
        });
  
        expect(FlexContainer).toHaveStyleRule("align-items", "flex-start");
      });
  
      test("should have flex-end by when passed via prop", () => {
        const { FlexContainer } = setup({
          alignItems: "flex-end"
        });
  
        expect(FlexContainer).toHaveStyleRule("align-items", "flex-end");
      });
  
      test("should have baseline by when passed via prop", () => {
        const { FlexContainer } = setup({
          alignItems: "baseline"
        });
  
        expect(FlexContainer).toHaveStyleRule("align-items", "baseline");
      });
    });

    describe("display", () => {      
      test("should have flex", () => {
        const { FlexContainer } = setup();
  
        expect(FlexContainer).toHaveStyleRule("display", "flex");
      });
    });
 
    describe("flex-flow", () => {      
      test("should have row wrap by default", () => {
        const { FlexContainer } = setup();
  
        expect(FlexContainer).toHaveStyleRule("flex-flow", "row wrap");
      });
  
      test("should have row nowrap by when passed via prop", () => {
        const { FlexContainer } = setup({
          flexFlow: "row nowrap"
        });
  
        expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
      });
  
      test("should have column wrap by when passed via prop", () => {
        const { FlexContainer } = setup({
          flexFlow: "column wrap"
        });
  
        expect(FlexContainer).toHaveStyleRule("flex-flow", "column wrap");
      });
  
      test("should have column nowrap by when passed via prop", () => {
        const { FlexContainer } = setup({
          flexFlow: "column nowrap"
        });
  
        expect(FlexContainer).toHaveStyleRule("flex-flow", "column nowrap");
      });
    });
 
    describe("height", () => {      
      test("should have unset by default", () => {
        const { FlexContainer } = setup();
  
        expect(FlexContainer).toHaveStyleRule("height", "unset");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { FlexContainer } = setup({
          height: "spacing48"
        });
  
        expect(FlexContainer).toHaveStyleRule("height", "4.8rem");
      });
  
      test("should have 50% by when passed via prop", () => {
        const { FlexContainer } = setup({
          height: "50%"
        });
  
        expect(FlexContainer).toHaveStyleRule("height", "50%");
      });
  
      test("should have 100% by when passed via prop", () => {
        const { FlexContainer } = setup({
          height: "100%"
        });
  
        expect(FlexContainer).toHaveStyleRule("height", "100%");
      });
    });

    describe("justify-content", () => {      
      test("should have center by default", () => {
        const { FlexContainer } = setup();
  
        expect(FlexContainer).toHaveStyleRule("justify-content", "center");
      });
  
      test("should have flex-start by when passed via prop", () => {
        const { FlexContainer } = setup({
          justifyContent: "flex-start"
        });
  
        expect(FlexContainer).toHaveStyleRule("justify-content", "flex-start");
      });
  
      test("should have flex-end by when passed via prop", () => {
        const { FlexContainer } = setup({
          justifyContent: "flex-end"
        });
  
        expect(FlexContainer).toHaveStyleRule("justify-content", "flex-end");
      });
  
      test("should have space-between by when passed via prop", () => {
        const { FlexContainer } = setup({
          justifyContent: "space-between"
        });
  
        expect(FlexContainer).toHaveStyleRule("justify-content", "space-between");
      });
    });
  });

  describe("Props", () => {
    describe("gap", () => {
      test("should apply padding-left equal to gap to all children except the first one when flexFlow includes row", () => {
        const { FlexContainer } = setup({
          flexFlow: "row nowrap",
          gap: "spacing32"
        });
        
        expect(FlexContainer).toHaveStyleRule("padding-left", "3.2rem", {
          modifier: "& > *"
        });
        expect(FlexContainer).toHaveStyleRule("padding-left", "0", {
          modifier: "& > *:first-child"
        });
      });

      test("should apply padding-top equal to gap to all children except the first one when flexFlow includes column", () => {
        const { FlexContainer } = setup({
          flexFlow: "column nowrap",
          gap: "spacing40"
        });
        
        expect(FlexContainer).toHaveStyleRule("padding-top", "4rem", {
          modifier: "& > *"
        });
        expect(FlexContainer).toHaveStyleRule("padding-top", "0", {
          modifier: "& > *:first-child"
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Node;
}

type FlexContainerTestProps = Partial<FlexContainerProps>;

function setup(addedProps?: FlexContainerTestProps): Setup {
  const props: FlexContainerProps = {
    children: <div>FlexContainer</div>,
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <FlexContainer {...props}>
      {props.children}
    </FlexContainer>
  );

  const { container } = utils || {};

  return {
    ...utils,
    FlexContainer: container.children[0]
  };
}
