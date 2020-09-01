import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectTvAndDesktop from "<organisms>/Project/ProjectTvAndDesktop";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

import {
  ProjectProps
} from "<organisms>/Project/__typings__/Project.d.ts";

describe("organisms / ProjectTvAndDesktop", () => {
  test("should have correct structure", () => {
    const {
      FlexContainers,
      FlexItems,
      ProjectDescriptionDesktop,
      ProjectDescriptionTv,
      ProjectDesktop,
      ProjectImage,
      ProjectTv,
      SpacingContainers,
      debug
    } = setup();

    expect(ProjectTv.children[0]).toEqual(FlexContainers[0]);
    expect(FlexContainers[0].children[0]).toEqual(FlexItems[0]);
    expect(FlexItems[0].children[0]).toEqual(ProjectImage[0]);
    expect(FlexContainers[0].children[1]).toEqual(FlexItems[1]);
    expect(FlexItems[1].children[0]).toEqual(SpacingContainers[0]);
    expect(SpacingContainers[0].children[0]).toEqual(ProjectDescriptionTv);

    expect(ProjectDesktop.children[0]).toEqual(FlexContainers[1]);
    expect(FlexContainers[1].children[0]).toEqual(FlexItems[2]);
    expect(FlexItems[2].children[0]).toEqual(ProjectImage[1]);
    expect(FlexContainers[1].children[1]).toEqual(FlexItems[3]);
    expect(FlexItems[3].children[0]).toEqual(SpacingContainers[1]);
    expect(SpacingContainers[2].children[0]).toEqual(ProjectDescriptionTv);
  });

  describe("FlexContainers", () => { 
    describe("Props", () => {
      describe("alignItems", () => {      
        test("should have flex-start", () => {
          const { FlexContainers } = setup();

          FlexContainers.forEach((_FlexContainer: Element) => {
            expect(_FlexContainer).toHaveStyleRule("align-items", "flex-start");
          });
        });
      });

      describe("flexFlow", () => {      
        test("should have row nowrap", () => {
          const { FlexContainers } = setup();

          FlexContainers.forEach((_FlexContainer: Element) => {
            expect(_FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });
      });
    });
  });

  describe("FlexItems", () => { 
    describe("Props", () => {
      describe("flex", () => {      
        test("should have 0 1 50%", () => {
          const { FlexItems } = setup();

          FlexItems.forEach((_FlexItem: Element) => {
            expect(_FlexItem).toHaveStyleRule("flex", "0 1 50%");
          });
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

            HexagonInnerContainer.forEach((_HexagonInnerContainer: Element) => {
              expect(_HexagonInnerContainer.children[0].textContent).toEqual("Icon-React.svg");
            });
          });
        });
      });
    });
  });

  describe("SpacingContainers", () => { 
    describe("Props", () => {
      describe("marginLeft", () => {      
        test("should have 4.8rem", () => {
          const { SpacingContainers } = setup();

          SpacingContainers.forEach((_SpacingContainer: Element) => {
            expect(_SpacingContainer).toHaveStyleRule("margin-left", "4.8rem");
          });
        });
      });
    });
  });

  describe("ProjectDescriptionDesktop and ProjectDescriptionTv", () => {   
    describe("Props", () => {
      describe("title", () => {
        test("should have correct value passed via title props", () => {
          const { 
            ProjectDescriptionDesktop,
            ProjectDescriptionTv
          } = setup({
            title: "Roland"
          });

          expect(ProjectDescriptionDesktop).toHaveTextContent("Roland");
          expect(ProjectDescriptionTv).toHaveTextContent("Roland");
        });
      });

      describe("description", () => {
        test("should have correct value passed via description props", () => {
          const {             
            ProjectDescriptionDesktop,
            ProjectDescriptionTv 
          } = setup({
            description: "Lorem ipsum dolor sit amet."
          });

          expect(ProjectDescriptionDesktop).toHaveTextContent("Lorem ipsum dolor sit amet.");
          expect(ProjectDescriptionTv).toHaveTextContent("Lorem ipsum dolor sit amet.");
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

          IconsWithLabels.forEach((_IconsWithLabel: Element) => {
            expect(_IconsWithLabel.children.length).toEqual(2);
          });
        });
    
        test("icons should render correct SVGs", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          IconsWithLabels.forEach((_IconsWithLabel: Element) => {
            expect(_IconsWithLabel.children[0].children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
            expect(_IconsWithLabel.children[1].children[0].children[0].children[0].textContent).toEqual("Brand-React.svg");
          });
        });
    
        test("should have correct content passed via label props", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          IconsWithLabels.forEach((_IconsWithLabel: Element) => {
            expect(_IconsWithLabel.children[0].children[1].textContent).toEqual("Javascript");
            expect(_IconsWithLabel.children[1].children[1].textContent).toEqual("React");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainers: Element[];
  FlexItems: Element[];
  HexagonInnerContainer: Element[];
  IconsWithLabels: Element[];
  ProjectDescriptionDesktop: Element;
  ProjectDescriptionTv: Element;
  ProjectDesktop: Element;
  ProjectImage: Element[];
  ProjectTv: Element;
  SpacingContainers: Element[];
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

  const FlexContainers: Element[] = queryAllByTestId("ProjectTvAndDesktopFlexContainer");
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const HexagonInnerContainer: Element[] = queryAllByTestId("HexagonInnerContainer");
  const IconsWithLabels: Element[] = queryAllByTestId("IconsWithLabels");
  const ProjectDescriptionDesktop: Element = queryAllByTestId("ProjectDescriptionDesktop")[0];
  const ProjectDescriptionTv: Element = queryAllByTestId("ProjectDescriptionTv")[0];
  const ProjectDesktop: Element = queryAllByTestId("ProjectDesktop")[0];
  const ProjectImage: Element[] = queryAllByTestId("ProjectImage");
  const ProjectTv: Element = queryAllByTestId("ProjectTv")[0];
  const SpacingContainers: Element[] = queryAllByTestId("ProjectDescriptionSpacingContainer");

  return {
    ...utils,
    FlexContainers,
    FlexItems,
    HexagonInnerContainer,
    IconsWithLabels,
    ProjectDescriptionDesktop,
    ProjectDescriptionTv,
    ProjectDesktop,
    ProjectImage,
    ProjectTv,
    SpacingContainers
  };
}
 