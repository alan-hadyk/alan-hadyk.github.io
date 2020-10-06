import testingCategory from "<pages>/Home/sections/skills/categories/testingCategory";

describe("pages / Home / sections / skills / categories / testingCategory", () => {
  test("should have correct content", () => {
    expect(testingCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandJEST",
          label: "JEST"
        },
        {
          iconName: "brandAirbnb",
          label: "Enzyme"
        },
        {
          iconName: "brandTestingLibrary",
          label: "React Testing Library"
        },
        {
          iconName: "brandCypress",
          label: "Cypress"
        },
        {
          iconName: "brandQunit",
          label: "QUnit"
        } 
      ],
      title: "Testing"
    });
  });
});