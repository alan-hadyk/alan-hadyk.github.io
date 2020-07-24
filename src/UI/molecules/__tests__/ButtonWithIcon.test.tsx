import React from "react";
import {
  act,
  cleanup,
  fireEvent, 
  RenderResult
} from "@testing-library/react";

import ButtonWithIcon from "<molecules>/ButtonWithIcon";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ButtonWithIconProps
} from "<molecules>/__typings__/ButtonWithIcon.d.ts";

describe("molecules / ButtonWithIcon", () => {
  test("should have correct structure", () => {
    const {
      ButtonWithIconContainer,
      ButtonWithIconLines
    } = setup();

    expect(ButtonWithIconContainer.children[0]).toEqual(ButtonWithIconLines[0]);
    expect(ButtonWithIconContainer.children[1]).toEqual(ButtonWithIconLines[1]);
    expect(ButtonWithIconContainer.children[2]).toEqual(ButtonWithIconLines[2]);
    expect(ButtonWithIconContainer.children[3]).toEqual(ButtonWithIconLines[3]);
  });

  describe("ButtonWithIconContainer", () => {
    test("should fire click", () => {
      const onClick = jest.fn();

      const { ButtonWithIconContainer } = setup({
        onClick
      });

      expect(onClick).toHaveBeenCalledTimes(0);

      act(() => {
        fireEvent.click(ButtonWithIconContainer);
      });

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    describe("Styles", () => {
      let ButtonWithIconContainer: Element;

      beforeEach(() => {
        ButtonWithIconContainer = setup().ButtonWithIconContainer;
      });

      describe("background", () => {      
        test("should have none", () => {
          expect(ButtonWithIconContainer).toHaveStyleRule("background", "none");
        });
      });

      describe("cursor", () => {      
        test("should have pointer", () => {
          expect(ButtonWithIconContainer).toHaveStyleRule("cursor", "pointer");
        });
      });

      describe("height", () => {      
        test("should have 3.0rem", () => {
          expect(ButtonWithIconContainer).toHaveStyleRule("height", "3.0rem");
        });
      });

      describe("position", () => {      
        test("should have relative", () => {
          expect(ButtonWithIconContainer).toHaveStyleRule("position", "relative");
        });
      });

      describe("transform", () => {      
        test("should have rotate(0deg)", () => {
          expect(ButtonWithIconContainer).toHaveStyleRule("transform", "rotate(0deg)");
        });
      });

      describe("transition", () => {      
        test("should have all 150ms ease-in-out", () => {
          expect(ButtonWithIconContainer).toHaveStyleRule("transition", "all 150ms ease-in-out");
        });
      });

      describe("width", () => {      
        test("should have 4.8rem", () => {
          expect(ButtonWithIconContainer).toHaveStyleRule("width", "4.8rem");
        });
      });

      describe("z-index", () => {      
        test("should have 1100", () => {
          expect(ButtonWithIconContainer).toHaveStyleRule("z-index", "1100");
        });
      });
    });
  });

  describe("ButtonWithIconLines", () => {
    test("there should be 4 lines", () => {
      const { ButtonWithIconLines } = setup();

      expect(ButtonWithIconLines.length).toEqual(4);
    });

    describe("Styles", () => {
      describe("if button is not clicked", () => {
        let ButtonWithIconLine: Element;
  
        beforeEach(() => {
          ButtonWithIconLine = setup().ButtonWithIconLines[0];
        });

        describe("background", () => {      
          test("should have #fff", () => {
            expect(ButtonWithIconLine).toHaveStyleRule("background", "#fff");
          });
        });
  
        describe("height", () => {      
          test("should have .2rem", () => {
            expect(ButtonWithIconLine).toHaveStyleRule("height", ".2rem");
          });
        });
  
        describe("left", () => {      
          test("should have 0", () => {
            expect(ButtonWithIconLine).toHaveStyleRule("left", "0");
          });
        });
  
        describe("position", () => {      
          test("should have absolute", () => {
            expect(ButtonWithIconLine).toHaveStyleRule("position", "absolute");
          });
        });
  
        describe("transition", () => {      
          test("should have all 150ms ease-in-out", () => {
            expect(ButtonWithIconLine).toHaveStyleRule("transition", "all 150ms ease-in-out");
          });
        });
  
        describe("width", () => {      
          test("should have 100%", () => {
            expect(ButtonWithIconLine).toHaveStyleRule("width", "100%");
          });
        });
  
        describe("top", () => {      
          test("should have 0 fo the first child", () => {
            expect(ButtonWithIconLine).toHaveStyleRule("top", "0", {
              modifier: ":nth-child(1)"
            });
          });
  
          test("should have 1.4rem fo the second and third children", () => {
            expect(ButtonWithIconLine).toHaveStyleRule("top", "1.4rem", {
              modifier: "&:nth-child(3)"
            });
  
            expect(ButtonWithIconLine).toHaveStyleRule("top", "1.4rem", {
              modifier: " &:nth-child(3)"
            });
          });
  
          test("should have 2.8rem fo the fourth child", () => {
            expect(ButtonWithIconLine).toHaveStyleRule("top", "2.8rem", {
              modifier: ":nth-child(4)"
            });
          });
        });
      });

      describe("if button is clicked", () => {
        let _ButtonWithIconLines: Element[];
  
        beforeEach(() => {
          const { ButtonWithIconContainer, ButtonWithIconLines } = setup();

          _ButtonWithIconLines = ButtonWithIconLines;
          act(() => {
            fireEvent.click(ButtonWithIconContainer);
          });
        });

        describe("left", () => {      
          test("should have 50% for the first child", () => {
            _ButtonWithIconLines.forEach((ButtonWithIconLine: Element) => {
              expect(ButtonWithIconLine).toHaveStyleRule("left", "50%", {
                modifier: ":nth-child(1)"
              });
            });
          });
  
          test("should have 50% for the fourth child", () => {
            _ButtonWithIconLines.forEach((ButtonWithIconLine: Element) => {
              expect(ButtonWithIconLine).toHaveStyleRule("left", "50%", {
                modifier: ":nth-child(4)"
              });
            });
          });
        });

        describe("top", () => {      
          test("should have 1.4rem for the first child", () => {
            _ButtonWithIconLines.forEach((ButtonWithIconLine: Element) => {
              expect(ButtonWithIconLine).toHaveStyleRule("top", "1.4rem", {
                modifier: ":nth-child(1)"
              });
            });
          });
  
          test("should have 1.4rem for the fourth child", () => {
            _ButtonWithIconLines.forEach((ButtonWithIconLine: Element) => {
              expect(ButtonWithIconLine).toHaveStyleRule("top", "1.4rem", {
                modifier: ":nth-child(4)"
              });
            });
          });
        });

        describe("width", () => {      
          test("should have 0% for the first child", () => {
            _ButtonWithIconLines.forEach((ButtonWithIconLine: Element) => {
              expect(ButtonWithIconLine).toHaveStyleRule("width", "0%", {
                modifier: ":nth-child(1)"
              });
            });
          });
  
          test("should have 0% for the fourth child", () => {
            _ButtonWithIconLines.forEach((ButtonWithIconLine: Element) => {
              expect(ButtonWithIconLine).toHaveStyleRule("width", "0%", {
                modifier: ":nth-child(4)"
              });
            });
          });
        });

        describe("transform", () => {      
          test("should have rotate(40deg) for the second child", () => {
            _ButtonWithIconLines.forEach((ButtonWithIconLine: Element) => {
              expect(ButtonWithIconLine).toHaveStyleRule("transform", "rotate(40deg)", {
                modifier: ":nth-child(2)"
              });
            });
          });
  
          test("should have rotate(-40deg) for the third child", () => {
            _ButtonWithIconLines.forEach((ButtonWithIconLine: Element) => {
              expect(ButtonWithIconLine).toHaveStyleRule("transform", "rotate(-40deg)", {
                modifier: ":nth-child(3)"
              });
            });
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ButtonWithIconContainer: Element;
  ButtonWithIconLines: Element[];
}

type ButtonWithIconTestProps = Partial<ButtonWithIconProps>;

function setup(additionalProps?: ButtonWithIconTestProps): Setup {
  const props: ButtonWithIconProps = {
    onClick: jest.fn(),
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <ButtonWithIcon {...props} />
  );

  const { queryAllByTestId, queryByTestId }: RenderResult = utils;

  const ButtonWithIconContainer: Element = queryByTestId("ButtonWithIconContainer");
  const ButtonWithIconLines: Element[] = queryAllByTestId("ButtonWithIconLine");

  return {
    ...utils,
    ButtonWithIconContainer,
    ButtonWithIconLines
  };
}
