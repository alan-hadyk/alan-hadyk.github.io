import { RenderResult } from "@testing-library/react";

import ConsoleTvDesktopAndTablet from "UI/molecules/Console/ConsoleTvDesktopAndTablet";

import renderWithTheme from "helpers/tests/renderWithTheme";

import isIE11 from "helpers/browser/isIE11";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("molecules / ConsoleTvDesktopAndTablet", () => {
  test("should have correct structure", () => {
    const {
      ConsoleText,
      ConsoleTvDesktopAndTabletContainer,
      ConsoleTvDesktopAndTabletOuterPositionContainer,
      ConsoleTvDesktopAndTabletInnerPositionContainer,
      Text
    } = setup();

    expect(ConsoleTvDesktopAndTabletOuterPositionContainer.children[0]).toEqual(
      ConsoleTvDesktopAndTabletContainer
    );
    expect(ConsoleTvDesktopAndTabletContainer.children[0]).toEqual(
      ConsoleTvDesktopAndTabletInnerPositionContainer
    );
    expect(ConsoleTvDesktopAndTabletContainer.children[1]).toEqual(ConsoleText);
    expect(ConsoleTvDesktopAndTabletInnerPositionContainer.children[0]).toEqual(
      Text
    );
  });

  describe("ConsoleTvDesktopAndTabletOuterPositionContainer", () => {
    describe("Props", () => {
      describe("left", () => {
        test("should have 0", () => {
          const { ConsoleTvDesktopAndTabletOuterPositionContainer } = setup();

          expect(
            ConsoleTvDesktopAndTabletOuterPositionContainer
          ).toHaveStyleRule("left", "0");
        });
      });

      describe("position", () => {
        test("should have absolute", () => {
          const { ConsoleTvDesktopAndTabletOuterPositionContainer } = setup();

          expect(
            ConsoleTvDesktopAndTabletOuterPositionContainer
          ).toHaveStyleRule("position", "absolute");
        });
      });

      describe("right", () => {
        test("should have 0", () => {
          const { ConsoleTvDesktopAndTabletOuterPositionContainer } = setup();

          expect(
            ConsoleTvDesktopAndTabletOuterPositionContainer
          ).toHaveStyleRule("right", "0");
        });
      });

      describe("top", () => {
        test("should have 50%", () => {
          const { ConsoleTvDesktopAndTabletOuterPositionContainer } = setup();

          expect(
            ConsoleTvDesktopAndTabletOuterPositionContainer
          ).toHaveStyleRule("top", "50%");
        });
      });

      describe("transform", () => {
        test("should have translateY(-50%)", () => {
          const { ConsoleTvDesktopAndTabletOuterPositionContainer } = setup();

          expect(
            ConsoleTvDesktopAndTabletOuterPositionContainer
          ).toHaveStyleRule("transform", "translateY(-50%)");
        });
      });

      describe("z-index", () => {
        test("should have 300", () => {
          const { ConsoleTvDesktopAndTabletOuterPositionContainer } = setup();

          expect(
            ConsoleTvDesktopAndTabletOuterPositionContainer
          ).toHaveStyleRule("z-index", "300");
        });
      });
    });
  });

  describe("ConsoleTvDesktopAndTabletContainer", () => {
    describe("Styles", () => {
      describe("align-items", () => {
        test("should have center", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "align-items",
            "center"
          );
        });
      });

      describe("background-color", () => {
        test("should have rgba(30,34,36,0.75)", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "background-color",
            "rgba(30,34,36,0.75)"
          );
        });
      });

      describe("border", () => {
        test("should have 1px solid #78b0b5", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "border",
            "1px solid #78b0b5"
          );
        });
      });

      describe("box-shadow", () => {
        test("should have 0px 0px .8rem 0px #bcd8db", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "box-shadow",
            "0px 0px .8rem 0px #bcd8db"
          );
        });
      });

      describe("display", () => {
        test("should have flex", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "display",
            "flex"
          );
        });
      });

      describe("height", () => {
        test("should have 26.6%", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "height",
            "26.6%"
          );
        });
      });

      describe("justify-content", () => {
        test("should have center", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "justify-content",
            "center"
          );
        });
      });

      describe("min-height", () => {
        test("should have 26.6vh", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "min-height",
            "26.6vh"
          );
        });
      });

      describe("padding", () => {
        test("should have 1.11vh 0.62vw", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "padding",
            "1.11vh 0.62vw"
          );
        });
      });

      describe("position", () => {
        test("should have relative", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "position",
            "relative"
          );
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { ConsoleTvDesktopAndTabletContainer } = setup();

          expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
            "width",
            "100%"
          );
        });
      });

      describe("&:after", () => {
        describe("content", () => {
          test("should have ''", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => true);

            const { ConsoleTvDesktopAndTabletContainer } = setup();

            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
              "content",
              "\"\"",
              {
                media: "(-ms-high-contrast: none)",
                modifier: "&::after"
              }
            );

            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
              "content",
              "\"\"",
              {
                media: "(-ms-high-contrast: active)",
                modifier: "&::after"
              }
            );
          });
        });

        describe("font-size", () => {
          test("should have 0", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => true);

            const { ConsoleTvDesktopAndTabletContainer } = setup();

            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
              "font-size",
              "0",
              {
                media: "(-ms-high-contrast: none)",
                modifier: "&::after"
              }
            );

            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
              "font-size",
              "0",
              {
                media: "(-ms-high-contrast: active)",
                modifier: "&::after"
              }
            );
          });
        });

        describe("min-height", () => {
          test("should have inherit", () => {
            const mockisIE11 = (isIE11 as unknown) as jest.Mock;
            mockisIE11.mockImplementation(() => true);

            const { ConsoleTvDesktopAndTabletContainer } = setup();

            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
              "min-height",
              "inherit",
              {
                media: "(-ms-high-contrast: none)",
                modifier: "&::after"
              }
            );

            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule(
              "min-height",
              "inherit",
              {
                media: "(-ms-high-contrast: active)",
                modifier: "&::after"
              }
            );
          });
        });
      });
    });
  });

  describe("ConsoleTvDesktopAndTabletInnerPositionContainer", () => {
    describe("Props", () => {
      describe("left", () => {
        test("should have 0", () => {
          const { ConsoleTvDesktopAndTabletInnerPositionContainer } = setup();

          expect(
            ConsoleTvDesktopAndTabletInnerPositionContainer
          ).toHaveStyleRule("left", "0");
        });
      });

      describe("position", () => {
        test("should have absolute", () => {
          const { ConsoleTvDesktopAndTabletInnerPositionContainer } = setup();

          expect(
            ConsoleTvDesktopAndTabletInnerPositionContainer
          ).toHaveStyleRule("position", "absolute");
        });
      });

      describe("top", () => {
        test("should have 0", () => {
          const { ConsoleTvDesktopAndTabletInnerPositionContainer } = setup();

          expect(
            ConsoleTvDesktopAndTabletInnerPositionContainer
          ).toHaveStyleRule("top", "0");
        });
      });

      describe("transform", () => {
        test("should have translateY(-100%)", () => {
          const { ConsoleTvDesktopAndTabletInnerPositionContainer } = setup();

          expect(
            ConsoleTvDesktopAndTabletInnerPositionContainer
          ).toHaveStyleRule("transform", "translateY(-100%)");
        });
      });
    });
  });

  describe("Text", () => {
    test("should render correct content - GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)", () => {
      const { Text } = setup();

      expect(Text.textContent).toEqual(
        "GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)"
      );
    });

    describe("Props", () => {
      describe("fontSize", () => {
        test("should have 12px", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-size", "12px");
        });
      });

      describe("lineHeight", () => {
        test("should have 2.8rem", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("line-height", "2.8rem");
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

  describe("ConsoleText", () => {
    test("should have correct textContent", () => {
      const { ConsoleText } = setup();

      expect(ConsoleText.textContent).toEqual(
        "Vision driven change agent with career-long record of front-end user strategy and UI development"
      );
    });

    describe("Props", () => {
      describe("fontSize", () => {
        test("should have 6vh", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("font-size", "6vh");
        });
      });

      describe("height", () => {
        test("should have 6vh", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("height", "6vh", {
            modifier: "&::after"
          });
        });
      });

      describe("lineHeight", () => {
        test("should have 7.4vh", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("line-height", "7.4vh");
        });
      });

      describe("transform", () => {
        test("should have translateY(1vh)", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("transform", "translateY(1vh)", {
            modifier: "&::after"
          });
        });
      });

      describe("width", () => {
        test("should have 3vh", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("width", "3vh", {
            modifier: "&::after"
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ConsoleText: Element;
  ConsoleTvDesktopAndTabletContainer: Element;
  ConsoleTvDesktopAndTabletInnerPositionContainer: Element;
  ConsoleTvDesktopAndTabletOuterPositionContainer: Element;
  Text: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<ConsoleTvDesktopAndTablet />);

  const { queryAllByTestId }: RenderResult = utils;

  const ConsoleText: Element = queryAllByTestId(
    "ConsoleTvDesktopAndTabletText"
  )[0];
  const ConsoleTvDesktopAndTabletContainer: Element = queryAllByTestId(
    "ConsoleTvDesktopAndTabletContainer"
  )[0];
  const ConsoleTvDesktopAndTabletInnerPositionContainer: Element = queryAllByTestId(
    "ConsoleTvDesktopAndTabletInnerPositionContainer"
  )[0];
  const ConsoleTvDesktopAndTabletOuterPositionContainer: Element = queryAllByTestId(
    "ConsoleTvDesktopAndTabletOuterPositionContainer"
  )[0];
  const Text: Element = queryAllByTestId("Text")[0];

  return {
    ...utils,
    ConsoleText,
    ConsoleTvDesktopAndTabletContainer,
    ConsoleTvDesktopAndTabletInnerPositionContainer,
    ConsoleTvDesktopAndTabletOuterPositionContainer,
    Text
  };
}
