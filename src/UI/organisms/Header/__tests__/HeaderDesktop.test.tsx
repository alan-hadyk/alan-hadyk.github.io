import React from "react";
import { RenderResult } from "@testing-library/react";

import HeaderDesktop from "<organisms>/Header/HeaderDesktop";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<hooks>/useIntersectionObserver");

describe("organisms / HeaderDesktop", () => {
  test("should have correct structure", () => {
    const {
      Button,
      HeaderDesktopContainer,
      HeaderDesktopFlexContainer,
      MenuIcons,
      Nav
    } = setup();

    expect(HeaderDesktopContainer.children[0]).toEqual(HeaderDesktopFlexContainer);
    expect(HeaderDesktopFlexContainer.children[0]).toEqual(Nav);
    expect(HeaderDesktopFlexContainer.children[1]).toEqual(Button);
    expect(HeaderDesktopFlexContainer.children[2]).toEqual(MenuIcons[0]);
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("flex-flow", () => {      
        test("should have row nowrap", () => {
          const { HeaderDesktopFlexContainer } = setup();
    
          expect(HeaderDesktopFlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("gap", () => {
        test("should have margin-left: 4.8rem for all children (except first)", () => {
          const { HeaderDesktopFlexContainer } = setup();

          expect(HeaderDesktopFlexContainer).toHaveStyleRule("margin-left", "4.8rem", {
            modifier: "& > *"
          });
          expect(HeaderDesktopFlexContainer).toHaveStyleRule("margin-left", "0", {
            modifier: "& > *:first-child"
          });
        });
      });


      describe("height", () => {      
        test("should have 4.8rem", () => {
          const { HeaderDesktopFlexContainer } = setup();
    
          expect(HeaderDesktopFlexContainer).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("justify-content", () => {      
        test("should have flex-start", () => {
          const { HeaderDesktopFlexContainer } = setup();
    
          expect(HeaderDesktopFlexContainer).toHaveStyleRule("justify-content", "flex-start");
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

      expect(buttonText.textContent).toEqual("resume");
      expect(buttonIcon.textContent).toEqual("Btn-Download.svg");
    });

    describe("Props", () => {
      describe("size", () => {      
        test("height - should have 4.8rem", () => {
          const { Button } = setup();
    
          expect(Button).toHaveStyleRule("height", "4.8rem");
        });

        describe("width - should have auto", () => {      
          const { Button } = setup();

          expect(Button).toHaveStyleRule("width", "auto");
        });
  
        describe("padding - should have 2.4rem", () => {      
          const { Button } = setup();

          expect(Button.children[4].children[0]).toHaveStyleRule("padding-right", "2.4rem");
        });

        describe("icon height - should have 2.4rem", () => {      
          const { Button } = setup();

          expect(Button.children[4].children[0].children[0].children[1]).toHaveStyleRule("height", "2.4rem");
        });
      });
    });
  });

  describe("MenuIcons", () => {
    test("should render", () => {
      const { MenuIcons } = setup();

      expect(MenuIcons).toBeTruthy();
    });
  });
});

interface Setup extends RenderResult {
  Button: Element;
  HeaderDesktopContainer: Element;
  HeaderDesktopFlexContainer: Element;
  MenuIcons: Element[];
  Nav: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <HeaderDesktop />
  );

  const {
    queryAllByTestId
  } = utils || {};

  const Button: Element = queryAllByTestId("Button")[0];
  const HeaderDesktopFlexContainer: Element = queryAllByTestId("HeaderDesktopFlexContainer")[0];
  const MenuIcons: Element[] = queryAllByTestId("MenuIcons");
  const Nav: Element = queryAllByTestId("Nav")[0];
  const HeaderDesktopContainer: Element = queryAllByTestId("HeaderDesktop")[0];

  return {
    ...utils,
    Button,
    HeaderDesktopContainer,
    HeaderDesktopFlexContainer,
    MenuIcons,
    Nav
  };
}
