import React from "react";
import { RenderResult } from "@testing-library/react";

import Fps from "<pages>/Home/sections/dashboard/elements/Fps";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<hooks>/useFpsCounter");

describe("pages / Home / sections / dashboard / elements / Fps", () => {
  test("should have correct structure", () => {
    const {
      DashboardElement,
      FpsChart
    } = setup();

    expect(DashboardElement.children[1].children[0].children[0].children[0]).toEqual(FpsChart);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 20%", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement).toHaveStyleRule("flex", "0 1 20%");
        });
      });

      describe("overflow", () => {
        test("should have visible", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement).toHaveStyleRule("overflow", "visible");
        });
      });

      describe("childrenHeight", () => {
        test("should have calc(100% - 3.6rem)", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[1]).toHaveStyleRule("height", "calc(100% - 3.6rem)");
        });
      });

      describe("title", () => {
        test("should render Fps", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[0].textContent).toEqual("Fps");
        });
      });
    });
  });

  describe("FpsChart", () => {
    test("should render", () => {
      const { FpsChart } = setup();

      expect(FpsChart).toHaveStyleRule("height", "100%");
      expect(FpsChart).toHaveStyleRule("position", "relative");
    });
  });
});

interface Setup extends RenderResult {
  DashboardElement: Element;
  FpsChart: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Fps />
  );

  const { queryByTestId } = utils || {};
  const DashboardElement: Element = queryByTestId("Fps");
  const FpsChart: Element = queryByTestId("FpsChart");

  return {
    ...utils,
    DashboardElement,
    FpsChart
  };
}
