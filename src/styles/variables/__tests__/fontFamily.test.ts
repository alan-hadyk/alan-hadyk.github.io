import fontFamily from "<styles>/variables/fontFamily";

describe("styles / variables / fontFamily", () => {
  test("should have correct fonts", () => {
    expect(fontFamily).toEqual({
      AnonymousPro: "'Anonymous Pro', monospace",
      Exan: "ExanModifiedRegular, monospace"
    });
  });
});