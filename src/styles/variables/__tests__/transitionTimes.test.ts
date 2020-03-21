import transitionTimes from "<styles>/variables/transitionTimes";

describe("styles / variables / transitionTimes", () => {
  test("should have correct transitionTimes", () => {
    expect(transitionTimes).toEqual({
      default: "300ms",
      fast: "150ms",
      instant: "0ms",
      slow: "900ms",
      superSlow: "7200ms",
      verySlow: "3600ms"
    });
  });
});  