import spacing from "<styles>/variables/spacing";

describe("styles / variables / spacing", () => {
  test("should have correct spacings", () => {
    expect(spacing).toEqual({
      negativeSpacing16: "-1.6rem",
      spacing0: "0",
      spacing2: ".2rem",
      spacing4: ".4rem",
      spacing8: ".8rem",
      spacing10: "1rem",
      spacing12: "1.2rem",
      spacing14: "1.4rem",
      spacing16: "1.6rem",
      spacing24: "2.4rem",
      spacing28: "2.8rem",
      spacing30: "3.0rem",
      spacing32: "3.2rem",
      spacing36: "3.6rem",
      spacing40: "4rem",
      spacing48: "4.8rem",
      spacing52: "5.2rem",
      spacing56: "5.6rem",
      spacing64: "6.4rem",
      spacing68: "6.8rem",
      spacing72: "7.2rem",
      spacing80: "8rem",
      spacing88: "8.8rem",
      spacing96: "9.6rem",
      spacing248: "24.8rem",
      spacing1056: "105.6rem"
    });
  });
});
