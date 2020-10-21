/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
import { act, renderHook } from "@testing-library/react-hooks";

import useFpsCounter from "<hooks>/useFpsCounter";

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 1);
};

describe("hooks / useFpsCounter", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("chartData", () => {
    test("should constantly update with array of correct values", () => {
      jest.useFakeTimers();

      let performance = 958224;

      global.performance.now = () => performance++;

      const chartData = {
        current: []
      };
      const fpsContainer = {
        current: document.createElement("div")
      };

      renderHook(() =>
        useFpsCounter({
          chartData,
          fpsContainer
        })
      );

      expect(chartData.current).toEqual([]);

      act(() => {
        jest.advanceTimersByTime(10);
      });

      expect(chartData.current).toEqual([
        {
          time: 0,
          value: 1
        },
        {
          time: 1,
          value: 2
        },
        {
          time: 2,
          value: 3
        },
        {
          time: 3,
          value: 4
        },
        {
          time: 4,
          value: 5
        },
        {
          time: 5,
          value: 6
        },
        {
          time: 6,
          value: 7
        },
        {
          time: 7,
          value: 8
        },
        {
          time: 8,
          value: 9
        },
        {
          time: 9,
          value: 10
        },
        {
          time: 10,
          value: 11
        },
        {
          time: 11,
          value: 12
        },
        {
          time: 12,
          value: 13
        },
        {
          time: 13,
          value: 14
        },
        {
          time: 14,
          value: 15
        },
        {
          time: 15,
          value: 16
        },
        {
          time: 16,
          value: 17
        },
        {
          time: 17,
          value: 18
        },
        {
          time: 18,
          value: 19
        }
      ]);

      jest.clearAllTimers();
    });
  });

  describe("fpsContainer", () => {
    test("should constantly update with correct value", () => {
      jest.useFakeTimers();

      let performance = 958224;

      global.performance.now = () => performance++;

      const chartData = {
        current: []
      };
      const fpsContainer = {
        current: document.createElement("div")
      };

      renderHook(() =>
        useFpsCounter({
          chartData,
          fpsContainer
        })
      );

      expect(fpsContainer.current.textContent).toEqual("");

      act(() => {
        jest.advanceTimersByTime(10);
      });

      expect(fpsContainer.current.textContent).toEqual("19");

      act(() => {
        jest.advanceTimersByTime(10);
      });

      expect(fpsContainer.current.textContent).toEqual("45");

      act(() => {
        jest.advanceTimersByTime(10);
      });

      expect(fpsContainer.current.textContent).toEqual("60");

      jest.clearAllTimers();
    });
  });

  describe("isPerformanceLow", () => {
    test("should return true if FPS is below 25", () => {
      jest.useFakeTimers();

      global.performance.now = () => 1;

      global.requestAnimationFrame = (callback) => {
        setTimeout(callback, 40);
      };

      const { result } = renderHook(() => useFpsCounter({}));

      expect(result.current.isPerformanceLow).toBeFalsy();

      act(() => {
        jest.advanceTimersByTime(100);
      });

      expect(result.current.isPerformanceLow).toBeTruthy();

      act(() => {
        jest.advanceTimersByTime(100);
      });

      expect(result.current.isPerformanceLow).toBeTruthy();

      jest.clearAllTimers();
    });

    test("should return false if FPS is above 25", () => {
      jest.useFakeTimers();

      global.performance.now = () => 1;

      const { result } = renderHook(() => useFpsCounter({}));

      expect(result.current.isPerformanceLow).toBeFalsy();

      act(() => {
        jest.advanceTimersByTime(100);
      });

      expect(result.current.isPerformanceLow).toBeTruthy();

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(result.current.isPerformanceLow).toBeFalsy();

      jest.clearAllTimers();
    });
  });
});
