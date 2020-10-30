import React from "react";
import { RenderResult, act, fireEvent } from "@testing-library/react";

import HeaderTabletAndMobile from "UI/organisms/Header/HeaderTabletAndMobile";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { HeaderMobileProps } from "UI/organisms/Header/__typings__/HeaderMobile";

jest.mock("hooks/useIntersectionObserver");

describe("organisms / HeaderTabletAndMobileProps", () => {
  test("should have correct structure if isMenuVisible is true", () => {
    const {
      Backdrop,
      MenuButtons,
      HeaderMobileContainer,
      HeaderTabletContainer,
      SideMenus
    } = setup({
      isMenuVisible: true
    });

    expect(HeaderMobileContainer.children[0]).toEqual(MenuButtons[0]);
    expect(HeaderMobileContainer.children[1]).toEqual(Backdrop[0]);
    expect(HeaderMobileContainer.children[2]).toEqual(SideMenus[0]);

    expect(HeaderTabletContainer.children[0]).toEqual(MenuButtons[1]);
    expect(HeaderTabletContainer.children[1]).toEqual(Backdrop[1]);
    expect(HeaderTabletContainer.children[2]).toEqual(SideMenus[1]);
  });

  test("should have correct structure if isMenuVisible is false", () => {
    const {
      MenuButtons,
      HeaderMobileContainer,
      HeaderTabletContainer,
      SideMenus
    } = setup({
      isMenuVisible: false
    });

    expect(HeaderMobileContainer.children[0]).toEqual(MenuButtons[0]);
    expect(HeaderMobileContainer.children[1]).toEqual(SideMenus[0]);

    expect(HeaderTabletContainer.children[0]).toEqual(MenuButtons[1]);
    expect(HeaderTabletContainer.children[1]).toEqual(SideMenus[1]);
  });

  describe("HeaderMobile", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have mobile", () => {
          test("should have display block when max-width is 640px", () => {
            const { HeaderMobileContainer } = setup();

            expect(HeaderMobileContainer).toHaveStyleRule("display", "block", {
              media: "(max-width:640px)"
            });
          });
        });
      });
    });
  });

  describe("HeaderTablet", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have tablet", () => {
          test("should have display block when min-width is 641px and max-width is 1280px", () => {
            const { HeaderTabletContainer } = setup();

            expect(HeaderTabletContainer).toHaveStyleRule("display", "block", {
              media: "(min-width:641px) and (max-width:1280px)"
            });
          });
        });
      });
    });
  });

  describe("MenuButtons", () => {
    test("should render", () => {
      const { MenuButtons } = setup();

      MenuButtons.forEach((_MenuButtons: Element) => {
        expect(_MenuButtons).toBeTruthy();
      });
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

          const { MenuButtons } = setup({
            onClick
          });

          expect(onClick).toHaveBeenCalledTimes(0);

          MenuButtons.forEach((_MenuButton: Element) => {
            act(() => {
              fireEvent.click(_MenuButton);
            });
          });

          expect(onClick).toHaveBeenCalledTimes(2);
        });
      });
    });
  });

  describe("Backdrop", () => {
    test("should render if isMenuVisible is true", () => {
      const { Backdrop } = setup({
        isMenuVisible: true
      });

      Backdrop.forEach((_Backdrop: Element) => {
        expect(_Backdrop).toBeTruthy();
      });
    });

    test("should not render if isMenuVisible is false", () => {
      const { Backdrop } = setup({
        isMenuVisible: false
      });

      Backdrop.forEach((_Backdrop: Element) => {
        expect(_Backdrop).toBeFalsy();
      });
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

          Backdrop.forEach((_Backdrop: Element) => {
            act(() => {
              fireEvent.click(_Backdrop);
            });
          });

          expect(onClick).toHaveBeenCalledTimes(2);
        });
      });
    });
  });

  describe("SideMenus", () => {
    describe("Props", () => {
      describe("isExpanded", () => {
        describe("transform", () => {
          test("should have translateX(0) if isMenuVisible is true", () => {
            const { SideMenus } = setup({
              isMenuVisible: true
            });

            SideMenus.forEach((_SideMenu: Element) => {
              expect(_SideMenu).toHaveStyleRule("transform", "translateX(0)");
            });
          });

          test("should have translateX(100%) if isMenuVisible is false", () => {
            const { SideMenus } = setup({
              isMenuVisible: false
            });

            SideMenus.forEach((_SideMenu: Element) => {
              expect(_SideMenu).toHaveStyleRule(
                "transform",
                "translateX(100%)"
              );
            });
          });
        });
      });
    });

    describe("Event handlers", () => {
      describe("onCVButtonClick", () => {
        test("should fire onCVButtonClick", () => {
          const onCVButtonClick = jest.fn();

          const { Buttons } = setup({ onCVButtonClick });

          expect(onCVButtonClick).toHaveBeenCalledTimes(0);

          act(() => {
            fireEvent.mouseUp(Buttons[0]);
          });

          expect(onCVButtonClick).toHaveBeenCalledTimes(1);

          act(() => {
            fireEvent.mouseUp(Buttons[1]);
          });

          expect(onCVButtonClick).toHaveBeenCalledTimes(2);
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Backdrop: Element[];
  Buttons: Element[];
  HeaderMobileContainer: Element;
  HeaderTabletContainer: Element;
  MenuButtonLines: Element[];
  MenuButtons: Element[];
  SideMenus: Element[];
}

type HeaderMobileTestProps = Partial<HeaderMobileProps>;

function setup(additionalProps?: HeaderMobileTestProps): Setup {
  const props: HeaderMobileProps = {
    isMenuVisible: false,
    onCVButtonClick: jest.fn(),
    onClick: jest.fn(),
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <HeaderTabletAndMobile {...props} />
  );

  const { queryAllByTestId, queryByTestId } = utils || {};

  const Backdrop: Element[] = queryAllByTestId("Backdrop");
  const Buttons: Element[] = queryAllByTestId("Button");
  const HeaderMobileContainer: Element = queryByTestId("HeaderMobile");
  const HeaderTabletContainer: Element = queryByTestId("HeaderTablet");
  const MenuButtonLines: Element[] = queryAllByTestId("MenuButtonLine");
  const MenuButtons: Element[] = queryAllByTestId("MenuButtonContainer");
  const SideMenus: Element[] = queryAllByTestId("SideMenu");

  return {
    ...utils,
    Backdrop,
    Buttons,
    HeaderMobileContainer,
    HeaderTabletContainer,
    MenuButtonLines,
    MenuButtons,
    SideMenus
  };
}
