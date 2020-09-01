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
      ProjectDescriptionContent,
      ProjectDescriptionDesktop,
      ProjectDescriptionMobile,
      ProjectDescriptionTablet,
      ProjectDescriptionTechnologies,
      ProjectDescriptionTv
    } = setup();

    expect(ProjectDescriptionTv.children[0]).toEqual(ProjectDescriptionContent[0]);
    expect(ProjectDescriptionTv.children[1]).toEqual(ProjectDescriptionTechnologies[0]);
    expect(ProjectDescriptionTv.children[2]).toEqual(ProjectDescriptionButtons[0]);

    expect(ProjectDescriptionDesktop.children[0]).toEqual(ProjectDescriptionContent[1]);
    expect(ProjectDescriptionDesktop.children[1]).toEqual(ProjectDescriptionTechnologies[1]);
    expect(ProjectDescriptionDesktop.children[2]).toEqual(ProjectDescriptionButtons[1]);

    expect(ProjectDescriptionTablet.children[0]).toEqual(ProjectDescriptionContent[2]);
    expect(ProjectDescriptionTablet.children[1]).toEqual(ProjectDescriptionTechnologies[2]);
    expect(ProjectDescriptionTablet.children[2]).toEqual(ProjectDescriptionButtons[2]);

    expect(ProjectDescriptionMobile.children[0]).toEqual(ProjectDescriptionContent[3]);
    expect(ProjectDescriptionMobile.children[1]).toEqual(ProjectDescriptionTechnologies[3]);
    expect(ProjectDescriptionMobile.children[2]).toEqual(ProjectDescriptionButtons[3]);
  });

  describe("ProjectDescriptionMobile", () => {
    describe("Props", () => {
      describe("devices", () => {      
        describe("should have mobile", () => {
          test("should have display block when max-width is 640px", () => {
            const { ProjectDescriptionMobile } = setup();

            expect(ProjectDescriptionMobile).toHaveStyleRule("display", "block", {
              media: "(max-width:640px)"
            });
          });
        });
      });
    });
  });

  describe("ProjectDescriptionTablet", () => {
    describe("Props", () => {
      describe("devices", () => {      
        describe("should have tablet", () => {
          test("should have display block when min-width is 641px and max-width is 1280px", () => {
            const { ProjectDescriptionTablet } = setup();

            expect(ProjectDescriptionTablet).toHaveStyleRule("display", "block", {
              media: "(min-width:641px) and (max-width:1280px)"
            });
          });
        });
      });
    });
  });

  describe("ProjectDescriptionDesktop", () => {
    describe("Props", () => {
      describe("devices", () => {      
        describe("should have desktop", () => {
          test("should have display block when min-width is 1281px and max-width is 1680px", () => {
            const { ProjectDescriptionDesktop } = setup();

            expect(ProjectDescriptionDesktop).toHaveStyleRule("display", "block", {
              media: "(min-width:1281px) and (max-width:1680px)"
            });
          });
        });
      });
    });
  });

  describe("ProjectDescriptionTv", () => {
    describe("Props", () => {
      describe("devices", () => {      
        describe("should have tv", () => {
          test("should have display block when min-width is 1681px", () => {
            const { ProjectDescriptionTv } = setup();

            expect(ProjectDescriptionTv).toHaveStyleRule("display", "block", {
              media: "(min-width:1681px)"
            });
          });
        });
      });
    });
  });

  describe("ProjectDescriptionContent", () => {   
    describe("Props", () => {
      describe("title", () => {
        test("should have correct value passed via title props", () => {
          const { ProjectDescriptionContent } = setup({
            title: "Roland"
          });

          ProjectDescriptionContent.forEach((_ProjectDescriptionContent: Element) => {
            expect(_ProjectDescriptionContent).toHaveTextContent("Roland");
          });
        });
      });

      describe("description", () => {
        test("should have correct value passed via description props", () => {
          const { ProjectDescriptionContent } = setup({
            description: "Lorem ipsum dolor sit amet."
          });

          ProjectDescriptionContent.forEach((_ProjectDescriptionContent: Element) => {
            expect(_ProjectDescriptionContent).toHaveTextContent("Lorem ipsum dolor sit amet.");
          });
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

      expect(IconsWithLabels.length).toEqual(4);
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

  describe("ProjectDescriptionButtons", () => {
    describe("Props", () => {
      describe("size", () => {
        test("should have height 5.6rem if size is large", () => {
          const { ProjectDescriptionButtons } = setup({
            size: "large"
          });

          ProjectDescriptionButtons.forEach((_ProjectDescriptionButtons: Element) => {
            expect(_ProjectDescriptionButtons.children[0]).toHaveStyleRule("height", "5.6rem");
          });
        });

        test("should have 4.8rem if size is medium", () => {     
          const { ProjectDescriptionButtons } = setup({
            size: "medium"
          });

          ProjectDescriptionButtons.forEach((_ProjectDescriptionButtons: Element) => {
            expect(_ProjectDescriptionButtons.children[0]).toHaveStyleRule("height", "4.8rem");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  IconsWithLabels: Element[];
  ProjectDescriptionButtons: Element[];
  ProjectDescriptionContent: Element[];
  ProjectDescriptionDesktop: Element;
  ProjectDescriptionMobile: Element;
  ProjectDescriptionTablet: Element;
  ProjectDescriptionTechnologies: Element[];
  ProjectDescriptionTv: Element;
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
  
  const IconsWithLabels: Element[] = queryAllByTestId("IconsWithLabels");
  const ProjectDescriptionButtons: Element[] = queryAllByTestId("ProjectDescriptionButtons");
  const ProjectDescriptionContent: Element[] = queryAllByTestId("ProjectDescriptionContent");
  const ProjectDescriptionDesktop: Element = queryAllByTestId("ProjectDescriptionDesktop")[0];
  const ProjectDescriptionMobile: Element = queryAllByTestId("ProjectDescriptionMobile")[0];
  const ProjectDescriptionTablet: Element = queryAllByTestId("ProjectDescriptionTablet")[0];
  const ProjectDescriptionTechnologies: Element[] = queryAllByTestId("ProjectDescriptionTechnologies");
  const ProjectDescriptionTv: Element = queryAllByTestId("ProjectDescriptionTv")[0];

  return {
    ...utils,
    IconsWithLabels,
    ProjectDescriptionButtons,
    ProjectDescriptionContent,
    ProjectDescriptionDesktop,
    ProjectDescriptionMobile,
    ProjectDescriptionTablet,
    ProjectDescriptionTechnologies,
    ProjectDescriptionTv
  };
}
 