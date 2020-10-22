import fontSizes from "<styles>/variables/fontSizes";

describe("styles / variables / fontSizes", () => {
  test("should have correct font sizes", () => {
    expect(fontSizes).toEqual({
      font8: "8px",
      font12: "12px",
      font16: "16px",
      font20: "20px",
      font24: "24px",
      font28: "28px",
      font32: "32px",
      font36: "36px",
      font48: "48px",
      font72: "72px"
    });
  });
});
