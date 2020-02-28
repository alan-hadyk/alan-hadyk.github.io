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
    describe("color", () => {      
      test("should have blue300 by default", () => {
        const { TextContainer } = setup();
  
        expect(TextContainer).toHaveStyleRule("color", "#78b0b5");
      });

      test("should have correct color when passed via color prop", () => {
        const { TextContainer } = setup({
          color: "blue500"
        });
  
        expect(TextContainer).toHaveStyleRule("color", "#2b595e");
      });
    });
    
    describe("font-family", () => {      
      test("should have AnonymousPro by default", () => {
        const { TextContainer } = setup();
      
        expect(TextContainer).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      });
    
      test("should have correct value when passed via fontFamily value in prop", () => {
        const { TextContainer } = setup({
          fontFamily: "Exan"
        });
      
        expect(TextContainer).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
      });
    });
    
    describe("font-size", () => {      
      test("should have 20px by default", () => {
        const { TextContainer } = setup();
      
        expect(TextContainer).toHaveStyleRule("font-size", "20px");
      });
    
      test("should have correct value when passed via fontSize value in prop", () => {
        const { TextContainer } = setup({
          fontSize: "font72"
        });
      
        expect(TextContainer).toHaveStyleRule("font-size", "72px");
      });
    });
    
    describe("line-height", () => {      
      test("should have 1 by default", () => {
        const { TextContainer } = setup();
      
        expect(TextContainer).toHaveStyleRule("line-height", "1");
      });
    
      test("should have correct value when passed via lineHeight prop - spacing", () => {
        const { TextContainer } = setup({
          lineHeight: "spacing24"
        });
      
        expect(TextContainer).toHaveStyleRule("line-height", "2.4rem");
      });
    });
    
    describe("text-align", () => {      
      test("should have left by default", () => {
        const { TextContainer } = setup();
      
        expect(TextContainer).toHaveStyleRule("text-align", "left");
      });
    
      test("should have center when passed via textAlign prop", () => {
        const { TextContainer } = setup({
          textAlign: "center"
        });
      
        expect(TextContainer).toHaveStyleRule("text-align", "center");
      });
    
      test("should have right when passed via textAlign prop", () => {
        const { TextContainer } = setup({
          textAlign: "right"
        });
      
        expect(TextContainer).toHaveStyleRule("text-align", "right");
      });
    });
    
    describe("text-transform", () => {      
      test("should have none by default", () => {
        const { TextContainer } = setup();
      
        expect(TextContainer).toHaveStyleRule("text-transform", "none");
      });
    
      test("should have lowercase when passed via textTransform prop", () => {
        const { TextContainer } = setup({
          textTransform: "lowercase"
        });
      
        expect(TextContainer).toHaveStyleRule("text-transform", "lowercase");
      });
    
      test("should have uppercase when passed via textTransform prop", () => {
        const { TextContainer } = setup({
          textTransform: "uppercase"
        });
      
        expect(TextContainer).toHaveStyleRule("text-transform", "uppercase");
      });
    
      test("should have capitalize when passed via textTransform prop", () => {
        const { TextContainer } = setup({
          textTransform: "capitalize"
        });
      
        expect(TextContainer).toHaveStyleRule("text-transform", "capitalize");
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
