/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
import { renderHook } from "@testing-library/react-hooks";

import useFpsCounter from "<hooks>/useFpsCounter";

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 1);
};

describe("hooks / useFpsCounter", () => {  
  describe("chartData", () => {    
    test("should constantly update with array of correct values", () => {
      jest.useFakeTimers();

      let performance = 958224;

      setInterval(() => {
        global.performance.now = () => performance++;
      }, 10);

      const chartData = {
        current: []
      };
      const fpsContainer = {
        current: document.createElement("div")
      };
       
      renderHook(() => useFpsCounter({
        chartData,
        fpsContainer
      }));
  
      expect(chartData.current).toEqual([]);

      jest.advanceTimersByTime(10);

      expect(chartData.current).toEqual([{
        time: 0,
        value: 1
      }, {
        time: 1,
        value: 2
      }, {
        time: 2,
        value: 3
      }, {
        time: 3,
        value: 4
      }, {
        time: 4,
        value: 5
      }, {
        time: 5,
        value: 6
      }, {
        time: 6,
        value: 7
      }, {
        time: 7,
        value: 8
      }, {
        time: 8,
        value: 9
      }, {
        time: 9,
        value: 1
      }]);

      jest.advanceTimersByTime(10);

      expect(chartData.current).toEqual([{
        time: 0,
        value: 1
      }, {
        time: 1,
        value: 2
      }, {
        time: 2,
        value: 3
      }, {
        time: 3,
        value: 4
      }, {
        time: 4,
        value: 5
      }, {
        time: 5,
        value: 6
      }, {
        time: 6,
        value: 7
      }, {
        time: 7,
        value: 8
      }, {
        time: 8,
        value: 9
      }, {
        time: 9,
        value: 1
      }, {
        time: 10,
        value: 2
      }, {
        time: 11,
        value: 3
      }, {
        time: 12,
        value: 4
      }, {
        time: 13,
        value: 5
      }, {
        time: 14,
        value: 6
      }, {
        time: 15,
        value: 7
      }, {
        time: 16,
        value: 8
      }, {
        time: 17,
        value: 9
      }, {
        time: 18,
        value: 10
      }, {
        time: 19,
        value: 11
      }]);
      
      jest.clearAllTimers();
    });
  });

  describe("fpsContainer", () => {    
    test("should constantly update with correct value", () => {
      jest.useFakeTimers();

      let performance = 958224;

      setInterval(() => {
        global.performance.now = () => performance++;
      }, 10);

      const chartData = {
        current: []
      };
      const fpsContainer = {
        current: document.createElement("div")
      };
       
      renderHook(() => useFpsCounter({
        chartData,
        fpsContainer
      }));
  
      expect(fpsContainer.current.textContent).toEqual("");

      jest.advanceTimersByTime(10);

      expect(fpsContainer.current.textContent).toEqual("10");

      jest.advanceTimersByTime(10);

      expect(fpsContainer.current.textContent).toEqual("20");

      jest.advanceTimersByTime(10);

      expect(fpsContainer.current.textContent).toEqual("30");
      
      jest.clearAllTimers();
    });
  });
});
