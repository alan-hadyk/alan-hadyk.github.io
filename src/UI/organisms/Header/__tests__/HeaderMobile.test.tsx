import React from "react";
import {
  RenderResult,
  act,
  fireEvent
} from "@testing-library/react";

import HeaderMobile from "<organisms>/Header/HeaderMobile";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { HeaderMobileProps }  from "<organisms>/Header/__typings__/HeaderMobile.d.ts";

jest.mock("<hooks>/useIntersectionObserver");

describe("organisms / HeaderMobile", () => {
  test("should have correct structure if isMenuVisible is true", () => {
    const {
      Backdrop,
      MenuButton,
      HeaderMobileContainer,
      SideMenu
    } = setup({
      isMenuVisible: true
    });

    expect(HeaderMobileContainer.children[0]).toEqual(MenuButton);
    expect(HeaderMobileContainer.children[1]).toEqual(Backdrop);
    expect(HeaderMobileContainer.children[2]).toEqual(SideMenu);
  });

  test("should have correct structure if isMenuVisible is false", () => {
    const {
      MenuButton,
      HeaderMobileContainer,
      SideMenu
    } = setup({
      isMenuVisible: false
    });

    expect(HeaderMobileContainer.children[0]).toEqual(MenuButton);
    expect(HeaderMobileContainer.children[1]).toEqual(SideMenu);
  });

  describe("HeaderMobileContainer", () => {
    describe("Props", () => {
      describe("devices", () => {      
        describe("should have mobile", () => {
          test("should have display none when min-width is equal 1280px", () => {
            const { HeaderMobileContainer } = setup();
      
            expect(HeaderMobileContainer).toHaveStyleRule("display", "none", {
              media: "(min-width:1280px)"
            });
          });
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
                expect(MenuButtonLine).toHaveStyleRule("transform", "rotate(40deg)", {
                  modifier: ":nth-child(2)"
                });
              });
            });
    
            test("should have rotate(-40deg) for the third child", () => {
              _MenuButtonLines.forEach((MenuButtonLine: Element) => {
                expect(MenuButtonLine).toHaveStyleRule("transform", "rotate(-40deg)", {
                  modifier: ":nth-child(3)"
                });
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
                expect(MenuButtonLine).not.toHaveStyleRule("transform", "rotate(40deg)", {
                  modifier: ":nth-child(2)"
                });
              });
            });
    
            test("should not have rotate(-40deg) for the third child", () => {
              _MenuButtonLines.forEach((MenuButtonLine: Element) => {
                expect(MenuButtonLine).not.toHaveStyleRule("transform", "rotate(-40deg)", {
                  modifier: ":nth-child(3)"
                });
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
  HeaderMobileContainer: Element;
  MenuButton: Element;
  MenuButtonLines: Element[];
  SideMenu: Element;
}

type HeaderMobileTestProps = Partial<HeaderMobileProps>;

function setup(additionalProps?: HeaderMobileTestProps): Setup {
  const props: HeaderMobileProps = {
    isMenuVisible: false,
    onClick: jest.fn(),
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <HeaderMobile {...props} />
  );

  const { queryAllByTestId, queryByTestId } = utils || {};

  const Backdrop: Element = queryByTestId("Backdrop");
  const HeaderMobileContainer: Element = queryByTestId("HeaderMobile");
  const MenuButton: Element = queryByTestId("MenuButtonContainer");
  const MenuButtonLines: Element[] = queryAllByTestId("MenuButtonLine");
  const SideMenu: Element = queryByTestId("SideMenu");

  return {
    ...utils,
    Backdrop,
    HeaderMobileContainer,
    MenuButton,
    MenuButtonLines,
    SideMenu
  };
}
