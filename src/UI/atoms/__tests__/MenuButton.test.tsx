import React from "react";
import { act, fireEvent, RenderResult } from "@testing-library/react";

import MenuButton from "UI/atoms/MenuButton";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { MenuButtonProps } from "UI/atoms/__typings__/MenuButton";

describe("atoms / MenuButton", () => {
  test("should have correct structure", () => {
    const { MenuButtonContainer, MenuButtonLines } = setup();

    expect(MenuButtonContainer.children[0]).toEqual(MenuButtonLines[0]);
    expect(MenuButtonContainer.children[1]).toEqual(MenuButtonLines[1]);
    expect(MenuButtonContainer.children[2]).toEqual(MenuButtonLines[2]);
    expect(MenuButtonContainer.children[3]).toEqual(MenuButtonLines[3]);
  });

  describe("MenuButtonContainer", () => {
    describe("Props", () => {
      describe("aria-label", () => {
        test("should have MenuButton", () => {
          const { MenuButtonContainer } = setup();

          expect(MenuButtonContainer.getAttribute("aria-label")).toEqual(
            "MenuButton"
          );
        });
      });

      describe("onClick", () => {
        test("should fire onClick prop", () => {
          const onClick = jest.fn();

          const { MenuButtonContainer } = setup({
            onClick
          });

          expect(onClick).toHaveBeenCalledTimes(0);

          act(() => {
            fireEvent.click(MenuButtonContainer);
          });

          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe("Styles", () => {
      let MenuButtonContainer: Element;

      beforeEach(() => {
        MenuButtonContainer = setup().MenuButtonContainer;
      });

      describe("background", () => {
        test("should have none", () => {
          expect(MenuButtonContainer).toHaveStyleRule("background", "none");
        });
      });

      describe("cursor", () => {
        test("should have pointer", () => {
          expect(MenuButtonContainer).toHaveStyleRule("cursor", "pointer");
        });
      });

      describe("height", () => {
        test("should have 3.0rem", () => {
          expect(MenuButtonContainer).toHaveStyleRule("height", "3.0rem");
        });
      });

      describe("position", () => {
        test("should have relative", () => {
          expect(MenuButtonContainer).toHaveStyleRule("position", "relative");
        });
      });

      describe("transition", () => {
        test("should have all 150ms ease-in-out", () => {
          expect(MenuButtonContainer).toHaveStyleRule(
            "transition",
            "all 150ms ease-in-out"
          );
        });
      });

      describe("width", () => {
        test("should have 4.8rem", () => {
          expect(MenuButtonContainer).toHaveStyleRule("width", "4.8rem");
        });
      });

      describe("z-index", () => {
        test("should have 1100", () => {
          expect(MenuButtonContainer).toHaveStyleRule("z-index", "1100");
        });
      });

      describe("filter", () => {
        test("should have drop-shadow(0px 0px .2rem rgba(255,255,255,0.9)) on hover", () => {
          const { MenuButtonContainer } = setup();

          expect(MenuButtonContainer).toHaveStyleRule(
            "filter",
            "drop-shadow(0px 0px .2rem rgba(255,255,255,0.9))",
            {
              modifier: ":hover"
            }
          );
        });
      });
    });
  });

  describe("MenuButtonLines", () => {
    test("there should be 4 lines", () => {
      const { MenuButtonLines } = setup();

      expect(MenuButtonLines.length).toEqual(4);
    });

    describe("Styles", () => {
      describe("if isOpen: false", () => {
        let _MenuButtonLines: Element[];

        beforeEach(() => {
          const { MenuButtonLines } = setup();

          _MenuButtonLines = MenuButtonLines;
        });

        describe("background", () => {
          test("should have #fff", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("background", "#fff");
            });
          });
        });

        describe("height", () => {
          test("should have .2rem", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("height", ".2rem");
            });
          });
        });

        describe("left", () => {
          test("should have 0", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("left", "0");
            });
          });
        });

        describe("position", () => {
          test("should have absolute", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("position", "absolute");
            });
          });
        });

        describe("transition", () => {
          test("should have all 150ms ease-in-out", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule(
                "transition",
                "all 150ms ease-in-out"
              );
            });
          });
        });

        describe("width", () => {
          test("should have 100%", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("width", "100%");
            });
          });
        });

        describe("top", () => {
          test("should have 0 for the first child", () => {
            expect(_MenuButtonLines[0]).toHaveStyleRule("top", "0", {
              modifier: ":nth-child(1)"
            });
          });

          test("should have 1.4rem for the second and third children", () => {
            expect(_MenuButtonLines[1]).toHaveStyleRule("top", "1.4rem", {
              modifier: "&:nth-child(2)"
            });

            expect(_MenuButtonLines[2]).toHaveStyleRule("top", "1.4rem", {
              modifier: " &:nth-child(3)"
            });
          });

          test("should have 2.8rem for the fourth child", () => {
            expect(_MenuButtonLines[3]).toHaveStyleRule("top", "2.8rem", {
              modifier: ":nth-child(4)"
            });
          });
        });
      });

      describe("if isOpen: true", () => {
        let _MenuButtonLines: Element[];

        beforeEach(() => {
          const { MenuButtonLines } = setup({
            isOpen: true
          });

          _MenuButtonLines = MenuButtonLines;
        });

        describe("left", () => {
          test("should have 50% for the first child", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("left", "50%", {
                modifier: ":nth-child(1)"
              });
            });
          });

          test("should have 50% for the fourth child", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("left", "50%", {
                modifier: ":nth-child(4)"
              });
            });
          });
        });

        describe("top", () => {
          test("should have 1.4rem for the first child", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("top", "1.4rem", {
                modifier: ":nth-child(1)"
              });
            });
          });

          test("should have 1.4rem for the fourth child", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("top", "1.4rem", {
                modifier: ":nth-child(4)"
              });
            });
          });
        });

        describe("width", () => {
          test("should have 0 for the first child", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("width", "0", {
                modifier: ":nth-child(1)"
              });
            });
          });

          test("should have 0 for the fourth child", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule("width", "0", {
                modifier: ":nth-child(4)"
              });
            });
          });
        });

        describe("transform", () => {
          test("should have rotate(40deg) for the second child", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule(
                "transform",
                "rotate(40deg)",
                {
                  modifier: ":nth-child(2)"
                }
              );
            });
          });

          test("should have rotate(-40deg) for the third child", () => {
            _MenuButtonLines.forEach((MenuButtonLine: Element) => {
              expect(MenuButtonLine).toHaveStyleRule(
                "transform",
                "rotate(-40deg)",
                {
                  modifier: ":nth-child(3)"
                }
              );
            });
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  MenuButtonContainer: Element;
  MenuButtonLines: Element[];
}

type MenuButtonTestProps = Partial<MenuButtonProps>;

function setup(additionalProps?: MenuButtonTestProps): Setup {
  const props: MenuButtonProps = {
    onClick: jest.fn(),
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<MenuButton {...props} />);

  const { queryAllByTestId }: RenderResult = utils;

  const MenuButtonContainer: Element = queryAllByTestId(
    "MenuButtonContainer"
  )[0];
  const MenuButtonLines: Element[] = queryAllByTestId("MenuButtonLine");

  return {
    ...utils,
    MenuButtonContainer,
    MenuButtonLines
  };
}
