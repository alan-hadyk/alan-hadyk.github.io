import React from "react";
import { RenderResult } from "@testing-library/react";

import FlowChart from "<molecules>/FlowChart";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("vivus");
import Vivus from "vivus";

describe("molecules / FlowChart", () => {
  test("should have correct structure", () => {
    const { 
      FlexContainer,
      FlowChartIcon
    } = setup();

    expect(FlexContainer.children[0]).toEqual(FlowChartIcon);
  });

  test("should fire Vivus during initial render", () => {
    const spyVivus = jest.fn();
    const mockVivus: jest.Mock<unknown, unknown[]> = Vivus as unknown as jest.Mock;

    mockVivus.mockImplementation(spyVivus);

    setup();

    const mockCall = spyVivus.mock.calls[0];

    expect(mockCall[0]).toEqual("flow-chart");
    expect(mockCall[1]).toEqual({
      delay: 300,
      duration: 600, 
      type: "delayed"
    });
    expect(typeof mockCall[2]).toEqual("function");
  });

  describe("FlexContainer", () => {    
    describe("Props", () => {
      describe("align-items", () => { 
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("justify-content", () => { 
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

  describe("FlowChartIcon", () => {
    test("should render correct SVG", () => {
      const { FlowChartIcon } = setup();

      expect(FlowChartIcon.textContent).toEqual("Flux-FlowChart.svg");
    });

    describe("Props", () => {
      describe("id", () => { 
        test("should have flow-chart", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon.getAttribute("id")).toEqual("flow-chart");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  FlowChartIcon: SVGSVGElement;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <FlowChart />
  );

  const { queryByTestId }: RenderResult = utils;
  const FlexContainer: Element = queryByTestId("FlowChart");
  const FlowChartIcon: SVGSVGElement = document.querySelector("svg");

  return {
    ...utils,
    FlexContainer,
    FlowChartIcon
  };
}
