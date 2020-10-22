import fontWeights from "<styles>/variables/fontWeights";

describe("styles / variables / fontWeights", () => {
  test("should have correct font weights", () => {
    expect(fontWeights).toEqual({
      bold: "700",
      normal: "400"
    });
  });
});
