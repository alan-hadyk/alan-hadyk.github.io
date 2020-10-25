import React from "react";
import { RenderResult } from "@testing-library/react";

import FlexItem from "layout/FlexItem";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { FlexItemProps } from "layout/__typings__/FlexItem";

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

      test("should have stretch passed via alignSelf prop", () => {
        const { FlexItem } = setup({
          alignSelf: "stretch"
        });

        expect(FlexItem).toHaveStyleRule("align-self", "stretch");
      });

      test("should have flex-start passed via alignSelf prop", () => {
        const { FlexItem } = setup({
          alignSelf: "flex-start"
        });

        expect(FlexItem).toHaveStyleRule("align-self", "flex-start");
      });

      test("should have flex-end passed via alignSelf prop", () => {
        const { FlexItem } = setup({
          alignSelf: "flex-end"
        });

        expect(FlexItem).toHaveStyleRule("align-self", "flex-end");
      });

      test("should have baseline passed via alignSelf prop", () => {
        const { FlexItem } = setup({
          alignSelf: "baseline"
        });

        expect(FlexItem).toHaveStyleRule("align-self", "baseline");
      });

      test("should have center passed via alignSelf prop", () => {
        const { FlexItem } = setup({
          alignSelf: "center"
        });

        expect(FlexItem).toHaveStyleRule("align-self", "center");
      });
    });

    describe("flex", () => {
      test("should have 1 0 15% passed via flex prop", () => {
        const { FlexItem } = setup({
          flex: "1 0 15%"
        });

        expect(FlexItem).toHaveStyleRule("flex", "1 0 15%");
      });

      test("should have 0 1 50% passed via flex prop", () => {
        const { FlexItem } = setup({
          flex: "0 1 50%"
        });

        expect(FlexItem).toHaveStyleRule("flex", "0 1 50%");
      });
    });

    describe("height", () => {
      test("should have unset by default", () => {
        const { FlexItem } = setup();

        expect(FlexItem).toHaveStyleRule("height", "unset");
      });

      test("should have correct value passed via height prop", () => {
        const { FlexItem } = setup({
          height: "spacing24"
        });

        expect(FlexItem).toHaveStyleRule("height", "2.4rem");
      });
    });

    describe("order", () => {
      test("should have 0 by default", () => {
        const { FlexItem } = setup();

        expect(FlexItem).toHaveStyleRule("order", "0");
      });

      test("should have 4 passed via order prop", () => {
        const { FlexItem } = setup({
          order: 4
        });

        expect(FlexItem).toHaveStyleRule("order", "4");
      });
    });

    describe("overflow", () => {
      test("should have auto by default", () => {
        const { FlexItem } = setup();

        expect(FlexItem).toHaveStyleRule("overflow", "auto");
      });

      test("should have correct value passed via overflow prop", () => {
        const { FlexItem } = setup({
          overflow: "hidden"
        });

        expect(FlexItem).toHaveStyleRule("overflow", "hidden");
      });
    });

    describe("padding-bottom", () => {
      test("should have 0 by default", () => {
        const { FlexItem } = setup();

        expect(FlexItem).toHaveStyleRule("padding-bottom", "0");
      });

      test("should have correct value passed via paddingBottom prop", () => {
        const { FlexItem } = setup({
          paddingBottom: "spacing24"
        });

        expect(FlexItem).toHaveStyleRule("padding-bottom", "2.4rem");
      });
    });

    describe("padding-top", () => {
      test("should have 0 by default", () => {
        const { FlexItem } = setup();

        expect(FlexItem).toHaveStyleRule("padding-top", "0");
      });

      test("should have correct value passed via paddingTop prop", () => {
        const { FlexItem } = setup({
          paddingTop: "spacing24"
        });

        expect(FlexItem).toHaveStyleRule("padding-top", "2.4rem");
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexItem: Node;
}

type FlexItemTestProps = Partial<FlexItemProps>;

function setup(additionalProps?: FlexItemTestProps): Setup {
  const props: FlexItemProps = {
    children: <div>FlexItem</div>,
    flex: "0 0 100%",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <FlexItem {...props}>{props.children}</FlexItem>
  );

  const { container } = utils || {};

  return {
    ...utils,
    FlexItem: container.children[0]
  };
}
