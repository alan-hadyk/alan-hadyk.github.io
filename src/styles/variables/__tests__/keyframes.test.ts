/* eslint-disable @typescript-eslint/no-explicit-any */
import keyframes from "styles/variables/keyframes";

interface KeyframesVariables {
  blink: any;
  glow: any;
  ripple: any;
  rotate: any;
}

const { blink, glow, ripple, rotate }: KeyframesVariables = keyframes;

describe("styles / variables / keyframes", () => {
  test("should have correct keyframe - blink", () => {
    expect(blink.rules).toEqual(`
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `);
  });

  test("should have correct keyframe - glow", () => {
    expect(glow.rules).toEqual(`
    0% {
      filter: drop-shadow(0px 0px 0px #bcd8db);
      opacity: 0.99;
    }

    16% {
      filter: drop-shadow(0px 0px .4rem #bcd8db);
    }

    32% {
      filter: drop-shadow(0px 0px 0px #bcd8db);
    }

    100% {
      filter: drop-shadow(0px 0px 0px #bcd8db);
      opacity: 1;
    }
  `);
  });

  test("should have correct keyframe - ripple", () => {
    expect(ripple.rules).toEqual(`
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

  test("should have correct keyframe - rotate", () => {
    expect(rotate.rules).toEqual(`
    from {
      transform: rotateY(0deg);
      opacity: 0.99;
    }
    to {
      transform: rotateY(360deg);
      opacity: 1;
    }
  `);
  });
});
