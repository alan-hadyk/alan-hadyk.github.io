import React from "react";
import { RenderResult } from "@testing-library/react";

import AnimatedIcons from "<molecules>/AnimatedIcons";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / AnimatedIcons", () => {
  test("should have correct structure", () => {
    const { 
      FlexContainer,
      AnimatedIconsContainer,
      Icon
    } = setup();

    expect(FlexContainer.children[0]).toEqual(AnimatedIconsContainer);
    expect(AnimatedIconsContainer.children[0]).toEqual(Icon[0]);
    expect(AnimatedIconsContainer.children[1]).toEqual(Icon[1]);
    expect(AnimatedIconsContainer.children[2]).toEqual(Icon[2]);
    expect(AnimatedIconsContainer.children[3]).toEqual(Icon[3]);
    expect(AnimatedIconsContainer.children[4]).toEqual(Icon[4]);
    expect(AnimatedIconsContainer.children[5]).toEqual(Icon[5]);
    expect(AnimatedIconsContainer.children[6]).toEqual(Icon[6]);
  });

  describe("AnimatedIconsContainer", () => {   
    describe("Styles", () => {
      describe("height", () => {      
        test("should have 7.2rem", () => {
          const { AnimatedIconsContainer } = setup();

          expect(AnimatedIconsContainer).toHaveStyleRule("height", "7.2rem");
        });
      });
    });
  });

  describe("FlexContainer", () => {    
    describe("Styles", () => {
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

  describe("Icon", () => { 
    test("there should be 7 icons", () => {
      const { Icon } = setup();

      expect(Icon.length).toEqual(7);
    });

    test("icons should have proper text content", () => {
      const { Icon } = setup();

      expect(Icon[0].textContent).toEqual("Icon-React.svg");
      expect(Icon[1].textContent).toEqual("Icon-Javascript.svg");
      expect(Icon[2].textContent).toEqual("Icon-Typescript.svg");
      expect(Icon[3].textContent).toEqual("Icon-Webpack.svg");
      expect(Icon[4].textContent).toEqual("Icon-Node.svg");
      expect(Icon[5].textContent).toEqual("Icon-Apollo.svg");
      expect(Icon[6].textContent).toEqual("Icon-Graphql.svg");
    });

    describe("Styles", () => {
      describe("height", () => { 
        test("should have 7.2rem", () => {
          const { Icon } = setup();

          expect(Icon[0]).toHaveStyleRule("height", "7.2rem");
        });
      });

      describe("animation", () => { 
        test("should have proper animation", () => {
          const { Icon } = setup();

          expect(Icon[0]).toHaveStyleRule("animation", "kyKrda 3600ms infinite ease-in-out 0ms");
          expect(Icon[1]).toHaveStyleRule("animation", "kyKrda 3600ms infinite ease-in-out 300ms");
          expect(Icon[2]).toHaveStyleRule("animation", "kyKrda 3600ms infinite ease-in-out 600ms");
          expect(Icon[3]).toHaveStyleRule("animation", "kyKrda 3600ms infinite ease-in-out 900ms");
          expect(Icon[4]).toHaveStyleRule("animation", "kyKrda 3600ms infinite ease-in-out 1200ms");
          expect(Icon[5]).toHaveStyleRule("animation", "kyKrda 3600ms infinite ease-in-out 1500ms");
          expect(Icon[6]).toHaveStyleRule("animation", "kyKrda 3600ms infinite ease-in-out 1800ms");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  AnimatedIconsContainer: Element;
  FlexContainer: Element;
  Icon: NodeListOf<SVGSVGElement>;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <AnimatedIcons />
  );

  const { container }: RenderResult = utils;
  const FlexContainer: Element = container.children[0];
  const AnimatedIconsContainer: Element = FlexContainer.children[0];
  const Icon: NodeListOf<SVGSVGElement> = document.querySelectorAll("svg");

  return {
    ...utils,
    AnimatedIconsContainer,
    FlexContainer,
    Icon
  };
}
