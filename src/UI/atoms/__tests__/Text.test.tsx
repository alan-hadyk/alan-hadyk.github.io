import React from "react";
import { RenderResult } from "@testing-library/react";

import Text, { TextProps } from "<atoms>/Text";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("atoms / Text", () => {
  test("should render children", () => {
    const { TextContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(TextContainer.textContent).toEqual("Custom children");
  });

  describe("Styles", () => {
    describe("font-size", () => {      
      test("should have correct value when passed via fontSize value in prop", () => {
        const { TextContainer } = setup({
          fontSize: "font20"
        });
  
        expect(TextContainer).toHaveStyleRule("font-size", "20px");
      });
    });

    describe("font-family", () => {      
      test("should have correct value when passed via fontFamily value in prop", () => {
        const { TextContainer } = setup({
          fontFamily: "Exan"
        });
  
        expect(TextContainer).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
      });
    });
  });
});

interface Setup extends RenderResult {
  TextContainer: Element;
}

type TextTestProps = Partial<TextProps>;

function setup(addedProps?: TextTestProps): Setup {
  const props: TextProps = {
    children: "Text",
    fontFamily: "Exan",
    fontSize: "font24",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <Text {...props}>
      {props.children}
    </Text> 
  );

  const { container } = utils || {};

  return {
    ...utils,
    TextContainer: container.children[0]
  };
}
