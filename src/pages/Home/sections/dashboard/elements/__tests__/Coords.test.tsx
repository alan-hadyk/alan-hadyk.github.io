import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import Coords from "<pages>/Home/sections/dashboard/elements/Coords";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / dashboard / elements / Coords", () => {
  test("should have correct structure", () => {
    const { 
      DashboardElement,
      Sonar
    } = setup();

    expect(DashboardElement.children[1].children[0].children[0]).toEqual(Sonar);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 15%", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("flex", "0 1 15%");
        });
      });

      describe("shuffleDelay", () => {
        test("should trigger shuffleText.start in intervals with 600ms delay", () => {
          jest.spyOn(ShuffleText.prototype, "start");
          jest.useFakeTimers();
    
          setup();

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

          jest.advanceTimersByTime(600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.advanceTimersByTime(600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);
    
          jest.advanceTimersByTime(600);
    
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
        test("should render Coords", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[0].textContent).toEqual("Coords");
        });
      });
    });
  });

  describe("Sonar", () => {
    test("should render", () => {
      const { Sonar } = setup();
  
      expect(Sonar).toHaveStyleRule("height", "100%");
      expect(Sonar).toHaveStyleRule("position", "relative");
      
      expect(Sonar.childElementCount).toEqual(1);
      expect(Sonar.children[0].childElementCount).toEqual(3);
      
      expect(Sonar.children[0].children[0]).toHaveStyleRule("animation-duration", "3600ms", {
        modifier: "&:after"
      });
      expect(Sonar.children[0].children[0]).toHaveStyleRule("animation-iteration-count", "infinite", {
        modifier: "&:after"
      });

      expect(Sonar.children[0].children[1]).toHaveStyleRule("animation-duration", "300ms");
      expect(Sonar.children[0].children[1]).toHaveStyleRule("animation-iteration-count", "infinite");
      expect(Sonar.children[0].children[1]).toHaveStyleRule("animation-timing-function", "linear");

      expect(Sonar.children[0].children[2]).toHaveStyleRule("animation-duration", "300ms");
      expect(Sonar.children[0].children[2]).toHaveStyleRule("animation-iteration-count", "infinite");
      expect(Sonar.children[0].children[2]).toHaveStyleRule("animation-timing-function", "linear");
    });
  });
});

interface Setup extends RenderResult {
  DashboardElement: Element;
  Sonar: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Coords />
  );

  const { container, queryByTestId } = utils || {};

  return {
    ...utils,
    DashboardElement: container.children[0],
    Sonar: queryByTestId("Sonar")
  };
}
