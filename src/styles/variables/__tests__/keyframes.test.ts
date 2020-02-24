/* eslint-disable @typescript-eslint/no-explicit-any */
import keyframes from "<styles>/variables/keyframes";

interface KeyframesVariables {
  ripple: any;
}

const { ripple }: KeyframesVariables = keyframes;

describe("styles / variables / keyframes", () => {
  test("should have correct keyframe - ripple", () => {
    expect(ripple.stringifyArgs[0]).toEqual(`
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(10);
    }
  `);
  });
});