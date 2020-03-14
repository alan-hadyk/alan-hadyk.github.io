import React from "react";
import { RenderResult } from "@testing-library/react";

import LinkWithIcon from "<src>/UI/molecules/LinkWithIcon";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { LinkWithIconProps } from "<molecules>/__typings__/LinkWithIcon";

describe("molecules / LinkWithIcon", () => {
  describe("IconContainer", () => {    
    describe("Styles", () => {
      describe("height", () => {      
        test("should have 4.8rem", () => {
          const { IconContainer } = setup();
    
          expect(IconContainer).toHaveStyleRule("height", "4.8rem", {
            modifier: "& > *"
          });
        });

        test("should have correct value when passed via height prop", () => {
          const { IconContainer } = setup({
            height: "spacing72"
          });
    
          expect(IconContainer).toHaveStyleRule("height", "7.2rem", {
            modifier: "& > *"
          });
        });
      });

      describe("transition", () => {      
        test("should have all 150ms ease-in-out 0ms", () => {
          const { IconContainer } = setup();
    
          expect(IconContainer).toHaveStyleRule("transition", "all 150ms ease-in-out 0ms", {
            modifier: "& > *"
          });
        });
      });

      describe("width", () => {      
        test("should have auto", () => {
          const { IconContainer } = setup();
    
          expect(IconContainer).toHaveStyleRule("width", "auto", {
            modifier: "& > *"
          });
        });

        test("should have correct value when passed via width prop", () => {
          const { IconContainer } = setup({
            width: "spacing72"
          });
    
          expect(IconContainer).toHaveStyleRule("width", "7.2rem", {
            modifier: "& > *"
          });
        });
      });

      describe("&:hover", () => {      
        describe("filter", () => {      
          test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", () => {
            const { IconContainer } = setup();
    
            expect(IconContainer).toHaveStyleRule("filter", "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", {
              modifier: "& > *:hover"
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
    
          expect(Icon.textContent).toEqual("Icon-Logo.svg");
        });

        test("codeSandbox", () => {
          const { Icon } = setup({
            iconName: "codeSandbox"
          });
    
          expect(Icon.textContent).toEqual("Icon-CodeSandbox.svg");
        });

        test("gitHub", () => {
          const { Icon } = setup({
            iconName: "gitHub"
          });
    
          expect(Icon.textContent).toEqual("Icon-GitHub.svg");
        });

        test("linkedIn", () => {
          const { Icon } = setup({
            iconName: "linkedIn"
          });
    
          expect(Icon.textContent).toEqual("Icon-LinkedIn.svg");
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

        test("should have correct value when passed via height prop", () => {
          const { Link } = setup({
            height: "spacing72"
          });
    
          expect(Link).toHaveStyleRule("height", "7.2rem");
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
  IconContainer: Element;
  Link: HTMLElement;
}

type LinkWithIconTestProps = Partial<LinkWithIconProps>;

function setup(addedProps?: LinkWithIconTestProps): Setup {
  const props: LinkWithIconProps = {
    height: "spacing48",
    href: "/",
    iconName: "logo",
    ...addedProps
  };
  
  const utils: RenderResult = renderWithTheme(
    <LinkWithIcon {...props} />
  );

  const { queryByTestId }: RenderResult = utils;


  return {
    ...utils,
    Icon: document.querySelector("svg"),
    IconContainer: queryByTestId("IconContainer"),
    Link: document.querySelector("a")
  };
}
