/* eslint-disable @typescript-eslint/no-explicit-any */
import keyframes from "<styles>/variables/keyframes";

interface KeyframesVariables {
  borderDanceHorizontal: any;
  borderDanceVertical: any;
  glow: any;
  ripple: any;
}

const {
  borderDanceHorizontal,
  borderDanceVertical,
  glow,
  ripple
}: KeyframesVariables = keyframes;

describe("styles / variables / keyframes", () => {
  test("should have correct keyframe - borderDanceHorizontal", () => {
    expect(borderDanceHorizontal.stringifyArgs[0]).toEqual(`
    from {
      background-position: left top;
    }
    to {
      background-position: left 12px top;
    }
  `);
  });

  test("should have correct keyframe - borderDanceVertical", () => {
    expect(borderDanceVertical.stringifyArgs[0]).toEqual(`
    from {
      background-position: left top;
    }
    to {
      background-position: left top 12px;
    }
  `);
  });

  test("should have correct keyframe - glow", () => {
    expect(glow.stringifyArgs[0]).toEqual(`
    0% {
      filter: drop-shadow(0px 0px 0px #bcd8db);
    }

    16% {
      filter: drop-shadow(0px 0px .4rem #bcd8db);
    }

    32% {
      filter: drop-shadow(0px 0px 0px #bcd8db);
    }

    100% {
      filter: drop-shadow(0px 0px 0px #bcd8db);
    }
  `);
  });

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