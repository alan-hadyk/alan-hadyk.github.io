import { renderHook, RenderHookResult } from "@testing-library/react-hooks";

import useResize from "<hooks>/useResize";

import {
  UseResizeArgs
} from "<hooks>/__typings__/useResize.d.ts";

describe("hooks / useResize", () => {
  test("should fire callback only when window.innerWidth is larger than or equal to given breakpoint", () => {
    const callback = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const map: any  = {};
    global.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    const { unmount } = setup({ breakpoint: "1280px", callback });

    expect(callback).toHaveBeenCalledTimes(0);

    global.innerWidth = 1281;

    map.resize();

    expect(callback).toHaveBeenCalledTimes(1);

    global.innerWidth = 1600;

    map.resize();

    expect(callback).toHaveBeenCalledTimes(1);

    global.innerWidth = 900;

    map.resize();

    expect(callback).toHaveBeenCalledTimes(1);

    global.innerWidth = 1300;

    map.resize();

    expect(callback).toHaveBeenCalledTimes(2);

    unmount();

    map.resize();

    expect(callback).toHaveBeenCalledTimes(2);
  });
});

function setup(args: UseResizeArgs): RenderHookResult<unknown, void> {
  const result: RenderHookResult<unknown, void> = renderHook(() => {
    useResize(args);
  });

  return result;
}
