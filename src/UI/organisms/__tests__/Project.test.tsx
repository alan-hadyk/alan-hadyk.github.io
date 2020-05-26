import React from "react";
import { RenderResult } from "@testing-library/react";

import Project from "<src>/UI/organisms/Project";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ProjectProps
} from "<src>/UI/organisms/__typings__/Project.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("organism / Project", () => {
  test("should have correct structure", () => {
    const {
      FlexContainer,
      FlexItems,
      Hexagon,
      Icon,
      IconContainer,
      ProjectDescription,
      ProjectDescriptionSpacingContainer,
      ProjectSpacingContainer
    } = setup();

    expect(ProjectSpacingContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(FlexItems[0]);
    expect(FlexContainer.children[1]).toEqual(FlexItems[1]);

    expect(FlexItems[0].children[0]).toEqual(Hexagon);
    expect(Hexagon.children[0]).toEqual(IconContainer);
    expect(IconContainer.children[0]).toEqual(Icon);

    expect(FlexItems[1].children[0]).toEqual(ProjectDescriptionSpacingContainer);
    expect(ProjectDescriptionSpacingContainer.children[0]).toEqual(ProjectDescription);
  });

  describe("SpacingContainers", () => { 
    describe("ProjectSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginLeft", () => {      
          test("should have auto", () => {
            const { ProjectSpacingContainer } = setup();

            expect(ProjectSpacingContainer).toHaveStyleRule("margin-left", "auto");
          });
        });

        describe("marginRight", () => {      
          test("should have auto", () => {
            const { ProjectSpacingContainer } = setup();

            expect(ProjectSpacingContainer).toHaveStyleRule("margin-right", "auto");
          });
        });

        describe("maxWidth", () => {      
          test("should have 1056px", () => {
            const { ProjectSpacingContainer } = setup();

            expect(ProjectSpacingContainer).toHaveStyleRule("max-width", "1056px");
          });
        });
      });
    });

    describe("ProjectDescriptionSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginLeft", () => {      
          test("should have 4.8rem", () => {
            const { ProjectDescriptionSpacingContainer } = setup();

            expect(ProjectDescriptionSpacingContainer).toHaveStyleRule("margin-left", "4.8rem");
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
    describe("FlexItems[0]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 40%", () => {
            const { FlexItems } = setup();
      
            expect(FlexItems[0]).toHaveStyleRule("flex", "0 1 40%");
          });
        });
      });
    });

    describe("FlexItems[1]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 60%", () => {
            const { FlexItems } = setup();
      
            expect(FlexItems[1]).toHaveStyleRule("flex", "0 1 60%");
          });
        });

        describe("overflow", () => {
          test("should have unset", () => {
            const { FlexItems } = setup();
      
            expect(FlexItems[1]).toHaveStyleRule("overflow", "unset");
          });
        });
      });
    });
  });

  describe("Hexagon", () => {   
    test("should have fill pattern", () => {
      const { Hexagon } = setup();

      expect(Hexagon.children[0].textContent).toEqual("Hexagon-With-Pattern.svg");
    });

    describe("Props", () => {
      describe("children", () => {
        test("should have correct icon passed via iconName props", () => {
          const { HexagonInnerContainer } = setup({
            iconName: "react"
          });

          expect(HexagonInnerContainer.children[0].textContent).toEqual("Icon-React.svg");
        });

        describe("Icon", () => {         
          describe("Props", () => {
            describe("height", () => {
              test("should have auto", () => {
                const { HexagonInnerContainer } = setup();
      
                expect(HexagonInnerContainer.children[0]).toHaveStyleRule("height", "auto");
              });
            });
      
            describe("width", () => {
              test("should have 100%", () => {
                const { HexagonInnerContainer } = setup();
      
                expect(HexagonInnerContainer.children[0]).toHaveStyleRule("width", "100%");
              });
            });
          });
        });
      });
    });
  });

  describe("ProjectDescription", () => {   
    describe("Props", () => {
      describe("title", () => {
        test("should have correct value passed via title props", () => {
          const { ProjectDescription } = setup({
            title: "Roland"
          });

          expect(ProjectDescription).toHaveTextContent("Roland");
        });
      });

      describe("description", () => {
        test("should have correct value passed via description props", () => {
          const { ProjectDescription } = setup({
            description: "Lorem ipsum dolor sit amet."
          });

          expect(ProjectDescription).toHaveTextContent("Lorem ipsum dolor sit amet.");
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

interface Setup extends RenderResult {
  FlexContainer: Element;
  FlexItems: Element[];
  Hexagon: Element;
  HexagonInnerContainer: Element;
  Icon: SVGSVGElement;
  IconContainer: Element;
  IconsWithLabels: Element;
  ProjectDescription: Element;
  ProjectDescriptionSpacingContainer: Element;
  ProjectSpacingContainer: Element;
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
    iconName: "react",
    iconsWithLabels,
    title: "Roland 303",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Project {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const FlexContainer: Element = queryAllByTestId("FlexContainer")[0];
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const Hexagon: Element = queryAllByTestId("Hexagon")[0];
  const HexagonInnerContainer: Element = queryAllByTestId("HexagonInnerContainer")[0];
  const Icon: SVGSVGElement = document.querySelectorAll("svg")[0];
  const IconContainer: Element = queryAllByTestId("IconContainer")[0];
  const IconsWithLabels: Element = queryAllByTestId("IconsWithLabels")[0];
  const ProjectDescription: Element = queryAllByTestId("ProjectDescription")[0];
  const ProjectDescriptionSpacingContainer: Element = queryAllByTestId("ProjectDescriptionSpacingContainer")[0];
  const ProjectSpacingContainer: Element = queryAllByTestId("Project")[0];

  return {
    ...utils,
    FlexContainer,
    FlexItems,
    Hexagon,
    HexagonInnerContainer,
    Icon,
    IconContainer,
    IconsWithLabels,
    ProjectDescription,
    ProjectDescriptionSpacingContainer,
    ProjectSpacingContainer
  };
}
 