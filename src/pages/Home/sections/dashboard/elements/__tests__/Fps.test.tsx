import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import Fps from "<pages>/Home/sections/dashboard/elements/Fps";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / dashboard / elements / Fps", () => {
  test("should have correct structure", () => {
    const {
      DashboardElement,
      FpsChart
    } = setup();

    expect(DashboardElement.children[1].children[0].children[0]).toEqual(FpsChart);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 16.33%", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("flex", "0 1 16.33%");
        });
      });

      describe("overflow", () => {
        test("should have visible", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("overflow", "visible");
        });
      });

      describe("shuffleDelay", () => {
        test("should trigger shuffleText.start in intervals with 3000ms delay", () => {
          jest.spyOn(ShuffleText.prototype, "start");
          jest.useFakeTimers();
    
          setup();

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

          jest.advanceTimersByTime(3000);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(3000);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.advanceTimersByTime(3000);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(4);
    
          jest.advanceTimersByTime(3000);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(5);
    
          jest.clearAllTimers();
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
