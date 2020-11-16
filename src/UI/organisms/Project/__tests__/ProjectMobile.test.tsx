import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectMobile from "UI/organisms/Project/ProjectMobile";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("organisms / ProjectMobile", () => {
  test("should have correct structure", () => {
    const {
      ProjectDescription,
      ProjectImage,
      ProjectMobileContainer,
      SpacingContainer
    } = setup();

    expect(ProjectMobileContainer.children[0]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(ProjectImage);
    expect(ProjectMobileContainer.children[1]).toEqual(ProjectDescription);
  });

  describe("ProjectMobile", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have mobile", () => {
          test("should have display block when max-width is 640px", () => {
            const { ProjectMobileContainer } = setup();

            expect(ProjectMobileContainer).toHaveStyleRule("display", "block", {
              media: "(max-width:640px)"
            });
          });
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("marginBottom", () => {
        test("should have 4rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("margin-bottom", "4rem");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("width", "100%");
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

      describe("size", () => {
        test("should have small", () => {
          const { ProjectDescription } = setup();

          expect(ProjectDescription.children[0].children[0]).toHaveStyleRule(
            "font-size",
            "28px"
          );
          expect(ProjectDescription.children[0].children[0]).toHaveStyleRule(
            "line-height",
            "3.2rem"
          );

          expect(
            ProjectDescription.children[0].children[1].children[0]
          ).toHaveStyleRule("font-size", "20px");
          expect(
            ProjectDescription.children[0].children[1].children[0]
          ).toHaveStyleRule("line-height", "2.4rem");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HexagonInnerContainer: Element;
  IconsWithLabels: Element;
  ProjectDescription: Element;
  ProjectImage: Element;
  ProjectMobileContainer: Element;
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

  const utils: RenderResult = renderWithTheme(<ProjectMobile {...props} />);

  const { queryAllByTestId } = utils || {};

  const HexagonInnerContainer: Element = queryAllByTestId(
    "HexagonInnerContainer"
  )[0];
  const IconsWithLabels: Element = queryAllByTestId("IconsWithLabels")[0];
  const ProjectDescription: Element = queryAllByTestId("ProjectDescription")[0];
  const ProjectImage: Element = queryAllByTestId("ProjectImage")[0];
  const ProjectMobileContainer: Element = queryAllByTestId("ProjectMobile")[0];
  const SpacingContainer: Element = queryAllByTestId("SpacingContainer")[0];

  return {
    ...utils,
    HexagonInnerContainer,
    IconsWithLabels,
    ProjectDescription,
    ProjectImage,
    ProjectMobileContainer,
    SpacingContainer
  };
}
