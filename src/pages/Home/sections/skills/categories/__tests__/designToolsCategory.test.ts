import designToolsCategory from "<pages>/Home/sections/skills/categories/designToolsCategory";

describe("pages / Home / sections / skills / categories/ designToolsCategory", () => {
  test("should have correct content", () => {
    expect(designToolsCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandPhotoshop",
          label: "Photoshop"
        },
        {
          iconName: "brandSketch",
          label: "Sketch"
        },
        {
          iconName: "brandFigma",
          label: "Figma"
        },
        {
          iconName: "brandCorel",
          label: "CorelDRAW"
        },
        {
          iconName: "brandAfterEffects",
          label: "After Effects"
        },
        {
          iconName: "brandZeplin",
          label: "Zeplin"
        },
        {
          iconName: "brandGallery",
          label: "Gallery"
        }
      ],
      title: "Design Tools"
    });
  });
});