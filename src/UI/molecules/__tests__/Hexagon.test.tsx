import React, { Ref } from "react";
import { RenderResult } from "@testing-library/react";

import Hexagon, { renderIcon } from "UI/molecules/Hexagon";
import { HexagonProps } from "UI/molecules/__typings__/Hexagon";

import renderWithTheme from "helpers/tests/renderWithTheme";

import isIE11 from "helpers/browser/isIE11";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("molecules / Hexagon", () => {
  test("should have correct structure with children", () => {
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

  test("should have correct structure without children", () => {
    const {
      HexagonContainer,
      HexagonInnerContainer,
      Icon,
      IconContainer
    } = setup({
      children: undefined,
      fill: "pattern"
    });

    expect(HexagonContainer.children[0]).toEqual(IconContainer);
    expect(IconContainer.children[0]).toEqual(Icon);
    expect(HexagonInnerContainer).toBeFalsy();
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

      describe("@media all and (min-width: ${breakpoint1281})", () => {
        describe("left", () => {
          test("should have 48% if isIE11 returns true", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => true);

            const { HexagonInnerContainer } = setup();

            expect(HexagonInnerContainer).toHaveStyleRule("left", "48%", {
              media: "(min-width:1281px)"
            });
          });

          test("should not have 48% if isIE11 returns false", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => false);

            const { HexagonInnerContainer } = setup();

            expect(HexagonInnerContainer).not.toHaveStyleRule("left", "48%", {
              media: "(min-width:1281px)"
            });
          });
        });

        describe("top", () => {
          test("should have 53% if isIE11 returns true", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => true);

            const { HexagonInnerContainer } = setup();

            expect(HexagonInnerContainer).toHaveStyleRule("top", "53%", {
              media: "(min-width:1281px)"
            });
          });

          test("should not have 53% if isIE11 returns false", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => false);

            const { HexagonInnerContainer } = setup();

            expect(HexagonInnerContainer).not.toHaveStyleRule("top", "53%", {
              media: "(min-width:1281px)"
            });
          });
        });

        describe("transform", () => {
          test("should have translate(-50%, -50%) if isIE11 returns true", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => true);

            const { HexagonInnerContainer } = setup();

            expect(HexagonInnerContainer).toHaveStyleRule(
              "transform",
              "translate(-50%,-50%)",
              {
                media: "(min-width:1281px)"
              }
            );
          });

          test("should not have translate(-50%, -50%) if isIE11 returns false", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => false);

            const { HexagonInnerContainer } = setup();

            expect(HexagonInnerContainer).not.toHaveStyleRule(
              "transform",
              "translate(-50%,-50%)",
              {
                media: "(min-width:1281px)"
              }
            );
          });
        });

        describe("width", () => {
          test("should have 90% if isIE11 returns true", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => true);

            const { HexagonInnerContainer } = setup();

            expect(HexagonInnerContainer).toHaveStyleRule("width", "90%", {
              media: "(min-width:1281px)"
            });
          });

          test("should not have 90% if isIE11 returns false", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => false);

            const { HexagonInnerContainer } = setup();

            expect(HexagonInnerContainer).not.toHaveStyleRule("width", "90%", {
              media: "(min-width:1281px)"
            });
          });
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
      describe("height", () => {
        describe("fill - solid", () => {
          test("should have 1.6rem when isIE11 returns true", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => true);

            const { IconContainer } = setup({
              fill: "solid"
            });

            expect(IconContainer).toHaveStyleRule("height", "1.6rem");
          });

          test("should have auto when isIE11 returns false", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => false);

            const { IconContainer } = setup({
              fill: "solid"
            });

            expect(IconContainer).toHaveStyleRule("height", "auto");
          });
        });

        describe("fill - none", () => {
          test("should have value equal to iconDimensions.height", () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const iconRef: Ref<any> = {
              current: document.createElement("svg")
            };

            const utils = renderWithTheme(
              renderIcon({
                fill: "none",
                iconDimensions: {
                  height: "72px",
                  width: "72px"
                },
                iconRef
              })
            );

            const { queryAllByTestId }: RenderResult = utils;

            const IconContainer = queryAllByTestId("IconContainer")[0];

            expect(IconContainer).toHaveStyleRule("height", "72px");
          });
        });
      });

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

      describe("width", () => {
        describe("fill - none", () => {
          test("should have value equal to iconDimensions.width", () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const iconRef: Ref<any> = {
              current: document.createElement("svg")
            };

            const utils = renderWithTheme(
              renderIcon({
                fill: "none",
                iconDimensions: {
                  height: "72px",
                  width: "144px"
                },
                iconRef
              })
            );

            const { queryAllByTestId }: RenderResult = utils;

            const IconContainer = queryAllByTestId("IconContainer")[0];

            expect(IconContainer).toHaveStyleRule("width", "144px");
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
