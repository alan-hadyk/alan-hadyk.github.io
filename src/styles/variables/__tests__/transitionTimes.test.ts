import transitionTimes from "<styles>/variables/transitionTimes";

describe("styles / variables / transitionTimes", () => {
  test("should have correct transitionTimes", () => {
    expect(transitionTimes).toEqual({
      default: "300ms",
      fast: "150ms",
      slow: "900ms",
      verySlow: "3600ms"
    });
  });
}); 