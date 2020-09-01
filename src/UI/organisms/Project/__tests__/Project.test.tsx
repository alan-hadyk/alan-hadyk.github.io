import React from "react";
import { RenderResult } from "@testing-library/react";

import Project from "<organisms>/Project";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ProjectProps
} from "<organisms>/Project/__typings__/Project.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("organisms / Project", () => {
  test("should have correct structure", () => {
    const {
      ProjectContainer,
      ProjectDesktop,
      ProjectMobile,
      ProjectTablet,
      ProjectTv
    } = setup();

    expect(ProjectContainer.children[0]).toEqual(ProjectDesktop);
    expect(ProjectContainer.children[1]).toEqual(ProjectTv);
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
        test("should have correct value passed via description props", () => {
          const { ProjectDescription } = setup({
            description: "Lorem ipsum dolor sit amet."
          });

          ProjectDescription.forEach((_ProjectDescription: Element) => {
            expect(_ProjectDescription).toHaveTextContent("Lorem ipsum dolor sit amet.");
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

          IconsWithLabels.forEach((_IconsWithLabels: Element) => {
            expect(_IconsWithLabels.children.length).toEqual(2);
          });
        });
    
        test("icons should render correct SVGs", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          IconsWithLabels.forEach((_IconsWithLabels: Element) => {
            expect(_IconsWithLabels.children[0].children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
            expect(_IconsWithLabels.children[1].children[0].children[0].children[0].textContent).toEqual("Brand-React.svg");
          });
        });
    
        test("should have correct content passed via label props", () => {
          const { IconsWithLabels } = setup({
            iconsWithLabels
          });

          IconsWithLabels.forEach((_IconsWithLabels: Element) => {
            expect(_IconsWithLabels.children[0].children[1].textContent).toEqual("Javascript");
            expect(_IconsWithLabels.children[1].children[1].textContent).toEqual("React");
          });
        });
      });

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

      describe("title", () => {
        test("should have correct value passed via title props", () => {
          const { ProjectDescription } = setup({
            title: "Roland"
          });

          ProjectDescription.forEach((_ProjectDescription: Element) => {
            expect(_ProjectDescription).toHaveTextContent("Roland");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HexagonInnerContainer: Element[];
  IconsWithLabels: Element[];
  ProjectContainer: Element;
  ProjectDescription: Element[];
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

  const utils: RenderResult = renderWithTheme(
    <Project {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const HexagonInnerContainer: Element []= queryAllByTestId("HexagonInnerContainer");
  const IconsWithLabels: Element[] = queryAllByTestId("IconsWithLabels");
  const ProjectContainer: Element = queryAllByTestId("Project")[0];
  const ProjectDescription: Element[] = queryAllByTestId("ProjectDescription");
  const ProjectDesktop: Element = queryAllByTestId("ProjectDesktop")[0];
  const ProjectTv: Element = queryAllByTestId("ProjectTv")[0];
  const ProjectTablet: Element = queryAllByTestId("ProjectTablet")[0];
  const ProjectMobile: Element = queryAllByTestId("ProjectMobile")[0];

  return {
    ...utils,
    HexagonInnerContainer,
    IconsWithLabels,
    ProjectContainer,
    ProjectDescription,
    ProjectDesktop,
    ProjectMobile,
    ProjectTablet,
    ProjectTv
  };
}
 