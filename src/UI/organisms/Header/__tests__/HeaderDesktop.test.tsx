import React from "react";
import { RenderResult, act, fireEvent } from "@testing-library/react";

import HeaderDesktop from "UI/organisms/Header/HeaderDesktop";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { HeaderMobileProps } from "UI/organisms/Header/__typings__/HeaderMobile";

import isIE11 from "helpers/browser/isIE11";

jest.mock("helpers/browser/isIE11", () => jest.fn());

jest.mock("hooks/useIntersectionObserver");

describe("organisms / HeaderDesktop", () => {
  test("should have correct structure if isMenuVisible is true", () => {
    const {
      Backdrop,
      Button,
      HeaderDesktopContainer,
      HeaderDesktopFlexContainer,
      HeaderDesktopSpacingContainer,
      MenuButton,
      Nav,
      SideMenu
    } = setup({
      isMenuVisible: true
    });

    expect(HeaderDesktopContainer.children[0]).toEqual(
      HeaderDesktopFlexContainer
    );

    expect(HeaderDesktopFlexContainer.children[0]).toEqual(
      HeaderDesktopSpacingContainer
    );
    expect(HeaderDesktopSpacingContainer.children[0]).toEqual(Nav);
    expect(HeaderDesktopFlexContainer.children[1]).toEqual(Button);
    expect(HeaderDesktopFlexContainer.children[2]).toEqual(MenuButton);
    expect(HeaderDesktopFlexContainer.children[3]).toEqual(Backdrop);
    expect(HeaderDesktopFlexContainer.children[4]).toEqual(SideMenu);
  });

  test("should have correct structure if isMenuVisible is false", () => {
    const {
      Button,
      HeaderDesktopContainer,
      HeaderDesktopFlexContainer,
      HeaderDesktopSpacingContainer,
      MenuButton,
      Nav,
      SideMenu
    } = setup({
      isMenuVisible: false
    });

    expect(HeaderDesktopContainer.children[0]).toEqual(
      HeaderDesktopFlexContainer
    );

    expect(HeaderDesktopFlexContainer.children[0]).toEqual(
      HeaderDesktopSpacingContainer
    );

    expect(HeaderDesktopSpacingContainer.children[0]).toEqual(Nav);
    expect(HeaderDesktopFlexContainer.children[1]).toEqual(Button);
    expect(HeaderDesktopFlexContainer.children[2]).toEqual(MenuButton);
    expect(HeaderDesktopFlexContainer.children[3]).toEqual(SideMenu);
  });

  describe("HeaderDesktop", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have desktop", () => {
          test("should have display block when min-width is 1281px and max-width is 1680px", () => {
            const { HeaderDesktopContainer } = setup();

            expect(HeaderDesktopContainer).toHaveStyleRule("display", "block", {
              media: "(min-width:1281px) and (max-width:1680px)"
            });
          });
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("flex-flow", () => {
        test("should have row nowrap", () => {
          const { HeaderDesktopFlexContainer } = setup();

          expect(HeaderDesktopFlexContainer).toHaveStyleRule(
            "flex-flow",
            "row nowrap"
          );
        });
      });

      describe("gap", () => {
        test("should have margin-left: 2.4rem for all children (except first)", () => {
          const { HeaderDesktopFlexContainer } = setup();

          expect(HeaderDesktopFlexContainer).toHaveStyleRule(
            "margin-left",
            "2.4rem",
            {
              modifier: "& > *"
            }
          );

          expect(HeaderDesktopFlexContainer).toHaveStyleRule(
            "margin-left",
            "0",
            {
              modifier: "& > *:first-child"
            }
          );
        });
      });

      describe("height", () => {
        test("should have 4.8rem", () => {
          const { HeaderDesktopFlexContainer } = setup();

          expect(HeaderDesktopFlexContainer).toHaveStyleRule(
            "height",
            "4.8rem"
          );
        });
      });

      describe("justify-content", () => {
        test("should have flex-start", () => {
          const { HeaderDesktopFlexContainer } = setup();

          expect(HeaderDesktopFlexContainer).toHaveStyleRule(
            "justify-content",
            "flex-start"
          );
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("marginRight", () => {
        test("should have 2.4rem", () => {
          const { HeaderDesktopSpacingContainer } = setup();

          expect(HeaderDesktopSpacingContainer).toHaveStyleRule(
            "margin-right",
            "2.4rem"
          );
        });
      });
    });
  });

  describe("Nav", () => {
    test("should render", () => {
      const { Nav } = setup();

      expect(Nav).toBeTruthy();
    });
  });

  describe("Button", () => {
    test("should have correct icon and text", () => {
      const { Button } = setup();

      const buttonText = Button.querySelector("[font-family=\"Exan\"]");
      const buttonIcon = Button.querySelector("svg");

      expect(buttonText.textContent).toEqual("cv");
      expect(buttonIcon.textContent).toEqual("Btn-Download.svg");
    });

    describe("Props", () => {
      describe("iconWidth", () => {
        test("should have auto if isIE11 returns false", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => false);

          const { Button } = setup();

          expect(
            Button.children[4].children[0].children[0].children[1]
          ).toHaveStyleRule("width", "auto");
        });

        test("should have 2.4rem if isIE11 returns true", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => true);

          const { Button } = setup();

          expect(
            Button.children[0].children[0].children[0].children[1]
          ).toHaveStyleRule("width", "2.4rem");
        });
      });

      describe("size", () => {
        describe("height", () => {
          test("should have 4.8rem", () => {
            const { Button } = setup();

            expect(Button).toHaveStyleRule("height", "4.8rem");
          });
        });

        describe("width", () => {
          test("should have auto", () => {
            const { Button } = setup();

            expect(Button).toHaveStyleRule("width", "auto");
          });
        });

        describe("padding", () => {
          test("should have 2.4rem", () => {
            const { Button } = setup();

            expect(Button.children[4].children[0]).toHaveStyleRule(
              "padding-right",
              "2.4rem"
            );
          });
        });

        describe("icon height", () => {
          test("should have 2.4rem", () => {
            const { Button } = setup();

            expect(
              Button.children[4].children[0].children[0].children[1]
            ).toHaveStyleRule("height", "2.4rem");
          });
        });
      });
    });

    describe("Event handlers", () => {
      describe("onClick", () => {
        test("should fire onCVButtonClick", () => {
          const onCVButtonClick = jest.fn();

          const { Button } = setup({ onCVButtonClick });

          expect(onCVButtonClick).toHaveBeenCalledTimes(0);

          act(() => {
            fireEvent.mouseUp(Button);
          });

          expect(onCVButtonClick).toHaveBeenCalledTimes(1);
        });
      });
    });
  });

  describe("MenuButton", () => {
    test("should render", () => {
      const { MenuButton } = setup();

      expect(MenuButton).toBeTruthy();
    });

    describe("Props", () => {
      describe("isOpen", () => {
        describe("when isMenuVisible is true", () => {
          let _MenuButtonLines: Element[];

          beforeEach(() => {
            const { MenuButtonLines } = setup({
              isMenuVisible: true
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

        describe("when isMenuVisible is false", () => {
          let _MenuButtonLines: Element[];

          beforeEach(() => {
            const { MenuButtonLines } = setup({
              isMenuVisible: false
            });

            _MenuButtonLines = MenuButtonLines;
          });

          describe("left", () => {
            test("should not have 50% for the first child", () => {
              _MenuButtonLines.forEach((MenuButtonLine: Element) => {
                expect(MenuButtonLine).not.toHaveStyleRule("left", "50%", {
                  modifier: ":nth-child(1)"
                });
              });
            });

            test("should not have 50% for the fourth child", () => {
              _MenuButtonLines.forEach((MenuButtonLine: Element) => {
                expect(MenuButtonLine).not.toHaveStyleRule("left", "50%", {
                  modifier: ":nth-child(4)"
                });
              });
            });
          });

          describe("top", () => {
            test("should not have 1.4rem for the first child", () => {
              _MenuButtonLines.forEach((MenuButtonLine: Element) => {
                expect(MenuButtonLine).not.toHaveStyleRule("top", "1.4rem", {
                  modifier: ":nth-child(1)"
                });
              });
            });

            test("should not have 1.4rem for the fourth child", () => {
              _MenuButtonLines.forEach((MenuButtonLine: Element) => {
                expect(MenuButtonLine).not.toHaveStyleRule("top", "1.4rem", {
                  modifier: ":nth-child(4)"
                });
              });
            });
          });

          describe("width", () => {
            test("should not have 0 for the first child", () => {
              _MenuButtonLines.forEach((MenuButtonLine: Element) => {
                expect(MenuButtonLine).not.toHaveStyleRule("width", "0", {
                  modifier: ":nth-child(1)"
                });
              });
            });

            test("should not have 0 for the fourth child", () => {
              _MenuButtonLines.forEach((MenuButtonLine: Element) => {
                expect(MenuButtonLine).not.toHaveStyleRule("width", "0", {
                  modifier: ":nth-child(4)"
                });
              });
            });
          });

          describe("transform", () => {
            test("should not have rotate(40deg) for the second child", () => {
              _MenuButtonLines.forEach((MenuButtonLine: Element) => {
                expect(MenuButtonLine).not.toHaveStyleRule(
                  "transform",
                  "rotate(40deg)",
                  {
                    modifier: ":nth-child(2)"
                  }
                );
              });
            });

            test("should not have rotate(-40deg) for the third child", () => {
              _MenuButtonLines.forEach((MenuButtonLine: Element) => {
                expect(MenuButtonLine).not.toHaveStyleRule(
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

      describe("onClick", () => {
        test("should fire click", () => {
          const onClick = jest.fn();

          const { MenuButton } = setup({
            onClick
          });

          expect(onClick).toHaveBeenCalledTimes(0);

          act(() => {
            fireEvent.click(MenuButton);
          });

          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });
  });

  describe("Backdrop", () => {
    test("should render if isMenuVisible is true", () => {
      const { Backdrop } = setup({
        isMenuVisible: true
      });

      expect(Backdrop).toBeTruthy();
    });

    test("should not render if isMenuVisible is false", () => {
      const { Backdrop } = setup({
        isMenuVisible: false
      });

      expect(Backdrop).toBeFalsy();
    });

    describe("Props", () => {
      describe("onClick", () => {
        test("should fire onClick prop", () => {
          const onClick = jest.fn();

          const { Backdrop } = setup({
            isMenuVisible: true,
            onClick
          });

          expect(onClick).toHaveBeenCalledTimes(0);

          act(() => {
            fireEvent.click(Backdrop);
          });

          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });
  });

  describe("SideMenu", () => {
    describe("Props", () => {
      describe("isExpanded", () => {
        describe("transform", () => {
          test("should have translateX(0) if isMenuVisible is true", () => {
            const { SideMenu } = setup({
              isMenuVisible: true
            });

            expect(SideMenu).toHaveStyleRule("transform", "translateX(0)");
          });

          test("should have translateX(100%) if isMenuVisible is false", () => {
            const { SideMenu } = setup({
              isMenuVisible: false
            });

            expect(SideMenu).toHaveStyleRule("transform", "translateX(100%)");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Backdrop: Element;
  Button: Element;
  HeaderDesktopContainer: Element;
  HeaderDesktopFlexContainer: Element;
  HeaderDesktopSpacingContainer: Element;
  MenuButton: Element;
  MenuButtonLines: Element[];
  Nav: Element;
  SideMenu: Element;
}

type HeaderTabletTestProps = Partial<HeaderMobileProps>;

function setup(additionalProps?: HeaderTabletTestProps): Setup {
  const props: HeaderMobileProps = {
    isMenuVisible: false,
    onCVButtonClick: jest.fn(),
    onClick: jest.fn(),
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<HeaderDesktop {...props} />);

  const { queryByTestId, queryAllByTestId } = utils || {};

  const Backdrop: Element = queryByTestId("Backdrop");
  const Button: Element = queryAllByTestId("Button")[0];
  const HeaderDesktopContainer: Element = queryByTestId("HeaderDesktop");
  const HeaderDesktopFlexContainer: Element = queryByTestId(
    "HeaderDesktopFlexContainer"
  );
  const HeaderDesktopSpacingContainer: Element = queryAllByTestId(
    "HeaderDesktopSpacingContainer"
  )[0];
  const MenuButton: Element = queryByTestId("MenuButtonContainer");
  const MenuButtonLines: Element[] = queryAllByTestId("MenuButtonLine");
  const Nav: Element = queryAllByTestId("Nav")[0];
  const SideMenu: Element = queryByTestId("SideMenu");

  return {
    ...utils,
    Backdrop,
    Button,
    HeaderDesktopContainer,
    HeaderDesktopFlexContainer,
    HeaderDesktopSpacingContainer,
    MenuButton,
    MenuButtonLines,
    Nav,
    SideMenu
  };
}
