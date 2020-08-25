import breakpoints from "<styles>/variables/breakpoints";

describe("styles / variables / breakpoints", () => {
  test("should have correct breakpoints", () => {
    expect(breakpoints).toEqual({
      breakpoint640: "640px",
      breakpoint641: "641px",
      breakpoint1280: "1280px",
      breakpoint1281: "1281px",
      breakpoint1680: "1680px",
      breakpoint1681: "1681px",
      breakpoint1920: "1920px"
    });
  });
});