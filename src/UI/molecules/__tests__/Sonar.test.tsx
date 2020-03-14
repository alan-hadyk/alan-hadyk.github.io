import React from "react";
import {
  RenderResult
} from "@testing-library/react";

import Sonar from "<molecules>/Sonar";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / Sonar", () => {
  test("should render", () => {
    const { PositionContainer } = setup();

    expect(PositionContainer).toBeTruthy();
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

  describe("SonarContainer", () => {    
    describe("Styles", () => {
      describe("backface-visibility", () => {      
        test("should have hidden", () => {
          const { SonarContainer } = setup();
    
          expect(SonarContainer).toHaveStyleRule("backface-visibility", "hidden");
        });
      });

      describe("border", () => {      
        test("should have thin solid #526065", () => {
          const { SonarContainer } = setup();
    
          expect(SonarContainer).toHaveStyleRule("border", "thin solid #526065");
        });
      });

      describe("height", () => {      
        test("should have 100%", () => {
          const { SonarContainer } = setup();
    
          expect(SonarContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("overflow", () => {      
        test("should have hidden", () => {
          const { SonarContainer } = setup();
    
          expect(SonarContainer).toHaveStyleRule("overflow", "hidden");
        });
      });

      describe("width", () => {      
        test("should have 100%", () => {
          const { SonarContainer } = setup();
    
          expect(SonarContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("SonarDot", () => {    
    describe("Styles", () => {
      describe("backface-visibility", () => {      
        test("should have hidden", () => {
          const { SonarDot } = setup();
    
          expect(SonarDot).toHaveStyleRule("backface-visibility", "hidden");
        });
      });

      describe("background-color", () => {      
        test("should have #78b0b5", () => {
          const { SonarDot } = setup();
    
          expect(SonarDot).toHaveStyleRule("background-color", "#78b0b5");
        });
      });

      describe("border-radius", () => {      
        test("should have 50%", () => {
          const { SonarDot } = setup();
    
          expect(SonarDot).toHaveStyleRule("border-radius", "50%");
        });
      });

      describe("box-shadow", () => {      
        test("should have 0px 0px .8rem 0px #bcd8db", () => {
          const { SonarDot } = setup();
    
          expect(SonarDot).toHaveStyleRule("box-shadow", "0px 0px .8rem 0px #bcd8db");
        });
      });

      describe("height", () => {      
        test("should have .4rem", () => {
          const { SonarDot } = setup();
    
          expect(SonarDot).toHaveStyleRule("height", ".4rem");
        });
      });

      describe("left", () => {      
        test("should have 50%", () => {
          const { SonarDot } = setup();
    
          expect(SonarDot).toHaveStyleRule("left", "50%");
        });
      });

      describe("position", () => {      
        test("should have absolute", () => {
          const { SonarDot } = setup();
    
          expect(SonarDot).toHaveStyleRule("position", "absolute");
        });
      });

      describe("top", () => {      
        test("should have 50%", () => {
          const { SonarDot } = setup();
    
          expect(SonarDot).toHaveStyleRule("top", "50%");
        });
      });

      describe("transform", () => {      
        test("should have translateX(-37.5%) translateY(-37.5%)", () => {
          const { SonarDot } = setup();
    
          expect(SonarDot).toHaveStyleRule("transform", "translateX(-37.5%) translateY(-37.5%)");
        });
      });

      describe("width", () => {      
        test("should have .4rem", () => {
          const { SonarDot } = setup();
    
          expect(SonarDot).toHaveStyleRule("width", ".4rem");
        });
      });

      describe("&:after", () => {
        describe("animation-duration", () => {      
          test("should have 3600ms", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("animation-duration", "3600ms", {
              modifier: "&:after"
            });
          });
        });
        
        describe("animation-iteration-count", () => {      
          test("should have infinite", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("animation-iteration-count", "infinite", {
              modifier: "&:after"
            });
          });
        });

        describe("border-radius", () => {      
          test("should have 50%", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("border-radius", "50%", {
              modifier: "&:after"
            });
          });
        });

        describe("box-shadow", () => {      
          test("should have 0px 0px .8rem 0px #78b0b5", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("box-shadow", "0px 0px .8rem 0px #78b0b5", {
              modifier: "&:after"
            });
          });
        });

        describe("content", () => {      
          test("should have ''", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("content", "''", {
              modifier: "&:after"
            });
          });
        });

        describe("display", () => {      
          test("should have block", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("display", "block", {
              modifier: "&:after"
            });
          });
        });

        describe("height", () => {      
          test("should have 2.4rem", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("height", "2.4rem", {
              modifier: "&:after"
            });
          });
        });

        describe("opacity", () => {      
          test("should have 0", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("opacity", "0", {
              modifier: "&:after"
            });
          });
        });

        describe("position", () => {      
          test("should have absolute", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("position", "absolute", {
              modifier: "&:after"
            });
          });
        });

        describe("transform", () => {      
          test("should have translate(calc(-50% + .2rem),calc(-50% + .2rem))", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("transform", "translate(calc(-50% + .2rem),calc(-50% + .2rem))", {
              modifier: "&:after"
            });
          });
        });

        describe("width", () => {      
          test("should have 2.4rem", () => {
            const { SonarDot } = setup();
      
            expect(SonarDot).toHaveStyleRule("width", "2.4rem", {
              modifier: "&:after"
            });
          });
        });
      });
    });
  });

  describe("SonarVerticalLine", () => {    
    describe("Styles", () => {
      describe("animation-duration", () => {      
        test("should have 300ms", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("animation-duration", "300ms");
        });
      });

      describe("animation-iteration-count", () => {      
        test("should have infinite", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("animation-iteration-count", "infinite");
        });
      });

      describe("animation-timing-function", () => {      
        test("should have infinite", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("animation-timing-function", "linear");
        });
      });

      describe("backface-visibility", () => {      
        test("should have hidden", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("backface-visibility", "hidden");
        });
      });

      describe("background-image", () => {      
        test("should have linear-gradient(0deg,#78b0b5 50%,transparent 50%)", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("background-image", "linear-gradient(0deg,#78b0b5 50%,transparent 50%)");
        });
      });

      describe("background-repeat", () => {      
        test("should have repeat-y", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("background-repeat", "repeat-y");
        });
      });

      describe("background-size", () => {      
        test("should have .1rem 1.2rem", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("background-size", ".1rem 1.2rem");
        });
      });

      describe("bottom", () => {      
        test("should have 1px", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("bottom", "1px");
        });
      });

      describe("left", () => {      
        test("should have 50%", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("left", "50%");
        });
      });

      describe("position", () => {      
        test("should have absolute", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("position", "absolute");
        });
      });

      describe("top", () => {      
        test("should have 1px", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("top", "1px");
        });
      });

      describe("width", () => {      
        test("should have .2rem", () => {
          const { SonarVerticalLine } = setup();
    
          expect(SonarVerticalLine).toHaveStyleRule("width", ".2rem");
        });
      });
    });
  });

  describe("SonarHorizontalLine", () => {    
    describe("Styles", () => {
      describe("animation-duration", () => {      
        test("should have 300ms", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("animation-duration", "300ms");
        });
      });

      describe("animation-iteration-count", () => {      
        test("should have infinite", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("animation-iteration-count", "infinite");
        });
      });

      describe("animation-timing-function", () => {      
        test("should have infinite", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("animation-timing-function", "linear");
        });
      });

      describe("backface-visibility", () => {      
        test("should have hidden", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("backface-visibility", "hidden");
        });
      });

      describe("background-image", () => {      
        test("should have linear-gradient(90deg,#78b0b5 50%,transparent 50%)", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("background-image", "linear-gradient(90deg,#78b0b5 50%,transparent 50%)");
        });
      });

      describe("background-repeat", () => {      
        test("should have repeat-x", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("background-repeat", "repeat-x");
        });
      });

      describe("background-size", () => {      
        test("should have 1.2rem .1rem", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("background-size", "1.2rem .1rem");
        });
      });

      describe("height", () => {      
        test("should have .2rem", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("height", ".2rem");
        });
      });

      describe("left", () => {      
        test("should have 1px", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("left", "1px");
        });
      });

      describe("position", () => {      
        test("should have absolute", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("position", "absolute");
        });
      });

      describe("right", () => {      
        test("should have 1px", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("right", "1px");
        });
      });

      describe("top", () => {      
        test("should have 50%", () => {
          const { SonarHorizontallLine } = setup();
    
          expect(SonarHorizontallLine).toHaveStyleRule("top", "50%");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  PositionContainer: Element;
  SonarContainer: Element;
  SonarDot: Element;
  SonarHorizontallLine: Element;
  SonarVerticalLine: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Sonar />
  );

  const { container }: RenderResult = utils;
  const PositionContainer: Element = container.children[0];
  const SonarContainer: Element = PositionContainer.children[0];
  const SonarDot: Element = SonarContainer.children[0];
  const SonarVerticalLine: Element = SonarContainer.children[1];
  const SonarHorizontallLine: Element = SonarContainer.children[2];
  
  return {
    ...utils,
    PositionContainer,
    SonarContainer,
    SonarDot,
    SonarHorizontallLine,
    SonarVerticalLine
  };
}
