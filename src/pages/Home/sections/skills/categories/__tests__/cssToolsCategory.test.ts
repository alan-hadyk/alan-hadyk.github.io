import cssToolsCategory from "<pages>/Home/sections/skills/categories/cssToolsCategory";

describe("pages / Home / sections / skills / categories/ cssToolsCategory", () => {
  test("should have correct content", () => {
    expect(cssToolsCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandStyledComponents",
          label: "styled components"
        },
        {
          iconName: "brandSass",
          label: "Sass"
        },
        {
          iconName: "brandCSSModules",
          label: "CSS Modules"
        },
        {
          iconName: "brandLESS",
          label: "LESS"
        }
      ],
      title: "CSS tools"
    });
  });
});