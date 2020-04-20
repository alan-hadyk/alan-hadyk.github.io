import React from "react";
import { RenderResult } from "@testing-library/react";

import AnimatedIcons from "<molecules>/AnimatedIcons";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / AnimatedIcons", () => {
  test("should have correct structure", () => {
    const { 
      FlexContainer,
      IconContainers,
      Icons,
      PositionContainers,
      SpacingContainer
    } = setup();

    expect(SpacingContainer.children[0]).toEqual(FlexContainer);

    PositionContainers.forEach((PositionContainer, index) => {
      expect(FlexContainer.children[index]).toEqual(PositionContainer);
      expect(PositionContainer.children[0]).toEqual(IconContainers[index]);
      expect(IconContainers[index].children[0]).toEqual(Icons[index]);
    });
  });

  describe("SpacingContainer", () => {    
    describe("Props", () => {
      describe("height", () => { 
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("paddingBottom", () => { 
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-bottom", ".8rem");
        });
      });

      describe("paddingLeft", () => { 
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-left", ".8rem");
        });
      });

      describe("paddingRight", () => { 
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-right", ".8rem");
        });
      });

      describe("paddingTop", () => { 
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", ".8rem");
        });
      });

      describe("width", () => { 
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("FlexContainer", () => {    
    describe("Props", () => {
      describe("alignItems", () => { 
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("flexFlow", () => { 
        test("should have row nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("height", () => { 
        test("should have 100%", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("justifyContent", () => { 
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });
    });
  });

  describe("PositionContainer", () => {
    describe("Props", () => {
      describe("position", () => { 
        test("should be relative", () => {
          const { PositionContainers } = setup();
  
          PositionContainers.forEach((PositionContainer) => {
            expect(PositionContainer).toHaveStyleRule("position", "relative");
          });
        });
      });

      describe("width", () => { 
        test("should be 14.285714285714286%", () => {
          const { PositionContainers } = setup();
  
          PositionContainers.forEach((PositionContainer) => {
            expect(PositionContainer).toHaveStyleRule("width", "14.285714285714286%");
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
      describe("height", () => { 
        test("should have auto", () => {
          const { IconContainers } = setup();

          IconContainers.forEach(IconContainer => {
            expect(IconContainer).toHaveStyleRule("height", "auto");
          });
        });
      });

      describe("width", () => { 
        test("should have 100%", () => {
          const { IconContainers } = setup();

          IconContainers.forEach(IconContainer => {
            expect(IconContainer).toHaveStyleRule("width", "100%");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  IconContainers: Element[];
  Icons: NodeListOf<SVGSVGElement>;
  PositionContainers: Element[];
  SpacingContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <AnimatedIcons />
  );

  const { queryAllByTestId, queryByTestId }: RenderResult = utils;
  const FlexContainer: Element = queryByTestId("AnimatedIconsFlexContainer");
  const IconContainers: Element[] = queryAllByTestId("IconContainer");
  const Icons: NodeListOf<SVGSVGElement> = document.querySelectorAll("svg");
  const PositionContainers: Element[] = queryAllByTestId("PositionContainer");
  const SpacingContainer: Element = queryByTestId("AnimatedIcons");

  return {
    ...utils,
    FlexContainer,
    IconContainers,
    Icons,
    PositionContainers,
    SpacingContainer
  };
}
