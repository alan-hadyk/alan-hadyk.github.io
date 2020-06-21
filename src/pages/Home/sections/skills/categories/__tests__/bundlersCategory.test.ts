import bundlersCategory from "<pages>/Home/sections/skills/categories/bundlersCategory";

describe("pages / Home / sections / skills / categories/ bundlersCategory", () => {
  test("should have correct content", () => {
    expect(bundlersCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandWebpack",
          label: "Webpack"
        },
        {
          iconName: "brandGrunt",
          label: "Grunt"
        },
        {
          iconName: "brandGulp",
          label: "Gulp"
        }
      ],
      title: "Bundlers"
    });
  });
});