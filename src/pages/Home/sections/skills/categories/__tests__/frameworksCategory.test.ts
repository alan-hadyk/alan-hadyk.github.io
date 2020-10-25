import frameworksCategory from "pages/Home/sections/skills/categories/frameworksCategory";

describe("pages / Home / sections / skills / categories / frameworksCategory", () => {
  test("should have correct content", () => {
    expect(frameworksCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandReact",
          label: "React"
        },
        {
          iconName: "brandReact",
          label: "React Native"
        },
        {
          iconName: "brandNode",
          label: "Node.js"
        },
        {
          iconName: "brandNode",
          label: "Express"
        },
        {
          iconName: "brandEmber",
          label: "Ember"
        },
        {
          iconName: "brandPrestaShop",
          label: "PrestaShop"
        },
        {
          iconName: "brandJQuery",
          label: "jQuery"
        }
      ],
      title: "Frameworks"
    });
  });
});
