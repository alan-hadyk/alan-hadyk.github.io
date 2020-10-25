import React from "react";
import { RenderResult } from "@testing-library/react";

import NavItem, { arePropsEqual } from "molecules/NavItem";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("hooks/useShuffleText");
import useShuffleText from "hooks/useShuffleText";

import { NavItemProps } from "molecules/__typings__/NavItem";

const defaultProps: NavItemProps = {
  href: "#element",
  title: "Title"
};

describe("molecules / NavItem", () => {
  test("should have correct structure", () => {
    const { Lines, NavItemLink, PositionContainer } = setup();

    expect(PositionContainer.children[0]).toEqual(NavItemLink);
    expect(PositionContainer.children[1]).toEqual(Lines[0]);
    expect(PositionContainer.children[2]).toEqual(Lines[1]);
  });

  describe("useShuffleText", () => {
    test("should fire", () => {
      const spyUseShuffleText = jest.fn();
      const mockUseShuffleText = useShuffleText as jest.Mock;
      mockUseShuffleText.mockImplementation(spyUseShuffleText);

      setup();

      const mockCalls = spyUseShuffleText.mock.calls[0][0];

      expect(typeof mockCalls["onShuffleReady"]).toEqual("function");
      expect(typeof mockCalls["ref"].current).toEqual("object");
      expect(mockCalls["shuffleState"]).toEqual(undefined);
      expect(mockCalls["text"]).toEqual("Title");
    });
  });

  describe("PositionContainer", () => {
    describe("Props", () => {
      describe("position", () => {
        test("should have relative", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });

  describe("NavItem.Link", () => {
    test("should have textContent equal to title prop", () => {
      const { NavItemLink } = setup({
        title: "Nice portfolio"
      });

      expect(NavItemLink.textContent).toEqual("Nice portfolio");
    });

    describe("Styles", () => {
      describe("color", () => {
        test("should have #fff when isActive: true", () => {
          const { NavItemLink } = setup({
            isActive: true
          });

          expect(NavItemLink).toHaveStyleRule("color", "#fff");
        });

        test("should have #78b0b5 when isActive: false", () => {
          const { NavItemLink } = setup({
            isActive: false
          });

          expect(NavItemLink).toHaveStyleRule("color", "#78b0b5");
        });

        test("should have #fff for &:hover, &:active, &:focus", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule("color", "#fff", {
            modifier: ":hover"
          });

          expect(NavItemLink).toHaveStyleRule("color", "#fff", {
            modifier: ":active"
          });

          expect(NavItemLink).toHaveStyleRule("color", "#fff", {
            modifier: ":focus"
          });
        });
      });

      describe("cursor", () => {
        test("should have pointer", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule("cursor", "pointer");
        });
      });

      describe("display", () => {
        test("should have block", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule("display", "block");
        });
      });

      describe("font-size", () => {
        test("should have 28px", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule("font-size", "28px");
        });
      });

      describe("height", () => {
        test("should have 4.8rem", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("line-height", () => {
        test("should have 4.8rem", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule("line-height", "4.8rem");
        });
      });

      describe("position", () => {
        test("should have relative", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule("position", "relative");
        });
      });

      describe("text-shadow", () => {
        test("should have 0px 0px .8rem #bcd8db when isActive: true", () => {
          const { NavItemLink } = setup({
            isActive: true
          });

          expect(NavItemLink).toHaveStyleRule(
            "text-shadow",
            "0px 0px .8rem #bcd8db"
          );
        });

        test("should have none when isActive: false", () => {
          const { NavItemLink } = setup({
            isActive: false
          });

          expect(NavItemLink).toHaveStyleRule("text-shadow", "none");
        });

        test("should have 0px 0px .8rem #bcd8db for &:hover, &:active, &:focus", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule(
            "text-shadow",
            "0px 0px .8rem #bcd8db",
            {
              modifier: ":hover"
            }
          );

          expect(NavItemLink).toHaveStyleRule(
            "text-shadow",
            "0px 0px .8rem #bcd8db",
            {
              modifier: ":active"
            }
          );

          expect(NavItemLink).toHaveStyleRule(
            "text-shadow",
            "0px 0px .8rem #bcd8db",
            {
              modifier: ":focus"
            }
          );
        });
      });

      describe("text-transform", () => {
        test("should have uppercase", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule("text-transform", "uppercase");
        });
      });

      describe("transition", () => {
        test("should have all 150ms ease-in-out", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule(
            "transition",
            "all 150ms ease-in-out"
          );
        });
      });

      describe("z-index", () => {
        test("should have 200", () => {
          const { NavItemLink } = setup();

          expect(NavItemLink).toHaveStyleRule("z-index", "200");
        });
      });
    });
  });

  describe("Lines", () => {
    describe("Props", () => {
      describe("isActive", () => {
        describe("opacity", () => {
          test("should be 1 when isActive is true", () => {
            const { Lines } = setup({
              isActive: true
            });

            expect(Lines[0]).toHaveStyleRule("opacity", "1");
            expect(Lines[1]).toHaveStyleRule("opacity", "1");
          });

          test("should be 0 when isActive is false", () => {
            const { Lines } = setup({
              isActive: false
            });

            expect(Lines[0]).toHaveStyleRule("opacity", "0");
            expect(Lines[1]).toHaveStyleRule("opacity", "0");
          });
        });

        describe("visibility", () => {
          test("should be visible when isActive is true", () => {
            const { Lines } = setup({
              isActive: true
            });

            expect(Lines[0]).toHaveStyleRule("visibility", "visible");
            expect(Lines[1]).toHaveStyleRule("visibility", "visible");
          });

          test("should be hidden when isActive is false", () => {
            const { Lines } = setup({
              isActive: false
            });

            expect(Lines[0]).toHaveStyleRule("visibility", "hidden");
            expect(Lines[1]).toHaveStyleRule("visibility", "hidden");
          });
        });

        describe("width", () => {
          test("should be 50% when isActive is true", () => {
            const { Lines } = setup({
              isActive: true
            });

            expect(Lines[0]).toHaveStyleRule("width", "50%");
            expect(Lines[1]).toHaveStyleRule("width", "50%");
          });

          test("should be 0 when isActive is false", () => {
            const { Lines } = setup({
              isActive: false
            });

            expect(Lines[0]).toHaveStyleRule("width", "0");
            expect(Lines[1]).toHaveStyleRule("width", "0");
          });
        });
      });
    });

    describe("Line[0]", () => {
      describe("Props", () => {
        describe("direction", () => {
          test("should be left", () => {
            const { Lines } = setup();

            expect(Lines[0]).toHaveStyleRule("left", "50%");
          });
        });
      });
    });

    describe("Line[1]", () => {
      describe("Props", () => {
        describe("direction", () => {
          test("should be right", () => {
            const { Lines } = setup();

            expect(Lines[1]).toHaveStyleRule("right", "50%");
          });
        });
      });
    });
  });

  describe("arePropsEqual", () => {
    test("should return true if prevProps.isActive === nextProps.isActive", () => {
      expect(
        arePropsEqual(
          {
            ...defaultProps,
            isActive: true
          },
          {
            ...defaultProps,
            isActive: true
          }
        )
      ).toEqual(true);
    });

    test("should return false if prevProps.isActive !== nextProps.isActive - test 1", () => {
      expect(
        arePropsEqual(
          {
            ...defaultProps,
            isActive: false
          },
          {
            ...defaultProps,
            isActive: true
          }
        )
      ).toEqual(false);
    });

    test("should return false if prevProps.isActive !== nextProps.isActive - test 1", () => {
      expect(
        arePropsEqual(
          {
            ...defaultProps,
            isActive: true
          },
          {
            ...defaultProps,
            isActive: false
          }
        )
      ).toEqual(false);
    });
  });
});

interface Setup extends RenderResult {
  Lines: Element[];
  NavItemLink: Element;
  PositionContainer: Element;
}

type NavItemTestProps = Partial<NavItemProps>;

function setup(additionalProps?: NavItemTestProps): Setup {
  const props: NavItemProps = {
    ...defaultProps,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<NavItem {...props} />);

  const { queryAllByTestId, queryByTestId }: RenderResult = utils;
  const Lines: Element[] = queryAllByTestId("Line");
  const NavItemLink: Element = queryByTestId("NavItemLink");
  const PositionContainer: Element = queryByTestId("NavItem");

  return {
    ...utils,
    Lines,
    NavItemLink,
    PositionContainer
  };
}
