import React from "react";
import { RenderResult } from "@testing-library/react";

import AnimatedIcons from "<molecules>/AnimatedIcons";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / AnimatedIcons", () => {
  test("should have correct structure", () => {
    const { 
      Icons,
      FlexContainer,
      PositionContainers,
      Texts
    } = setup();

    expect(FlexContainer.children[0]).toHaveStyleRule("position", "relative");
    expect(FlexContainer.children[1]).toHaveStyleRule("position", "relative");
    expect(FlexContainer.children[2]).toHaveStyleRule("position", "relative");
    expect(FlexContainer.children[3]).toHaveStyleRule("position", "relative");
    expect(FlexContainer.children[4]).toHaveStyleRule("position", "relative");
    expect(FlexContainer.children[5]).toHaveStyleRule("position", "relative");
    expect(FlexContainer.children[6]).toHaveStyleRule("position", "relative");

    PositionContainers.forEach((PositionContainer, index) => {
      if (index % 2 === 0) {
        expect(PositionContainer.children[0]).toEqual(Icons[index / 2]);
        expect(PositionContainer.children[1]).toEqual(PositionContainers[index + 1]);
      }
    });

    Texts.forEach((Text, index) => {
      expect(Text.parentNode).toEqual(PositionContainers[(index * 2) + 1]);
    });
  });

  describe("FlexContainer", () => {    
    describe("Props", () => {
      describe("align-items", () => { 
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("justify-content", () => { 
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });

      describe("height", () => { 
        test("should have 100%", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("height", "100%");
        });
      });
    });
  });

  describe("PositionContainer", () => {
    describe("Outer", () => {
      describe("Props", () => {
        describe("position", () => { 
          test("should be relative", () => {
            const { PositionContainers } = setup();
  
            PositionContainers.forEach((PositionContainer, index) => {
              if (index % 2 === 0) {
                expect(PositionContainer).toHaveStyleRule("position", "relative");
              }
            });
          });
        });
      });
    });

    describe("Inner", () => {
      describe("Props", () => {
        describe("bottom", () => { 
          test("should be unset if icon is even", () => {
            const { PositionContainers, Icons } = setup();

            Icons.forEach((_Icon, index) => {
              if (index % 2 === 0) {
                expect(PositionContainers[index * 2 + 1]).toHaveStyleRule("bottom", "unset");
              }
            });
          });

          test("should be 0 if icon is odd", () => {
            const { PositionContainers, Icons } = setup();

            Icons.forEach((_Icon, index) => {
              if (index % 2 !== 0) {
                expect(PositionContainers[index * 2 + 1]).toHaveStyleRule("bottom", "0");
              }
            });
          });
        });

        describe("left", () => { 
          test("should be 50%", () => {
            const { PositionContainers } = setup();

            PositionContainers.forEach((PositionContainer, index) => {
              if (index % 2 !== 0) {
                expect(PositionContainer).toHaveStyleRule("left", "50%");
              }
            });
          });
        });

        describe("position", () => { 
          test("should be absolute", () => {
            const { PositionContainers } = setup();

            PositionContainers.forEach((PositionContainer, index) => {
              if (index % 2 !== 0) {
                expect(PositionContainer).toHaveStyleRule("position", "absolute");
              }
            });
          });
        });

        describe("top", () => { 
          test("should be 0 if icon is even", () => {
            const { PositionContainers, Icons } = setup();

            Icons.forEach((_Icon, index) => {
              if (index % 2 === 0) {
                expect(PositionContainers[index * 2 + 1]).toHaveStyleRule("top", "0");
              }
            });
          });

          test("should be unset if icon is odd", () => {
            const { PositionContainers, Icons } = setup();

            Icons.forEach((_Icon, index) => {
              if (index % 2 !== 0) {
                expect(PositionContainers[index * 2 + 1]).toHaveStyleRule("top", "unset");
              }
            });
          });
        });

        describe("transform", () => { 
          test("should be translateX(-50%) translateY(-175%) if icon is even", () => {
            const { PositionContainers, Icons } = setup();

            Icons.forEach((_Icon, index) => {
              if (index % 2 === 0) {
                expect(PositionContainers[index * 2 + 1]).toHaveStyleRule("transform", "translateX(-50%) translateY(-175%)");
              }
            });
          });

          test("should be translateX(-50%) translateY(175%) if icon is odd", () => {
            const { PositionContainers, Icons } = setup();

            Icons.forEach((_Icon, index) => {
              if (index % 2 !== 0) {
                expect(PositionContainers[index * 2 + 1]).toHaveStyleRule("transform", "translateX(-50%) translateY(175%)");
              }
            });
          });
        });
      });
    });
  });

  describe("Icon", () => {
    test("there should be 7 icons", () => {
      const { Icons } = setup();

      expect(Icons.length).toEqual(7);
    });

    test("icons should render correct SVGs", () => {
      const { Icons } = setup();

      expect(Icons[0].textContent).toEqual("Icon-React.svg");
      expect(Icons[1].textContent).toEqual("Icon-Javascript.svg");
      expect(Icons[2].textContent).toEqual("Icon-Typescript.svg");
      expect(Icons[3].textContent).toEqual("Icon-Webpack.svg");
      expect(Icons[4].textContent).toEqual("Icon-Node.svg");
      expect(Icons[5].textContent).toEqual("Icon-Apollo.svg");
      expect(Icons[6].textContent).toEqual("Icon-Graphql.svg");
    });

    describe("Props", () => {
      describe("animationDelay & animationTime & shouldDisplayGlowAnimation", () => {
        test("should apply glow animation with correct delay - index * 300ms", () => {
          const { Icons } = setup();
    
          Icons.forEach((Icon, index) => {
            expect(Icon).toHaveStyleRule("animation", `kyKrda 3600ms infinite ease-in-out ${index * 300}ms`);
          });
        });
      });

      describe("height", () => { 
        test("should have 7.2rem", () => {
          const { Icons } = setup();

          Icons.forEach(Icon => {
            expect(Icon).toHaveStyleRule("height", "7.2rem");
          });
        });
      });
    });
  });

  describe("Text", () => {
    describe("Props", () => {
      describe("color", () => {
        test("should have #78b0b5", () => {
          const { Texts } = setup();
    
          Texts.forEach(Text => {
            expect(Text).toHaveStyleRule("color", "#78b0b5");
          });
        });
      });

      describe("font-family", () => {
        test("should have 'Anonymous Pro',monospace", () => {
          const { Texts } = setup();
    
          Texts.forEach(Text => {
            expect(Text).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
          });
        });
      });

      describe("font-size", () => {
        test("should have 12px", () => {
          const { Texts } = setup();
    
          Texts.forEach(Text => {
            expect(Text).toHaveStyleRule("font-size", "12px");
          });
        });
      });

      describe("line-height", () => {
        test("should have 1.6rem", () => {
          const { Texts } = setup();
    
          Texts.forEach(Text => {
            expect(Text).toHaveStyleRule("line-height", "1.6rem");
          });
        });
      });

      describe("text-transform", () => {
        test("should have uppercase", () => {
          const { Texts } = setup();
    
          Texts.forEach(Text => {
            expect(Text).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  Icons: NodeListOf<SVGSVGElement>;
  PositionContainers: Element[];
  Texts: Element[];
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <AnimatedIcons />
  );

  const { queryAllByTestId, queryByTestId }: RenderResult = utils;
  const FlexContainer: Element = queryByTestId("AnimatedIcons");
  const Icons: NodeListOf<SVGSVGElement> = document.querySelectorAll("svg");
  const PositionContainers: Element[] = queryAllByTestId("PositionContainer");
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    FlexContainer,
    Icons,
    PositionContainers,
    Texts
  };
}
