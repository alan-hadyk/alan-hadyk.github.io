import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardElement from "UI/molecules/DashboardElement";
import { DashboardElementProps } from "UI/molecules/__typings__/DashboardElement";

import renderWithTheme from "helpers/tests/renderWithTheme";

describe("molecules / DashboardElement", () => {
  test("should have correct structure if there's no description and there is title", () => {
    const {
      Corners,
      DashboardElementInnerSpacingContainer,
      DashboardElementOuterSpacingContainer,
      DashboardElementContainer,
      DashboardElementInnerContainer,
      DashboardElementTitleText,
      PositionContainer
    } = setup({
      description: undefined,
      shouldDisplayCorners: true,
      title: "Code"
    });

    expect(DashboardElementContainer.children[0]).toEqual(
      DashboardElementTitleText
    );
    expect(DashboardElementContainer.children[1]).toEqual(
      DashboardElementOuterSpacingContainer
    );
    expect(DashboardElementOuterSpacingContainer.children[0]).toEqual(
      PositionContainer
    );

    expect(PositionContainer.children[0]).toEqual(Corners[0]);
    expect(PositionContainer.children[1]).toEqual(Corners[1]);
    expect(PositionContainer.children[2]).toEqual(Corners[2]);
    expect(PositionContainer.children[3]).toEqual(Corners[3]);

    expect(PositionContainer.children[4]).toEqual(
      DashboardElementInnerContainer
    );
    expect(DashboardElementInnerContainer.children[0]).toEqual(
      DashboardElementInnerSpacingContainer
    );
  });

  test("should have correct structure if there's description and title", () => {
    const {
      Corners,
      DashboardElementInnerSpacingContainer,
      DashboardElementOuterSpacingContainer,
      DashboardElementContainer,
      DashboardElementDescription,
      DashboardElementDescriptionText,
      DashboardElementInnerContainer,
      DashboardElementTitleText,
      PositionContainer
    } = setup({
      description: "Lorem ipsum dolor sit amet",
      shouldDisplayCorners: true,
      title: "Code"
    });

    expect(DashboardElementContainer.children[0]).toEqual(
      DashboardElementTitleText
    );
    expect(DashboardElementContainer.children[1]).toEqual(
      DashboardElementDescription
    );
    expect(DashboardElementContainer.children[2]).toEqual(
      DashboardElementOuterSpacingContainer
    );

    expect(DashboardElementDescription.children[0]).toEqual(
      DashboardElementDescriptionText
    );

    expect(DashboardElementOuterSpacingContainer.children[0]).toEqual(
      PositionContainer
    );

    expect(PositionContainer.children[0]).toEqual(Corners[0]);
    expect(PositionContainer.children[1]).toEqual(Corners[1]);
    expect(PositionContainer.children[2]).toEqual(Corners[2]);
    expect(PositionContainer.children[3]).toEqual(Corners[3]);
    expect(PositionContainer.children[4]).toEqual(
      DashboardElementInnerContainer
    );
    expect(DashboardElementInnerContainer.children[0]).toEqual(
      DashboardElementInnerSpacingContainer
    );
  });

  test("should have correct structure if there's description and no title", () => {
    const {
      Corners,
      DashboardElementInnerSpacingContainer,
      DashboardElementOuterSpacingContainer,
      DashboardElementContainer,
      DashboardElementDescription,
      DashboardElementDescriptionText,
      DashboardElementInnerContainer,
      PositionContainer
    } = setup({
      description: "Lorem ipsum dolor sit amet",
      shouldDisplayCorners: true,
      title: undefined
    });

    expect(DashboardElementContainer.children[0]).toEqual(
      DashboardElementDescription
    );
    expect(DashboardElementContainer.children[1]).toEqual(
      DashboardElementOuterSpacingContainer
    );

    expect(DashboardElementDescription.children[0]).toEqual(
      DashboardElementDescriptionText
    );

    expect(DashboardElementOuterSpacingContainer.children[0]).toEqual(
      PositionContainer
    );

    expect(PositionContainer.children[0]).toEqual(Corners[0]);
    expect(PositionContainer.children[1]).toEqual(Corners[1]);
    expect(PositionContainer.children[2]).toEqual(Corners[2]);
    expect(PositionContainer.children[3]).toEqual(Corners[3]);
    expect(PositionContainer.children[4]).toEqual(
      DashboardElementInnerContainer
    );
    expect(DashboardElementInnerContainer.children[0]).toEqual(
      DashboardElementInnerSpacingContainer
    );
  });

  test("should have correct structure if there's no description and no title", () => {
    const {
      Corners,
      DashboardElementInnerSpacingContainer,
      DashboardElementOuterSpacingContainer,
      DashboardElementContainer,
      DashboardElementInnerContainer,
      PositionContainer
    } = setup({
      description: undefined,
      shouldDisplayCorners: true,
      title: undefined
    });
    expect(DashboardElementContainer.children[0]).toEqual(
      DashboardElementOuterSpacingContainer
    );

    expect(DashboardElementOuterSpacingContainer.children[0]).toEqual(
      PositionContainer
    );

    expect(PositionContainer.children[0]).toEqual(Corners[0]);
    expect(PositionContainer.children[1]).toEqual(Corners[1]);
    expect(PositionContainer.children[2]).toEqual(Corners[2]);
    expect(PositionContainer.children[3]).toEqual(Corners[3]);
    expect(PositionContainer.children[4]).toEqual(
      DashboardElementInnerContainer
    );
    expect(DashboardElementInnerContainer.children[0]).toEqual(
      DashboardElementInnerSpacingContainer
    );
  });

  describe("DashboardElementContainer", () => {
    describe("Props", () => {
      describe("align-self", () => {
        test("should have auto by default", () => {
          const { DashboardElementContainer } = setup();

          expect(DashboardElementContainer).toHaveStyleRule(
            "align-self",
            "auto"
          );
        });

        test("should have flex-start passed via alignSelf prop", () => {
          const { DashboardElementContainer } = setup({
            alignSelf: "flex-start"
          });

          expect(DashboardElementContainer).toHaveStyleRule(
            "align-self",
            "flex-start"
          );
        });

        test("should have flex-end passed via alignSelf prop", () => {
          const { DashboardElementContainer } = setup({
            alignSelf: "flex-end"
          });

          expect(DashboardElementContainer).toHaveStyleRule(
            "align-self",
            "flex-end"
          );
        });

        test("should have center passed via alignSelf prop", () => {
          const { DashboardElementContainer } = setup({
            alignSelf: "center"
          });

          expect(DashboardElementContainer).toHaveStyleRule(
            "align-self",
            "center"
          );
        });

        test("should have baseline passed via alignSelf prop", () => {
          const { DashboardElementContainer } = setup({
            alignSelf: "baseline"
          });

          expect(DashboardElementContainer).toHaveStyleRule(
            "align-self",
            "baseline"
          );
        });

        test("should have stretch passed via alignSelf prop", () => {
          const { DashboardElementContainer } = setup({
            alignSelf: "stretch"
          });

          expect(DashboardElementContainer).toHaveStyleRule(
            "align-self",
            "stretch"
          );
        });
      });

      describe("flex", () => {
        test("should have 1 0 50% passed via flex prop", () => {
          const { DashboardElementContainer } = setup({
            flex: "1 0 50%"
          });

          expect(DashboardElementContainer).toHaveStyleRule("flex", "1 0 50%");
        });

        test("should have 0 1 25% passed via flex prop", () => {
          const { DashboardElementContainer } = setup({
            flex: "0 1 25%"
          });

          expect(DashboardElementContainer).toHaveStyleRule("flex", "0 1 25%");
        });

        test("should have 1 1 75% passed via flex prop", () => {
          const { DashboardElementContainer } = setup({
            flex: "1 1 75%"
          });

          expect(DashboardElementContainer).toHaveStyleRule("flex", "1 1 75%");
        });
      });

      describe("order", () => {
        test("should have 0 by default", () => {
          const { DashboardElementContainer } = setup();

          expect(DashboardElementContainer).toHaveStyleRule("order", "0");
        });

        test("should have 4 passed via order prop", () => {
          const { DashboardElementContainer } = setup({
            order: 4
          });

          expect(DashboardElementContainer).toHaveStyleRule("order", "4");
        });

        test("should have 2 passed via order prop", () => {
          const { DashboardElementContainer } = setup({
            order: 2
          });

          expect(DashboardElementContainer).toHaveStyleRule("order", "2");
        });
      });

      describe("overflow", () => {
        test("should have visible by default", () => {
          const { DashboardElementContainer } = setup();

          expect(DashboardElementContainer).toHaveStyleRule(
            "overflow",
            "visible"
          );
        });

        test("should have hidden passed via titleOverflow prop", () => {
          const { DashboardElementContainer } = setup({
            titleOverflow: "hidden"
          });

          expect(DashboardElementContainer).toHaveStyleRule(
            "overflow",
            "hidden"
          );
        });
      });
    });
  });

  describe("PositionContainer", () => {
    test("should render 5 children if shouldDisplayCorners is true", () => {
      const { PositionContainer } = setup({
        shouldDisplayCorners: true
      });

      expect(PositionContainer.children.length).toEqual(5);
    });

    test("should render 1 child if shouldDisplayCorners is false", () => {
      const { PositionContainer } = setup({
        shouldDisplayCorners: false
      });

      expect(PositionContainer.children.length).toEqual(1);
    });

    describe("Props", () => {
      describe("height", () => {
        test("should have 100% if there is no description", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("height", "100%");
        });

        test("should have 100% if there is description", () => {
          Element.prototype.getBoundingClientRect = jest.fn(() => {
            return {
              bottom: 0,
              height: 120,
              left: 0,
              right: 0,
              toJSON: jest.fn(),
              top: 0,
              width: 120,
              x: 0,
              y: 0
            };
          });

          const { PositionContainer } = setup({
            description: "Lorem ipsum dolor sit amet"
          });

          expect(PositionContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("position", () => {
        test("should have relative", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });

  describe("Corners", () => {
    test("should render 4 corners as PositionContainer children if shouldDisplayCorners is true", () => {
      const { Corners, PositionContainer } = setup({
        shouldDisplayCorners: true
      });

      expect(PositionContainer.children[0]).toEqual(Corners[0]);
      expect(PositionContainer.children[1]).toEqual(Corners[1]);
      expect(PositionContainer.children[2]).toEqual(Corners[2]);
      expect(PositionContainer.children[3]).toEqual(Corners[3]);
    });

    test("should not render if shouldDisplayCorners is false", () => {
      const { Corners } = setup({
        shouldDisplayCorners: false
      });

      expect(Corners[0]).toBeFalsy();
      expect(Corners[1]).toBeFalsy();
      expect(Corners[2]).toBeFalsy();
      expect(Corners[3]).toBeFalsy();
    });
  });

  describe("DashboardElementInnerContainer", () => {
    test("should render children equal to children prop", () => {
      const { DashboardElementInnerContainer } = setup({
        children: <div>Custom children</div>
      });

      expect(DashboardElementInnerContainer.textContent).toEqual(
        "Custom children"
      );
    });

    describe("Styles", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { DashboardElementInnerContainer } = setup();

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "height",
            "100%"
          );
        });
      });

      describe("overflow", () => {
        test("should have hidden by default", () => {
          const { DashboardElementInnerContainer } = setup();

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "overflow",
            "hidden"
          );
        });

        test("should have visible passed via overflow prop", () => {
          const { DashboardElementInnerContainer } = setup({
            overflow: "visible"
          });

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "overflow",
            "visible"
          );
        });
      });

      describe("background", () => {
        test("should have url(Cross.svg) if shouldDisplayCorners is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: true
          });

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "background",
            "url(Cross.svg)"
          );
        });

        test("should have url(Cross.svg) if shouldDisplayBorder is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayBorder: true
          });

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "background",
            "url(Cross.svg)"
          );
        });

        test("should not have if shouldDisplayCorners is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: false
          });

          expect(DashboardElementInnerContainer).not.toHaveStyleRule(
            "background"
          );
        });

        test("should not have if shouldDisplayBorder is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayBorder: false
          });

          expect(DashboardElementInnerContainer).not.toHaveStyleRule(
            "background"
          );
        });
      });

      describe("background-repeat", () => {
        test("should have space if shouldDisplayCorners is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: true
          });

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "background-repeat",
            "space"
          );
        });

        test("should have space if shouldDisplayBorder is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayBorder: true
          });

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "background-repeat",
            "space"
          );
        });

        test("should not have if shouldDisplayCorners is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: false
          });

          expect(DashboardElementInnerContainer).not.toHaveStyleRule(
            "background-repeat"
          );
        });

        test("should not have if shouldDisplayBorder is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayBorder: false
          });

          expect(DashboardElementInnerContainer).not.toHaveStyleRule(
            "background-repeat"
          );
        });
      });

      describe("background-position", () => {
        test("should have center if shouldDisplayCorners is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: true
          });

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "background-position",
            "center"
          );
        });

        test("should have center if shouldDisplayBorder is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayBorder: true
          });

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "background-position",
            "center"
          );
        });

        test("should not have if shouldDisplayCorners is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: false
          });

          expect(DashboardElementInnerContainer).not.toHaveStyleRule(
            "background-position"
          );
        });

        test("should not have if shouldDisplayBorder is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayBorder: false
          });

          expect(DashboardElementInnerContainer).not.toHaveStyleRule(
            "background-position"
          );
        });
      });

      describe("background-size", () => {
        test("should have 3.2rem 3.2rem if shouldDisplayCorners is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: true
          });

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "background-size",
            "3.2rem 3.2rem"
          );
        });

        test("should have 3.2rem 3.2rem if shouldDisplayBorder is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayBorder: true
          });

          expect(DashboardElementInnerContainer).toHaveStyleRule(
            "background-size",
            "3.2rem 3.2rem"
          );
        });

        test("should not have if shouldDisplayCorners is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: false
          });

          expect(DashboardElementInnerContainer).not.toHaveStyleRule(
            "background-size"
          );
        });

        test("should not have if shouldDisplayBorder is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayBorder: false
          });

          expect(DashboardElementInnerContainer).not.toHaveStyleRule(
            "background-size"
          );
        });
      });

      describe("shouldDisplayBorder", () => {
        describe("border", () => {
          test("should have thin solid #78b0b5", () => {
            const { DashboardElementInnerContainer } = setup({
              shouldDisplayBorder: true
            });

            expect(DashboardElementInnerContainer).toHaveStyleRule(
              "border",
              "thin solid #78b0b5"
            );
          });
        });

        describe("box-shadow", () => {
          test("should have 0px 0px .8rem 0px #bcd8db", () => {
            const { DashboardElementInnerContainer } = setup({
              shouldDisplayBorder: true
            });

            expect(DashboardElementInnerContainer).toHaveStyleRule(
              "box-shadow",
              "0px 0px .8rem 0px #bcd8db"
            );
          });
        });
      });
    });
  });

  describe("SpacingContainers", () => {
    describe("DashboardElementInnerSpacingContainer", () => {
      test("should render children", () => {
        const { DashboardElementInnerSpacingContainer } = setup({
          children: <div>Custom children</div>,
          shouldDisplayCorners: true
        });

        expect(DashboardElementInnerSpacingContainer.textContent).toEqual(
          "Custom children"
        );
      });

      test("should not render if shouldDisplayCorners is false", () => {
        const { DashboardElementInnerSpacingContainer } = setup({
          shouldDisplayCorners: false
        });

        expect(DashboardElementInnerSpacingContainer).toBeFalsy();
      });

      describe("Props", () => {
        let DashboardElementInnerSpacingContainer: Element;

        beforeEach(() => {
          DashboardElementInnerSpacingContainer = setup({
            shouldDisplayCorners: true
          }).DashboardElementInnerSpacingContainer;
        });

        describe("height", () => {
          test("should have 100%", () => {
            expect(DashboardElementInnerSpacingContainer).toHaveStyleRule(
              "height",
              "100%"
            );
          });
        });

        describe("paddingRight", () => {
          test("should have .8rem", () => {
            expect(DashboardElementInnerSpacingContainer).toHaveStyleRule(
              "padding-right",
              ".8rem"
            );
          });
        });

        describe("paddingLeft", () => {
          test("should have .8rem", () => {
            expect(DashboardElementInnerSpacingContainer).toHaveStyleRule(
              "padding-left",
              ".8rem"
            );
          });
        });

        describe("paddingTop", () => {
          test("should have .8rem", () => {
            expect(DashboardElementInnerSpacingContainer).toHaveStyleRule(
              "padding-top",
              ".8rem"
            );
          });
        });

        describe("paddingBottom", () => {
          test("should have .8rem", () => {
            expect(DashboardElementInnerSpacingContainer).toHaveStyleRule(
              "padding-bottom",
              ".8rem"
            );
          });
        });
      });
    });

    describe("DashboardElementDescription", () => {
      describe("height", () => {
        test("should have 2.4rem", () => {
          const { DashboardElementDescription } = setup({
            description: "Lorem ipsum"
          });

          expect(DashboardElementDescription).toHaveStyleRule(
            "height",
            "2.4rem"
          );
        });
      });

      describe("marginBottom", () => {
        test("should have 2.8rem", () => {
          const { DashboardElementDescription } = setup({
            description: "Lorem ipsum"
          });

          expect(DashboardElementDescription).toHaveStyleRule(
            "margin-bottom",
            "2.8rem"
          );
        });
      });
    });

    describe("DashboardElementContentSpacingContainer", () => {
      describe("height", () => {
        test("should have calc(100% - 3.6rem) if there is no description", () => {
          const { DashboardElementOuterSpacingContainer } = setup();

          expect(DashboardElementOuterSpacingContainer).toHaveStyleRule(
            "height",
            "calc(100% - 3.6rem)"
          );
        });

        test("should have calc(100% - 3.6rem - 2.4rem - 2.8rem) if there is description", () => {
          const { DashboardElementOuterSpacingContainer } = setup({
            description: "Lorem ipsum dolor sit amet"
          });

          expect(DashboardElementOuterSpacingContainer).toHaveStyleRule(
            "height",
            "calc(100% - 3.6rem - 2.4rem - 2.8rem)"
          );
        });
      });

      describe("marginTop", () => {
        test("should have .8rem when title font size is equal 28px", () => {
          const { DashboardElementOuterSpacingContainer } = setup({
            titleFontSize: "font28"
          });

          expect(DashboardElementOuterSpacingContainer).toHaveStyleRule(
            "margin-top",
            ".8rem"
          );
        });

        test("should have 0 when title font size is not equal 28px", () => {
          const { DashboardElementOuterSpacingContainer } = setup({
            titleFontSize: "font16"
          });

          expect(DashboardElementOuterSpacingContainer).toHaveStyleRule(
            "margin-top",
            "0"
          );
        });
      });
    });
  });

  describe("Texts", () => {
    describe("DashboardElementTitleText", () => {
      test("should render if title prop is passed", () => {
        const { DashboardElementTitleText } = setup({
          title: "Tech Stack"
        });

        expect(DashboardElementTitleText).toBeTruthy();
      });

      test("should not render if title prop is not passed", () => {
        const { DashboardElementTitleText } = setup({
          title: undefined
        });

        expect(DashboardElementTitleText).toBeFalsy();
      });

      test("should render correct content passed via title prop", () => {
        const { DashboardElementTitleText } = setup({
          title: "Tech Stack"
        });

        expect(DashboardElementTitleText.textContent).toEqual("Tech Stack");
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have color #bcd8db when font size is equal 28px", () => {
            const { DashboardElementTitleText } = setup({
              titleFontSize: "font28"
            });

            expect(DashboardElementTitleText).toHaveStyleRule(
              "color",
              "#bcd8db"
            );
          });

          test("should have color #78b0b5 when font size is not equal 28px", () => {
            const { DashboardElementTitleText } = setup({
              titleFontSize: "font16"
            });

            expect(DashboardElementTitleText).toHaveStyleRule(
              "color",
              "#78b0b5"
            );
          });
        });

        describe("ellipsis", () => {
          describe("text-overflow", () => {
            test("should have ellipsis", () => {
              const { DashboardElementTitleText } = setup();

              expect(DashboardElementTitleText).toHaveStyleRule(
                "text-overflow",
                "ellipsis"
              );
            });
          });

          describe("overflow", () => {
            test("should have hidden", () => {
              const { DashboardElementTitleText } = setup();

              expect(DashboardElementTitleText).toHaveStyleRule(
                "overflow",
                "hidden"
              );
            });
          });

          describe("white-space", () => {
            test("should have nowrap", () => {
              const { DashboardElementTitleText } = setup();

              expect(DashboardElementTitleText).toHaveStyleRule(
                "white-space",
                "nowrap"
              );
            });
          });
        });

        describe("font-family", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            const { DashboardElementTitleText } = setup();

            expect(DashboardElementTitleText).toHaveStyleRule(
              "font-family",
              "'Anonymous Pro',monospace"
            );
          });
        });

        describe("fontSize", () => {
          test("should have 16px", () => {
            const { DashboardElementTitleText } = setup();

            expect(DashboardElementTitleText).toHaveStyleRule(
              "font-size",
              "16px"
            );
          });

          test("should have 28px passed via titleFontSize prop", () => {
            const { DashboardElementTitleText } = setup({
              titleFontSize: "font28"
            });

            expect(DashboardElementTitleText).toHaveStyleRule(
              "font-size",
              "28px"
            );
          });
        });

        describe("lineHeight", () => {
          test("should have 3.6rem", () => {
            const { DashboardElementTitleText } = setup();

            expect(DashboardElementTitleText).toHaveStyleRule(
              "line-height",
              "3.6rem"
            );
          });
        });

        describe("textTransform", () => {
          test("should have uppercase", () => {
            const { DashboardElementTitleText } = setup();

            expect(DashboardElementTitleText).toHaveStyleRule(
              "text-transform",
              "uppercase"
            );
          });
        });
      });
    });

    describe("DashboardElementDescriptionText", () => {
      describe("Props", () => {
        let DashboardElementDescriptionText: Element;

        beforeEach(() => {
          DashboardElementDescriptionText = setup({
            description: "Lorem ipsum dolor sit amet"
          }).DashboardElementDescriptionText;
        });

        describe("color", () => {
          test("should have color #78b0b5", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule(
              "color",
              "#78b0b5"
            );
          });
        });

        describe("fontSize", () => {
          test("should have 8px", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule(
              "font-size",
              "8px"
            );
          });
        });

        describe("lineHeight", () => {
          test("should have 1.2rem", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule(
              "line-height",
              "1.2rem"
            );
          });
        });

        describe("maxHeight", () => {
          test("should have 3.6rem", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule(
              "max-height",
              "3.6rem"
            );
          });
        });

        describe("overflow", () => {
          test("should have hidden", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule(
              "overflow",
              "hidden"
            );
          });
        });

        describe("textTransform", () => {
          test("should have uppercase", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule(
              "text-transform",
              "uppercase"
            );
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Corners: HTMLElement[];
  DashboardElementContainer: Element;
  DashboardElementDescription: Element;
  DashboardElementDescriptionText: Element;
  DashboardElementInnerContainer: Element;
  DashboardElementInnerSpacingContainer: Element;
  DashboardElementOuterSpacingContainer: Element;
  DashboardElementTitleText: Element;
  PositionContainer: Element;
}

type DashboardElementTestProps = Partial<DashboardElementProps>;

function setup(additionalProps?: DashboardElementTestProps): Setup {
  const props: DashboardElementProps = {
    children: <div>Child</div>,
    flex: "1 1 30%",
    title: "Tech Stack",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<DashboardElement {...props} />);

  const { queryAllByTestId }: RenderResult = utils;
  const Corners: HTMLElement[] = queryAllByTestId("Corner");
  const DashboardElementContainer: Element = queryAllByTestId(
    "DashboardElement"
  )[0];
  const DashboardElementDescription = queryAllByTestId(
    "DashboardElementDescriptionSpacingContainer"
  )[0];
  const DashboardElementDescriptionText = queryAllByTestId(
    "DashboardElementDescriptionText"
  )[0];
  const DashboardElementInnerContainer: Element = queryAllByTestId(
    "DashboardElementInnerContainer"
  )[0];
  const DashboardElementInnerSpacingContainer: Element = queryAllByTestId(
    "DashboardElementInnerSpacingContainer"
  )[0];
  const DashboardElementOuterSpacingContainer: Element = queryAllByTestId(
    "DashboardElementOuterSpacingContainer"
  )[0];
  const DashboardElementTitleText: Element = queryAllByTestId(
    "DashboardElementTitleText"
  )[0];
  const PositionContainer: Element = queryAllByTestId("PositionContainer")[0];

  return {
    ...utils,
    Corners,
    DashboardElementContainer,
    DashboardElementDescription,
    DashboardElementDescriptionText,
    DashboardElementInnerContainer,
    DashboardElementInnerSpacingContainer,
    DashboardElementOuterSpacingContainer,
    DashboardElementTitleText,
    PositionContainer
  };
}
