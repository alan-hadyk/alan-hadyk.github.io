import React from "react";
import {
  RenderResult
} from "@testing-library/react";

import Text from "<atoms>/Text";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { TextProps } from "<atoms>/__typings__/Text.d.ts";

jest.mock("<hooks>/useShuffleText");

import useShuffleText from "<hooks>/useShuffleText";

describe("atoms / Text", () => {
  describe("should fire useShuffleText", () => {  
    let spyUseShuffleText: jest.Mock<unknown, unknown[]>;

    beforeEach(() => {
      spyUseShuffleText = jest.fn();
      const mockUseShuffleText: jest.Mock<unknown, unknown[]> = useShuffleText as jest.Mock;
  
      mockUseShuffleText.mockImplementation(spyUseShuffleText);
    });

    test("with default attributes", () => {
      setup();
  
      const mockCall = spyUseShuffleText.mock.calls[0][0];
  
      expect(typeof mockCall["onShuffleReady"]).toEqual("function");
      expect(mockCall["ref"].current.getAttribute("color")).toEqual("blue300");
      expect(mockCall["ref"].current.getAttribute("data-testid")).toEqual("Text");
      expect(mockCall["ref"].current.getAttribute("font-family")).toEqual("AnonymousPro");
      expect(mockCall["ref"].current.getAttribute("font-size")).toEqual("font20");
      expect(mockCall["shouldInitialize"]).toEqual(false);
      expect(mockCall["shuffleState"]).toEqual(undefined);
      expect(mockCall["text"]).toEqual("Text");
    });

    test("shouldShuffle: true, shouldShuffleOnHover: false", () => {
      setup({
        shouldShuffle: true,
        shouldShuffleOnHover: false
      });
  
      const mockCall = spyUseShuffleText.mock.calls[0][0];
  
      expect(mockCall["shouldInitialize"]).toEqual(true);
    });

    test("shouldShuffle: false, shouldShuffleOnHover: true", () => {
      setup({
        shouldShuffle: false,
        shouldShuffleOnHover: true
      });
  
      const mockCall = spyUseShuffleText.mock.calls[0][0];
  
      expect(mockCall["shouldInitialize"]).toEqual(true);
    });

    test("shouldShuffle: true, shouldShuffleOnHover: true", () => {
      const spyUseShuffleText = jest.fn();
      const mockUseShuffleText: jest.Mock<unknown, unknown[]> = useShuffleText as jest.Mock;
  
      mockUseShuffleText.mockImplementation(spyUseShuffleText);
  
      setup({
        shouldShuffle: true,
        shouldShuffleOnHover: true
      });
  
      const mockCall: string = spyUseShuffleText.mock.calls[0][0];
  
      expect(mockCall["shouldInitialize"]).toEqual(true);
    });

    test("with custom color", () => {
      setup({
        color: "blue100"
      });
  
      const mockCall = spyUseShuffleText.mock.calls[0][0];
  
      expect(mockCall["ref"].current.getAttribute("color")).toEqual("blue100");
    });

    test("with custom font-family", () => {
      setup({
        fontFamily: "Exan"
      });
  
      const mockCall = spyUseShuffleText.mock.calls[0][0];
  
      expect(mockCall["ref"].current.getAttribute("font-family")).toEqual("Exan");
    });

    test("with custom font-size", () => {
      setup({
        fontSize: "font24"
      });
  
      const mockCall = spyUseShuffleText.mock.calls[0][0];
  
      expect(mockCall["ref"].current.getAttribute("font-size")).toEqual("font24");
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
