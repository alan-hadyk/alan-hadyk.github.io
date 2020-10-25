import React from "react";
import { RenderResult } from "@testing-library/react";

import ConsoleText from "UI/atoms/ConsoleText";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ConsoleTextProps } from "UI/atoms/__typings__/ConsoleText";

describe("atoms / ConsoleText", () => {
  describe("Styles", () => {
    describe("color", () => {
      test("should have #fff", () => {
        const { ConsoleTextContainer } = setup();

        expect(ConsoleTextContainer).toHaveStyleRule("color", "#fff");
      });
    });

    describe("font-family", () => {
      test("should have ExanModifiedRegular,monospace", () => {
        const { ConsoleTextContainer } = setup();

        expect(ConsoleTextContainer).toHaveStyleRule(
          "font-family",
          "ExanModifiedRegular,monospace"
        );
      });
    });

    describe("font-size", () => {
      test("should have 6vh when passed via fontSize prop", () => {
        const { ConsoleTextContainer } = setup({
          fontSize: "6vh"
        });

        expect(ConsoleTextContainer).toHaveStyleRule("font-size", "6vh");
      });

      test("should have 32px when passed via fontSize prop", () => {
        const { ConsoleTextContainer } = setup({
          fontSize: "font32"
        });

        expect(ConsoleTextContainer).toHaveStyleRule("font-size", "32px");
      });
    });

    describe("line-height", () => {
      test("should have 7.4vh when passed via lineHeight prop", () => {
        const { ConsoleTextContainer } = setup({
          lineHeight: "7.4vh"
        });

        expect(ConsoleTextContainer).toHaveStyleRule("line-height", "7.4vh");
      });

      test("should have 3.0rem when passed via lineHeight prop", () => {
        const { ConsoleTextContainer } = setup({
          lineHeight: "spacing30"
        });

        expect(ConsoleTextContainer).toHaveStyleRule("line-height", "3.0rem");
      });
    });

    describe("text-align", () => {
      test("should have center", () => {
        const { ConsoleTextContainer } = setup();

        expect(ConsoleTextContainer).toHaveStyleRule("text-align", "center");
      });
    });

    describe("text-transform", () => {
      test("should have lowercase", () => {
        const { ConsoleTextContainer } = setup();

        expect(ConsoleTextContainer).toHaveStyleRule(
          "text-transform",
          "lowercase"
        );
      });
    });

    describe("&::after", () => {
      describe("animation-duration", () => {
        test("should have 900ms", () => {
          const { ConsoleTextContainer } = setup();

          expect(ConsoleTextContainer).toHaveStyleRule(
            "animation-duration",
            "900ms",
            {
              modifier: "&::after"
            }
          );
        });
      });

      describe("animation-iteration-count", () => {
        test("should have infinite", () => {
          const { ConsoleTextContainer } = setup();

          expect(ConsoleTextContainer).toHaveStyleRule(
            "animation-iteration-count",
            "infinite",
            {
              modifier: "&::after"
            }
          );
        });
      });

      describe("animation-timing-function", () => {
        test("should have ease-in-out", () => {
          const { ConsoleTextContainer } = setup();

          expect(ConsoleTextContainer).toHaveStyleRule(
            "animation-timing-function",
            "ease-in-out",
            {
              modifier: "&::after"
            }
          );
        });
      });

      describe("background-color", () => {
        test("should have #bcd8db", () => {
          const { ConsoleTextContainer } = setup();

          expect(ConsoleTextContainer).toHaveStyleRule(
            "background-color",
            "#bcd8db",
            {
              modifier: "&::after"
            }
          );
        });
      });

      describe("content", () => {
        test("should have ''", () => {
          const { ConsoleTextContainer } = setup();

          expect(ConsoleTextContainer).toHaveStyleRule("content", "\"\"", {
            modifier: "&::after"
          });
        });
      });

      describe("display", () => {
        test("should have inline-block", () => {
          const { ConsoleTextContainer } = setup();

          expect(ConsoleTextContainer).toHaveStyleRule(
            "display",
            "inline-block",
            {
              modifier: "&::after"
            }
          );
        });
      });

      describe("height", () => {
        test("should have 6vh when passed via height prop", () => {
          const { ConsoleTextContainer } = setup({
            height: "6vh"
          });

          expect(ConsoleTextContainer).toHaveStyleRule("height", "6vh", {
            modifier: "&::after"
          });
        });

        test("should have 3.0rem when passed via height prop", () => {
          const { ConsoleTextContainer } = setup({
            height: "spacing30"
          });

          expect(ConsoleTextContainer).toHaveStyleRule("height", "3.0rem", {
            modifier: "&::after"
          });
        });
      });

      describe("margin-left", () => {
        test("should have .8rem", () => {
          const { ConsoleTextContainer } = setup();

          expect(ConsoleTextContainer).toHaveStyleRule("margin-left", ".8rem", {
            modifier: "&::after"
          });
        });
      });

      describe("transform", () => {
        test("should have translateY(1vh) when passed via transform prop", () => {
          const { ConsoleTextContainer } = setup({
            transform: "translateY(1vh)"
          });

          expect(ConsoleTextContainer).toHaveStyleRule(
            "transform",
            "translateY(1vh)",
            {
              modifier: "&::after"
            }
          );
        });

        test("should have translateY(6px) when passed via transform prop", () => {
          const { ConsoleTextContainer } = setup({
            transform: "translateY(6px)"
          });

          expect(ConsoleTextContainer).toHaveStyleRule(
            "transform",
            "translateY(6px)",
            {
              modifier: "&::after"
            }
          );
        });
      });

      describe("width", () => {
        test("should have 3vh when passed via width prop", () => {
          const { ConsoleTextContainer } = setup({
            width: "3vh"
          });

          expect(ConsoleTextContainer).toHaveStyleRule("width", "3vh", {
            modifier: "&::after"
          });
        });

        test("should have 4rem when passed via width prop", () => {
          const { ConsoleTextContainer } = setup({
            width: "spacing40"
          });

          expect(ConsoleTextContainer).toHaveStyleRule("width", "4rem", {
            modifier: "&::after"
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ConsoleTextContainer: Element;
}

type ConsoleTextTestProps = Partial<ConsoleTextProps>;

function setup(additionalProps?: ConsoleTextTestProps): Setup {
  const props: ConsoleTextProps = {
    fontSize: "font32",
    height: "spacing36",
    lineHeight: "spacing36",
    transform: "translateY(5px)",
    width: "spacing12",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<ConsoleText {...props} />);

  const { queryByTestId } = utils || {};

  const ConsoleTextContainer: Element = queryByTestId("ConsoleText");

  return {
    ...utils,
    ConsoleTextContainer
  };
}
