import React from "react";
import {
  act,
  fireEvent, 
  RenderResult
} from "@testing-library/react";

import Header from "<organisms>/Header";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<hooks>/useIntersectionObserver");

import { HeaderProps }  from "<organisms>/Header/__typings__/Header.d.ts";

describe("organisms / Header", () => {
  test("should have correct structure", () => {
    const {
      HeaderContainer,
      HeaderDesktop,
      HeaderInnerContainer,
      HeaderInnerFlexContainer,
      HeaderMobile,
      HeaderOuterFlexContainer,
      HeaderTablet,
      HeaderTv,
      LinksWithIcons,
      PositionContainer,
      ResponsiveDesktop,
      ResponsiveMobile,
      ResponsiveTablet,
      ResponsiveTv
    } = setup();

    expect(PositionContainer.children[0]).toEqual(HeaderContainer);

    expect(HeaderContainer.children[0]).toEqual(HeaderOuterFlexContainer);

    expect(HeaderOuterFlexContainer.children[0]).toEqual(HeaderInnerContainer);

    expect(HeaderInnerContainer.children[0]).toEqual(HeaderInnerFlexContainer);

    expect(HeaderInnerFlexContainer.children[0]).toEqual(ResponsiveTv);
    expect(ResponsiveTv.children[0]).toEqual(LinksWithIcons[0]);

    expect(HeaderInnerFlexContainer.children[1]).toEqual(ResponsiveDesktop);
    expect(ResponsiveDesktop.children[0]).toEqual(LinksWithIcons[1]);

    expect(HeaderInnerFlexContainer.children[2]).toEqual(ResponsiveTablet);
    expect(ResponsiveTablet.children[0]).toEqual(LinksWithIcons[2]);

    expect(HeaderInnerFlexContainer.children[3]).toEqual(ResponsiveMobile);
    expect(ResponsiveMobile.children[0]).toEqual(LinksWithIcons[3]);

    expect(HeaderInnerFlexContainer.children[4]).toEqual(HeaderTv);
    expect(HeaderInnerFlexContainer.children[5]).toEqual(HeaderDesktop);
    expect(HeaderInnerFlexContainer.children[6]).toEqual(HeaderTablet);
    expect(HeaderInnerFlexContainer.children[7]).toEqual(HeaderMobile);
  });

  describe("PositionContainer", () => {
    describe("Props", () => {
      describe("left", () => {      
        test("should have 0", () => {
          const { PositionContainer } = setup();
    
          expect(PositionContainer).toHaveStyleRule("left", "0");
        });
      });

      describe("position", () => {      
        test("should have fixed", () => {
          const { PositionContainer } = setup();
    
          expect(PositionContainer).toHaveStyleRule("position", "fixed");
        });
      });

      describe("right", () => {      
        test("should have 0", () => {
          const { PositionContainer } = setup();
    
          expect(PositionContainer).toHaveStyleRule("right", "0");
        });
      });

      describe("top", () => {      
        test("should have 0", () => {
          const { PositionContainer } = setup();
    
          expect(PositionContainer).toHaveStyleRule("top", "0");
        });
      });

      describe("z-index", () => {      
        test("should have 100 by default", () => {
          const { PositionContainer } = setup();
    
          expect(PositionContainer).toHaveStyleRule("z-index", "100");
        });

        test("should have correct value passed via zIndex props", () => {
          const { PositionContainer } = setup({
            zIndex: "layer4"
          });
    
          expect(PositionContainer).toHaveStyleRule("z-index", "400");
        });
      });
    });
  });

  describe("HeaderContainer", () => {
    describe("Styles", () => {
      describe("background-color", () => {      
        test("should have rgba(34,39,42,0.75)", () => {
          const { HeaderContainer } = setup();
    
          expect(HeaderContainer).toHaveStyleRule("background-color", "rgba(34,39,42,0.75)");
        });
      });

      describe("border-bottom", () => {      
        test("should have 1px solid rgba(120,176,181,0.5)", () => {
          const { HeaderContainer } = setup();
    
          expect(HeaderContainer).toHaveStyleRule("border-bottom", "1px solid rgba(120,176,181,0.5)");
        });
      });

      describe("height", () => {      
        test("should have 9.6rem", () => {
          const { HeaderContainer } = setup();
    
          expect(HeaderContainer).toHaveStyleRule("height", "9.6rem");
        });
      });
    });
  });

  describe("HeaderInnerContainer", () => {
    describe("Styles", () => {
      describe("max-width", () => {      
        test("should have 1920px", () => {
          const { HeaderInnerContainer } = setup();
    
          expect(HeaderInnerContainer).toHaveStyleRule("max-width", "1920px");
        });
      });

      describe("padding", () => {      
        test("should have 2.4rem 4.8rem", () => {
          const { HeaderInnerContainer } = setup();
    
          expect(HeaderInnerContainer).toHaveStyleRule("padding", "2.4rem 4.8rem");
        });
      });

      describe("width", () => {      
        test("should have 100%", () => {
          const { HeaderInnerContainer } = setup();
    
          expect(HeaderInnerContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("FlexContainers", () => {
    describe("HeaderOuterFlexContainer", () => {
      describe("Props", () => {
        describe("flex-flow", () => {      
          test("should have row nowrap", () => {
            const { HeaderOuterFlexContainer } = setup();
      
            expect(HeaderOuterFlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });
      });
    });

    describe("HeaderInnerFlexContainer", () => {
      describe("Props", () => {
        describe("flex-flow", () => {      
          test("should have row nowrap", () => {
            const { HeaderInnerFlexContainer } = setup();
      
            expect(HeaderInnerFlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });
  
        describe("height", () => {      
          test("should have 4.8rem", () => {
            const { HeaderInnerFlexContainer } = setup();
      
            expect(HeaderInnerFlexContainer).toHaveStyleRule("height", "4.8rem");
          });
        });
  
        describe("justify-content", () => {      
          test("should have space-between", () => {
            const { HeaderInnerFlexContainer } = setup();
      
            expect(HeaderInnerFlexContainer).toHaveStyleRule("justify-content", "space-between");
          });
        });
      });
    });
  });

  describe("LinksWithIcons", () => {
    describe("LinksWithIcons[0]", () => {
      describe("Props", () => {
        describe("href", () => {
          test("should have correct href", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[0].getAttribute("href")).toEqual("http://localhost/");
          });
        });
  
        describe("height", () => {
          test("should have 4.8rem", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[0]).toHaveStyleRule("height", "4.8rem");
          });
        });
  
        describe("iconName", () => {
          test("should have logo", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[0].textContent).toEqual("Icon-Logo.svg");
          });
        });
  
        describe("width", () => {
          test("should have 24.8rem", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[0].children[0]).toHaveStyleRule("width", "24.8rem");
          });
        });
      });
    });

    describe("LinksWithIcons[1]", () => {
      describe("Props", () => {
        describe("href", () => {
          test("should have correct href", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[1].getAttribute("href")).toEqual("http://localhost/");
          });
        });
  
        describe("height", () => {
          test("should have 4.8rem", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[1]).toHaveStyleRule("height", "4.8rem");
          });
        });
  
        describe("iconName", () => {
          test("should have logo", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[1].textContent).toEqual("Icon-Logo.svg");
          });
        });
  
        describe("width", () => {
          test("should have 24.8rem", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[1].children[0]).toHaveStyleRule("width", "24.8rem");
          });
        });
      });
    });

    describe("LinksWithIcons[2]", () => {
      describe("Props", () => {
        describe("href", () => {
          test("should have correct href", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[2].getAttribute("href")).toEqual("http://localhost/");
          });
        });
  
        describe("height", () => {
          test("should have 4.8rem", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[2]).toHaveStyleRule("height", "4.8rem");
          });
        });
  
        describe("iconName", () => {
          test("should have logo", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[2].textContent).toEqual("Icon-Logo.svg");
          });
        });
  
        describe("width", () => {
          test("should have 24.8rem", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[2].children[0]).toHaveStyleRule("width", "24.8rem");
          });
        });
      });
    });

    describe("LinksWithIcons[3]", () => {
      describe("Props", () => {
        describe("href", () => {
          test("should have correct href", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[3].getAttribute("href")).toEqual("http://localhost/");
          });
        });
  
        describe("iconName", () => {
          test("should have logo shortcut", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[3].textContent).toEqual("Icon-Logo-Shortcut.svg");
          });
        });
  
        describe("width", () => {
          test("should have 6.4rem", () => {
            const { LinksWithIcons } = setup();
      
            expect(LinksWithIcons[3].children[0]).toHaveStyleRule("width", "6.4rem");
          });
        });
      });
    });
  });

  describe("HeaderDesktop", () => {
    describe("Props", () => {
      describe("isMenuVisible", () => {
        describe("should have false by default", () => {
          test("transform - should have translateX(100%)", () => {
            const { SideMenus } = setup();
      
            expect(SideMenus[0]).toHaveStyleRule("transform", "translateX(100%)");
          });
        });

        describe("should have true if menu button is clicked", () => {
          test("transform - should have translateX(0)", () => {
            const { MenuButtons, SideMenus } = setup();

            expect(SideMenus[0]).toHaveStyleRule("transform", "translateX(100%)");

      
            act(() => {
              fireEvent.click(MenuButtons[0]);
            });
      
            expect(SideMenus[0]).toHaveStyleRule("transform", "translateX(0)");
          });
        });
      });
    });
  });

  describe("HeaderTablet", () => {
    describe("Props", () => {
      describe("isMenuVisible", () => {
        describe("should have false by default", () => {
          test("transform - should have translateX(100%)", () => {
            const { SideMenus } = setup();
      
            expect(SideMenus[1]).toHaveStyleRule("transform", "translateX(100%)");
          });
        });

        describe("should have true if menu button is clicked", () => {
          test("transform - should have translateX(0)", () => {
            const { MenuButtons, SideMenus } = setup();

            expect(SideMenus[1]).toHaveStyleRule("transform", "translateX(100%)");

      
            act(() => {
              fireEvent.click(MenuButtons[1]);
            });
      
            expect(SideMenus[1]).toHaveStyleRule("transform", "translateX(0)");
          });
        });
      });
    });
  });

  describe("HeaderMobile", () => {
    describe("Props", () => {
      describe("isMenuVisible", () => {
        describe("should have false by default", () => {
          test("transform - should have translateX(100%)", () => {
            const { SideMenus } = setup();
      
            expect(SideMenus[2]).toHaveStyleRule("transform", "translateX(100%)");
          });
        });

        describe("should have true if menu button is clicked", () => {
          test("transform - should have translateX(0)", () => {
            const { MenuButtons, SideMenus } = setup();

            expect(SideMenus[2]).toHaveStyleRule("transform", "translateX(100%)");

      
            act(() => {
              fireEvent.click(MenuButtons[2]);
            });
      
            expect(SideMenus[2]).toHaveStyleRule("transform", "translateX(0)");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HeaderContainer: Element;
  HeaderDesktop: Element;
  HeaderInnerContainer: Element;
  HeaderInnerFlexContainer: Element;
  HeaderMobile: Element;
  HeaderOuterFlexContainer: Element;
  HeaderTablet: Element;
  HeaderTv: Element;
  LinksWithIcons: Element[];
  MenuButtons: Element[];
  PositionContainer: Element;
  ResponsiveDesktop: Element;
  ResponsiveMobile: Element;
  ResponsiveTablet: Element;
  ResponsiveTv: Element;
  SideMenus: Element[];
}

type HeaderTestProps = Partial<HeaderProps>;

function setup(additionalProps?: HeaderTestProps): Setup {
  const props: HeaderProps = {
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Header {...props} />
  );

  const {
    queryAllByTestId
  } = utils || {};

  
  const HeaderContainer: Element = queryAllByTestId("HeaderContainer")[0];
  const HeaderInnerContainer: Element = queryAllByTestId("HeaderInnerContainer")[0];
  const HeaderInnerFlexContainer: Element = queryAllByTestId("HeaderInnerFlexContainer")[0];
  const HeaderDesktop: Element = queryAllByTestId("HeaderDesktop")[0];
  const HeaderOuterFlexContainer: Element = queryAllByTestId("HeaderOuterFlexContainer")[0];
  const HeaderMobile: Element = queryAllByTestId("HeaderMobile")[0];
  const HeaderTablet: Element = queryAllByTestId("HeaderTablet")[0];
  const HeaderTv: Element = queryAllByTestId("HeaderTv")[0];
  const LinksWithIcons: Element[] = queryAllByTestId("LinkWithIcon");
  const MenuButtons: Element[] = queryAllByTestId("MenuButtonContainer");
  const PositionContainer: Element = queryAllByTestId("HeaderPositionContainer")[0];
  const ResponsiveDesktop: Element = queryAllByTestId("ResponsiveDesktop")[0];
  const ResponsiveMobile: Element = queryAllByTestId("ResponsiveMobile")[0];
  const ResponsiveTablet: Element = queryAllByTestId("ResponsiveTablet")[0];
  const ResponsiveTv: Element = queryAllByTestId("ResponsiveTv")[0];
  const SideMenus: Element[] = queryAllByTestId("SideMenu");
  
  return {
    ...utils,
    HeaderContainer,
    HeaderDesktop,
    HeaderInnerContainer,
    HeaderInnerFlexContainer,
    HeaderMobile,
    HeaderOuterFlexContainer,
    HeaderTablet,
    HeaderTv,
    LinksWithIcons,
    MenuButtons,
    PositionContainer,
    ResponsiveDesktop,
    ResponsiveMobile,
    ResponsiveTablet,
    ResponsiveTv,
    SideMenus
  };
}
