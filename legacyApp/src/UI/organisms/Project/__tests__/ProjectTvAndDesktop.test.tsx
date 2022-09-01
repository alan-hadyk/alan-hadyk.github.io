import { RenderResult } from "@testing-library/react";

import ProjectTvAndDesktop from "UI/organisms/Project/ProjectTvAndDesktop";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("organisms / ProjectTvAndDesktop", () => {
  test("should have correct structure", () => {
    const {
      FlexContainer,
      FlexItems,
      ProjectDescription,
      ProjectImage,
      ProjectTvDesktop,
      SpacingContainer
    } = setup();

    expect(ProjectTvDesktop.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(FlexItems[0]);
    expect(FlexItems[0].children[0]).toEqual(ProjectImage);
    expect(FlexContainer.children[1]).toEqual(FlexItems[1]);
    expect(FlexItems[1].children[0]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(ProjectDescription);
  });

  describe("ProjectTvDesktop", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have tv and desktop", () => {
          test("should have display block when min-width is 1681px", () => {
            const { ProjectTvDesktop } = setup();

            expect(ProjectTvDesktop).toHaveStyleRule("display", "block", {
              media: "(min-width:1681px)"
            });
          });
        });

        test("should have display block when min-width is 1681px", () => {
          const { ProjectTvDesktop } = setup();

          expect(ProjectTvDesktop).toHaveStyleRule("display", "block", {
            media: "(min-width:1281px) and (max-width:1680px)"
          });
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have flex-start", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("flexFlow", () => {
        test("should have row nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });
    });
  });

  describe("FlexItems", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 50%", () => {
          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem: Element) => {
            expect(FlexItem).toHaveStyleRule("flex", "0 1 50%");
          });
        });
      });

      describe("overflow", () => {
        test("second item should have visible", () => {
          const { FlexItems } = setup();

          expect(FlexItems[1]).toHaveStyleRule("overflow", "visible");
        });
      });
    });
  });

  describe("ProjectImage", () => {
    describe("Icon", () => {
      describe("Props", () => {
        describe("projectIcon", () => {
          test("should have correct icon passed via projectIcon prop", () => {
            const { HexagonInnerContainer } = setup({
              projectIcon: "react"
            });

            expect(HexagonInnerContainer.children[0].textContent).toEqual(
              "Icon-React.svg"
            );
          });
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("marginLeft", () => {
        test("should have 4.8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("margin-left", "4.8rem");
        });
      });
    });
  });

  describe("ProjectDescription", () => {
    describe("Props", () => {
      describe("title", () => {
        test("should have correct value passed via title prop", () => {
          const { ProjectDescription } = setup({
            title: "Roland"
          });

          expect(ProjectDescription).toHaveTextContent("Roland");
        });
      });

      describe("description", () => {
        test("should have correct value passed via description prop", () => {
          const { ProjectDescription } = setup({
            description: "Lorem ipsum dolor sit amet."
          });

          expect(ProjectDescription).toHaveTextContent(
            "Lorem ipsum dolor sit amet."
          );
        });
      });

      describe("iconsWithLabels", () => {
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
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          IconsWithLabels.forEach((IconsWithLabel: Element) => {
            expect(IconsWithLabel.children.length).toEqual(2);
          });
        });

        test("icons should render correct SVGs", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          IconsWithLabels.forEach((IconsWithLabel: Element) => {
            expect(
              IconsWithLabel.children[0].children[0].children[0].getAttribute(
                "src"
              )
            ).toEqual("/images/svg/brandJS.svg");
            expect(
              IconsWithLabel.children[1].children[0].children[0].getAttribute(
                "src"
              )
            ).toEqual("/images/svg/brandReact.svg");
          });
        });

        test("should have correct content passed via label prop", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          IconsWithLabels.forEach((IconsWithLabel: Element) => {
            expect(IconsWithLabel.children[0].children[1].textContent).toEqual(
              "Javascript"
            );
            expect(IconsWithLabel.children[1].children[1].textContent).toEqual(
              "React"
            );
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  FlexItems: Element[];
  HexagonInnerContainer: Element;
  IconsWithLabels: Element[];
  ProjectDescription: Element;
  ProjectImage: Element;
  ProjectTvDesktop: Element;
  SpacingContainer: Element;
}

type ProjectTestProps = Partial<ProjectProps>;

function setup(additionalProps?: ProjectTestProps): Setup {
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

  const props: ProjectProps = {
    description: "Lorem ipsum dolor sit amet",
    iconsWithLabels,
    projectIcon: "react",
    title: "Roland 303",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <ProjectTvAndDesktop {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const FlexContainer: Element = queryAllByTestId(
    "ProjectTvAndDesktopFlexContainer"
  )[0];
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const HexagonInnerContainer: Element = queryAllByTestId(
    "HexagonInnerContainer"
  )[0];
  const IconsWithLabels: Element[] = queryAllByTestId("IconsWithLabels");
  const ProjectDescription: Element = queryAllByTestId("ProjectDescription")[0];
  const ProjectImage: Element = queryAllByTestId("ProjectImage")[0];
  const ProjectTvDesktop: Element = queryAllByTestId("ProjectTvDesktop")[0];
  const SpacingContainer: Element = queryAllByTestId(
    "ProjectDescriptionSpacingContainer"
  )[0];

  return {
    ...utils,
    FlexContainer,
    FlexItems,
    HexagonInnerContainer,
    IconsWithLabels,
    ProjectDescription,
    ProjectImage,
    ProjectTvDesktop,
    SpacingContainer
  };
}
