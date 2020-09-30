import React from "react";
import { RenderResult } from "@testing-library/react";

import Console from "<molecules>/Console/ConsoleTvDesktopAndTablet";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / Console", () => {
  test("should have correct structure", () => {
    const { 
      ConsoleTexts,
      ConsoleTvDesktopAndTabletContainers,
      InnerPositionContainers,
      OuterPositionContainers,
      ResponsiveDesktop,
      ResponsiveTablet,
      ResponsiveTv,
      Texts
    } = setup();

    expect(ResponsiveTv.children[0]).toEqual(OuterPositionContainers[0]);
    expect(ResponsiveDesktop.children[0]).toEqual(OuterPositionContainers[1]);
    expect(ResponsiveTablet.children[0]).toEqual(OuterPositionContainers[2]);

    OuterPositionContainers.forEach((OuterPositionContainer: Element, index: number) => {
      expect(OuterPositionContainer.children[0]).toEqual(ConsoleTvDesktopAndTabletContainers[index]);
    });

    ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element, index: number) => {
      expect(ConsoleTvDesktopAndTabletContainer.children[0]).toEqual(InnerPositionContainers[index]);
      expect(ConsoleTvDesktopAndTabletContainer.children[1]).toEqual(ConsoleTexts[index]);
    });

    InnerPositionContainers.forEach((InnerPositionContainer: Element, index: number) => {
      expect(InnerPositionContainer.children[0]).toEqual(Texts[index]);
    });
  });

  describe("OuterPositionContainers", () => {
    describe("Props", () => {
      describe("left", () => {
        test("should have 0", () => {
          const { OuterPositionContainers } = setup();

          OuterPositionContainers.forEach((OuterPositionContainer: Element) => {
            expect(OuterPositionContainer).toHaveStyleRule("left", "0");
          });
        });
      });
       
      describe("position", () => {
        test("should have absolute", () => {
          const { OuterPositionContainers } = setup();

          OuterPositionContainers.forEach((OuterPositionContainer: Element) => {
            expect(OuterPositionContainer).toHaveStyleRule("position", "absolute");
          });
        });
      });
     
      describe("right", () => {
        test("should have 0", () => {
          const { OuterPositionContainers } = setup();

          OuterPositionContainers.forEach((OuterPositionContainer: Element) => {
            expect(OuterPositionContainer).toHaveStyleRule("right", "0");
          });
        });
      });
     
      describe("top", () => {
        test("should have 50%", () => {
          const { OuterPositionContainers } = setup();

          OuterPositionContainers.forEach((OuterPositionContainer: Element) => {
            expect(OuterPositionContainer).toHaveStyleRule("top", "50%");
          });
        });
      });
      
      describe("transform", () => {
        test("should have translateY(-50%)", () => {
          const { OuterPositionContainers } = setup();

          OuterPositionContainers.forEach((OuterPositionContainer: Element) => {
            expect(OuterPositionContainer).toHaveStyleRule("transform", "translateY(-50%)");
          });
        });
      });

      describe("z-index", () => {
        test("should have 300", () => {
          const { OuterPositionContainers } = setup();

          OuterPositionContainers.forEach((OuterPositionContainer: Element) => {
            expect(OuterPositionContainer).toHaveStyleRule("z-index", "300");
          });
        });
      });
    });
  });

  describe("ConsoleTvDesktopAndTabletContainers", () => {
    describe("Styles", () => {
      describe("align-items", () => {
        test("should have center", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("align-items", "center");
          });
        });
      });
      
      describe("background-color", () => {
        test("should have rgba(30,34,36,0.75)", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("background-color", "rgba(30,34,36,0.75)");
          });
        });
      });
      
      describe("border", () => {
        test("should have 1px solid #78b0b5", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("border", "1px solid #78b0b5");
          });
        });
      });
      
      describe("box-shadow", () => {
        test("should have 0px 0px .8rem 0px #bcd8db", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("box-shadow", "0px 0px .8rem 0px #bcd8db");
          });
        });
      });
      
      describe("display", () => {
        test("should have flex", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("display", "flex");
          });
        });
      });
      
      describe("height", () => {
        test("should have 26.6%", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("height", "26.6%");
          });
        });
      });
      
      describe("justify-content", () => {
        test("should have center", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("justify-content", "center");
          });
        });
      });
      
      describe("min-height", () => {
        test("should have 26.6vh", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("min-height", "26.6vh");
          });
        });
      });
      
      describe("padding", () => {
        test("should have 1.11vh 0.62vw", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("padding", "1.11vh 0.62vw");
          });
        });
      });
      
      describe("position", () => {
        test("should have relative", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("position", "relative");
          });
        });
      });
      
      describe("width", () => {
        test("should have 100%", () => {
          const { ConsoleTvDesktopAndTabletContainers } = setup();

          ConsoleTvDesktopAndTabletContainers.forEach((ConsoleTvDesktopAndTabletContainer: Element) => {
            expect(ConsoleTvDesktopAndTabletContainer).toHaveStyleRule("width", "100%");
          });
        });
      });
    });
  });

  describe("InnerPositionContainers", () => {
    describe("Props", () => {
      describe("left", () => {
        test("should have 0", () => {
          const { InnerPositionContainers } = setup();

          InnerPositionContainers.forEach((InnerPositionContainer: Element) => {
            expect(InnerPositionContainer).toHaveStyleRule("left", "0");
          });
        });
      });
       
      describe("position", () => {
        test("should have absolute", () => {
          const { InnerPositionContainers } = setup();

          InnerPositionContainers.forEach((InnerPositionContainer: Element) => {
            expect(InnerPositionContainer).toHaveStyleRule("position", "absolute");
          });
        });
      });
     
      describe("top", () => {
        test("should have 0", () => {
          const { InnerPositionContainers } = setup();

          InnerPositionContainers.forEach((InnerPositionContainer: Element) => {
            expect(InnerPositionContainer).toHaveStyleRule("top", "0");
          });
        });
      });
      
      describe("transform", () => {
        test("should have translateY(-100%)", () => {
          const { InnerPositionContainers } = setup();

          InnerPositionContainers.forEach((InnerPositionContainer: Element) => {
            expect(InnerPositionContainer).toHaveStyleRule("transform", "translateY(-100%)");
          });
        });
      });
    });
  });

  describe("Texts", () => {
    test("should render textContent - GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)", () => {
      const { Texts } = setup();

      Texts.forEach((Text: Element) => {
        expect(Text.textContent).toEqual("GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)");
      });
    });

    describe("Props", () => {
      describe("fontSize", () => {
        test("should have 12px", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("font-size", "12px");
          });
        });
      });
       
      describe("lineHeight", () => {
        test("should have 2.8rem", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("line-height", "2.8rem");
          });
        });
      });
     
      describe("textTransform", () => {
        test("should have uppercase", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });
  });

  describe("ConsoleTexts", () => {
    test("should have correct textContent", () => {
      const { ConsoleTexts } = setup();

      ConsoleTexts.forEach((ConsoleText: Element) => {
        expect(ConsoleText.textContent).toEqual("Vision driven change agent with career-long record of front-end user strategy and UI development");
      });
    });

    describe("Props", () => {      
      describe("fontSize", () => {
        test("should have 6vh", () => {
          const { ConsoleTexts } = setup();

          ConsoleTexts.forEach((ConsoleText: Element) => {
            expect(ConsoleText).toHaveStyleRule("font-size", "6vh");
          });
        });
      });
      
      describe("lineHeight", () => {
        test("should have 7.4vh", () => {
          const { ConsoleTexts } = setup();

          ConsoleTexts.forEach((ConsoleText: Element) => {
            expect(ConsoleText).toHaveStyleRule("line-height", "7.4vh");
          });
        });
      });
      
      describe("transform", () => {
        test("should have translateY(1vh)", () => {
          const { ConsoleTexts } = setup();

          ConsoleTexts.forEach((ConsoleText: Element) => {
            expect(ConsoleText).toHaveStyleRule("transform", "translateY(1vh)", {
              modifier: "&::after"
            });
          });
        });
      });
      
      describe("width", () => {
        test("should have 3vh", () => {
          const { ConsoleTexts } = setup();
          
          ConsoleTexts.forEach((ConsoleText: Element) => {
            expect(ConsoleText).toHaveStyleRule("width", "3vh", {
              modifier: "&::after"
            });
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ConsoleTexts: Element[];
  ConsoleTvDesktopAndTabletContainers: Element[];
  InnerPositionContainers: Element[];
  OuterPositionContainers: Element[];
  ResponsiveDesktop: Element;
  ResponsiveTablet: Element;
  ResponsiveTv: Element;
  Texts: Element[];
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Console />
  ); 

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const ConsoleTexts: Element[] = queryAllByTestId("ConsoleText");
  const ConsoleTvDesktopAndTabletContainers: Element[] = queryAllByTestId("ConsoleTvDesktopAndTabletContainer");
  const InnerPositionContainers: Element[] = queryAllByTestId("InnerPositionContainer");
  const OuterPositionContainers: Element[] = queryAllByTestId("OuterPositionContainer");
  const ResponsiveDesktop: Element = queryByTestId("ResponsiveDesktop");
  const ResponsiveTablet: Element = queryByTestId("ResponsiveTablet");
  const ResponsiveTv: Element = queryByTestId("ResponsiveTv");
  const Texts: Element[] = queryAllByTestId("Text");
 
  return {
    ...utils,
    ConsoleTexts,
    ConsoleTvDesktopAndTabletContainers,
    InnerPositionContainers,
    OuterPositionContainers,
    ResponsiveDesktop,
    ResponsiveTablet,
    ResponsiveTv,
    Texts
  };
}
