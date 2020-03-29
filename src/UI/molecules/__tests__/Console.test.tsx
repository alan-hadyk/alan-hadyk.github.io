import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import Console, { hero } from "<molecules>/Console";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / Console", () => {
  test("should have correct structure", () => {
    const { 
      ConsoleContainer,
      ConsoleText,
      InnerPositionContainer,
      OuterPositionContainer,
      Text
    } = setup();

    expect(OuterPositionContainer.children[0]).toEqual(ConsoleContainer);
    expect(ConsoleContainer.children[0]).toEqual(InnerPositionContainer);
    expect(InnerPositionContainer.children[0]).toEqual(Text);
    expect(ConsoleContainer.children[1]).toEqual(ConsoleText);
  });

  describe("OuterPositionContainer", () => {
    describe("Props", () => {
      describe("left", () => {
        test("should have 0", () => {
          const { OuterPositionContainer } = setup();

          expect(OuterPositionContainer).toHaveStyleRule("left", "0");
        });
      });
       
      describe("position", () => {
        test("should have absolute", () => {
          const { OuterPositionContainer } = setup();

          expect(OuterPositionContainer).toHaveStyleRule("position", "absolute");
        });
      });
     
      describe("right", () => {
        test("should have 0", () => {
          const { OuterPositionContainer } = setup();

          expect(OuterPositionContainer).toHaveStyleRule("right", "0");
        });
      });
     
      describe("top", () => {
        test("should have 50%", () => {
          const { OuterPositionContainer } = setup();

          expect(OuterPositionContainer).toHaveStyleRule("top", "50%");
        });
      });
      
      describe("transform", () => {
        test("should have translateY(-50%)", () => {
          const { OuterPositionContainer } = setup();

          expect(OuterPositionContainer).toHaveStyleRule("transform", "translateY(-50%)");
        });
      });
    });
  });

  describe("Console.Container", () => {
    describe("Styles", () => {
      describe("align-items", () => {
        test("should have center", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("align-items", "center");
        });
      });
      
      describe("background-color", () => {
        test("should have rgba(30,34,36,0.75)", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("background-color", "rgba(30,34,36,0.75)");
        });
      });
      
      describe("border", () => {
        test("should have 1px solid #78b0b5", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("border", "1px solid #78b0b5");
        });
      });
      
      describe("box-shadow", () => {
        test("should have 0px 0px .8rem 0px #bcd8db", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("box-shadow", "0px 0px .8rem 0px #bcd8db");
        });
      });
      
      describe("display", () => {
        test("should have flex", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("display", "flex");
        });
      });
      
      describe("height", () => {
        test("should have 26.6%", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("height", "26.6%");
        });
      });
      
      describe("justify-content", () => {
        test("should have center", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("justify-content", "center");
        });
      });
      
      describe("min-height", () => {
        test("should have 26.6vh", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("min-height", "26.6vh");
        });
      });
      
      describe("padding", () => {
        test("should have 1.11vh 0.62vw", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("padding", "1.11vh 0.62vw");
        });
      });
      
      describe("position", () => {
        test("should have relative", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("position", "relative");
        });
      });
      
      describe("width", () => {
        test("should have 100%", () => {
          const { ConsoleContainer } = setup();

          expect(ConsoleContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("InnerPositionContainer", () => {
    describe("Props", () => {
      describe("left", () => {
        test("should have 0", () => {
          const { InnerPositionContainer } = setup();

          expect(InnerPositionContainer).toHaveStyleRule("left", "0");
        });
      });
       
      describe("position", () => {
        test("should have absolute", () => {
          const { InnerPositionContainer } = setup();

          expect(InnerPositionContainer).toHaveStyleRule("position", "absolute");
        });
      });
     
      describe("top", () => {
        test("should have 0", () => {
          const { InnerPositionContainer } = setup();

          expect(InnerPositionContainer).toHaveStyleRule("top", "0");
        });
      });
      
      describe("transform", () => {
        test("should have translateY(-100%)", () => {
          const { InnerPositionContainer } = setup();

          expect(InnerPositionContainer).toHaveStyleRule("transform", "translateY(-100%)");
        });
      });
    });
  });

  describe("Text", () => {
    test("should render textContent - GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)", () => {
      const { Text } = setup();

      expect(Text.textContent).toEqual("GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)");
    });

    test("should trigger shuffleText.start in intervals (3600ms) with a delay of 2400ms", () => {
      jest.useFakeTimers();
      jest.spyOn(ShuffleText.prototype, "start");

      setup();

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(2400);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(3600);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(2400);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(3600);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);

      jest.advanceTimersByTime(2400);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);

      jest.advanceTimersByTime(3600);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(4);

      jest.advanceTimersByTime(2400);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(5);

      jest.clearAllTimers();
    });

    describe("Props", () => {
      describe("fontSize", () => {
        test("should have 12px", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-size", "12px");
        });
      });
       
      describe("lineHeight", () => {
        test("should have 2.8rem", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("line-height", "2.8rem");
        });
      });
     
      describe("textTransform", () => {
        test("should have uppercase", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("text-transform", "uppercase");
        });
      });
    });
  });

  describe("Console.Text", () => {
    test("should update text character by character in intervals (75ms)", () => {
      jest.useFakeTimers();

      const { ConsoleText } = setup();

      expect(ConsoleText.textContent).toEqual("");

      jest.advanceTimersByTime(75);
      
      expect(ConsoleText.textContent).toEqual("V");

      jest.advanceTimersByTime(75);
      
      expect(ConsoleText.textContent).toEqual("Vi");

      jest.advanceTimersByTime(75);
      
      expect(ConsoleText.textContent).toEqual("Vis");

      jest.advanceTimersByTime(75);
      
      expect(ConsoleText.textContent).toEqual("Visi");

      jest.advanceTimersByTime(75);
      
      expect(ConsoleText.textContent).toEqual("Visio");

      jest.advanceTimersByTime(75);
      
      expect(ConsoleText.textContent).toEqual("Vision");

      jest.advanceTimersByTime(75);
      
      expect(ConsoleText.textContent).toEqual("Vision ");

      jest.advanceTimersByTime(75);
      
      expect(ConsoleText.textContent).toEqual("Vision d");

      jest.advanceTimersByTime(75 * hero.length);
      
      expect(ConsoleText.textContent).toEqual("Vision driven change agent with career-long record of front-end user strategy and UI development");

      jest.clearAllTimers();
    });

    describe("Styles", () => {
      describe("color", () => {
        test("should have #fff", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("color", "#fff");
        });
      });
      
      describe("font-family", () => {
        test("should have ExanModifiedRegular,monospace", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
        });
      });
      
      describe("font-size", () => {
        test("should have 6vh", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("font-size", "6vh");
        });
      });
      
      describe("font-variant-numeric", () => {
        test("should have tabular-nums", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("font-variant-numeric", "tabular-nums");
        });
      });
      
      describe("line-height", () => {
        test("should have 7.4vh", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("line-height", "7.4vh");
        });
      });
      
      describe("text-align", () => {
        test("should have center", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("text-align", "center");
        });
      });
      
      describe("text-transform", () => {
        test("should have lowercase", () => {
          const { ConsoleText } = setup();

          expect(ConsoleText).toHaveStyleRule("text-transform", "lowercase");
        });
      });
      
      describe("&::after", () => {
        describe("animation-duration", () => {
          test("should have 900ms", () => {
            const { ConsoleText } = setup();

            expect(ConsoleText).toHaveStyleRule("animation-duration", "900ms", {
              modifier: "&::after"
            });
          });
        });
        
        describe("animation-iteration-count", () => {
          test("should have infinite", () => {
            const { ConsoleText } = setup();

            expect(ConsoleText).toHaveStyleRule("animation-iteration-count", "infinite", {
              modifier: "&::after"
            });
          });
        });
        
        describe("animation-timing-function", () => {
          test("should have ease-in-out", () => {
            const { ConsoleText } = setup();

            expect(ConsoleText).toHaveStyleRule("animation-timing-function", "ease-in-out", {
              modifier: "&::after"
            });
          });
        });
        
        describe("background-color", () => {
          test("should have #bcd8db", () => {
            const { ConsoleText } = setup();

            expect(ConsoleText).toHaveStyleRule("background-color", "#bcd8db", {
              modifier: "&::after"
            });
          });
        });
        
        describe("content", () => {
          test("should have ''", () => {
            const { ConsoleText } = setup();

            expect(ConsoleText).toHaveStyleRule("content", "''", {
              modifier: "&::after"
            });
          });
        });
        
        describe("display", () => {
          test("should have inline-block", () => {
            const { ConsoleText } = setup();

            expect(ConsoleText).toHaveStyleRule("display", "inline-block", {
              modifier: "&::after"
            });
          });
        });
        
        describe("height", () => {
          test("should have 6vh", () => {
            const { ConsoleText } = setup();

            expect(ConsoleText).toHaveStyleRule("height", "6vh", {
              modifier: "&::after"
            });
          });
        });
        
        describe("margin-left", () => {
          test("should have .8rem", () => {
            const { ConsoleText } = setup();

            expect(ConsoleText).toHaveStyleRule("margin-left", ".8rem", {
              modifier: "&::after"
            });
          });
        });
        
        describe("transform", () => {
          test("should have translateY(1vh)", () => {
            const { ConsoleText } = setup();

            expect(ConsoleText).toHaveStyleRule("transform", "translateY(1vh)", {
              modifier: "&::after"
            });
          });
        });
        
        describe("width", () => {
          test("should have 3vh", () => {
            const { ConsoleText } = setup();

            expect(ConsoleText).toHaveStyleRule("width", "3vh", {
              modifier: "&::after"
            });
          });
        });
      });
    });
  });

});

interface Setup extends RenderResult {
  ConsoleContainer: Element;
  ConsoleText: Element;
  InnerPositionContainer: Element;
  OuterPositionContainer: Element;
  Text: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Console />
  );

  const { queryByTestId }: RenderResult = utils;
  const OuterPositionContainer: Element = queryByTestId("Console");
  const ConsoleContainer: Element = queryByTestId("ConsoleContainer");
  const InnerPositionContainer: Element = queryByTestId("InnerPositionContainer");
  const Text: Element = queryByTestId("Text");
  const ConsoleText: Element = queryByTestId("ConsoleText");
 
  return {
    ...utils,
    ConsoleContainer,
    ConsoleText,
    InnerPositionContainer,
    OuterPositionContainer,
    Text
  };
}
