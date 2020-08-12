import React from "react";
import {
  RenderResult,
  act,
  fireEvent
} from "@testing-library/react";

import HeaderMobile from "<organisms>/Header/HeaderMobile";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { HeaderMobileProps }  from "<organisms>/__typings__/Header/HeaderMobile.d.ts";

jest.mock("<hooks>/useIntersectionObserver");

describe("organisms / HeaderMobile", () => {
  test("should have correct structure when is true", () => {
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

  test("should have correct structure when is false", () => {
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
  });

  describe("SideMenu", () => {
    describe("Props", () => {
      describe("isExpanded", () => {
        describe("transform", () => {
          test("should have translateX(0) if isMenuVisible props is true", () => {
            const { SideMenu } = setup({
              isMenuVisible: true
            });
      
            expect(SideMenu).toHaveStyleRule("transform", "translateX(0)");
          });
  
  
          test("should have translateX(100%) if isMenuVisible props is false", () => {
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

  const { queryByTestId } = utils || {};

  const Backdrop: Element = queryByTestId("Backdrop");
  const HeaderMobileContainer: Element = queryByTestId("HeaderMobile");
  const MenuButton: Element = queryByTestId("MenuButtonContainer");
  const SideMenu: Element = queryByTestId("SideMenu");

  return {
    ...utils,
    Backdrop,
    HeaderMobileContainer,
    MenuButton,
    SideMenu
  };
}
