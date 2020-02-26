import React from "react";
import {
  act,
  fireEvent,
  RenderResult
} from "@testing-library/react";
import ShuffleText from "shuffle-text";

import Text from "<atoms>/Text";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { TextProps } from "<atoms>/__typings__/Text";

describe("atoms / Text", () => {
  test("should render children", () => {
    const { TextContainer } = setup({
      children: "Custom children"
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

  describe("Event handlers", () => {
    test("should fire shuffleText.start onMouseOver if shouldShuffleOnHover: true ", () => {
      jest.spyOn(ShuffleText.prototype, "start");

      const { TextContainer } = setup({
        shouldShuffleOnHover: true
      });

      act(() => {
        fireEvent.mouseOver(TextContainer);
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalled();
    });

    test("should not fire shuffleText.start onMouseOver if shouldShuffleOnHover: false ", () => {
      jest.spyOn(ShuffleText.prototype, "start");

      const { TextContainer } = setup({
        shouldShuffleOnHover: false
      });

      act(() => {
        fireEvent.mouseOver(TextContainer);
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
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
