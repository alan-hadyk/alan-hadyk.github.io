import React from "react";
import {
  RenderResult,
  act,
  fireEvent
} from "@testing-library/react";

import HeaderTablet from "<organisms>/Header/HeaderTablet";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { HeaderMobileProps }  from "<organisms>/__typings__/Header/HeaderMobile.d.ts";

jest.mock("<hooks>/useIntersectionObserver");

describe("organisms / HeaderTablet", () => {
  test("should have correct structure", () => {
    const {
      HeaderTabletContainer,
      HeaderTabletFlexContainer,
      MenuButton,
      Nav,
      SideMenu
    } = setup();

    expect(HeaderTabletContainer.children[0]).toEqual(HeaderTabletFlexContainer);
    expect(HeaderTabletFlexContainer.children[0]).toEqual(Nav);
    expect(HeaderTabletFlexContainer.children[1]).toEqual(MenuButton);
    expect(HeaderTabletFlexContainer.children[2]).toEqual(SideMenu);
  });
  
  describe("HeaderTabletContainer", () => {
    describe("Props", () => {
      describe("devices", () => {      
        describe("should have mobile", () => {
          test("should have display none when min-width is equal 1680px", () => {
            const { HeaderTabletContainer } = setup();
      
            expect(HeaderTabletContainer).toHaveStyleRule("display", "none", {
              media: "(min-width:1680px)"
            });
          });

          test("should have display none when max-width is equal 1280px", () => {
            const { HeaderTabletContainer } = setup();
      
            expect(HeaderTabletContainer).toHaveStyleRule("display", "none", {
              media: "(max-width:1280px)"
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
          const { HeaderTabletFlexContainer } = setup();
    
          expect(HeaderTabletFlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("gap", () => {
        test("should have margin-left: 4.8rem for all children (except first)", () => {
          const { HeaderTabletFlexContainer } = setup();

          expect(HeaderTabletFlexContainer).toHaveStyleRule("margin-left", "4.8rem", {
            modifier: "& > *"
          });
          expect(HeaderTabletFlexContainer).toHaveStyleRule("margin-left", "0", {
            modifier: "& > *:first-child"
          });
        });
      });

      describe("height", () => {      
        test("should have 4.8rem", () => {
          const { HeaderTabletFlexContainer } = setup();
    
          expect(HeaderTabletFlexContainer).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("justify-content", () => {      
        test("should have flex-start", () => {
          const { HeaderTabletFlexContainer } = setup();
    
          expect(HeaderTabletFlexContainer).toHaveStyleRule("justify-content", "flex-start");
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
  HeaderTabletContainer: Element;
  HeaderTabletFlexContainer: Element;
  MenuButton: Element;
  Nav: Element;
  SideMenu: Element;
}

type HeaderTabletTestProps = Partial<HeaderMobileProps>;

function setup(additionalProps?: HeaderTabletTestProps): Setup {
  const props: HeaderMobileProps = {
    isMenuVisible: false,
    onClick: jest.fn(),
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <HeaderTablet {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};

  const HeaderTabletContainer: Element = queryByTestId("HeaderTablet");
  const HeaderTabletFlexContainer: Element = queryByTestId("HeaderTabletFlexContainer");
  const MenuButton: Element = queryByTestId("MenuButtonContainer");
  const Nav: Element = queryAllByTestId("Nav")[0];
  const SideMenu: Element = queryByTestId("SideMenu");

  return {
    ...utils,
    HeaderTabletContainer,
    HeaderTabletFlexContainer,
    MenuButton,
    Nav,
    SideMenu
  };
}
