import { RenderResult } from "@testing-library/react";

import ButtonText from "UI/molecules/ButtonText";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ButtonTextProps } from "UI/molecules/__typings__/ButtonText";

describe("molecules / ButtonText", () => {
  test("should have correct structure", () => {
    const { Text, SpacingContainer } = setup();

    expect(SpacingContainer.children[0]).toEqual(Text);
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("marginRight", () => {
        test("should have 0 when hasMargin is false", () => {
          const { SpacingContainer } = setup({
            hasMargin: false
          });

          expect(SpacingContainer).toHaveStyleRule("margin-right", "0");
        });

        test("should have .8rem when hasMargin is true and size is small", () => {
          const { SpacingContainer } = setup({
            hasMargin: true,
            size: "small"
          });

          expect(SpacingContainer).toHaveStyleRule("margin-right", ".8rem");
        });

        test("should have 1.6rem when hasMargin is true and size is medium", () => {
          const { SpacingContainer } = setup({
            hasMargin: true,
            size: "medium"
          });

          expect(SpacingContainer).toHaveStyleRule("margin-right", "1.6rem");
        });

        test("should have 1.6rem when hasMargin is true and size is large", () => {
          const { SpacingContainer } = setup({
            hasMargin: true,
            size: "large"
          });

          expect(SpacingContainer).toHaveStyleRule("margin-right", "1.6rem");
        });
      });
    });
  });

  describe("Text", () => {
    test("should have correct content passed as buttonText", () => {
      const { Text } = setup({
        buttonText: "Button text"
      });

      expect(Text.textContent).toEqual("Button text");
    });

    describe("Props", () => {
      describe("color", () => {
        test("should have #fff", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("color", "#fff");
        });
      });

      describe("fontFamily", () => {
        test("should have ExanModifiedRegular,monospace passed via fontFamily prop", () => {
          const { Text } = setup({
            fontFamily: "Exan"
          });

          expect(Text).toHaveStyleRule(
            "font-family",
            "ExanModifiedRegular,monospace"
          );
        });

        test("should have AnonymousPro,monospace passed via fontFamily prop", () => {
          const { Text } = setup({
            fontFamily: "AnonymousPro"
          });

          expect(Text).toHaveStyleRule(
            "font-family",
            "'Anonymous Pro',monospace"
          );
        });
      });

      describe("fontSize", () => {
        test("should have 20px when size is small", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-size", "20px");
        });

        test("should have 24px when size is medium", () => {
          const { Text } = setup({
            size: "medium"
          });

          expect(Text).toHaveStyleRule("font-size", "24px");
        });

        test("should have 28px when size is large", () => {
          const { Text } = setup({
            size: "large"
          });

          expect(Text).toHaveStyleRule("font-size", "28px");
        });
      });

      describe("textTransform", () => {
        test("should have uppercase passed via textTransform prop", () => {
          const { Text } = setup({
            textTransform: "uppercase"
          });

          expect(Text).toHaveStyleRule("text-transform", "uppercase");
        });

        test("should have lowercase passed via fontFamily prop", () => {
          const { Text } = setup({
            textTransform: "lowercase"
          });

          expect(Text).toHaveStyleRule("text-transform", "lowercase");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  SpacingContainer: Element;
  Text: Element;
}

type ButtonTextTestProps = Partial<ButtonTextProps>;

function setup(additionalProps?: ButtonTextTestProps): Setup {
  const props: ButtonTextProps = {
    buttonText: "Text content",
    size: "small",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<ButtonText {...props} />);

  const { container }: RenderResult = utils;
  const SpacingContainer: Element = container.children[0];
  const Text: Element = SpacingContainer.children[0];

  return {
    ...utils,
    SpacingContainer,
    Text
  };
}
