import spacing from "<styles>/variables/spacing";

describe("styles / variables / spacing", () => {
  test("should have correct spacings", () => {
    expect(spacing).toEqual({
      spacing0: "0",
      spacing1: ".1rem",
      spacing4: ".4rem",
      spacing8: ".8rem",
      spacing12: "1.2rem",
      spacing16: "1.6rem",
      spacing24: "2.4rem",
      spacing40: "4.0rem",
      spacing48: "4.8rem",
      spacing56: "5.6rem",
      spacing96: "9.6rem"
    });
  });
});