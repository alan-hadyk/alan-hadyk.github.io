import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectDescription from "<molecules>/ProjectDescription";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ProjectDescriptionProps
} from "<molecules>/__typings__/ProjectDescription.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("molecules / ProjectDescription", () => {
  test("should have correct structure", () => {
    const {
      Buttons,
      IconsWithLabels,
      ProjectDescriptionContainer,
      SpacingContainers,
      Texts
    } = setup();

    expect(ProjectDescriptionContainer.children[0]).toEqual(Texts[0]);
    expect(ProjectDescriptionContainer.children[1]).toEqual(SpacingContainers[0]);
    expect(SpacingContainers[0].children[0]).toEqual(Texts[1]);
    expect(ProjectDescriptionContainer.children[2]).toEqual(SpacingContainers[1]);
    expect(SpacingContainers[1].children[0]).toEqual(Texts[2]);
    expect(SpacingContainers[1].children[1]).toEqual(SpacingContainers[2]);
    expect(SpacingContainers[2].children[0]).toEqual(IconsWithLabels);
    expect(ProjectDescriptionContainer.children[3]).toEqual(Buttons[0]);
    expect(ProjectDescriptionContainer.children[4]).toEqual(SpacingContainers[3]);

    // expect(SpacingContainer.children[0]).toEqual(FlexContainer);
    // expect(FlexContainer.children[0]).toEqual(FlexItems[0]);
    // expect(FlexContainer.children[1]).toEqual(FlexItems[1]);
    // expect(FlexItems[0].children[0]).toEqual(Text);
    // expect(FlexItems[1].children[0]).toEqual(Barchart);
  });

  describe("ProjectDescriptionContainer", () => {    
    describe("Styles", () => {
      describe("display", () => {      
        test("should have none", () => {
          const { ProjectDescriptionContainer } = setup();

          expect(ProjectDescriptionContainer).toHaveStyleRule("display", "none");
        });

        test("should have flex for 17 children if min-height: 900px", () => {
          const { ProjectDescriptionContainer } = setup();

          expect(ProjectDescriptionContainer).toHaveStyleRule("display", "flex", {
            media: "(min-height: 900px)",
            modifier: ":nth-child(-n+17)"
          });
        });

        test("should have flex for 15 children if min-height: 800px and max-height: 899px", () => {
          const { ProjectDescriptionContainer } = setup();

          expect(ProjectDescriptionContainer).toHaveStyleRule("display", "flex", {
            media: "(min-height: 800px) and (max-height: 899px)",
            modifier: ":nth-child(-n+15)"
          });
        });

        test("should have flex for 10 children if min-height: 520px and max-height: 799px", () => {
          const { ProjectDescriptionContainer } = setup();

          expect(ProjectDescriptionContainer).toHaveStyleRule("display", "flex", {
            media: "(min-height: 520px) and (max-height: 799px)",
            modifier: ":nth-child(-n+10)"
          });
        });

        test("should have flex for 8 children if min-height: 415px and max-height: 519px", () => {
          const { ProjectDescriptionContainer } = setup();

          expect(ProjectDescriptionContainer).toHaveStyleRule("display", "flex", {
            media: "(min-height: 415px) and (max-height: 519px)",
            modifier: ":nth-child(-n+8)"
          });
        });

        test("should have flex for 3 children if max-height: 414px", () => {
          const { ProjectDescriptionContainer } = setup();

          expect(ProjectDescriptionContainer).toHaveStyleRule("display", "flex", {
            media: "(max-height: 414px)",
            modifier: ":nth-child(-n+3)"
          });
        });
      });

      describe("width", () => {      
        test("should have 100%", () => {
          const { ProjectDescriptionContainer } = setup();

          expect(ProjectDescriptionContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("SpacingContainer", () => {    
    describe("Props", () => {
      describe("paddingTop", () => {      
        test("should have .2rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", ".2rem");
        });
      });

      describe("paddingBottom", () => {      
        test("should have .2rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-bottom", ".2rem");
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

  describe("FlexContainer", () => {    
    describe("Props", () => {
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
      });
    });
  });

  describe("Label", () => { 
    test("should render textContent equal to label prop", () => {
      const { Text } = setup({
        label: "Hello"
      });

      expect(Text.textContent).toEqual("Hello");
    });

    describe("Props", () => {
      describe("color", () => {
        test("should have #bcd8db", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("color", "#bcd8db");
        });
      });

      describe("ellipsis", () => {
        describe("text-overflow", () => {
          test("should have ellipsis", () => {
            const { Text } = setup();

            expect(Text).toHaveStyleRule("text-overflow", "ellipsis");
          });
        });

        describe("overflow", () => {
          test("should have hidden", () => {
            const { Text } = setup();

            expect(Text).toHaveStyleRule("overflow", "hidden");
          });
        });

        describe("white-space", () => {
          test("should have nowrap", () => {
            const { Text } = setup();

            expect(Text).toHaveStyleRule("white-space", "nowrap");
          });
        });
      });

      describe("font-family", () => {
        test("should have 'Anonymous Pro',monospace", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
        });
      });

      describe("fontSize", () => {
        test("should have 8px", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("font-size", "8px");
        });
      });

      describe("paddingRight", () => {
        test("should have .4rem", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("padding-right", ".4rem");
        });
      });

      describe("textAlign", () => {
        test("should have right", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("text-align", "right");
        });
      });

      describe("textTransform", () => {
        test("should have uppercase", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("text-transform", "uppercase");
        });
      });
    });
  });
  
  describe("Barchart", () => { 
    describe("Styles", () => {
      describe("animation-delay", () => {
        test("should have proper value passed via props", () => {
          const { Barchart } = setup({
            animationDelay: "500ms"
          });
    
          expect(Barchart).toHaveStyleRule("animation-delay", "500ms");
        });
      });

      describe("animation-duration", () => {
        test("should have 3600ms", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("animation-duration", "3600ms");
        });
      });

      describe("animation-iteration-count", () => {
        test("should have infinite", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("animation-iteration-count", "infinite");
        });
      });

      describe("animation-timing-function", () => {
        test("should have ease-in-out", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("animation-timing-function", "ease-in-out");
        });
      });

      describe("background-color", () => {
        test("should have #78b0b5", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("background-color", "#78b0b5");
        });
      });

      describe("height", () => {
        test("should have .4rem", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("height", ".4rem");
        });
      });

      describe("padding-right", () => {
        test("should have .4rem", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("padding-right", ".4rem");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("width", "100%");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Buttons: Element[];
  IconsWithLabels: Element;
  ProjectDescriptionContainer: Element;
  SpacingContainers: Element[];
  Texts: Element[];
}

type ProjectDescriptionTestProps = Partial<ProjectDescriptionProps>;

function setup(addedProps?: ProjectDescriptionTestProps): Setup {
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
    title: "Roland 303",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <ProjectDescription {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};

  const Buttons: Element[] = queryAllByTestId("Button");
  const IconsWithLabels: Element = queryByTestId("IconsWithLabels");
  const ProjectDescriptionContainer: Element = queryByTestId("ProjectDescription");
  const SpacingContainers: Element[] = queryAllByTestId("SpacingContainer");
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    Buttons,
    IconsWithLabels,
    ProjectDescriptionContainer,
    SpacingContainers,
    Texts
  };
}
 