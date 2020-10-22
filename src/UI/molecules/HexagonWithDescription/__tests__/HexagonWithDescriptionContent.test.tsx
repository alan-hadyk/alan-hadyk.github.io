import React from "react";
import { RenderResult } from "@testing-library/react";

import HexagonWithDescriptionContent from "<molecules>/HexagonWithDescription/HexagonWithDescriptionContent";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { HexagonWithDescriptionContentProps } from "<molecules>/HexagonWithDescription/__typings__/HexagonWithDescriptionContent.d.ts";

describe("molecules / HexagonWithDescription", () => {
  test("should have correct structure", () => {
    const {
      DescriptionSpacingContainer,
      FlexContainer,
      FlexItem,
      Hexagon,
      Text
    } = setup();

    expect(FlexContainer.children[0]).toEqual(DescriptionSpacingContainer);
    expect(FlexContainer.children[1]).toEqual(FlexItem);
    expect(DescriptionSpacingContainer.children[0]).toEqual(Hexagon);

    expect(FlexItem.children[0]).toEqual(Text);
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("flexFlow", () => {
        test("should have row nowrap by default", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });

        test("should have correct value passed via flexFlow prop", () => {
          const { FlexContainer } = setup({
            flexFlow: "column nowrap"
          });

          expect(FlexContainer).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });
    });
  });

  describe("DescriptionSpacingContainer", () => {
    describe("Props", () => {
      describe("marginRight", () => {
        test("should have 0 by default", () => {
          const { DescriptionSpacingContainer } = setup();

          expect(DescriptionSpacingContainer).toHaveStyleRule(
            "margin-right",
            "0"
          );
        });

        test("should have correct value passed via marginRight prop", () => {
          const { DescriptionSpacingContainer } = setup({
            marginRight: "spacing40"
          });

          expect(DescriptionSpacingContainer).toHaveStyleRule(
            "margin-right",
            "4rem"
          );
        });
      });

      describe("marginBottom", () => {
        test("should have 0 by default", () => {
          const { DescriptionSpacingContainer } = setup();

          expect(DescriptionSpacingContainer).toHaveStyleRule(
            "margin-bottom",
            "0"
          );
        });

        test("should have correct value passed via marginBottom prop", () => {
          const { DescriptionSpacingContainer } = setup({
            marginBottom: "spacing40"
          });

          expect(DescriptionSpacingContainer).toHaveStyleRule(
            "margin-bottom",
            "4rem"
          );
        });
      });

      describe("width", () => {
        test("should have correct value passed via width prop", () => {
          const { DescriptionSpacingContainer } = setup({
            width: "100px"
          });

          expect(DescriptionSpacingContainer).toHaveStyleRule("width", "100px");
        });
      });
    });
  });

  describe("FlexItem", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 50%", () => {
          const { FlexItem } = setup();

          expect(FlexItem).toHaveStyleRule("flex", "0 1 50%");
        });
      });
    });
  });

  describe("Hexagon", () => {
    test("should render children", () => {
      const { Hexagon } = setup({
        children: <div>Custom image</div>,
        description: <span>Custom text</span>
      });

      expect(Hexagon.children[1].children[0].textContent).toEqual(
        "Custom image"
      );
    });

    describe("Props", () => {
      describe("width", () => {
        test("should have 75%", () => {
          const { Hexagon } = setup();

          expect(Hexagon.children[1]).toHaveStyleRule("width", "75%");
        });
      });
    });
  });

  describe("Text", () => {
    test("should render correct content passed via description prop", () => {
      const { Text } = setup({
        children: <div>Custom image</div>,
        description: <span>Custom text</span>
      });

      expect(Text.children[0].textContent).toEqual("Custom text");
    });

    describe("Props", () => {
      describe("color", () => {
        test("should have #78b0b5", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("color", "#78b0b5");
        });
      });

      describe("fontFamily", () => {
        test("should have 'Anonymous Pro',monospace", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule(
            "font-family",
            "'Anonymous Pro',monospace"
          );
        });
      });

      describe("fontSize", () => {
        test("should have 20px", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-size", "20px");
        });
      });

      describe("lineHeight", () => {
        test("should have 3.6rem by default", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("line-height", "3.6rem");
        });

        test("should have correct value passed via lineHeight prop", () => {
          const { Text } = setup({
            lineHeight: "spacing40"
          });

          expect(Text).toHaveStyleRule("line-height", "4rem");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  DescriptionSpacingContainer: Element;
  FlexContainer: Element;
  FlexItem: Element;
  Hexagon: Element;
  Text: Element;
}
type HexagonWithDescriptionTestProps = Partial<
  HexagonWithDescriptionContentProps
>;

function setup(additionalProps?: HexagonWithDescriptionTestProps): Setup {
  const props: HexagonWithDescriptionContentProps = {
    children: <div>Image</div>,
    description: <span>Custom text</span>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <HexagonWithDescriptionContent {...props}>
      {props.children}
    </HexagonWithDescriptionContent>
  );

  const { queryAllByTestId } = utils || {};

  const DescriptionSpacingContainer: Element = queryAllByTestId(
    "DescriptionSpacingContainer"
  )[0];
  const FlexContainer: Element = queryAllByTestId(
    "HexagonWithDescriptionContent"
  )[0];
  const FlexItem: Element = queryAllByTestId("FlexItem")[0];
  const Hexagon: Element = queryAllByTestId("Hexagon")[0];
  const Text: Element = queryAllByTestId("Text")[0];

  return {
    ...utils,
    DescriptionSpacingContainer,
    FlexContainer,
    FlexItem,
    Hexagon,
    Text
  };
}
