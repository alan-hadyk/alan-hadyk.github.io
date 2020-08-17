import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSectionInnerContainer from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionInnerContainer";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  DashboardSectionInnerContainerProps
} from "<pages>/Home/sections/dashboard/DashboardSection/__typings__/DashboardSectionInnerContainer.d.ts";

describe("pages / Home / sections / dashboard / DashboardSection / DashboardSectionInnerContainer", () => {
  test("should have correct structure", () => {
    const {
      FlexContainer,
      SpacingContainer
    } = setup();

    expect(SpacingContainer.children[0]).toEqual(FlexContainer);
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have correct value passed via height props", () => {
          const { SpacingContainer } = setup({
            height: "calc(17vh + 3.6rem)"
          });

          expect(SpacingContainer).toHaveStyleRule("height", "calc(17vh + 3.6rem)");
        });
      });

      describe("marginTop", () => {
        test("should have 2.22vh", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("margin-top", "2.22vh");
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
        test("should have stretch", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "stretch");
        });
      });

      describe("flexFlow", () => {
        test("should have row nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("gap", () => {
        test("should have margin-left: 4.8rem for all children (except first)", () => {
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
        test("should have 100%", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("justifyContent", () => {
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  SpacingContainer: Element;
}

type DashboardSectionInnerContainerTestProps = Partial<DashboardSectionInnerContainerProps>;

function setup(additionalProps?: DashboardSectionInnerContainerTestProps): Setup {
  const props: DashboardSectionInnerContainerProps = {
    children: <div>Custom children</div>,
    height: "24rem",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <DashboardSectionInnerContainer {...props} />
  );

  const { queryByTestId }: RenderResult = utils;

  const FlexContainer: Element = queryByTestId("DashboardSectionInnerFlexContainer");
  const SpacingContainer: Element = queryByTestId("DashboardSectionInnerContainer");

  return {
    ...utils,
    FlexContainer,
    SpacingContainer
  };
}
