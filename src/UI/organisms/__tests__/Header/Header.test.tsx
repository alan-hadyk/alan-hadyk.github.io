import React from "react";
import { RenderResult } from "@testing-library/react";

import Header from "<organisms>/Header/Header";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<hooks>/useIntersectionObserver");

import { HeaderProps }  from "<organisms>/__typings__/Header.d.ts";

describe("organisms / Header", () => {
  test("should have correct structure", () => {
    const {
      HeaderContainer,
      HeaderInnerContainer,
      HeaderInnerFlexContainer,
      HeaderOuterFlexContainer,
      LinkWithIcon,
      PositionContainer,
      ResponsiveDesktop,
      ResponsiveMobile,
      ResponsiveTablet
    } = setup();

    expect(PositionContainer.children[0]).toEqual(HeaderContainer);

    expect(HeaderContainer.children[0]).toEqual(HeaderOuterFlexContainer);

    expect(HeaderOuterFlexContainer.children[0]).toEqual(HeaderInnerContainer);

    expect(HeaderInnerContainer.children[0]).toEqual(HeaderInnerFlexContainer);
    expect(HeaderInnerFlexContainer.children[0]).toEqual(LinkWithIcon);
    expect(HeaderInnerFlexContainer.children[1]).toEqual(ResponsiveDesktop);
    expect(HeaderInnerFlexContainer.children[2]).toEqual(ResponsiveTablet);
    expect(HeaderInnerFlexContainer.children[3]).toEqual(ResponsiveMobile);
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

        test("should have value equal to zIndex prop", () => {
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

  describe("LinkWithIcon", () => {    
    describe("Props", () => {
      describe("href", () => {
        test("should have correct href", () => {
          const { LinkWithIcon } = setup();
    
          expect(LinkWithIcon.getAttribute("href")).toEqual("http://localhost/");
        });
      });

      describe("height", () => {
        test("should have 4.8rem", () => {
          const { LinkWithIcon } = setup();
    
          expect(LinkWithIcon).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("iconName", () => {
        test("should have logo", () => {
          const { LinkWithIcon } = setup();
    
          expect(LinkWithIcon.textContent).toEqual("Icon-Logo.svg");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HeaderContainer: Element;
  HeaderInnerContainer: Element;
  HeaderInnerFlexContainer: Element;
  HeaderOuterFlexContainer: Element;
  LinkWithIcon: Element;
  PositionContainer: Element;
  ResponsiveDesktop: Element;
  ResponsiveMobile: Element;
  ResponsiveTablet: Element;
}

type HeaderTestProps = Partial<HeaderProps>;

function setup(additionalProps?: HeaderTestProps): Setup {
  const props: HeaderProps = {
    zIndex: "layer1",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Header {...props} />
  );

  const {
    queryAllByTestId,
    queryByTestId
  } = utils || {};

  
  const HeaderContainer: Element = queryByTestId("HeaderContainer");
  const HeaderInnerContainer: Element = queryByTestId("HeaderInnerContainer");
  const HeaderInnerFlexContainer: Element = queryByTestId("HeaderInnerFlexContainer");
  const HeaderOuterFlexContainer: Element = queryByTestId("HeaderOuterFlexContainer");
  const LinkWithIcon: Element = queryByTestId("LinkWithIcon");
  const PositionContainer: Element = queryAllByTestId("PositionContainer")[0];
  const ResponsiveDesktop: Element = queryByTestId("ResponsiveDesktop");
  const ResponsiveMobile: Element = queryByTestId("ResponsiveMobile");
  const ResponsiveTablet: Element = queryByTestId("ResponsiveTablet");

  return {
    ...utils,
    HeaderContainer,
    HeaderInnerContainer,
    HeaderInnerFlexContainer,
    HeaderOuterFlexContainer,
    LinkWithIcon,
    PositionContainer,
    ResponsiveDesktop,
    ResponsiveMobile,
    ResponsiveTablet
  };
}
