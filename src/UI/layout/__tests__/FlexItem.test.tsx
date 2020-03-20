import React from "react";
import { RenderResult } from "@testing-library/react";

import FlexItem from "<layout>/FlexItem";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem.d.ts";

describe("layout / FlexItem", () => {
  test("should render children", () => {
    const { FlexItem } = setup({
      children: <div>Custom children</div>
    });

    expect(FlexItem.textContent).toEqual("Custom children");
  });
  
  describe("Styles", () => {
    describe("align-self", () => {      
      test("should have auto by default", () => {
        const { FlexItem } = setup();
  
        expect(FlexItem).toHaveStyleRule("align-self", "auto");
      });
  
      test("should have stretch when passed via prop", () => {
        const { FlexItem } = setup({
          alignSelf: "stretch"
        });
  
        expect(FlexItem).toHaveStyleRule("align-self", "stretch");
      });
  
      test("should have flex-start when passed via prop", () => {
        const { FlexItem } = setup({
          alignSelf: "flex-start"
        });
  
        expect(FlexItem).toHaveStyleRule("align-self", "flex-start");
      });
  
      test("should have flex-end when passed via prop", () => {
        const { FlexItem } = setup({
          alignSelf: "flex-end"
        });
  
        expect(FlexItem).toHaveStyleRule("align-self", "flex-end");
      });
  
      test("should have baseline when passed via prop", () => {
        const { FlexItem } = setup({
          alignSelf: "baseline"
        });
  
        expect(FlexItem).toHaveStyleRule("align-self", "baseline");
      });
  
      test("should have center when passed via prop", () => {
        const { FlexItem } = setup({
          alignSelf: "center"
        });
  
        expect(FlexItem).toHaveStyleRule("align-self", "center");
      });
    });
 
    describe("flex", () => {      
      test("should have 1 0 15% when passed via prop", () => {
        const { FlexItem } = setup({
          flex: "1 0 15%"
        });
  
        expect(FlexItem).toHaveStyleRule("flex", "1 0 15%");
      });
  
      test("should have 0 1 50% when passed via prop", () => {
        const { FlexItem } = setup({
          flex: "0 1 50%"
        });
  
        expect(FlexItem).toHaveStyleRule("flex", "0 1 50%");
      });
    });
 
    describe("order", () => {      
      test("should have 0 by default", () => {
        const { FlexItem } = setup();
  
        expect(FlexItem).toHaveStyleRule("order", "0");
      });
  
      test("should have 4 when passed via prop", () => {
        const { FlexItem } = setup({
          order: 4
        });
  
        expect(FlexItem).toHaveStyleRule("order", "4");
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexItem: Node;
}

type FlexItemTestProps = Partial<FlexItemProps>;

function setup(addedProps?: FlexItemTestProps): Setup {
  const props: FlexItemProps = {
    children: <div>FlexItem</div>,
    flex: "0 0 100%",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <FlexItem {...props}>
      {props.children}
    </FlexItem>
  );

  const { container } = utils || {};

  return {
    ...utils,
    FlexItem: container.children[0]
  };
}
