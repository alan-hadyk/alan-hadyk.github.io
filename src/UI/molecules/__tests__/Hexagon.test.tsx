import React from "react";
import { RenderResult } from "@testing-library/react";

import Hexagon from "<molecules>/Hexagon";
import { HexagonProps } from "<molecules>/__typings__/Hexagon.d.ts";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / Hexagon", () => {
  test("should have correct structure", () => {
    const {
      HexagonContainer,
      HexagonInnerContainer,
      Icon,
      IconContainer
    } = setup({
      fill: "pattern"
    });

    expect(HexagonContainer.children[0]).toEqual(IconContainer);
    expect(IconContainer.children[0]).toEqual(Icon);
    expect(HexagonContainer.children[1]).toEqual(HexagonInnerContainer);
  });

  test("should render children", () => {
    const { HexagonInnerContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(HexagonInnerContainer.textContent).toEqual("Custom children");
  });

  describe("HexagonContainer", () => {
    describe("Styles", () => {
      describe("position", () => {
        test("should have relative", () => {
          const { HexagonContainer } = setup();

          expect(HexagonContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });

  describe("HexagonInnerContainer", () => {
    test("should not render if children are not passed", () => {
      const { HexagonInnerContainer } = setup({
        children: undefined
      });

      expect(HexagonInnerContainer).toBeFalsy();
    });

    describe("Styles", () => {
      describe("left", () => {
        test("should have 50%", () => {
          const { HexagonInnerContainer } = setup();

          expect(HexagonInnerContainer).toHaveStyleRule("left", "50%");
        });
      });

      describe("position", () => {
        test("should have absolute", () => {
          const { HexagonInnerContainer } = setup();

          expect(HexagonInnerContainer).toHaveStyleRule("position", "absolute");
        });
      });

      describe("top", () => {
        test("should have 50%", () => {
          const { HexagonInnerContainer } = setup();

          expect(HexagonInnerContainer).toHaveStyleRule("top", "50%");
        });
      });

      describe("transform", () => {
        test("should have translate(-50%,-50%)", () => {
          const { HexagonInnerContainer } = setup();

          expect(HexagonInnerContainer).toHaveStyleRule(
            "transform",
            "translate(-50%,-50%)"
          );
        });
      });

      describe("width", () => {
        test("should have 100% by default", () => {
          const { HexagonInnerContainer } = setup();

          expect(HexagonInnerContainer).toHaveStyleRule("width", "100%");
        });

        test("should have correct value passed via contentWidth prop", () => {
          const { HexagonInnerContainer } = setup({
            contentWidth: "50%"
          });

          expect(HexagonInnerContainer).toHaveStyleRule("width", "50%");
        });
      });
    });
  });

  describe("Icon", () => {
    test("should have correct icon for fill: pattern", () => {
      const { Icon } = setup({
        fill: "pattern"
      });

      expect(Icon.textContent).toEqual("Hexagon-With-Pattern.svg");
    });

    test("should have correct icon for fill: none", () => {
      const { Icon } = setup({
        fill: "none"
      });

      expect(Icon.textContent).toEqual("Hexagon.svg");
    });

    test("should have correct icon for fill: solid", () => {
      const { Icon } = setup({
        fill: "solid"
      });

      expect(Icon.textContent).toEqual("Hexagon.svg");
    });

    describe("Props", () => {
      describe("isActive", () => {
        describe("svg path - fill", () => {
          test("should have #78b0b5 when fill is solid", () => {
            const { IconContainer } = setup({
              fill: "solid"
            });

            expect(IconContainer).toHaveStyleRule("fill", "#78b0b5", {
              modifier: "svg path"
            });
          });

          test("should not have when fill is none", () => {
            const { IconContainer } = setup({
              fill: "none"
            });

            expect(IconContainer).not.toHaveStyleRule("fill", {
              modifier: "svg path"
            });
          });

          test("should not have when fill is pattern", () => {
            const { IconContainer } = setup({
              fill: "pattern"
            });

            expect(IconContainer).not.toHaveStyleRule("fill", {
              modifier: "svg path"
            });
          });
        });
      });

      describe("shouldGlow", () => {
        describe("svg - filter", () => {
          test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5)) - fill: solid", () => {
            const { IconContainer } = setup({
              fill: "solid"
            });

            expect(IconContainer).toHaveStyleRule(
              "filter",
              "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
              {
                modifier: "svg"
              }
            );
          });

          test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5)) - fill: none", () => {
            const { IconContainer } = setup({
              fill: "none"
            });

            expect(IconContainer).toHaveStyleRule(
              "filter",
              "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
              {
                modifier: "svg"
              }
            );
          });

          test("should not have filter - fill: pattern", () => {
            const { IconContainer } = setup({
              fill: "pattern"
            });

            expect(IconContainer).not.toHaveStyleRule(
              "filter",
              "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
              {
                modifier: "svg"
              }
            );
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HexagonContainer: Element;
  HexagonInnerContainer: Element;
  Icon: SVGSVGElement;
  IconContainer: Element;
}

type HexagonTestProps = Partial<HexagonProps>;

function setup(addedProps?: HexagonTestProps): Setup {
  const props: HexagonProps = {
    children: <div>Child</div>,
    fill: "solid",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(<Hexagon {...props} />);

  const { queryAllByTestId }: RenderResult = utils;
  const HexagonContainer: Element = queryAllByTestId("Hexagon")[0];
  const HexagonInnerContainer: Element = queryAllByTestId(
    "HexagonInnerContainer"
  )[0];
  const Icon: SVGSVGElement = document.querySelector("svg");
  const IconContainer: Element = queryAllByTestId("IconContainer")[0];

  return {
    ...utils,
    HexagonContainer,
    HexagonInnerContainer,
    Icon,
    IconContainer
  };
}
