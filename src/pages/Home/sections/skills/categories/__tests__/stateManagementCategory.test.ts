import stateManagementCategory from "<pages>/Home/sections/skills/categories/stateManagementCategory";

describe("pages / Home / sections / skills / categories/ languagesCategory", () => {
  test("should have correct content", () => {
    expect(stateManagementCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandApollo",
          label: "Apollo"
        },
        {
          iconName: "brandRedux",
          label: "Redux"
        }
      ],
      title: "State management"
    });
  });
});