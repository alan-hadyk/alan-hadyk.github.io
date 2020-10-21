import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectDescriptionContent from "<organisms>/ProjectDescription/ProjectDescriptionContent";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { ProjectDescriptionContentProps } from "<organisms>/ProjectDescription/__typings__/ProjectDescriptionContent.d.ts";

describe("organisms / ProjectDescriptionContent", () => {
  test("should have correct structure", () => {
    const {
      ProjectDescriptionContentContainer,
      ProjectDescriptionText,
      ProjectDescriptionTitle,
      SpacingContainer
    } = setup();

    expect(ProjectDescriptionContentContainer.children[0]).toEqual(
      ProjectDescriptionTitle
    );
    expect(ProjectDescriptionContentContainer.children[1]).toEqual(
      SpacingContainer
    );
    expect(SpacingContainer.children[0]).toEqual(ProjectDescriptionText);
  });

  describe("Texts", () => {
    describe("ProjectDescriptionTitle", () => {
      test("should render correct content passed via title prop", () => {
        const { ProjectDescriptionTitle } = setup({
          title: "New project"
        });

        expect(ProjectDescriptionTitle.textContent).toEqual("New project");
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have #fff", () => {
            const { ProjectDescriptionTitle } = setup();

            expect(ProjectDescriptionTitle).toHaveStyleRule("color", "#fff");
          });
        });

        describe("fontFamily", () => {
          test("should have ExanModifiedRegular, monospace", () => {
            const { ProjectDescriptionTitle } = setup();

            expect(ProjectDescriptionTitle).toHaveStyleRule(
              "font-family",
              "ExanModifiedRegular,monospace"
            );
          });
        });

        describe("fontSize", () => {
          test("should have 48px if size is large", () => {
            const { ProjectDescriptionTitle } = setup({
              size: "large"
            });

            expect(ProjectDescriptionTitle).toHaveStyleRule(
              "font-size",
              "48px"
            );
          });

          test("should have 28px if size is small", () => {
            const { ProjectDescriptionTitle } = setup({
              size: "small"
            });

            expect(ProjectDescriptionTitle).toHaveStyleRule(
              "font-size",
              "28px"
            );
          });
        });

        describe("lineHeight", () => {
          test("should have 5.2rem if size is large", () => {
            const { ProjectDescriptionTitle } = setup({
              size: "large"
            });

            expect(ProjectDescriptionTitle).toHaveStyleRule(
              "line-height",
              "5.2rem"
            );
          });

          test("should have 3.2rem if size is small", () => {
            const { ProjectDescriptionTitle } = setup({
              size: "small"
            });

            expect(ProjectDescriptionTitle).toHaveStyleRule(
              "line-height",
              "3.2rem"
            );
          });
        });

        describe("textTransform", () => {
          test("should have lowercase", () => {
            const { ProjectDescriptionTitle } = setup();

            expect(ProjectDescriptionTitle).toHaveStyleRule(
              "text-transform",
              "lowercase"
            );
          });
        });
      });
    });

    describe("ProjectDescriptionText", () => {
      test("should render correct content passed via description prop", () => {
        const { ProjectDescriptionText } = setup({
          description: "Project description"
        });

        expect(ProjectDescriptionText.textContent).toEqual(
          "Project description"
        );
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have #78b0b5", () => {
            const { ProjectDescriptionText } = setup();

            expect(ProjectDescriptionText).toHaveStyleRule("color", "#78b0b5");
          });
        });

        describe("font-family", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            const { ProjectDescriptionText } = setup();

            expect(ProjectDescriptionText).toHaveStyleRule(
              "font-family",
              "'Anonymous Pro',monospace"
            );
          });
        });

        describe("fontSize", () => {
          test("should have 24px", () => {
            const { ProjectDescriptionText } = setup({
              size: "large"
            });

            expect(ProjectDescriptionText).toHaveStyleRule("font-size", "24px");
          });

          test("should have 20px", () => {
            const { ProjectDescriptionText } = setup({
              size: "small"
            });

            expect(ProjectDescriptionText).toHaveStyleRule("font-size", "20px");
          });
        });

        describe("lineHeight", () => {
          test("should have 3.2rem", () => {
            const { ProjectDescriptionText } = setup({
              size: "large"
            });

            expect(ProjectDescriptionText).toHaveStyleRule(
              "line-height",
              "3.2rem"
            );
          });

          test("should have 2.4rem", () => {
            const { ProjectDescriptionText } = setup({
              size: "small"
            });

            expect(ProjectDescriptionText).toHaveStyleRule(
              "line-height",
              "2.4rem"
            );
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
  ProjectDescriptionText: Element;
  ProjectDescriptionTitle: Element;
  SpacingContainer: Element;
}

type ProjectDescriptionContentTestProps = Partial<
  ProjectDescriptionContentProps
>;

function setup(additionalProps?: ProjectDescriptionContentTestProps): Setup {
  const props: ProjectDescriptionContentProps = {
    description: "Lorem ipsum dolor sit amet",
    title: "Project",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <ProjectDescriptionContent {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const ProjectDescriptionContentContainer: Element = queryAllByTestId(
    "ProjectDescriptionContent"
  )[0];
  const ProjectDescriptionTitle: Element = queryAllByTestId(
    "ProjectDescriptionTitle"
  )[0];
  const ProjectDescriptionText: Element = queryAllByTestId(
    "ProjectDescriptionText"
  )[0];
  const SpacingContainer: Element = queryAllByTestId(
    "TitleWithDescriptionSpacingContainer"
  )[0];

  return {
    ...utils,
    ProjectDescriptionContentContainer,
    ProjectDescriptionText,
    ProjectDescriptionTitle,
    SpacingContainer
  };
}
