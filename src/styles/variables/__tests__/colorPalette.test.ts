import colorPalette from "<styles>/variables/colorPalette";

describe("styles / variables / colorPalette", () => {
  test("should have correct colors", () => {
    expect(colorPalette).toEqual({
      // Blue
      blue100: "#bcd8db",
      blue200: "#67d2df",
      blue300: "#78b0b5",
      blue400: "#526065",
      blue500: "#2b595e",
      blue600: "#22272a",
      blue700: "#1e2224",
    
      // Black and white
      black: "#000",
      white: "#fff"
    });
  });
});