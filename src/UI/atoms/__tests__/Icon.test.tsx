import React from "react";
import { RenderResult } from "@testing-library/react";

import Icon from "<atoms>/Icon";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  IconProps
} from "<atoms>/__typings__/Icon";

describe("atoms / Icon", () => {
  describe("Styles", () => {
    describe("width", () => {      
      test("should have width auto", () => {
        const { Icon } = setup();
  
        expect(Icon).toHaveStyleRule("width", "auto");
      });
    });

    describe("height", () => {      
      test("should have 1.2rem for spacing12 height", () => {
        const { Icon } = setup({
          height: "spacing12"
        });
  
        expect(Icon).toHaveStyleRule("height", "1.2rem");
      });

      test("should have 2.4rem for spacing24 height", () => {
        const { Icon } = setup({
          height: "spacing24"
        });
  
        expect(Icon).toHaveStyleRule("height", "2.4rem");
      });

      test("should have 2.4rem for spacing24 height", () => {
        const { Icon } = setup({
          height: "spacing24"
        });
  
        expect(Icon).toHaveStyleRule("height", "2.4rem");
      });
    });

    describe("shouldGlowOnHover", () => {
      describe("transition", () => {      
        test("should have all 150ms ease-in-out", () => {
          const { Icon } = setup({
            shouldGlowOnHover: true
          });

          expect(Icon).toHaveStyleRule("transition", "all 150ms ease-in-out");
        });
      });

      describe(":hover", () => {
        describe("box-shadow", () => {      
          test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", () => {
            const { Icon } = setup({
              shouldGlowOnHover: true
            });
  
            expect(Icon).toHaveStyleRule("filter", "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", {
              modifier: ":hover"
            });
          });
        });
      });
    });
  });
  
  describe("Props", () => {
    describe("iconName", () => {
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

      test("should render corect icon for apollo", () => {
        const { Icon } = setup({
          iconName: "apollo"
        });
  
        expect(Icon.textContent).toEqual("Icon-Apollo.svg");
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
