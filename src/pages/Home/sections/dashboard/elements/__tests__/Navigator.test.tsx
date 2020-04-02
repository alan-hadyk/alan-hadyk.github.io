import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import Navigator from "<pages>/Home/sections/dashboard/elements/Navigator";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / dashboard / elements / Navigator", () => {
  test("should have correct structure", () => {
    const {
      DashboardElement,
      Performance
    } = setup();

    expect(DashboardElement.children[1].children[0].children[0]).toEqual(Performance);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 1 1 12%", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("flex", "1 1 12%");
        });
      });

      describe("shuffleDelay", () => {
        test("should trigger shuffleText.start in intervals with 3600ms delay", () => {
          jest.spyOn(ShuffleText.prototype, "start");
          jest.useFakeTimers();
    
          setup();

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(4);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(4);
    
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
        test("should render Navigator", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[0].textContent).toEqual("Navigator");
        });
      });
    });
  });

  describe("Performance", () => {
    test("should render", () => {
      const { Performance } = setup();
  
      expect(Performance).toHaveStyleRule("flex-flow", "column nowrap");
      
      expect(Performance.childElementCount).toEqual(17);
      expect(Performance.children[0].childElementCount).toEqual(1);
      
      expect(Performance.children[0].children[0]).toHaveStyleRule("height", "auto");
      expect(Performance.children[0].children[0]).toHaveStyleRule("width", "100%");

      expect(Performance.children[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("color", "#bcd8db");
      expect(Performance.children[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      expect(Performance.children[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-size", "8px");
      expect(Performance.children[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-weight", "400");
      expect(Performance.children[0].children[0].children[0].children[0].children[0].textContent).toEqual("Total heap size");
    });
  });
});

interface Setup extends RenderResult {
  DashboardElement: Element;
  Performance: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Navigator />
  );

  const { queryByTestId } = utils || {};

  const DashboardElement: Element =  queryByTestId("Navigator");
  const Performance: Element = queryByTestId("Performance");

  return {
    ...utils,
    DashboardElement,
    Performance
  };
}
