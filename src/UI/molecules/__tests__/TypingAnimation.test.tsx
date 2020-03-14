import React from "react";
import {
  RenderResult
} from "@testing-library/react";

import TypingAnimation, { code } from "<molecules>/TypingAnimation";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / TypingAnimation", () => {
  test("should have correct structure", () => {
    const { 
      PositionContainer,
      TypingAnimationCode,
      TypingAnimationPre 
    } = setup();

    expect(PositionContainer.children[0]).toEqual(TypingAnimationPre);
    expect(TypingAnimationPre.children[0]).toEqual(TypingAnimationCode);
  });

  describe("PositionContainer", () => {    
    describe("Props", () => {
      describe("height", () => {      
        test("should have 100%", () => {
          const { PositionContainer } = setup();
    
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

  describe("TypingAnimationCode", () => {   
    test("should update code character by character in intervals (50ms)", () => {
      jest.useFakeTimers();

      const { TypingAnimationCode } = setup();

      expect(TypingAnimationCode.textContent).toEqual("");

      jest.advanceTimersByTime(50);

      expect(TypingAnimationCode.textContent).toEqual("i");

      jest.advanceTimersByTime(50);

      expect(TypingAnimationCode.textContent).toEqual("im");

      jest.advanceTimersByTime(50);

      expect(TypingAnimationCode.textContent).toEqual("imp");

      jest.advanceTimersByTime(50);

      expect(TypingAnimationCode.textContent).toEqual("impo");

      jest.advanceTimersByTime(50);

      expect(TypingAnimationCode.textContent).toEqual("impor");

      jest.advanceTimersByTime(50);

      expect(TypingAnimationCode.textContent).toEqual("import");

      jest.advanceTimersByTime(5000);

      expect(TypingAnimationCode.textContent).toEqual(`import { useLayoutEffect } from "react";

import {
  IntersectionObserverWithPolyfill,
  UseIntersectionOb`);

      jest.clearAllTimers();
    });
    
    test("should clear code after typing the whole text", () => {
      jest.useFakeTimers();

      const { TypingAnimationCode } = setup();

      expect(TypingAnimationCode.textContent).toEqual("");

      jest.advanceTimersByTime(code.length * 50 + 105);

      expect(TypingAnimationCode.textContent).toEqual("");

      jest.advanceTimersByTime(50);

      expect(TypingAnimationCode.textContent).toEqual("i");

      jest.clearAllTimers();
    });
    
    describe("Styles", () => {
      describe("bottom", () => {      
        test("should have 0", () => {
          const { TypingAnimationCode } = setup();
    
          expect(TypingAnimationCode).toHaveStyleRule("bottom", "0");
        });
      });

      describe("color", () => {      
        test("should have #78b0b5", () => {
          const { TypingAnimationCode } = setup();
    
          expect(TypingAnimationCode).toHaveStyleRule("color", "#78b0b5");
        });
      });

      describe("font-family", () => {      
        test("should have 'Anonymous Pro',monospace", () => {
          const { TypingAnimationCode } = setup();
    
          expect(TypingAnimationCode).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
        });
      });

      describe("font-size", () => {      
        test("should have 8px", () => {
          const { TypingAnimationCode } = setup();
    
          expect(TypingAnimationCode).toHaveStyleRule("font-size", "8px");
        });
      });

      describe("left", () => {      
        test("should have 0", () => {
          const { TypingAnimationCode } = setup();
    
          expect(TypingAnimationCode).toHaveStyleRule("left", "0");
        });
      });

      describe("line-height", () => {      
        test("should have 1.2rem", () => {
          const { TypingAnimationCode } = setup();
    
          expect(TypingAnimationCode).toHaveStyleRule("line-height", "1.2rem");
        });
      });

      describe("min-height", () => {      
        test("should have 100%", () => {
          const { TypingAnimationCode } = setup();
    
          expect(TypingAnimationCode).toHaveStyleRule("min-height", "100%");
        });
      });

      describe("position", () => {      
        test("should have absolute", () => {
          const { TypingAnimationCode } = setup();
    
          expect(TypingAnimationCode).toHaveStyleRule("position", "absolute");
        });
      });

      describe("right", () => {      
        test("should have 0", () => {
          const { TypingAnimationCode } = setup();
    
          expect(TypingAnimationCode).toHaveStyleRule("right", "0");
        });
      });

      describe("&::after", () => {
        describe("animation", () => {      
          test("should have ixKGuY infinite 300ms ease-in-out", () => {
            const { TypingAnimationCode } = setup();
      
            expect(TypingAnimationCode).toHaveStyleRule("animation", "ixKGuY infinite 300ms ease-in-out", {
              modifier: "::after"
            });
          });
        });
  
        describe("background-color", () => {      
          test("should have #bcd8db", () => {
            const { TypingAnimationCode } = setup();
      
            expect(TypingAnimationCode).toHaveStyleRule("background-color", "#bcd8db", {
              modifier: "::after"
            });
          });
        });
  
        describe("content", () => {      
          test("should have ''", () => {
            const { TypingAnimationCode } = setup();
      
            expect(TypingAnimationCode).toHaveStyleRule("content", "''", {
              modifier: "::after"
            });
          });
        });
  
        describe("display", () => {      
          test("should have inline-block", () => {
            const { TypingAnimationCode } = setup();
      
            expect(TypingAnimationCode).toHaveStyleRule("display", "inline-block", {
              modifier: "::after"
            });
          });
        });
  
        describe("height", () => {      
          test("should have .8rem", () => {
            const { TypingAnimationCode } = setup();
      
            expect(TypingAnimationCode).toHaveStyleRule("height", ".8rem", {
              modifier: "::after"
            });
          });
        });
  
        describe("margin-left", () => {      
          test("should have .4rem", () => {
            const { TypingAnimationCode } = setup();
      
            expect(TypingAnimationCode).toHaveStyleRule("margin-left", ".4rem", {
              modifier: "::after"
            });
          });
        });
  
        describe("transform", () => {      
          test("should have translateY(1px)", () => {
            const { TypingAnimationCode } = setup();
      
            expect(TypingAnimationCode).toHaveStyleRule("transform", "translateY(1px)", {
              modifier: "::after"
            });
          });
        });
  
        describe("width", () => {      
          test("should have .4rem", () => {
            const { TypingAnimationCode } = setup();
      
            expect(TypingAnimationCode).toHaveStyleRule("width", ".4rem", {
              modifier: "::after"
            });
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  PositionContainer: Element;
  TypingAnimationCode: Element;
  TypingAnimationPre: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <TypingAnimation />
  );

  const { queryByTestId }: RenderResult = utils;
  const PositionContainer: Element = queryByTestId("PositionContainer");
  const TypingAnimationPre: Element = queryByTestId("TypingAnimationPre");
  const TypingAnimationCode: Element = queryByTestId("TypingAnimationCode");
  
  return {
    ...utils,
    PositionContainer,
    TypingAnimationCode,
    TypingAnimationPre
  };
}
