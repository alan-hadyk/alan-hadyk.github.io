import React from "react";
import { RenderResult } from "@testing-library/react";

import Header from "<organisms>/Header";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<hooks>/useIntersectionObserver");

import { HeaderProps }  from "<organisms>/__typings__/Header.d.ts";

interface LinkWithIconProps {
  href: string;
  iconName: string;
  isExternal?: boolean;
}

jest.mock("<molecules>/LinkWithIcon", () => ({
  href,
  iconName,
  isExternal = false
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: LinkWithIconProps): any => (
  <a
    href={href}
    data-testid="mockLinkWithIcon"
    data-isexternal={isExternal}
  >
    {iconName}
  </a>
));

describe("organisms / Header", () => {
  test("should have correct structure", () => {
    const {
      Button,
      CodeSandbox,
      container,
      GitHub,
      HeaderContainer,
      HeaderInnerContainer,
      InnerFlexContainer,
      LinkedIn,
      FlexContainers,
      Logo,
      MidFlexContainer,
      Nav,
      OuterFlexContainer,
      PositionContainer
    } = setup();

    expect(container.children[0]).toEqual(PositionContainer);

    expect(PositionContainer.children[0]).toEqual(HeaderContainer);

    expect(HeaderContainer.children[0]).toEqual(OuterFlexContainer);

    expect(OuterFlexContainer.children[0]).toEqual(HeaderInnerContainer);

    expect(HeaderInnerContainer.children[0]).toEqual(MidFlexContainer);

    expect(MidFlexContainer.children[0]).toEqual(Logo);
    expect(MidFlexContainer.children[1]).toEqual(InnerFlexContainer);

    expect(InnerFlexContainer.children[0]).toEqual(Nav);
    expect(InnerFlexContainer.children[1]).toEqual(FlexContainers[3]);

    expect(FlexContainers[3].children[0]).toEqual(Button);
    expect(FlexContainers[3].children[1]).toEqual(GitHub);
    expect(FlexContainers[3].children[2]).toEqual(CodeSandbox);
    expect(FlexContainers[3].children[3]).toEqual(LinkedIn);
  });

  describe("PositionContainer", () => {
    describe("Props", () => {
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

  describe("OuterFlexContainer", () => {
    describe("Props", () => {
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
    describe("Props", () => {
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
    describe("Props", () => {
      describe("flex-flow", () => {      
        test("should have row nowrap", () => {
          const { InnerFlexContainer } = setup();
    
          expect(InnerFlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("height", () => {      
        test("should have 4.8rem", () => {
          const { InnerFlexContainer } = setup();
    
          expect(InnerFlexContainer).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("gap", () => {      
        test("each child of InnerFlexContainer should have padding-left: 4.8rem, except first item", () => {
          const { InnerFlexContainer } = setup();

          expect(InnerFlexContainer).toHaveStyleRule("padding-left", "4.8rem", {
            modifier: "& > *"
          });
          expect(InnerFlexContainer).toHaveStyleRule("padding-left", "0", {
            modifier: "& > *:first-child"
          });
        });
      });

      describe("justify-content", () => {      
        test("should have flex-start", () => {
          const { InnerFlexContainer } = setup();
    
          expect(InnerFlexContainer).toHaveStyleRule("justify-content", "flex-start");
        });
      });
    });
  });

  describe("Links with icon", () => {    
    describe("Logo", () => {
      test("should have correct icon", () => {
        const { Logo } = setup();
  
        expect(Logo.textContent).toEqual("logo");
      });
  
      test("should have correct href", () => {
        const { Logo } = setup();
  
        expect(Logo.getAttribute("href")).toEqual("http://localhost/");
      });
        
      test("should have data-isexternal=false", () => {
        const { Logo } = setup();
  
        expect(Logo.getAttribute("data-isexternal")).toEqual("false");
      });
    });
  
    describe("GitHub", () => {
      test("should have correct icon", () => {
        const { GitHub } = setup();
  
        expect(GitHub.textContent).toEqual("gitHub");
      }); 
  
      test("should have correct href", () => {
        const { GitHub } = setup();
  
        expect(GitHub.getAttribute("href")).toEqual("https://github.com/alan-hadyk");
      });
  
      test("should have data-isexternal=true", () => {
        const { GitHub } = setup();
  
        expect(GitHub.getAttribute("data-isexternal")).toEqual("true");
      });
    });
  
    describe("CodeSandbox", () => {
      test("should have correct icon", () => {
        const { CodeSandbox } = setup();
  
        expect(CodeSandbox.textContent).toEqual("codeSandbox");
      }); 
  
      test("should have correct href", () => {
        const { CodeSandbox } = setup();
  
        expect(CodeSandbox.getAttribute("href")).toEqual("https://codesandbox.io/u/alan-hadyk");
      });
  
      test("should have data-isexternal=true", () => {
        const { CodeSandbox } = setup();
  
        expect(CodeSandbox.getAttribute("data-isexternal")).toEqual("true");
      });
    });
  
    describe("LinkedIn", () => {
      test("should have correct icon", () => {
        const { LinkedIn } = setup();
  
        expect(LinkedIn.textContent).toEqual("linkedIn");
      }); 
  
      test("should have correct href", () => {
        const { LinkedIn } = setup();
  
        expect(LinkedIn.getAttribute("href")).toEqual("https://www.linkedin.com/in/alan-hadyk-78738099/");
      });
  
      test("should have data-isexternal=true", () => {
        const { LinkedIn } = setup();
  
        expect(LinkedIn.getAttribute("data-isexternal")).toEqual("true");
      });
    });
  });

  describe("Nav", () => {
    test("should render", () => {
      const { Nav } = setup();

      expect(Nav).toBeTruthy();
    });
  });

  describe("FlexContainer[3]", () => {
    describe("Props", () => {
      describe("flex-flow", () => {      
        test("should have row nowrap", () => {
          const { FlexContainers } = setup();
    
          expect(FlexContainers[3]).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("height", () => {      
        test("should have 4.8rem", () => {
          const { FlexContainers } = setup();
    
          expect(FlexContainers[3]).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("gap", () => {      
        test("each child of FlexContainer should have padding-left: 2.4rem, except first item", () => {
          const { FlexContainers } = setup();

          expect(FlexContainers[3]).toHaveStyleRule("padding-left", "2.4rem", {
            modifier: "& > *"
          });
          expect(FlexContainers[3]).toHaveStyleRule("padding-left", "0", {
            modifier: "& > *:first-child"
          });
        });
      });

      describe("justify-content", () => {      
        test("should have flex-start", () => {
          const { FlexContainers } = setup();
    
          expect(FlexContainers[3]).toHaveStyleRule("justify-content", "flex-start");
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
        test("should have 4.8rem", () => {
          const { Button } = setup();
    
          expect(Button).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("background-color", () => {      
        test("should have #2b595e", () => {
          const { Button } = setup();
    
          expect(Button).toHaveStyleRule("background-color", "#2b595e");
        });
      });

      describe("border" , () => {      
        test("should have none", () => {
          const { Button } = setup();
    
          expect(Button).toHaveStyleRule("border", "none");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Button: HTMLElement;
  CodeSandbox: HTMLElement;
  FlexContainers: HTMLElement[];
  GitHub: HTMLElement;
  HeaderContainer: HTMLElement;
  HeaderInnerContainer: HTMLElement;
  InnerFlexContainer: HTMLElement;
  LinkedIn: HTMLElement;
  Logo: HTMLElement;
  MidFlexContainer: HTMLElement;
  Nav: Element;
  OuterFlexContainer: HTMLElement;
  PositionContainer: HTMLElement;
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
  const FlexContainers = queryAllByTestId("FlexContainer");
  const OuterFlexContainer = FlexContainers[0];
  const MidFlexContainer = FlexContainers[1];
  const InnerFlexContainer = FlexContainers[2];
  const Logo = queryAllByTestId("mockLinkWithIcon")[0];
  const GitHub = queryAllByTestId("mockLinkWithIcon")[1];
  const CodeSandbox = queryAllByTestId("mockLinkWithIcon")[2];
  const LinkedIn = queryAllByTestId("mockLinkWithIcon")[3];
  const PositionContainer = queryAllByTestId("PositionContainer")[0];
  const Nav = queryByTestId("Nav");
  const Button = document.querySelector("button");

  return {
    ...utils,
    Button,
    CodeSandbox,
    FlexContainers,
    GitHub,
    HeaderContainer,
    HeaderInnerContainer,
    InnerFlexContainer,
    LinkedIn,
    Logo,
    MidFlexContainer,
    Nav,
    OuterFlexContainer,
    PositionContainer
  };
}
