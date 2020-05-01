/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
import React from "react";
import { act } from "@testing-library/react";

import FpsChart from "<molecules>/FpsChart";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<hooks>/useLineChart");

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 1);
};

describe("molecules / FpsChart", () => {  
  describe("FpsChart.FpsCounter", () => {    
    test("should have constantly updated value as FPS count", () => {
      jest.useFakeTimers();

      let performance = 958224;

      setInterval(() => {
        global.performance.now = () => performance++;
      }, 10);

      const { FpsCounter } = setup();

      expect(FpsCounter.textContent).toEqual("");

      act(() => {
        jest.advanceTimersByTime(100);
      });

      expect(FpsCounter.textContent).toEqual("60");

      act(() => {
        jest.advanceTimersByTime(100);
      });

      expect(FpsCounter.textContent).toEqual("60");
      
      jest.clearAllTimers();
    });
  });
});

function setup() {
  const utils = renderWithTheme(
    <FpsChart />
  );

  const { queryAllByTestId } = utils;

  const FpsCounter = queryAllByTestId("FpsCounter")[0];

  return {
    ...utils,
    FpsCounter
  };
}
