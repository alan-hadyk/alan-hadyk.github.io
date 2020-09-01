import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectDescription from "<organisms>/ProjectDescription";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ProjectDescriptionProps
} from "<organisms>/ProjectDescription/__typings__/ProjectDescription.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("organisms / ProjectDescription", () => {
  test("should have correct structure", () => {
    const {
      ProjectDescriptionButtons,
      ProjectDescriptionContainer,
      ProjectDescriptionContent,
      ProjectDescriptionTechnologies
    } = setup();

    expect(ProjectDescriptionContainer.children[0]).toEqual(ProjectDescriptionContent);
    expect(ProjectDescriptionContainer.children[1]).toEqual(ProjectDescriptionTechnologies);
    expect(ProjectDescriptionContainer.children[2]).toEqual(ProjectDescriptionButtons);
  });

  describe("ProjectDescriptionContent", () => {   
    describe("Props", () => {
      describe("title", () => {
        test("should have correct value passed via title props", () => {
          const { ProjectDescriptionContent } = setup({
            title: "Roland"
          });

          expect(ProjectDescriptionContent).toHaveTextContent("Roland");
        });
      });

      describe("description", () => {
        test("should have correct value passed via description props", () => {
          const { ProjectDescriptionContent } = setup({
            description: "Lorem ipsum dolor sit amet."
          });

          expect(ProjectDescriptionContent).toHaveTextContent("Lorem ipsum dolor sit amet.");
        });
      });
    });
  });
  
  describe("ProjectDescriptionTechnologies", () => {
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

  describe("ProjectDescriptionButtons", () => {
    describe("Props", () => {
      describe("size", () => {
        test("should have height 5.6rem if size is large", () => {
          const { ProjectDescriptionButtons } = setup({
            size: "large"
          });

          expect(ProjectDescriptionButtons.children[0]).toHaveStyleRule("height", "5.6rem");
        });

        test("should have 4.8rem if size is medium", () => {     
          const { ProjectDescriptionButtons } = setup({
            size: "medium"
          });

          expect(ProjectDescriptionButtons.children[0]).toHaveStyleRule("height", "4.8rem");
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
  const ProjectDescriptionButtons: Element = queryAllByTestId("ProjectDescriptionButtons")[0];
  const ProjectDescriptionContainer: Element = queryAllByTestId("ProjectDescription")[0];
  const ProjectDescriptionContent: Element = queryAllByTestId("ProjectDescriptionContent")[0];
  const ProjectDescriptionTechnologies: Element = queryAllByTestId("ProjectDescriptionTechnologies")[0];

  return {
    ...utils,
    IconsWithLabels,
    ProjectDescriptionButtons,
    ProjectDescriptionContainer,
    ProjectDescriptionContent,
    ProjectDescriptionTechnologies
  };
}
 