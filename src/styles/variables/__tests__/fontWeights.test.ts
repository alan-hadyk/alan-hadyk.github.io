import fontWeights from "<styles>/variables/fontWeights";

describe("styles / variables / fontWeights", () => {
  test("should have correct weight", () => {
    expect(fontWeights).toEqual({
      bold: "700",
      normal: "400"
    });
  });
});