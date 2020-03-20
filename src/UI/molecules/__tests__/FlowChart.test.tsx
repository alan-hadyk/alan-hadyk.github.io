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
      FlowChartIcon,
      SpacingContainer
    } = setup();

    expect(FlexContainer.children[0]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(FlowChartIcon);
  });

  test("should fire Vivus during initial render", () => {
    const spyVivus = jest.fn();
    const mockVivus: jest.Mock<unknown, unknown[]> = Vivus as unknown as jest.Mock;

    mockVivus.mockImplementation(spyVivus);

    setup();

    const mockCall = spyVivus.mock.calls[0];

    expect(mockCall[0]).toEqual("flow-chart");
    expect(mockCall[1]).toEqual({
      delay: 150,
      duration: 300, 
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

  describe("SpacingContainer", () => {    
    describe("Props", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("paddingBottom", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-bottom", ".8rem");
        });
      });

      describe("paddingLeft", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-left", ".8rem");
        });
      });

      describe("paddingRight", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-right", ".8rem");
        });
      });

      describe("paddingTop", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", ".8rem");
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

  describe("FlowChartIcon", () => {
    test("should render correct SVG", () => {
      const { FlowChartIcon } = setup();

      expect(FlowChartIcon.textContent).toEqual("Flux-FlowChart.svg");
    });

    describe("Styles", () => {
      describe("display", () => { 
        test("should have block", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon).toHaveStyleRule("display", "block");
        });
      });

      describe("height", () => { 
        test("should have 100%", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon).toHaveStyleRule("height", "100%");
        });
      });

      describe("margin", () => { 
        test("should have 0 auto", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon).toHaveStyleRule("margin", "0 auto");
        });
      });

      describe("width", () => { 
        test("should have 100%", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon).toHaveStyleRule("width", "100%");
        });
      });

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
  SpacingContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <FlowChart />
  );

  const { queryByTestId }: RenderResult = utils;
  const FlexContainer: Element = queryByTestId("FlowChart");
  const FlowChartIcon: SVGSVGElement = document.querySelector("svg");
  const SpacingContainer: Element = queryByTestId("FlowChartSpacingContainer");

  return {
    ...utils,
    FlexContainer,
    FlowChartIcon,
    SpacingContainer
  };
}
