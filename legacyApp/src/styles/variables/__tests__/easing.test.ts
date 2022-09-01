import easing from "styles/variables/easing";

describe("styles / variables / easing", () => {
  test("should have correct easings", () => {
    expect(easing).toEqual({
      easeInOut: "ease-in-out",
      linear: "linear"
    });
  });
});
