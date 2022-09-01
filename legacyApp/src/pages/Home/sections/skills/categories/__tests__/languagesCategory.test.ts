import languagesCategory from "pages/Home/sections/skills/categories/languagesCategory";

describe("pages / Home / sections / skills / categories / languagesCategory", () => {
  test("should have correct content", () => {
    expect(languagesCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandJS",
          label: "JavaScript"
        },
        {
          iconName: "brandTS",
          label: "TypeScript"
        },
        {
          iconName: "brandCoffeeScript",
          label: "CoffeeScript"
        },
        {
          iconName: "brandRuby",
          label: "Ruby"
        }
      ],
      title: "Languages"
    });
  });
});
