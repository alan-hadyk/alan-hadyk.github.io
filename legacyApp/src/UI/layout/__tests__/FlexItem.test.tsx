import { RenderResult } from "@testing-library/react";

import FlexItem from "UI/layout/FlexItem";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { FlexItemProps } from "UI/layout/__typings__/FlexItem";

jest.mock("helpers/browser/isIE11", () => jest.fn());

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

    describe("display", () => {
      test("should have block by default", () => {
        const { FlexItem } = setup();

        expect(FlexItem).toHaveStyleRule("display", "block");
      });

      test("should have flex passed via display prop", () => {
        const { FlexItem } = setup({
          display: "flex"
        });

        expect(FlexItem).toHaveStyleRule("display", "flex");
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

      test("should have none when shouldApplyWidth is true and browser is IE", () => {
        const { FlexItem } = setup({
          shouldApplyWidth: true
        });

        expect(FlexItem).toHaveStyleRule("flex", "none", {
          media: "(-ms-high-contrast: none)"
        });

        expect(FlexItem).toHaveStyleRule("flex", "none", {
          media: "(-ms-high-contrast: active)"
        });
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

    describe("justify-content", () => {
      test("should have initial by default", () => {
        const { FlexItem } = setup();

        expect(FlexItem).toHaveStyleRule("justify-content", "initial");
      });

      test("should have center passed via justifyContent prop", () => {
        const { FlexItem } = setup({
          justifyContent: "center"
        });

        expect(FlexItem).toHaveStyleRule("justify-content", "center");
      });

      test("should have flex-start passed via justifyContent prop", () => {
        const { FlexItem } = setup({
          justifyContent: "flex-start"
        });

        expect(FlexItem).toHaveStyleRule("justify-content", "flex-start");
      });

      test("should have flex-end passed via justifyContent prop", () => {
        const { FlexItem } = setup({
          justifyContent: "flex-end"
        });

        expect(FlexItem).toHaveStyleRule("justify-content", "flex-end");
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

    describe("padding-left", () => {
      test("should have 0 by default", () => {
        const { FlexItem } = setup();

        expect(FlexItem).toHaveStyleRule("padding-left", "0");
      });

      test("should have correct value passed via paddingleft prop", () => {
        const { FlexItem } = setup({
          paddingLeft: "spacing24"
        });

        expect(FlexItem).toHaveStyleRule("padding-left", "2.4rem");
      });
    });

    describe("padding-right", () => {
      test("should have 0 by default", () => {
        const { FlexItem } = setup();

        expect(FlexItem).toHaveStyleRule("padding-right", "0");
      });

      test("should have correct value passed via paddingRight prop", () => {
        const { FlexItem } = setup({
          paddingRight: "spacing24"
        });

        expect(FlexItem).toHaveStyleRule("padding-right", "2.4rem");
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

    describe("width", () => {
      test("should have correct value when shouldApplyWidth is true and browser is IE", () => {
        const { FlexItem } = setup({
          flex: "0 0 15%",
          shouldApplyWidth: true
        });

        expect(FlexItem).toHaveStyleRule("width", "15%", {
          media: "(-ms-high-contrast: none)"
        });

        expect(FlexItem).toHaveStyleRule("width", "15%", {
          media: "(-ms-high-contrast: active)"
        });
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
