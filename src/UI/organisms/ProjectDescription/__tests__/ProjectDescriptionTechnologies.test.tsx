import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectDescriptionTechnologies from "UI/organisms/ProjectDescription/ProjectDescriptionTechnologies";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ProjectDescriptionTechnologiesProps } from "UI/organisms/ProjectDescription/__typings__/ProjectDescriptionTechnologies";

import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

describe("organisms / ProjectDescriptionTechnologies", () => {
  test("should have correct structure", () => {
    const {
      IconsWithLabels,
      ProjectDescriptionTechnologiesContainer,
      ProjectDescriptionTechnologiesSpacingContainer,
      Text
    } = setup();

    expect(ProjectDescriptionTechnologiesContainer.children[0]).toEqual(Text);
    expect(ProjectDescriptionTechnologiesContainer.children[1]).toEqual(
      ProjectDescriptionTechnologiesSpacingContainer
    );
    expect(ProjectDescriptionTechnologiesSpacingContainer.children[0]).toEqual(
      IconsWithLabels
    );
  });

  describe("Text", () => {
    test("should have correct content", () => {
      const { Text } = setup();

      expect(Text.textContent).toEqual("Made with:");
    });

    describe("Props", () => {
      describe("color", () => {
        test("should have #bcd8db", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("color", "#bcd8db");
        });
      });

      describe("fontFamily", () => {
        test("should have 'Anonymous Pro',monospace", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule(
            "font-family",
            "'Anonymous Pro',monospace"
          );
        });
      });

      describe("fontSize", () => {
        test("should have 24px", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-size", "24px");
        });
      });

      describe("fontWeight", () => {
        test("should have 700", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-weight", "700");
        });
      });

      describe("lineHeight", () => {
        test("should have 4rem", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("line-height", "4rem");
        });
      });
    });
  });

  describe("SpacingContainers", () => {
    describe("ProjectDescriptionTechnologiesContainer", () => {
      describe("Props", () => {
        describe("marginBottom", () => {
          test("should have 4rem", () => {
            const { ProjectDescriptionTechnologiesContainer } = setup();

            expect(ProjectDescriptionTechnologiesContainer).toHaveStyleRule(
              "margin-bottom",
              "4rem"
            );
          });
        });
      });
    });

    describe("ProjectDescriptionTechnologiesSpacingContainer", () => {
      describe("Props", () => {
        describe("marginTop", () => {
          test("should have .8rem", () => {
            const { ProjectDescriptionTechnologiesSpacingContainer } = setup();

            expect(
              ProjectDescriptionTechnologiesSpacingContainer
            ).toHaveStyleRule("margin-top", ".8rem");
          });
        });
      });
    });
  });

  describe("IconsWithLabels", () => {
    const iconsWithLabels: IconWithLabelProps[] = [
      {
        iconName: "brandJS",
        label: "Javascript"
      },
      {
        iconName: "brandReact",
        label: "React"
      }
    ];

    test("there should be correct number of icons", () => {
      const { Icons } = setup({
        iconsWithLabels
      });

      expect(Icons.length).toEqual(2);
    });

    test("icons should render correct SVGs", () => {
      const { Icons } = setup({
        iconsWithLabels
      });

      expect(Icons[0].textContent).toEqual("Brand-JS.svg");
      expect(Icons[1].textContent).toEqual("Brand-React.svg");
    });

    test("should have correct content passed via label prop", () => {
      const { LabelTexts } = setup({
        iconsWithLabels
      });

      expect(LabelTexts[0].textContent).toEqual("Javascript");
      expect(LabelTexts[1].textContent).toEqual("React");
    });

    describe("Props", () => {
      describe("size - large", () => {
        describe("FlexContainer - gap", () => {
          test("should have margin-bottom: 2.8rem and margin-right: 2.8rem in all children", () => {
            const { IconsWithLabels } = setup();

            expect(IconsWithLabels).toHaveStyleRule("margin-bottom", "2.8rem", {
              modifier: "& > *"
            });
            expect(IconsWithLabels).toHaveStyleRule("margin-right", "2.8rem", {
              modifier: "& > *"
            });
          });
        });

        describe("IconContainer", () => {
          describe("height", () => {
            test("should have 4rem", () => {
              const { IconContainers } = setup();

              IconContainers.forEach((IconContainer: Element) => {
                expect(IconContainer).toHaveStyleRule("height", "4rem");
              });
            });
          });
        });

        describe("IconWithLabelSpacingContainer", () => {
          describe("paddingRight", () => {
            test("should have 1.2rem", () => {
              const { IconWithLabelSpacingContainers } = setup();

              IconWithLabelSpacingContainers.forEach(
                (IconWithLabelSpacingContainer: Element) => {
                  expect(IconWithLabelSpacingContainer).toHaveStyleRule(
                    "padding-right",
                    "1.2rem"
                  );
                }
              );
            });
          });
        });

        describe("LabelTexts", () => {
          describe("fontSize", () => {
            test("should have 24px", () => {
              const { LabelTexts } = setup();

              LabelTexts.forEach((LabelText: Element) => {
                expect(LabelText).toHaveStyleRule("font-size", "24px");
              });
            });
          });
        });
      });

      describe("position - horizontal", () => {
        describe("FlexContainer", () => {
          describe("flexFlow", () => {
            test("should have row nowrap", () => {
              const { IconsWithLabels } = setup();

              expect(IconsWithLabels).toHaveStyleRule("flex-flow", "row wrap");
            });
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  IconContainers: Element[];
  IconWithLabelSpacingContainers: Element[];
  Icons: NodeListOf<SVGSVGElement>;
  IconsWithLabels: Element;
  LabelTexts: Element[];
  ProjectDescriptionTechnologiesContainer: Element;
  ProjectDescriptionTechnologiesSpacingContainer: Element;
  Text: Element;
}

type ProjectDescriptionTechnologiesTestProps = Partial<
  ProjectDescriptionTechnologiesProps
>;

function setup(
  additionalProps?: ProjectDescriptionTechnologiesTestProps
): Setup {
  const iconsWithLabels: IconWithLabelProps[] = [
    {
      iconName: "brandJS",
      label: "Javascript"
    },
    {
      iconName: "brandReact",
      label: "React"
    }
  ];

  const props: ProjectDescriptionTechnologiesProps = {
    iconsWithLabels,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <ProjectDescriptionTechnologies {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const IconContainers: Element[] = queryAllByTestId("IconContainer");
  const IconWithLabelSpacingContainers: Element[] = queryAllByTestId(
    "IconWithLabelSpacingContainers"
  );
  const Icons: NodeListOf<SVGSVGElement> = document.querySelectorAll("svg");
  const IconsWithLabels: Element = queryAllByTestId("IconsWithLabels")[0];
  const LabelTexts: Element[] = queryAllByTestId("LabelText");
  const ProjectDescriptionTechnologiesContainer: Element = queryAllByTestId(
    "ProjectDescriptionTechnologies"
  )[0];
  const ProjectDescriptionTechnologiesSpacingContainer: Element = queryAllByTestId(
    "ProjectDescriptionTechnologiesSpacingContainer"
  )[0];
  const Text: Element = queryAllByTestId("Text")[0];

  return {
    ...utils,
    IconContainers,
    IconWithLabelSpacingContainers,
    Icons,
    IconsWithLabels,
    LabelTexts,
    ProjectDescriptionTechnologiesContainer,
    ProjectDescriptionTechnologiesSpacingContainer,
    Text
  };
}
