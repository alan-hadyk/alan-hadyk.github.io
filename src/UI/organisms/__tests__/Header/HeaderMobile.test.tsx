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
  test("should have correct structure", () => {
    const {
      ButtonWithIcon,
      ResponsiveMobile,
      SideMenu
    } = setup();

    expect(ResponsiveMobile.children[0]).toEqual(ButtonWithIcon);
    expect(ResponsiveMobile.children[1]).toEqual(SideMenu);
  });

  describe("ButtonWithIcon", () => {
    test("should render", () => {
      const { ButtonWithIcon } = setup();

      expect(ButtonWithIcon).toBeTruthy();
    });

    describe("Props", () => {
      describe("onClick", () => {      
        test("should fire click", () => {
          const onClick = jest.fn();
    
          const { ButtonWithIcon } = setup({
            onClick
          });
    
          expect(onClick).toHaveBeenCalledTimes(0);
    
          act(() => {
            fireEvent.click(ButtonWithIcon);
          });
    
          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });
  });

  describe("SideMenu", () => {
    describe("Props", () => {
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

interface Setup extends RenderResult {
  ButtonWithIcon: Element;
  ResponsiveMobile: Element;
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

  const ButtonWithIcon: Element = queryByTestId("ButtonWithIconContainer");
  const ResponsiveMobile: Element = queryByTestId("ResponsiveMobile");
  const SideMenu: Element = queryByTestId("SideMenu");

  return {
    ...utils,
    ButtonWithIcon,
    ResponsiveMobile,
    SideMenu
  };
}
