import React from "react";
import { RenderResult } from "@testing-library/react";

import Link, { LinkProps } from "<atoms>/Link";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("atoms / Link", () => {
  test("should render children", () => {
    const { LinkContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(LinkContainer.textContent).toEqual("Custom children");
  });
  
  describe("Styles", () => {
    describe("height", () => {      
      test("should have unset by default", () => {
        const { LinkContainer } = setup();
  
        expect(LinkContainer).toHaveStyleRule("height", "unset");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { LinkContainer } = setup({
          height: "spacing48"
        });
  
        expect(LinkContainer).toHaveStyleRule("height", "4.8rem");
      });
  
      test("should have 50% by when passed via prop", () => {
        const { LinkContainer } = setup({
          height: "50%"
        });
  
        expect(LinkContainer).toHaveStyleRule("height", "50%");
      });
  
      test("should have 100% by when passed via prop", () => {
        const { LinkContainer } = setup({
          height: "100%"
        });
  
        expect(LinkContainer).toHaveStyleRule("height", "100%");
      });
    });

    describe("line-height", () => {      
      test("should have 1", () => {
        const { LinkContainer } = setup();
  
        expect(LinkContainer).toHaveStyleRule("line-height", "1");
      });
    });
  });
  
  describe("Props", () => {
    describe("href", () => {      
      test("should have value equal to passed value", () => {
        const { LinkContainer } = setup({
          href: "http://google.com"
        });
  
        expect(LinkContainer.getAttribute("href")).toEqual("http://google.com");
      });
    });

    describe("target", () => {      
      test("should have '_blank' when isExternal: true", () => {
        const { LinkContainer } = setup({
          isExternal: true
        });
  
        expect(LinkContainer.getAttribute("target")).toEqual("_blank");
      });

      test("should have '_self' when isExternal: false", () => {
        const { LinkContainer } = setup({
          isExternal: false 
        });
  
        expect(LinkContainer.getAttribute("target")).toEqual("_self");
      });
    });
  });
});

interface Setup extends RenderResult {
  LinkContainer: Element;
}

type LinkTestProps = Partial<LinkProps>;

function setup(addedProps?: LinkTestProps): Setup {
  const props: LinkProps = {
    children: <div>Link</div>,
    href: "/",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <Link {...props}>
      {props.children}
    </Link>
  );

  const { container } = utils || {};

  return {
    ...utils,
    LinkContainer: container.children[0]
  };
}
