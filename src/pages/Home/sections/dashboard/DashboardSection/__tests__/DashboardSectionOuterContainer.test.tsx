import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSectionOuterContainer from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionOuterContainer";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { DashboardSectionOuterContainerProps } from "<pages>/Home/sections/dashboard/DashboardSection/__typings__/DashboardSectionOuterContainer.d.ts";

describe("pages / Home / sections / dashboard / DashboardSection / DashboardSectionOuterContainer", () => {
  test("should have correct structure", () => {
    const { FlexContainer, PositionContainer, SpacingContainer } = setup();

    expect(SpacingContainer.children[0]).toEqual(PositionContainer);
    expect(PositionContainer.children[0]).toEqual(FlexContainer);
  });

  test("should render children", () => {
    const { SpacingContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(SpacingContainer.children[0].textContent).toEqual("Custom children");
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 100vh", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("height", "100vh");
        });
      });

      describe("paddingTop", () => {
        test("should have 9.6rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", "9.6rem");
        });
      });
    });
  });

  describe("PositionContainer", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("position", () => {
        test("should have relative", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("position", "relative");
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

      describe("flexFlow", () => {
        test("should have column nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("justifyContent", () => {
        test("should have space-between", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule(
            "justify-content",
            "space-between"
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  PositionContainer: Element;
  SpacingContainer: Element;
}

type DashboardSectionOuterContainerTestProps = Partial<
  DashboardSectionOuterContainerProps
>;

function setup(
  additionalProps?: DashboardSectionOuterContainerTestProps
): Setup {
  const props: DashboardSectionOuterContainerProps = {
    children: <div>Custom children</div>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <DashboardSectionOuterContainer {...props} />
  );

  const { queryByTestId }: RenderResult = utils;

  const FlexContainer: Element = queryByTestId(
    "DashboardSectionOuterFlexContainer"
  );
  const PositionContainer: Element = queryByTestId(
    "DashboardSectionPositionContainer"
  );
  const SpacingContainer: Element = queryByTestId(
    "DashboardSectionOuterContainer"
  );

  return {
    ...utils,
    FlexContainer,
    PositionContainer,
    SpacingContainer
  };
}
