import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectDescription from "UI/organisms/ProjectDescription";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ProjectDescriptionProps } from "UI/organisms/ProjectDescription/__typings__/ProjectDescription";

import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("organisms / ProjectDescription", () => {
  test("should have correct structure", () => {
    const {
      ProjectDescriptionButtons,
      ProjectDescriptionContainer,
      ProjectDescriptionContent,
      ProjectDescriptionTechnologies
    } = setup();

    expect(ProjectDescriptionContainer.children[0]).toEqual(
      ProjectDescriptionContent
    );
    expect(ProjectDescriptionContainer.children[1]).toEqual(
      ProjectDescriptionTechnologies
    );
    expect(ProjectDescriptionContainer.children[2]).toEqual(
      ProjectDescriptionButtons
    );
  });

  describe("ProjectDescriptionContent", () => {
    describe("Props", () => {
      describe("description", () => {
        test("should have correct value passed via description prop", () => {
          const { ProjectDescriptionContent } = setup({
            description: "Lorem ipsum dolor sit amet."
          });

          expect(ProjectDescriptionContent).toHaveTextContent(
            "Lorem ipsum dolor sit amet."
          );
        });
      });

      describe("size", () => {
        test("should have small passed via size prop", () => {
          const { ProjectDescriptionContent } = setup({
            size: "small"
          });

          expect(ProjectDescriptionContent.children[0]).toHaveStyleRule(
            "font-size",
            "28px"
          );
          expect(ProjectDescriptionContent.children[0]).toHaveStyleRule(
            "line-height",
            "3.2rem"
          );

          expect(
            ProjectDescriptionContent.children[1].children[0]
          ).toHaveStyleRule("font-size", "20px");
          expect(
            ProjectDescriptionContent.children[1].children[0]
          ).toHaveStyleRule("line-height", "2.4rem");
        });

        test("should have medium passed via size prop", () => {
          const { ProjectDescriptionContent } = setup({
            size: "medium"
          });

          expect(ProjectDescriptionContent.children[0]).toHaveStyleRule(
            "font-size",
            "48px"
          );
          expect(ProjectDescriptionContent.children[0]).toHaveStyleRule(
            "line-height",
            "5.2rem"
          );

          expect(
            ProjectDescriptionContent.children[1].children[0]
          ).toHaveStyleRule("font-size", "24px");
          expect(
            ProjectDescriptionContent.children[1].children[0]
          ).toHaveStyleRule("line-height", "3.2rem");
        });

        test("should have large passed via size prop", () => {
          const { ProjectDescriptionContent } = setup({
            size: "large"
          });

          expect(ProjectDescriptionContent.children[0]).toHaveStyleRule(
            "font-size",
            "48px"
          );
          expect(ProjectDescriptionContent.children[0]).toHaveStyleRule(
            "line-height",
            "5.2rem"
          );

          expect(
            ProjectDescriptionContent.children[1].children[0]
          ).toHaveStyleRule("font-size", "24px");
          expect(
            ProjectDescriptionContent.children[1].children[0]
          ).toHaveStyleRule("line-height", "3.2rem");
        });
      });

      describe("title", () => {
        test("should have correct value passed via title prop", () => {
          const { ProjectDescriptionContent } = setup({
            title: "Roland"
          });

          expect(ProjectDescriptionContent).toHaveTextContent("Roland");
        });
      });
    });
  });

  describe("ProjectDescriptionTechnologies", () => {
    describe("Props", () => {
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

          expect(IconsWithLabels.children.length).toEqual(2);
        });

        test("icons should render correct SVGs", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          expect(
            IconsWithLabels.children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJS.svg");
          expect(
            IconsWithLabels.children[1].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandReact.svg");
        });

        test("should have correct content passed via label prop", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          expect(IconsWithLabels.children[0].children[1].textContent).toEqual(
            "Javascript"
          );
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual(
            "React"
          );
        });
      });
    });
  });

  describe("ProjectDescriptionButtons", () => {
    describe("Props", () => {
      describe("size", () => {
        test("should have height 5.6rem if size is large", () => {
          const { ProjectDescriptionButtons } = setup({
            size: "large"
          });

          expect(ProjectDescriptionButtons.children[0]).toHaveStyleRule(
            "height",
            "5.6rem"
          );
        });

        test("should have height 4.8rem if size is medium", () => {
          const { ProjectDescriptionButtons } = setup({
            size: "medium"
          });

          expect(ProjectDescriptionButtons.children[0]).toHaveStyleRule(
            "height",
            "4.8rem"
          );
        });

        test("should have height 4rem if size is small", () => {
          const { ProjectDescriptionButtons } = setup({
            size: "small"
          });

          expect(ProjectDescriptionButtons.children[0]).toHaveStyleRule(
            "height",
            "4rem"
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  IconsWithLabels: Element;
  ProjectDescriptionButtons: Element;
  ProjectDescriptionContainer: Element;
  ProjectDescriptionContent: Element;
  ProjectDescriptionTechnologies: Element;
}

type ProjectDescriptionTestProps = Partial<ProjectDescriptionProps>;

function setup(additionalProps?: ProjectDescriptionTestProps): Setup {
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

  const props: ProjectDescriptionProps = {
    description: "Lorem ipsum dolor sit amet",
    iconsWithLabels,
    size: "large",
    title: "Roland 303",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <ProjectDescription {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const IconsWithLabels: Element = queryAllByTestId("IconsWithLabels")[0];
  const ProjectDescriptionButtons: Element = queryAllByTestId(
    "ProjectDescriptionButtons"
  )[0];
  const ProjectDescriptionContainer: Element = queryAllByTestId(
    "ProjectDescription"
  )[0];
  const ProjectDescriptionContent: Element = queryAllByTestId(
    "ProjectDescriptionContent"
  )[0];
  const ProjectDescriptionTechnologies: Element = queryAllByTestId(
    "ProjectDescriptionTechnologies"
  )[0];

  return {
    ...utils,
    IconsWithLabels,
    ProjectDescriptionButtons,
    ProjectDescriptionContainer,
    ProjectDescriptionContent,
    ProjectDescriptionTechnologies
  };
}
