import React from "react";
import { RenderResult } from "@testing-library/react";

import Project from "UI/organisms/Project";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

describe("organisms / Project", () => {
  test("should have correct structure", () => {
    const {
      ProjectContainer,
      ProjectDesktop,
      ProjectMobile,
      ProjectTablet,
      ProjectTv
    } = setup();

    expect(ProjectContainer.children[0]).toEqual(ProjectTv);
    expect(ProjectContainer.children[1]).toEqual(ProjectDesktop);
    expect(ProjectContainer.children[2]).toEqual(ProjectTablet);
    expect(ProjectContainer.children[3]).toEqual(ProjectMobile);
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("marginLeft", () => {
        test("should have auto", () => {
          const { ProjectContainer } = setup();

          expect(ProjectContainer).toHaveStyleRule("margin-left", "auto");
        });
      });

      describe("marginRight", () => {
        test("should have auto", () => {
          const { ProjectContainer } = setup();

          expect(ProjectContainer).toHaveStyleRule("margin-right", "auto");
        });
      });

      describe("maxWidth", () => {
        test("should have 105.6rem", () => {
          const { ProjectContainer } = setup();

          expect(ProjectContainer).toHaveStyleRule("max-width", "105.6rem");
        });
      });
    });
  });

  describe("ProjectTvAndDesktop, ProjectTablet, ProjectMobile", () => {
    describe("Props", () => {
      describe("description", () => {
        test("should have correct value passed via description prop", () => {
          const { ProjectDescriptions } = setup({
            description: "Lorem ipsum dolor sit amet."
          });

          ProjectDescriptions.forEach((ProjectDescription: Element) => {
            expect(ProjectDescription).toHaveTextContent(
              "Lorem ipsum dolor sit amet."
            );
          });
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

          IconsWithLabels.forEach((IconWithLabel: Element) => {
            expect(IconWithLabel.children.length).toEqual(2);
          });
        });

        test("icons should render correct SVGs", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          IconsWithLabels.forEach((IconWithLabel: Element) => {
            expect(
              IconWithLabel.children[0].children[0].children[0].children[0]
                .textContent
            ).toEqual("Brand-JS.svg");
            expect(
              IconWithLabel.children[1].children[0].children[0].children[0]
                .textContent
            ).toEqual("Brand-React.svg");
          });
        });

        test("should have correct content passed via label prop", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          IconsWithLabels.forEach((IconWithLabel: Element) => {
            expect(IconWithLabel.children[0].children[1].textContent).toEqual(
              "Javascript"
            );
            expect(IconWithLabel.children[1].children[1].textContent).toEqual(
              "React"
            );
          });
        });
      });

      describe("projectIcon", () => {
        test("should have correct icon passed via projectIcon prop", () => {
          const { HexagonInnerContainers } = setup({
            projectIcon: "react"
          });

          HexagonInnerContainers.forEach((HexagonInnerContainer: Element) => {
            expect(HexagonInnerContainer.children[0].textContent).toEqual(
              "Icon-React.svg"
            );
          });
        });
      });

      describe("title", () => {
        test("should have correct value passed via title prop", () => {
          const { ProjectDescriptions } = setup({
            title: "Roland"
          });

          ProjectDescriptions.forEach((ProjectDescription: Element) => {
            expect(ProjectDescription).toHaveTextContent("Roland");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HexagonInnerContainers: Element[];
  IconsWithLabels: Element[];
  ProjectContainer: Element;
  ProjectDescriptions: Element[];
  ProjectDesktop: Element;
  ProjectMobile: Element;
  ProjectTablet: Element;
  ProjectTv: Element;
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

  const utils: RenderResult = renderWithTheme(<Project {...props} />);

  const { queryAllByTestId } = utils || {};

  const HexagonInnerContainers: Element[] = queryAllByTestId(
    "HexagonInnerContainer"
  );
  const IconsWithLabels: Element[] = queryAllByTestId("IconsWithLabels");
  const ProjectContainer: Element = queryAllByTestId("Project")[0];
  const ProjectDescriptions: Element[] = queryAllByTestId("ProjectDescription");
  const ProjectDesktop: Element = queryAllByTestId("ProjectDesktop")[0];
  const ProjectTv: Element = queryAllByTestId("ProjectTv")[0];
  const ProjectTablet: Element = queryAllByTestId("ProjectTablet")[0];
  const ProjectMobile: Element = queryAllByTestId("ProjectMobile")[0];

  return {
    ...utils,
    HexagonInnerContainers,
    IconsWithLabels,
    ProjectContainer,
    ProjectDescriptions,
    ProjectDesktop,
    ProjectMobile,
    ProjectTablet,
    ProjectTv
  };
}
