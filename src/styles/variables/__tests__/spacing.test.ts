import spacing from "<styles>/variables/spacing";

describe("styles / variables / spacing", () => {
  test("should have correct spacings", () => {
    expect(spacing).toEqual({
      spacing4: ".4rem",
      spacing8: ".8rem",
      spacing48: "4.8rem",
      spacing96: "9.6rem"
    });
  });
});