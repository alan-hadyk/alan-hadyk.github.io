import React from "react";
import { RenderResult } from "@testing-library/react";

import LinkWithIcon, { LinkWithIconProps } from "<src>/UI/molecules/LinkWithIcon";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / LinkWithIcon", () => {
  describe("Icon", () => {    
    describe("Styles", () => {
      describe("height", () => {      
        test("should have 4.8rem", () => {
          const { Icon } = setup();
    
          expect(Icon).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("transition", () => {      
        test("should have all 150ms ease-in-out", () => {
          const { Icon } = setup();
    
          expect(Icon).toHaveStyleRule("transition", "all 150ms ease-in-out");
        });
      });

      describe("width", () => {      
        test("should have auto", () => {
          const { Icon } = setup();
    
          expect(Icon).toHaveStyleRule("width", "auto");
        });
      });

      describe("&:hover", () => {      
        describe("filter", () => {      
          test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", () => {
            const { Icon } = setup();
    
            expect(Icon).toHaveStyleRule("filter", "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", {
              modifier: ":hover"
            });
          });
        });
      });
    });

    describe("Props", () => {
      describe("should render correct icon for", () => {
        test("logo", () => {
          const { Icon } = setup({
            iconName: "logo"
          });
    
          expect(Icon.textContent).toEqual("Logo.svg");
        });

        test("codeSandbox", () => {
          const { Icon } = setup({
            iconName: "codeSandbox"
          });
    
          expect(Icon.textContent).toEqual("CodeSandbox.svg");
        });

        test("gitHub", () => {
          const { Icon } = setup({
            iconName: "gitHub"
          });
    
          expect(Icon.textContent).toEqual("github-icon.svg");
        });

        test("linkedIn", () => {
          const { Icon } = setup({
            iconName: "linkedIn"
          });
    
          expect(Icon.textContent).toEqual("LinkedIn.svg");
        });
      });
    });
  });

  describe("Link", () => {    
    describe("props", () => {
      describe("height", () => {      
        test("should have spacing48", () => {
          const { Link } = setup();
    
          expect(Link.getAttribute("height")).toEqual("spacing48");
        });
      });

      describe("display", () => {      
        test("should have block", () => {
          const { Link } = setup();
    
          expect(Link.getAttribute("display")).toEqual("block");
        });
      });

      describe("target", () => {      
        test("should have _self if isExternal prop is false", () => {
          const { Link } = setup({
            isExternal: false
          });
    
          expect(Link.getAttribute("target")).toEqual("_self");
        });

        test("should have _blank if isExternal prop is true", () => {
          const { Link } = setup({
            isExternal: true
          });
    
          expect(Link.getAttribute("target")).toEqual("_blank");
        });
      });

      describe("href", () => {      
        test("should have value equal to href prop", () => {
          const { Link } = setup({
            href: "http://google.com"
          });
    
          expect(Link.getAttribute("href")).toEqual("http://google.com");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Icon: SVGSVGElement;
  Link: HTMLElement;
}

type LinkWithIconTestProps = Partial<LinkWithIconProps>;

function setup(addedProps?: LinkWithIconTestProps): Setup {
  const props: LinkWithIconProps = {
    href: "/",
    iconName: "logo",
    ...addedProps
  };
  
  const utils: RenderResult = renderWithTheme(
    <LinkWithIcon {...props} />
  );

  return {
    ...utils,
    Icon: document.querySelector("svg"),
    Link: document.querySelector("a")
  };
}
