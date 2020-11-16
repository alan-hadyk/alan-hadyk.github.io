import React from "react";
import { RenderResult } from "@testing-library/react";

import Flux from "pages/Home/sections/dashboard/elements/Flux";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("pages / Home / sections / dashboard / elements / Flux", () => {
  test("should have correct structure", () => {
    const { DashboardElement, FlowChart } = setup();

    expect(
      DashboardElement.children[1].children[0].children[4].children[0]
        .children[0]
    ).toEqual(FlowChart);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("childrenHeight", () => {
        test("should have calc(100% - 3.6rem)", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[1]).toHaveStyleRule(
            "height",
            "calc(100% - 3.6rem)"
          );
        });
      });

      describe("flex", () => {
        test("should have 1 0 30%", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement).toHaveStyleRule("flex", "1 0 30%");
        });
      });

      describe("shouldDisplayCorners", () => {
        test("should render corners", () => {
          const { Corners, DashboardElement } = setup();

          expect(DashboardElement.children[1].children[0].children[0]).toEqual(
            Corners[0]
          );
          expect(DashboardElement.children[1].children[0].children[1]).toEqual(
            Corners[1]
          );
          expect(DashboardElement.children[1].children[0].children[2]).toEqual(
            Corners[2]
          );
          expect(DashboardElement.children[1].children[0].children[3]).toEqual(
            Corners[3]
          );
        });
      });

      describe("title", () => {
        test("should render Flux", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[0].textContent).toEqual("Flux");
        });
      });
    });
  });

  describe("FlowChart", () => {
    test("should render", () => {
      const { FlowChart } = setup();

      expect(FlowChart.getAttribute("src")).toEqual(
        "/images/svg/Flux-FlowChart.svg"
      );
    });
  });
});

interface Setup extends RenderResult {
  Corners: Element[];
  DashboardElement: Element;
  FlowChart: SVGSVGElement;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<Flux />);

  const { queryByTestId, queryAllByTestId } = utils || {};

  const Corners: Element[] = queryAllByTestId("Corner");
  const DashboardElement: Element = queryByTestId("Flux");
  const FlowChart: SVGSVGElement = document.querySelector("img#flow-chart");

  return {
    ...utils,
    Corners,
    DashboardElement,
    FlowChart
  };
}
