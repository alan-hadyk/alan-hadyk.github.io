import { renderHook, RenderHookResult } from "@testing-library/react-hooks";

import useInterval from "<hooks>/useInterval";

describe("hooks / useInterval", () => {
  describe("setText", () => {
    test("should fire callback in intervals, and stop when hook gets unomounted", () => {
      const callback = jest.fn();
      jest.useFakeTimers();

      const { unmount } = setup(callback, 900);

      expect(callback).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(900);

      expect(callback).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(900);

      expect(callback).toHaveBeenCalledTimes(2);

      jest.advanceTimersByTime(900);

      expect(callback).toHaveBeenCalledTimes(3);

      jest.advanceTimersByTime(900);

      expect(callback).toHaveBeenCalledTimes(4);

      unmount();

      jest.advanceTimersByTime(1800);

      expect(callback).toHaveBeenCalledTimes(4);

      jest.clearAllTimers();
    });
  });
});

function setup(
  callback: VoidFunction,
  delay: number
): RenderHookResult<unknown, void> {
  const result: RenderHookResult<unknown, void> = renderHook(() => {
    useInterval(callback, delay);
  });

  return result;
}
