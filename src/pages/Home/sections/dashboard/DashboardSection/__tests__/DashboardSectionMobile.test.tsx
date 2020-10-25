import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSectionMobile from "pages/Home/sections/dashboard/DashboardSection/DashboardSectionMobile";

import renderWithTheme from "helpers/tests/renderWithTheme";

describe("pages / Home / sections / dashboard / DashboardSection / DashboardSectionMobile", () => {
  test("should have correct structure", () => {
    const {
      ConsoleMobile,
      DashboardSectionSpacingContainer,
      ResponsiveMobile
    } = setup();

    expect(ResponsiveMobile.children[0]).toEqual(
      DashboardSectionSpacingContainer
    );
    expect(DashboardSectionSpacingContainer.children[0]).toEqual(ConsoleMobile);
  });

  describe("ResponsiveMobile", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have mobile", () => {
          test("should have display block when max-width is 640px", () => {
            const { ResponsiveMobile } = setup();

            expect(ResponsiveMobile).toHaveStyleRule("display", "block", {
              media: "(max-width:640px)"
            });
          });
        });
      });
    });
  });

  describe("DashboardSectionSpacingContainer", () => {
    describe("Props", () => {
      describe("paddingTop", () => {
        test("should have 9.6rem", () => {
          const { DashboardSectionSpacingContainer } = setup();

          expect(DashboardSectionSpacingContainer).toHaveStyleRule(
            "padding-top",
            "9.6rem"
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ConsoleMobile: Element;
  DashboardSectionSpacingContainer: Element;
  ResponsiveMobile: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<DashboardSectionMobile />);

  const { queryAllByTestId }: RenderResult = utils;

  const ConsoleMobile: Element = queryAllByTestId(
    "ConsoleMobileSpacingContainer"
  )[0];
  const DashboardSectionSpacingContainer: Element = queryAllByTestId(
    "DashboardSectionSpacingContainer"
  )[0];
  const ResponsiveMobile: Element = queryAllByTestId(
    "DashboardSectionMobile"
  )[0];

  return {
    ...utils,
    ConsoleMobile,
    DashboardSectionSpacingContainer,
    ResponsiveMobile
  };
}
