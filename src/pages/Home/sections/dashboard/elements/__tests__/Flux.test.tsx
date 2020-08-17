import React from "react";
import { RenderResult } from "@testing-library/react";

import Flux from "<pages>/Home/sections/dashboard/elements/Flux";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  DashboardSectionProps
} from "<pages>/Home/sections/dashboard/DashboardSection/__typings__/DashboardSection.d.ts";

jest.mock("vivus");

jest.mock("<hooks>/useFpsCounter");

describe("pages / Home / sections / dashboard / elements / Flux", () => {
  test("should have correct structure", () => {
    const {
      DashboardElement,
      FlowChart
    } = setup();

    expect(DashboardElement.children[1].children[0].children[4].children[0].children[0]).toEqual(FlowChart);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 30% if device is desktop", () => {
          const { DashboardElement } = setup({
            device: "desktop"
          });
      
          expect(DashboardElement).toHaveStyleRule("flex", "0 1 30%");
        });

        test("should have 0 1 50% if device is not desktop", () => {
          const { DashboardElement } = setup({
            device: "tablet"
          });
      
          expect(DashboardElement).toHaveStyleRule("flex", "0 1 50%");
        });
      });

      describe("childrenHeight", () => {
        test("should have calc(100% - 3.6rem)", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[1]).toHaveStyleRule("height", "calc(100% - 3.6rem)");
        });
      });

      describe("title", () => {
        test("should render Flux", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[0].textContent).toEqual("Flux");
        });
      });

      describe("shouldDisplayCorners", () => {
        test("should render corners", () => {
          const { Corners, DashboardElement } = setup();
      
          expect(DashboardElement.children[1].children[0].children[0]).toEqual(Corners[0]);
          expect(DashboardElement.children[1].children[0].children[1]).toEqual(Corners[1]);
          expect(DashboardElement.children[1].children[0].children[2]).toEqual(Corners[2]);
          expect(DashboardElement.children[1].children[0].children[3]).toEqual(Corners[3]);
        });
      });
    });
  });

  describe("FlowChart", () => {
    test("should render", () => {
      const { FlowChart } = setup();
  
      expect(FlowChart.textContent).toEqual("Flux-FlowChart.svg");
    });
  });
});

interface Setup extends RenderResult {
  Corners: Element[];
  DashboardElement: Element;
  FlowChart: Element;
}

type FluxTestProps = Partial<DashboardSectionProps>;

function setup(additionalProps?: FluxTestProps): Setup {
  const props: DashboardSectionProps = {
    device: "desktop",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Flux {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};
  
  const DashboardElement: Element = queryByTestId("Flux");
  const FlowChart: Element = queryByTestId("FlowChart");
  const Corners: Element[] = queryAllByTestId("Corner");

  return {
    ...utils,
    Corners,
    DashboardElement,
    FlowChart
  };
}
