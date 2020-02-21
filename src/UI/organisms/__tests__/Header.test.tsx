import React from "react";
import { RenderResult } from "@testing-library/react";

import Header, { HeaderProps } from "<organisms>/Header";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<src>/hooks/useIntersectionObserver");

describe("organisms / Header", () => {
  test("should have correct structure", () => {
    const {
      container,
      Button,
      HeaderContainer,
      HeaderInnerContainer,
      InnerFlexContainer,
      Logo,
      MidFlexContainer,
      Nav,
      OuterFlexContainer,
      PositionContainer,
      SpacingContainer
    } = setup();

    expect(container.children[0]).toEqual(PositionContainer);

    expect(PositionContainer.children[0]).toEqual(HeaderContainer);

    expect(HeaderContainer.children[0]).toEqual(OuterFlexContainer);

    expect(OuterFlexContainer.children[0]).toEqual(HeaderInnerContainer);

    expect(HeaderInnerContainer.children[0]).toEqual(MidFlexContainer);

    expect(MidFlexContainer.children[0]).toEqual(Logo);
    expect(MidFlexContainer.children[1]).toEqual(InnerFlexContainer);

    expect(InnerFlexContainer.children[0]).toEqual(SpacingContainer);
    expect(InnerFlexContainer.children[1]).toEqual(Button);

    expect(SpacingContainer.children[0]).toEqual(Nav);
  });

  describe("PositionContainer", () => {
    describe("Styles", () => {
      describe("left", () => {      
        test("should have 0 by default", () => {
          const { PositionContainer } = setup();
    
          expect(PositionContainer).toHaveStyleRule("left", "0");
        });
      });

      describe("position", () => {      
        test("should have fixed by default", () => {
          const { PositionContainer } = setup();
    
          expect(PositionContainer).toHaveStyleRule("position", "fixed");
        });
      });

      describe("right", () => {      
        test("should have 0 by default", () => {
          const { PositionContainer } = setup();
    
          expect(PositionContainer).toHaveStyleRule("right", "0");
        });
      });

      describe("top", () => {      
        test("should have 0 by default", () => {
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
        test("should have rgba(34,39,42,0.75) by default", () => {
          const { HeaderContainer } = setup();
    
          expect(HeaderContainer).toHaveStyleRule("background-color", "rgba(34,39,42,0.75)");
        });
      });

      describe("border-bottom", () => {      
        test("should have 1px solid rgba(120,176,181,0.5) by default", () => {
          const { HeaderContainer } = setup();
    
          expect(HeaderContainer).toHaveStyleRule("border-bottom", "1px solid rgba(120,176,181,0.5)");
        });
      });

      describe("height", () => {      
        test("should have 9.6rem by default", () => {
          const { HeaderContainer } = setup();
    
          expect(HeaderContainer).toHaveStyleRule("height", "9.6rem");
        });
      });
    });
  });

  describe("OuterFlexContainer", () => {
    describe("Styles", () => {
      describe("flex-flow", () => {      
        test("should have row nowrap by default", () => {
          const { OuterFlexContainer } = setup();
    
          expect(OuterFlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });
    });
  });

  describe("HeaderInnerContainer", () => {
    describe("Styles", () => {
      describe("max-width", () => {      
        test("should have 1920px by default", () => {
          const { HeaderInnerContainer } = setup();
    
          expect(HeaderInnerContainer).toHaveStyleRule("max-width", "1920px");
        });
      });

      describe("padding", () => {      
        test("should have 2.4rem 4.8rem by default", () => {
          const { HeaderInnerContainer } = setup();
    
          expect(HeaderInnerContainer).toHaveStyleRule("padding", "2.4rem 4.8rem");
        });
      });

      describe("width", () => {      
        test("should have 100% by default", () => {
          const { HeaderInnerContainer } = setup();
    
          expect(HeaderInnerContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("MidFlexContainer", () => {
    describe("Styles", () => {
      describe("flex-flow", () => {      
        test("should have row nowrap by default", () => {
          const { MidFlexContainer } = setup();
    
          expect(MidFlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("height", () => {      
        test("should have 4.8rem by default", () => {
          const { MidFlexContainer } = setup();
    
          expect(MidFlexContainer).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("justify-content", () => {      
        test("should have space-between by default", () => {
          const { MidFlexContainer } = setup();
    
          expect(MidFlexContainer).toHaveStyleRule("justify-content", "space-between");
        });
      });
    });
  });

  describe("InnerFlexContainer", () => {
    describe("Styles", () => {
      describe("flex-flow", () => {      
        test("should have row nowrap by default", () => {
          const { InnerFlexContainer } = setup();
    
          expect(InnerFlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("height", () => {      
        test("should have 4.8rem by default", () => {
          const { InnerFlexContainer } = setup();
    
          expect(InnerFlexContainer).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("justify-content", () => {      
        test("should have flex-start by default", () => {
          const { InnerFlexContainer } = setup();
    
          expect(InnerFlexContainer).toHaveStyleRule("justify-content", "flex-start");
        });
      });
    });
  });

  describe("Logo", () => {
    test("should have correct icon", () => {
      const { Logo } = setup();

      expect(Logo.textContent).toEqual("Logo.svg");
    });
  });

  describe("SpacingContainer", () => {
    describe("Styles", () => {
      describe("margin-right", () => {      
        test("should have 4.8rem by default", () => {
          const { SpacingContainer } = setup();
    
          expect(SpacingContainer).toHaveStyleRule("margin-right", "4.8rem");
        });
      });
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

    describe("Styles", () => {
      describe("height", () => {      
        test("should have 4.8rem by default", () => {
          const { Button } = setup();
    
          expect(Button).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("background-color", () => {      
        test("should have #2b595e by default", () => {
          const { Button } = setup();
    
          expect(Button).toHaveStyleRule("background-color", "#2b595e");
        });
      });

      describe("border", () => {      
        test("should have none by default", () => {
          const { Button } = setup();
    
          expect(Button).toHaveStyleRule("border", "none");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Button: HTMLElement;
  HeaderContainer: HTMLElement;
  HeaderInnerContainer: HTMLElement;
  InnerFlexContainer: HTMLElement;
  Logo: HTMLElement;
  MidFlexContainer: HTMLElement;
  Nav: Element;
  OuterFlexContainer: HTMLElement;
  PositionContainer: HTMLElement;
  SpacingContainer: Element;
}

type HeaderTestProps = Partial<HeaderProps>;

function setup(addedProps?: HeaderTestProps): Setup {
  const props: HeaderProps = {
    zIndex: "layer1",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <Header {...props} />
  );

  const {
    queryAllByTestId,
    queryByTestId
  } = utils || {};

  const HeaderContainer = document.querySelector("header");
  const HeaderInnerContainer = queryByTestId("HeaderInnerContainer");
  const InnerFlexContainer = queryAllByTestId("FlexContainer")[2];
  const Logo = queryByTestId("Link");
  const MidFlexContainer = queryAllByTestId("FlexContainer")[1];
  const OuterFlexContainer = queryAllByTestId("FlexContainer")[0];
  const PositionContainer = queryAllByTestId("PositionContainer")[0];
  const SpacingContainer = InnerFlexContainer.children[0];
  const Nav = SpacingContainer.children[0];
  const Button = document.querySelector("button");

  return {
    ...utils,
    Button,
    HeaderContainer,
    HeaderInnerContainer,
    InnerFlexContainer,
    Logo,
    MidFlexContainer,
    Nav,
    OuterFlexContainer,
    PositionContainer,
    SpacingContainer
  };
}
