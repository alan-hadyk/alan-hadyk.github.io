import cssToolsCategory from "pages/Home/sections/skills/categories/cssToolsCategory";

describe("pages / Home / sections / skills / categories / cssToolsCategory", () => {
  test("should have correct content", () => {
    expect(cssToolsCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandStyledComponents",
          label: "styled components"
        },
        {
          iconName: "brandTailwind",
          label: "Tailwind"
        },
        {
          iconName: "brandChakra",
          label: "Chakra"
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
      title: "CSS Tools"
    });
  });
});
