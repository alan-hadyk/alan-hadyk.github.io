import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectDescriptionContent from "<organisms>/ProjectDescription/ProjectDescriptionContent";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ProjectDescriptionContentProps
} from "<organisms>/ProjectDescription/__typings__/ProjectDescriptionContent.d.ts";

describe("organisms / ProjectDescriptionContent", () => {
  test("should have correct structure", () => {
    const {
      ProjectDescriptionContentContainer,
      SpacingContainer,
      Texts
    } = setup();

    expect(ProjectDescriptionContentContainer.children[0]).toEqual(Texts[0]);
    expect(ProjectDescriptionContentContainer.children[1]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(Texts[1]);
  });

  describe("Texts", () => { 
    describe("Text[0]", () => {
      test("should render textContent equal to title prop", () => {
        const { Texts } = setup({
          title: "New project"
        });
  
        expect(Texts[0].textContent).toEqual("New project");
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have #fff", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("color", "#fff");
          });
        });
  
        describe("fontFamily", () => {
          test("should have ExanModifiedRegular, monospace", () => {
            const { Texts } = setup();

            expect(Texts[0]).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
          });
        });
  
        describe("fontSize", () => {
          test("should have 48px if size is large", () => {
            const { Texts } = setup({
              size: "large"
            });
      
            expect(Texts[0]).toHaveStyleRule("font-size", "48px");
          });

          test("should have 28px if size is small", () => {
            const { Texts } = setup({
              size: "small"
            });
      
            expect(Texts[0]).toHaveStyleRule("font-size", "28px");
          });
        });

        describe("lineHeight", () => {
          test("should have 4.8rem if size is large", () => {
            const { Texts } = setup({
              size: "large"
            });
      
            expect(Texts[0]).toHaveStyleRule("line-height", "4.8rem");
          });

          test("should have 2.4rem if size is small", () => {
            const { Texts } = setup({
              size: "small"
            });
      
            expect(Texts[0]).toHaveStyleRule("line-height", "2.4rem");
          });
        });

        describe("textTransform", () => {
          test("should have lowercase", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("text-transform", "lowercase");
          });
        });
      });
    });

    describe("Text[1]", () => {
      test("should render textContent equal to description prop", () => {
        const { Texts } = setup({
          description: "Project description"
        });
  
        expect(Texts[1].textContent).toEqual("Project description");
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have #78b0b5", () => {
            const { Texts } = setup();
      
            expect(Texts[1]).toHaveStyleRule("color", "#78b0b5");
          });
        });
  
        describe("font-family", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            const { Texts } = setup();

            expect(Texts[1]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
          });
        });

        describe("fontSize", () => {
          test("should have 24px", () => {
            const { Texts } = setup({
              size: "large"
            });
      
            expect(Texts[1]).toHaveStyleRule("font-size", "24px");
          });

          test("should have 20px", () => {
            const { Texts } = setup({
              size: "small"
            });
      
            expect(Texts[1]).toHaveStyleRule("font-size", "20px");
          });
        });

        describe("lineHeight", () => {
          test("should have 3.2rem", () => {
            const { Texts } = setup({
              size: "large"
            });
      
            expect(Texts[1]).toHaveStyleRule("line-height", "3.2rem");
          });

          test("should have 2.4rem", () => {
            const { Texts } = setup({
              size: "small"
            });
      
            expect(Texts[1]).toHaveStyleRule("line-height", "2.4rem");
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

      describe("marginTop", () => {      
        test("should have 1.6rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("margin-top", "1.6rem");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ProjectDescriptionContentContainer: Element;
  SpacingContainer: Element;
  Texts: Element[];
}

type ProjectDescriptionContentTestProps = Partial<ProjectDescriptionContentProps>;

function setup(additionalProps?: ProjectDescriptionContentTestProps): Setup {
  const props: ProjectDescriptionContentProps = {
    description: "Lorem ipsum dolor sit amet",
    size: "small",
    title: "Project",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <ProjectDescriptionContent {...props} />
  );

  const { queryAllByTestId, queryByTestId } = utils || {};

  const SpacingContainer: Element = queryByTestId("TitleWithDescriptionSpacingContainer");
  const ProjectDescriptionContentContainer: Element = queryByTestId("ProjectDescriptionContent");
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    ProjectDescriptionContentContainer,
    SpacingContainer,
    Texts
  };
}
 