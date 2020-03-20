import React from "react";
import {
  act,
  fireEvent,
  RenderResult
} from "@testing-library/react";
import ShuffleText from "shuffle-text";

import Text from "<atoms>/Text";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { TextProps } from "<atoms>/__typings__/Text.d.ts";

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
    
    describe("padding-bottom", () => {      
      test("should have 0 by default", () => {
        const { TextContainer } = setup();
      
        expect(TextContainer).toHaveStyleRule("padding-bottom", "0");
      });
    
      test("should have correct value when passed via paddingBottom prop - spacing", () => {
        const { TextContainer } = setup({
          paddingBottom: "spacing24"
        });
      
        expect(TextContainer).toHaveStyleRule("padding-bottom", "2.4rem");
      });
    });
    
    describe("padding-left", () => {      
      test("should have 0 by default", () => {
        const { TextContainer } = setup();
      
        expect(TextContainer).toHaveStyleRule("padding-left", "0");
      });
    
      test("should have correct value when passed via paddingLeft prop - spacing", () => {
        const { TextContainer } = setup({
          paddingLeft: "spacing24"
        });
      
        expect(TextContainer).toHaveStyleRule("padding-left", "2.4rem");
      });
    });
    
    describe("padding-right", () => {      
      test("should have 0 by default", () => {
        const { TextContainer } = setup();
      
        expect(TextContainer).toHaveStyleRule("padding-right", "0");
      });
    
      test("should have correct value when passed via paddingRight prop - spacing", () => {
        const { TextContainer } = setup({
          paddingRight: "spacing24"
        });
      
        expect(TextContainer).toHaveStyleRule("padding-right", "2.4rem");
      });
    });
    
    describe("padding-top", () => {      
      test("should have 0 by default", () => {
        const { TextContainer } = setup();
      
        expect(TextContainer).toHaveStyleRule("padding-top", "0");
      });
    
      test("should have correct value when passed via paddingTop prop - spacing", () => {
        const { TextContainer } = setup({
          paddingTop: "spacing24"
        });
      
        expect(TextContainer).toHaveStyleRule("padding-top", "2.4rem");
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
      jest.useFakeTimers();

      const { TextContainer } = setup({
        shouldShuffleOnHover: true
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      act(() => {
        fireEvent.mouseOver(TextContainer);
      });

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalled();
    });

    test("should fire shuffleText.start onMouseOver with given delay (shuffleDelay) ", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      const { TextContainer } = setup({
        shouldShuffleOnHover: true,
        shuffleDelay: 300
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      act(() => {
        fireEvent.mouseOver(TextContainer);
      });

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(290);

      expect(ShuffleText.prototype.start).toHaveBeenCalled();
    });

    test("should not fire shuffleText.start onMouseOver if shouldShuffleOnHover: false ", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      const { TextContainer } = setup({
        shouldShuffleOnHover: false
      });

      act(() => {
        fireEvent.mouseOver(TextContainer);
      });

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    });

    test("should fire shuffleText.start in intervals if shouldShuffle: true (3600ms by default)", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      setup({
        shouldShuffle: true
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(3600);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(3600);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);

      jest.clearAllTimers();
    });

    test("should fire shuffleText.start in intervals if shouldShuffle: true with custom delay (shuffleDelay)", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      setup({
        shouldShuffle: true,
        shuffleDelay: 150,
        shuffleInterval: 300
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(150);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(300);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(150);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(300);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);

      jest.clearAllTimers();
    });

    test("should fire shuffleText.start in intervals if shouldShuffle: true (custom shuffleInterval value)", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      setup({
        shouldShuffle: true,
        shuffleInterval: 150
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(150);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(150);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);

      jest.advanceTimersByTime(150);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);

      jest.clearAllTimers();
    });

    test("should not fire shuffleText.start in intervals if shouldShuffle: false ", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      setup({
        shouldShuffle: false
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(7200);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.clearAllTimers();
    });
  });
});

interface Setup extends RenderResult {
  TextContainer: Element;
}

type TextTestProps = Partial<TextProps>;

export function setup(addedProps?: TextTestProps): Setup {
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
