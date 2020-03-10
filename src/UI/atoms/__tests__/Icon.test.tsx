import React from "react";
import { RenderResult } from "@testing-library/react";

import Icon from "<atoms>/Icon";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  IconProps
} from "<atoms>/__typings__/Icon";

describe("atoms / Icon", () => {
  describe("Styles", () => {
    describe("height", () => {      
      test("should have 1.2rem when passed via height prop", () => {
        const { Icon } = setup({
          height: "spacing12"
        });
  
        expect(Icon).toHaveStyleRule("height", "1.2rem");
      });

      test("should have 2.4rem when passed via height prop", () => {
        const { Icon } = setup({
          height: "spacing24"
        });
  
        expect(Icon).toHaveStyleRule("height", "2.4rem");
      });
    });

    describe("width", () => {      
      test("should have auto by default", () => {
        const { Icon } = setup();
  
        expect(Icon).toHaveStyleRule("width", "auto");
      });

      test("should have 2.4rem when passed via width prop", () => {
        const { Icon } = setup({
          width: "spacing24"
        });
  
        expect(Icon).toHaveStyleRule("width", "2.4rem");
      });

      test("should have 100% when passed via width prop", () => {
        const { Icon } = setup({
          width: "100%"
        });
  
        expect(Icon).toHaveStyleRule("width", "100%");
      });
    });

    describe("animation", () => {  
      describe("when shouldDisplayGlowAnimation is true", () => {          
        test("should have kyKrda 900ms infinite ease-in-out 0ms", () => {
          const { Icon } = setup({
            shouldDisplayGlowAnimation: true
          });

          expect(Icon).toHaveStyleRule("animation", "kyKrda 900ms infinite ease-in-out 0ms");
        });
      });    

      test("should not have animation when shouldDisplayGlowAnimation is false", () => {
        const { Icon } = setup({
          shouldDisplayGlowAnimation: false
        });

        expect(Icon).not.toHaveStyleRule("animation");
      });
    });

    describe("transition", () => {  
      describe("when shouldGlowOnHover is true", () => {          
        test("should have all 900ms ease-in-out 0ms", () => {
          const { Icon } = setup({
            shouldGlowOnHover: true
          });

          expect(Icon).toHaveStyleRule("transition", "all 900ms ease-in-out 0ms");
        });

        test("should have all 150ms ease-in-out 0ms when animationTime: fast", () => {
          const { Icon } = setup({
            animationTime: "fast",
            shouldGlowOnHover: true
          });

          expect(Icon).toHaveStyleRule("transition", "all 150ms ease-in-out 0ms");
        });

        test("should have all 900ms ease-in-out 150ms when animationDelay: 150ms", () => {
          const { Icon } = setup({
            animationDelay: "150ms",
            shouldGlowOnHover: true
          });

          expect(Icon).toHaveStyleRule("transition", "all 900ms ease-in-out 150ms");
        });
      });    

      test("should not have transition when shouldGlowOnHover is false", () => {
        const { Icon } = setup({
          shouldGlowOnHover: false
        });

        expect(Icon).not.toHaveStyleRule("transition");
      });
    });

    describe(":hover", () => {
      describe("filter", () => {      
        test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5)) - shouldGlowOnHover: true", () => {
          const { Icon } = setup({
            shouldGlowOnHover: true
          });

          expect(Icon).toHaveStyleRule("filter", "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", {
            modifier: ":hover"
          });
        });

        test("should not have filter - shouldGlowOnHover: false ", () => {
          const { Icon } = setup({
            shouldGlowOnHover: false
          });

          expect(Icon).not.toHaveStyleRule("filter", "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", {
            modifier: ":hover"
          });
        });

      });
    });
  });
  
  describe("Props", () => {
    describe("iconName", () => {
      test("should render corect icon for apollo", () => {
        const { Icon } = setup({
          iconName: "apollo"
        });
  
        expect(Icon.textContent).toEqual("Icon-Apollo.svg");
      });

      test("should render corect icon for btnCodeSandbox", () => {
        const { Icon } = setup({
          iconName: "btnCodeSandbox"
        });
  
        expect(Icon.textContent).toEqual("Btn-CodeSandbox.svg");
      });

      test("should render corect icon for btnDownload", () => {
        const { Icon } = setup({
          iconName: "btnDownload"
        });
  
        expect(Icon.textContent).toEqual("Btn-Download.svg");
      });

      test("should render corect icon for btnExternalLink", () => {
        const { Icon } = setup({
          iconName: "btnExternalLink"
        });
  
        expect(Icon.textContent).toEqual("Btn-ExternalLink.svg");
      });

      test("should render corect icon for btnSend", () => {
        const { Icon } = setup({
          iconName: "btnSend"
        });
  
        expect(Icon.textContent).toEqual("Btn-Send.svg");
      });

      test("should render corect icon for codeSandbox", () => {
        const { Icon } = setup({
          iconName: "codeSandbox"
        });
  
        expect(Icon.textContent).toEqual("Icon-CodeSandbox.svg");
      });

      test("should render corect icon for gitHub", () => {
        const { Icon } = setup({
          iconName: "gitHub"
        });
  
        expect(Icon.textContent).toEqual("Icon-GitHub.svg");
      });

      test("should render corect icon for graphql", () => {
        const { Icon } = setup({
          iconName: "graphql"
        });
  
        expect(Icon.textContent).toEqual("Icon-Graphql.svg");
      });

      test("should render corect icon for javascript", () => {
        const { Icon } = setup({
          iconName: "javascript"
        });
  
        expect(Icon.textContent).toEqual("Icon-Javascript.svg");
      });

      test("should render corect icon for linkedIn", () => {
        const { Icon } = setup({
          iconName: "linkedIn"
        });
  
        expect(Icon.textContent).toEqual("Icon-LinkedIn.svg");
      });

      test("should render corect icon for logo", () => {
        const { Icon } = setup({
          iconName: "logo"
        });
  
        expect(Icon.textContent).toEqual("Icon-Logo.svg");
      });

      test("should render corect icon for node", () => {
        const { Icon } = setup({
          iconName: "node"
        });
  
        expect(Icon.textContent).toEqual("Icon-Node.svg");
      });

      test("should render corect icon for react", () => {
        const { Icon } = setup({
          iconName: "react"
        });
  
        expect(Icon.textContent).toEqual("Icon-React.svg");
      });

      test("should render corect icon for typescript", () => {
        const { Icon } = setup({
          iconName: "typescript"
        });
  
        expect(Icon.textContent).toEqual("Icon-Typescript.svg");
      });

      test("should render corect icon for webpack", () => {
        const { Icon } = setup({
          iconName: "webpack"
        });
  
        expect(Icon.textContent).toEqual("Icon-Webpack.svg");
      });
    });
  });
});

interface Setup extends RenderResult {
  Icon: Element;
}

type IconTestProps = Partial<IconProps>;

function setup(addedProps?: IconTestProps): Setup {
  const props: IconProps = {
    height: "spacing12",
    iconName: "codeSandbox",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <Icon {...props} /> 
  );

  return {
    ...utils,
    Icon: document.querySelector("svg")
  };
}
