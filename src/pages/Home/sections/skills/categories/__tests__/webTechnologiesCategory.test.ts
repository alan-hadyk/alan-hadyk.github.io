import webTechnologiesCategory from "<pages>/Home/sections/skills/categories/webTechnologiesCategory";

describe("pages / Home / sections / skills / categories/ webTechnologiesCategory", () => {
  test("should have correct content", () => {
    expect(webTechnologiesCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandHTML",
          label: "HTML"
        },
        {
          iconName: "brandCSS",
          label: "CSS"
        }
      ],
      title: "Web Technologies"
    });
  });
});