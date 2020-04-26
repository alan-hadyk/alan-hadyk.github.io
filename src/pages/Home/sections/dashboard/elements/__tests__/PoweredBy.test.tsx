import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import PoweredBy from "<pages>/Home/sections/dashboard/elements/PoweredBy";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / dashboard / elements / PoweredBy", () => {
  test("should have correct structure", () => {
    const {
      DashboardElement,
      ReactLogo
    } = setup();

    expect(DashboardElement.children[1].children[4].children[0].children[0]).toEqual(ReactLogo);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 13.6%", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("flex", "0 1 13.6%");
        });
      });

      describe("shuffleDelay", () => {
        test("should trigger shuffleText.start in intervals with 4200ms delay", () => {
          jest.spyOn(ShuffleText.prototype, "start");
          jest.useFakeTimers();
    
          setup();

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

          jest.advanceTimersByTime(4200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(4200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.advanceTimersByTime(4200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(4);
    
          jest.advanceTimersByTime(4200);
    
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
        test("should render Powered by react", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[0].textContent).toEqual("Powered by react");
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

  describe("ReactLogo", () => {
    test("should render", () => {
      const { ReactLogo } = setup();
  
      expect(ReactLogo.textContent).toEqual("Icon-ReactLogo.svg");
    });
  });
});

interface Setup extends RenderResult {
  Corners: Element[];
  DashboardElement: Element;
  ReactLogo: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <PoweredBy />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};
  const DashboardElement: Element = queryByTestId("PoweredBy");
  const ReactLogo: Element = queryByTestId("ReactLogo");
  const Corners: Element[] = queryAllByTestId("Corner");

  return {
    ...utils,
    Corners,
    DashboardElement,
    ReactLogo
  };
}
