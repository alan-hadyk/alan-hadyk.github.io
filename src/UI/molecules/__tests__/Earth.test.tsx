import React from "react";
import { RenderResult } from "@testing-library/react";

import Earth from "<molecules>/Earth";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / Earth", () => {
  test("should have correct structure", () => {
    const {
      FlexContainer,
      IconContainer,
      EarthIcon,
      SpacingContainer
    } = setup();

    expect(SpacingContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(IconContainer);
    expect(IconContainer.children[0]).toEqual(EarthIcon);
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("paddingBottom", () => {
        test("should have 1vh", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-bottom", "1vh");
        });
      });

      describe("paddingLeft", () => {
        test("should have 1vw", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-left", "1vw");
        });
      });

      describe("paddingRight", () => {
        test("should have 1vw", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-right", "1vw");
        });
      });

      describe("paddingTop", () => {
        test("should have 1vh", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", "1vh");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("justifyContent", () => {
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("height", "100%");
        });
      });
    });
  });

  describe("EarthIcon", () => {
    test("should render correct SVG", () => {
      const { EarthIcon } = setup();

      expect(EarthIcon.textContent).toEqual("Icon-Earth.svg");
    });

    describe("Props", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { IconContainer } = setup();

          expect(IconContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("isResponsive", () => {
        describe("height", () => {
          test("should have 100%", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule("height", "100%", {
              modifier: "svg"
            });
          });
        });

        describe("width", () => {
          test("should have 100%", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule("width", "100%", {
              modifier: "svg"
            });
          });
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { IconContainer } = setup();

          expect(IconContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  EarthIcon: SVGSVGElement;
  FlexContainer: Element;
  IconContainer: Element;
  SpacingContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<Earth />);

  const { queryByTestId }: RenderResult = utils;
  const FlexContainer: Element = queryByTestId("EarthFlexContainer");
  const IconContainer: Element = queryByTestId("IconContainer");
  const EarthIcon: SVGSVGElement = document.querySelector("svg");
  const SpacingContainer: Element = queryByTestId("Earth");

  return {
    ...utils,
    EarthIcon,
    FlexContainer,
    IconContainer,
    SpacingContainer
  };
}
