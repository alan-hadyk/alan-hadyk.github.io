import React from "react";
import { RenderResult } from "@testing-library/react";

import SideMenu from "<molecules>/SideMenu";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  SideMenuProps
} from "<molecules>/__typings__/SideMenu.d.ts";

jest.mock("<hooks>/useIntersectionObserver");

describe("molecules / SideMenu", () => {
  test("should have correct structure for tablet view", () => {
    const {
      Button,
      MenuIcons,
      SideMenuContainer,
      SideMenuInnerFlexContainer,
      SideMenuInnerSpacingContainer,
      SideMenuOuterFlexContainer,
      SideMenuOuterSpacingContainer
    } = setup({
      device: "tablet"
    });

    expect(SideMenuContainer.children[0]).toEqual(SideMenuOuterSpacingContainer);
    expect(SideMenuOuterSpacingContainer.children[0]).toEqual(SideMenuOuterFlexContainer);
    expect(SideMenuOuterFlexContainer.children[0]).toEqual(Button);
    expect(SideMenuOuterFlexContainer.children[1]).toEqual(SideMenuInnerSpacingContainer);
    expect(SideMenuInnerSpacingContainer.children[0]).toEqual(SideMenuInnerFlexContainer);
    expect(SideMenuInnerFlexContainer.children[0]).toEqual(MenuIcons[0]);
  });

  test("should have correct structure for mobile view", () => {
    const {
      Button,
      MenuIcons,
      Nav,
      SideMenuContainer,
      SideMenuInnerFlexContainer,
      SideMenuInnerSpacingContainer,
      SideMenuMobileFlexContainer,
      SideMenuMobileSpacingContainer,
      SideMenuOuterFlexContainer,
      SideMenuOuterSpacingContainer
    } = setup({
      device: "mobile"
    });

    expect(SideMenuContainer.children[0]).toEqual(SideMenuOuterSpacingContainer);
    expect(SideMenuOuterSpacingContainer.children[0]).toEqual(SideMenuMobileFlexContainer);
    expect(SideMenuMobileFlexContainer.children[0]).toEqual(SideMenuMobileSpacingContainer);
    expect(SideMenuMobileSpacingContainer.children[0]).toEqual(Nav);

    expect(SideMenuOuterFlexContainer.children[0]).toEqual(Button);
    expect(SideMenuOuterFlexContainer.children[1]).toEqual(SideMenuInnerSpacingContainer);
    expect(SideMenuInnerSpacingContainer.children[0]).toEqual(SideMenuInnerFlexContainer);
    expect(SideMenuInnerFlexContainer.children[0]).toEqual(MenuIcons[0]);
  });

  describe("SideMenu", () => {
    describe("Styles", () => {
      describe("background-color", () => { 
        test("should have rgba(30, 34, 36, .8)", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("background-color", "rgba(30,34,36,.8)");
        });
      });

      describe("border-left", () => { 
        test("should have 1px solid #78b0b5", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("border-left", "1px solid #78b0b5");
        });
      });

      describe("height", () => { 
        test("should have 100%", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("position", () => { 
        test("should have fixed", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("position", "fixed");
        });
      });

      describe("right", () => { 
        test("should have 0", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("right", "0");
        });
      });

      describe("top", () => { 
        test("should have 0", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("top", "0");
        });
      });

      describe("transform", () => { 
        test("should have translateX(0) when is expanded", () => {
          const { SideMenuContainer } = setup({
            isExpanded: true
          });

          expect(SideMenuContainer).toHaveStyleRule("transform", "translateX(0)");
        });

        test("should have translateX(100%) when is not expanded", () => {
          const { SideMenuContainer } = setup({
            isExpanded: false
          });

          expect(SideMenuContainer).toHaveStyleRule("transform", "translateX(100%)");
        });
      });

      describe("transition", () => {
        test("should have all 150ms ease-in-out", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("transition", "all 150ms ease-in-out");
        });
      });

      describe("width", () => {
        test("should have 28rem", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("width", "28rem");
        });
      });

      describe("z-index", () => {
        test("should have 1000", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("z-index", "1000");
        });
      });

      describe("opacity", () => {
        test("should have 1", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("opacity", "1", {
            modifier: "*"
          });
        });
      });
    });
  });

  describe("SpacingContainers", () => {
    describe("SideMenuOuterSpacingContainer", () => {
      describe("Props", () => {
        describe("paddingTop", () => { 
          test("should have 9.6rem", () => {
            const { SideMenuOuterSpacingContainer } = setup();
  
            expect(SideMenuOuterSpacingContainer).toHaveStyleRule("padding-top", "9.6rem");
          });
        });
      });
    });

    describe("SideMenuMobileSpacingContainer", () => {
      describe("Props", () => {
        describe("marginBottom", () => { 
          test("should have 2.4rem", () => {
            const { SideMenuMobileSpacingContainer } = setup({
              device: "mobile"
            });
  
            expect(SideMenuMobileSpacingContainer).toHaveStyleRule("margin-bottom", "2.4rem");
          });
        });
      });
    });

    describe("SideMenuInnerSpacingContainer", () => {
      describe("Props", () => {
        describe("paddingTop", () => { 
          test("should have 2.4rem", () => {
            const { SideMenuInnerSpacingContainer } = setup();
  
            expect(SideMenuInnerSpacingContainer).toHaveStyleRule("padding-top", "2.4rem");
          });
        });
      });
    });
  });

  describe("FlexContainers", () => {
    describe("SideMenuMobileFlexContainer", () => {
      describe("Props", () => {
        describe("Props", () => {
          describe("flexFlow", () => {
            test("should have row wrap", () => {
              const { SideMenuMobileFlexContainer } = setup({
                device: "mobile"
              });
      
              expect(SideMenuMobileFlexContainer).toHaveStyleRule("flex-flow", "row wrap");
            });
          });

          describe("height", () => {
            test("should have 100%", () => {
              const { SideMenuMobileFlexContainer } = setup({
                device: "mobile"
              });
      
              expect(SideMenuMobileFlexContainer).toHaveStyleRule("height", "100%");
            });
          });

          describe("justifyContent", () => {
            test("should have center", () => {
              const { SideMenuMobileFlexContainer } = setup({
                device: "mobile"
              });
      
              expect(SideMenuMobileFlexContainer).toHaveStyleRule("justify-content", "center");
            });
          });
        });
      });
    });

    describe("SideMenuOuterFlexContainer", () => {
      describe("Props", () => {
        describe("Props", () => {
          describe("flexFlow", () => {
            test("should have column nowrap", () => {
              const { SideMenuOuterFlexContainer } = setup();
      
              expect(SideMenuOuterFlexContainer).toHaveStyleRule("flex-flow", "column nowrap");
            });
          });

          describe("justifyContent", () => {
            test("should have center", () => {
              const { SideMenuOuterFlexContainer } = setup();
      
              expect(SideMenuOuterFlexContainer).toHaveStyleRule("justify-content", "center");
            });
          });
        });
      });
    });

    describe("SideMenuInnerFlexContainer", () => {
      describe("Props", () => {
        describe("Props", () => {
          describe("flexFlow", () => {
            test("should have row nowrap", () => {
              const { SideMenuInnerFlexContainer } = setup();
      
              expect(SideMenuInnerFlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
            });
          });

          describe("gap", () => {
            test("should have margin-left: 2.4rem for all children (except first)", () => {
              const { SideMenuInnerFlexContainer } = setup();
  
              expect(SideMenuInnerFlexContainer).toHaveStyleRule("margin-left", "2.4rem", {
                modifier: "& > *"
              });
              expect(SideMenuInnerFlexContainer).toHaveStyleRule("margin-left", "0", {
                modifier: "& > *:first-child"
              });
            });
          });
        });
      });
    });
  });

  describe("Nav", () => {
    describe("Props", () => {
      describe("position", () => {      
        test("should have vertical", () => {
          const { Nav } = setup();
    
          expect(Nav).toHaveStyleRule("align-items", "flex-end");
        });
      });
    });
  });

  describe("Button", () => {
    describe("Props", () => {
      describe("buttonText", () => {     
        test("should have resume", () => {
          const { Button } = setup();

          const buttonText = Button.querySelector("[font-family=\"Exan\"]");
          
          expect(buttonText.textContent).toEqual("resume");
        });
      });
      
      describe("iconName", () => {     
        test("should have Btn-Download.svg", () => {
          const { Button } = setup();
          
          const buttonIcon = Button.querySelector("svg");
    
          expect(buttonIcon.textContent).toEqual("Btn-Download.svg");
        });
      });
    });
  });

  describe("MenuIcons", () => {
    describe("Props", () => {
      test("there should be 3 icons", () => {
        const { MenuIcons } = setup();
  
        expect(MenuIcons.length).toEqual(3);
      });
  
      test("MenuIcons should render correct SVGs", () => {
        const { MenuIcons } = setup();
  
        expect(MenuIcons[0].children[0].textContent).toEqual("Icon-GitHub.svg");
        expect(MenuIcons[1].children[0].textContent).toEqual("Icon-CodeSandbox.svg");
        expect(MenuIcons[2].children[0].textContent).toEqual("Icon-LinkedIn.svg");
      });
    });
  });
});

interface Setup extends RenderResult {
  Button: Element;
  MenuIcons: Element[];
  Nav: Element;
  SideMenuContainer: Element;
  SideMenuInnerFlexContainer: Element;
  SideMenuInnerSpacingContainer: Element;
  SideMenuMobileFlexContainer: Element;
  SideMenuMobileSpacingContainer: Element;
  SideMenuOuterFlexContainer: Element;
  SideMenuOuterSpacingContainer: Element;
}

type SideMenuTestProps = Partial<SideMenuProps>;

function setup(additionalProps?: SideMenuTestProps): Setup {
  const props: SideMenuProps = {
    device: "mobile",
    isExpanded: false,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <SideMenu {...props} />
  );

  const { queryAllByTestId, queryByTestId }: RenderResult = utils;

  const Button: Element = queryByTestId("Button");
  const MenuIcons: Element[] = queryAllByTestId("MenuIcons");
  const Nav: Element = queryByTestId("Nav");
  const SideMenuContainer: Element = queryByTestId("SideMenu");
  const SideMenuMobileFlexContainer: Element = queryByTestId("SideMenuMobileFlexContainer");
  const SideMenuOuterFlexContainer: Element = queryByTestId("SideMenuOuterFlexContainer");
  const SideMenuInnerFlexContainer: Element = queryByTestId("SideMenuInnerFlexContainer");
  const SideMenuInnerSpacingContainer: Element = queryByTestId("SideMenuInnerSpacingContainer");
  const SideMenuMobileSpacingContainer: Element = queryByTestId("SideMenuMobileSpacingContainer");
  const SideMenuOuterSpacingContainer: Element = queryByTestId("SideMenuOuterSpacingContainer");

  return {
    ...utils,
    Button,
    MenuIcons,
    Nav,
    SideMenuContainer,
    SideMenuInnerFlexContainer,
    SideMenuInnerSpacingContainer,
    SideMenuMobileFlexContainer,
    SideMenuMobileSpacingContainer,
    SideMenuOuterFlexContainer,
    SideMenuOuterSpacingContainer
  };
}
