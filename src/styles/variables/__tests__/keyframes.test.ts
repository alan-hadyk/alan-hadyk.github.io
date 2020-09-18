/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from "styled-components";
import keyframes from "<styles>/variables/keyframes";

interface KeyframesVariables {
  barChartWidth: any;
  blink: any;
  borderDanceHorizontal: any;
  borderDanceVertical: any;
  glow: any;
  ripple: any;
  rippleAlternative: any;
  rotate: any;
}

const {
  barChartWidth,
  blink,
  borderDanceHorizontal,
  borderDanceVertical,
  glow,
  ripple,
  rippleAlternative,
  rotate
}: KeyframesVariables = keyframes;

console.log("barChartWidth.toString()", String(barChartWidth.toString()));

describe("styles / variables / keyframes", () => {
  test("should have correct keyframe - barChartWidth", () => {
    expect(barChartWidth.stringifyArgs[0]).toEqual(`
    0% {
      opacity: 0.99;
      width: 100%;
    }
    50% {
      width: 20%;
    }
    100% {
      opacity: 1;
      width: 100%;
    }
  `);
  });

  test("should have correct keyframe - blink", () => {
    expect(blink.stringifyArgs[0]).toEqual(`
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

  test("should have correct keyframe - borderDanceHorizontal", () => {
    expect(borderDanceHorizontal.stringifyArgs[0]).toEqual(`
    from {
      background-position: left top;
      opacity: 0.99;
    }
    to {
      background-position: left 1.2rem top;
      opacity: 1;
    }
  `);
  });

  test("should have correct keyframe - borderDanceVertical", () => {
    expect(borderDanceVertical.stringifyArgs[0]).toEqual(`
    from {
      background-position: left top;
      opacity: 0.99;
    }
    to {
      background-position: left top 1.2rem;
      opacity: 1;
    }
  `);
  });

  test("should have correct keyframe - glow", () => {
    expect(glow.stringifyArgs[0]).toEqual(`
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

  test("should have correct keyframe - rippleAlternative", () => {
    expect(rippleAlternative.stringifyArgs[0]).toEqual(`
    from {
      height: 2.4rem;
      opacity: 1;
      width: 2.4rem;
    }
    to {
      height: 12rem;
      opacity: 0;
      width: 12rem;
    }
  `);
  });

  test("should have correct keyframe - rotate", () => {
    expect(rotate.stringifyArgs[0]).toEqual(`
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