import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectMobile from "<organisms>/Project/ProjectMobile";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

import {
  ProjectProps
} from "<organisms>/Project/__typings__/Project.d.ts";

describe("organisms / ProjectMobile", () => {
  test("should have correct structure", () => {
    const {
      ProjectDescriptionMobile,
      ProjectImage,
      ProjectMobileContainer,
      SpacingContainer
    } = setup();

    expect(ProjectMobileContainer.children[0]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(ProjectImage);
    expect(ProjectMobileContainer.children[1]).toEqual(ProjectDescriptionMobile);
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
          test("should have correct icon passed via iconName props", () => {
            const { HexagonInnerContainer } = setup({
              projectIcon: "react"
            });
  
            expect(HexagonInnerContainer.children[0].textContent).toEqual("Icon-React.svg");
          });
        });
      });
    });
  });

  describe("ProjectDescriptionMobile", () => {   
    describe("Props", () => {
      describe("title", () => {
        test("should have correct value passed via title props", () => {
          const { ProjectDescriptionMobile } = setup({
            title: "Roland"
          });

          expect(ProjectDescriptionMobile).toHaveTextContent("Roland");
        });
      });

      describe("description", () => {
        test("should have correct value passed via description props", () => {
          const { ProjectDescriptionMobile } = setup({
            description: "Lorem ipsum dolor sit amet."
          });

          expect(ProjectDescriptionMobile).toHaveTextContent("Lorem ipsum dolor sit amet.");
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
  
          expect(IconsWithLabels.children[0].children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
          expect(IconsWithLabels.children[1].children[0].children[0].children[0].textContent).toEqual("Brand-React.svg");
        });
    
        test("should have correct content passed via label props", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });
    
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual("Javascript");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual("React");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HexagonInnerContainer: Element;
  IconsWithLabels: Element;
  ProjectDescriptionMobile: Element;
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

  const utils: RenderResult = renderWithTheme(
    <ProjectMobile {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const HexagonInnerContainer: Element = queryAllByTestId("HexagonInnerContainer")[0];
  const IconsWithLabels: Element = queryAllByTestId("IconsWithLabels")[0];
  const ProjectDescriptionMobile: Element = queryAllByTestId("ProjectDescriptionMobile")[0];
  const ProjectImage: Element = queryAllByTestId("ProjectImage")[0];
  const ProjectMobileContainer: Element = queryAllByTestId("ProjectMobile")[0];
  const SpacingContainer: Element = queryAllByTestId("SpacingContainer")[0];

  return {
    ...utils,
    HexagonInnerContainer,
    IconsWithLabels,
    ProjectDescriptionMobile,
    ProjectImage,
    ProjectMobileContainer,
    SpacingContainer
  };
}
 