import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectDescriptionButtons from "<organisms>/ProjectDescription/ProjectDescriptionButtons";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { ProjectDescriptionButtonsProps } from "<organisms>/ProjectDescription/__typings__/ProjectDescriptionButtons.d.ts";

describe("organisms / ProjectDescriptionButtons", () => {
  test("should have correct structure", () => {
    const {
      Buttons,
      SpacingContainer,
      ProjectDescriptionButtonsContainer
    } = setup();

    expect(ProjectDescriptionButtonsContainer.children[0]).toEqual(Buttons[0]);
    expect(ProjectDescriptionButtonsContainer.children[1]).toEqual(
      SpacingContainer
    );
    expect(SpacingContainer.children[0]).toEqual(Buttons[1]);
  });

  describe("Buttons", () => {
    describe("Buttons[0]", () => {
      test("should have correct icon and text if size is large", () => {
        const { Buttons } = setup({
          size: "large"
        });

        const ButtonsText = Buttons[0].querySelector("[font-family=\"Exan\"]");
        const ButtonsIcon = Buttons[0].querySelector("svg");

        expect(ButtonsText.textContent).toEqual("Launch project");
        expect(ButtonsIcon.textContent).toEqual("Btn-ExternalLink.svg");
      });

      test("should have correct icon and text if size is medium", () => {
        const { Buttons } = setup({
          size: "medium"
        });

        const ButtonsText = Buttons[0].querySelector("[font-family=\"Exan\"]");
        const ButtonsIcon = Buttons[0].querySelector("svg");

        expect(ButtonsText.textContent).toEqual("Launch");
        expect(ButtonsIcon.textContent).toEqual("Btn-ExternalLink.svg");
      });

      describe("Props", () => {
        describe("size", () => {
          test("should have height 5.6rem if size is large", () => {
            const { Buttons } = setup({
              size: "large"
            });

            expect(Buttons[0]).toHaveStyleRule("height", "5.6rem");
          });

          test("should have 4.8rem if size is medium", () => {
            const { Buttons } = setup({
              size: "medium"
            });

            expect(Buttons[0]).toHaveStyleRule("height", "4.8rem");
          });
        });

        describe("width", () => {
          test("should have 100%", () => {
            const { Buttons } = setup();

            expect(Buttons[0]).toHaveStyleRule("width", "100%");
          });
        });

        describe("type", () => {
          describe("should have primary", () => {
            describe("background-color", () => {
              test("should have #2b595e", () => {
                const { Buttons } = setup();

                expect(Buttons[0]).toHaveStyleRule(
                  "background-color",
                  "#2b595e"
                );
              });
            });
          });
        });
      });
    });

    describe("Buttons[1]", () => {
      test("should have correct icon and text if size is large", () => {
        const { Buttons } = setup({
          size: "large"
        });

        const ButtonsText = Buttons[1].querySelector("[font-family=\"Exan\"]");
        const ButtonsIcon = Buttons[1].querySelector("svg");

        expect(ButtonsText.textContent).toEqual("Open in codesandbox");
        expect(ButtonsIcon.textContent).toEqual("Btn-CodeSandbox.svg");
      });

      test("should have correct icon and text if size is medium", () => {
        const { Buttons } = setup({
          size: "medium"
        });

        const ButtonsText = Buttons[1].querySelector("[font-family=\"Exan\"]");
        const ButtonsIcon = Buttons[1].querySelector("svg");

        expect(ButtonsText.textContent).toEqual("Codesandbox");
        expect(ButtonsIcon.textContent).toEqual("Btn-CodeSandbox.svg");
      });

      describe("Props", () => {
        describe("size", () => {
          test("should have height 5.6rem if size is large", () => {
            const { Buttons } = setup({
              size: "large"
            });

            expect(Buttons[1]).toHaveStyleRule("height", "5.6rem");
          });

          test("should have 4.8rem if size is medium", () => {
            const { Buttons } = setup({
              size: "medium"
            });

            expect(Buttons[1]).toHaveStyleRule("height", "4.8rem");
          });
        });

        describe("type", () => {
          describe("should have secondary", () => {
            describe("background-color", () => {
              test("should have transparent", () => {
                const { Buttons } = setup();

                expect(Buttons[1]).toHaveStyleRule(
                  "background-color",
                  "transparent"
                );
              });
            });
          });
        });

        describe("width", () => {
          test("should have 100%", () => {
            const { Buttons } = setup();

            expect(Buttons[1]).toHaveStyleRule("width", "100%");
          });
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
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
  Buttons: Element[];
  ProjectDescriptionButtonsContainer: Element;
  SpacingContainer: Element;
}

type ProjectDescriptionButtonsTestProps = Partial<
  ProjectDescriptionButtonsProps
>;

function setup(additionalProps?: ProjectDescriptionButtonsTestProps): Setup {
  const props: ProjectDescriptionButtonsProps = {
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <ProjectDescriptionButtons {...props} />
  );

  const { queryAllByTestId, queryByTestId } = utils || {};

  const Buttons: Element[] = queryAllByTestId("Button");
  const SpacingContainer: Element = queryByTestId("ButtonsSpacingContainer");
  const ProjectDescriptionButtonsContainer: Element = queryByTestId(
    "ProjectDescriptionButtons"
  );

  return {
    ...utils,
    Buttons,
    ProjectDescriptionButtonsContainer,
    SpacingContainer
  };
}
