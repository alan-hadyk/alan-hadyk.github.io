import fontFamilies from "<styles>/variables/fontFamilies";

describe("styles / variables / fontFamilies", () => {
  test("should have correct fonts", () => {
    expect(fontFamilies).toEqual({
      AnonymousPro: "'Anonymous Pro', monospace",
      Exan: "ExanModifiedRegular, monospace"
    });
  });
});