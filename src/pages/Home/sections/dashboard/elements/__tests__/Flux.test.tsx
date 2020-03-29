import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import Flux from "<pages>/Home/sections/dashboard/elements/Flux";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("vivus");

describe("pages / Home / sections / dashboard / elements / Flux", () => {
  test("should have correct structure", () => {

    const {
      DashboardElement,
      FlowChart
    } = setup();

    expect(DashboardElement.children[1].children[4].children[0].children[0]).toEqual(FlowChart);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 30%", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("flex", "0 1 30%");
        });
      });

      describe("shuffleDelay", () => {
        test("should trigger shuffleText.start in intervals with 1200ms delay", () => {
          jest.spyOn(ShuffleText.prototype, "start");
          jest.useFakeTimers();
    
          setup();

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

          jest.advanceTimersByTime(1200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(1200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.advanceTimersByTime(1200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);
    
          jest.advanceTimersByTime(1200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);
    
          jest.clearAllTimers();
        });
      });

      describe("childrenHeight", () => {
        test("should have 17vh", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[1]).toHaveStyleRule("height", "17vh");
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
      
          expect(DashboardElement.children[1].children[0]).toEqual(Corners[0]);
          expect(DashboardElement.children[1].children[1]).toEqual(Corners[1]);
          expect(DashboardElement.children[1].children[2]).toEqual(Corners[2]);
          expect(DashboardElement.children[1].children[3]).toEqual(Corners[3]);
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

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Flux />
  );

  const { container, queryByTestId, queryAllByTestId } = utils || {};
  const DashboardElement: Element = container.children[0];
  const FlowChart: Element = queryByTestId("FlowChart");
  const Corners: Element[] = queryAllByTestId("Corner");

  return {
    ...utils,
    Corners,
    DashboardElement,
    FlowChart
  };
}
