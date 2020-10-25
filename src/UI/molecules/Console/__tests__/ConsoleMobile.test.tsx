import React from "react";
import { RenderResult } from "@testing-library/react";

import ConsoleMobile from "molecules/Console/ConsoleMobile";

import renderWithTheme from "helpers/tests/renderWithTheme";

describe("molecules / ConsoleMobile", () => {
  test("should have correct structure", () => {
    const { ConsoleMobileContainer, ConsoleText, SpacingContainer } = setup();

    expect(SpacingContainer.children[0]).toEqual(ConsoleMobileContainer);
    expect(ConsoleMobileContainer.children[0]).toEqual(ConsoleText);
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("paddingTop", () => {
        test("should have 4.8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", "4.8rem");
        });
      });
    });
  });

  describe("ConsoleMobileContainer", () => {
    describe("Styles", () => {
      describe("background-color", () => {
        test("should have rgba(30,34,36,0.75)", () => {
          const { ConsoleMobileContainer } = setup();

          expect(ConsoleMobileContainer).toHaveStyleRule(
            "background-color",
            "rgba(30,34,36,0.75)"
          );
        });
      });

      describe("border", () => {
        test("should have 1px solid #78b0b5", () => {
          const { ConsoleMobileContainer } = setup();

          expect(ConsoleMobileContainer).toHaveStyleRule(
            "border",
            "1px solid #78b0b5"
          );
        });
      });

      describe("box-shadow", () => {
        test("should have 0px 0px .8rem 0px #bcd8db", () => {
          const { ConsoleMobileContainer } = setup();

          expect(ConsoleMobileContainer).toHaveStyleRule(
            "box-shadow",
            "0px 0px .8rem 0px #bcd8db"
          );
        });
      });

      describe("padding", () => {
        test("should have 1.6rem", () => {
          const { ConsoleMobileContainer } = setup();

          expect(ConsoleMobileContainer).toHaveStyleRule("padding", "1.6rem");
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
        test("should have 32px", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("font-size", "32px");
        });
      });

      describe("height", () => {
        test("should have 2.4rem", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("height", "2.4rem", {
            modifier: "&::after"
          });
        });
      });

      describe("lineHeight", () => {
        test("should have 3.6rem", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("line-height", "3.6rem");
        });
      });

      describe("transform", () => {
        test("should have translateY(1px)", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("transform", "translateY(1px)", {
            modifier: "&::after"
          });
        });
      });

      describe("width", () => {
        test("should have 1.2rem", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("width", "1.2rem", {
            modifier: "&::after"
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ConsoleMobileContainer: Element;
  ConsoleText: Element;
  SpacingContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<ConsoleMobile />);

  const { queryAllByTestId }: RenderResult = utils;

  const ConsoleMobileContainer: Element = queryAllByTestId(
    "ConsoleMobileContainer"
  )[0];
  const ConsoleText: Element = queryAllByTestId("ConsoleMobileText")[0];
  const SpacingContainer: Element = queryAllByTestId(
    "ConsoleMobileSpacingContainer"
  )[0];

  return {
    ...utils,
    ConsoleMobileContainer,
    ConsoleText,
    SpacingContainer
  };
}
