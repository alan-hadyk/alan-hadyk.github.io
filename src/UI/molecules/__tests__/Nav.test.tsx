import React from "react";
import {
  RenderResult
} from "@testing-library/react";

import Nav from "<molecules>/Nav";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<hooks>/useIntersectionObserver");

import useIntersectionObserver from "<hooks>/useIntersectionObserver";

import {
  UseIntersectionObserver
} from "<hooks>/__typings__/useIntersectionObserver";

describe("molecules / Nav", () => {
  test("should have correct structure", () => {
    const { 
      FlexContainer,
      NavItems
    } = setup();

    expect(FlexContainer.children[0]).toEqual(NavItems[0].parentNode);
    expect(FlexContainer.children[1]).toEqual(NavItems[1].parentNode);
    expect(FlexContainer.children[2]).toEqual(NavItems[2].parentNode);
    expect(FlexContainer.children[3]).toEqual(NavItems[3].parentNode);
    expect(FlexContainer.children[4]).toEqual(NavItems[4].parentNode);
  });
  
  describe("useIntersectionObserver", () => {    
    test("should be called initially with correct arguments", () => {
      const spyUseIntersectionObserver = jest.fn();
      const mockUseIntersectionObserver = useIntersectionObserver as jest.Mock;
      mockUseIntersectionObserver.mockImplementation((args: UseIntersectionObserver) => {
        spyUseIntersectionObserver(args);
      });

      setup();

      expect(JSON.stringify(spyUseIntersectionObserver.mock.calls[0][0])).toEqual(JSON.stringify({
        selectors: ["#portfolio", "#experience", "#skills", "#about-me", "#contact"]
      }));
      expect(typeof spyUseIntersectionObserver.mock.calls[0][0]["onElementVisible"]).toEqual("function");
    });
  });

  describe("FlexContainer", () => {    
    describe("Styles", () => {
      describe("flex-flow", () => {      
        test("should have row nowrap", () => {
          const { FlexContainer } = setup();
    
          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("gap", () => {      
        test("each child of FlexContainer should have margin-left: 2.4rem, except first item", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("margin-left", "2.4rem", {
            modifier: "& > *"
          });
          expect(FlexContainer).toHaveStyleRule("margin-left", "0", {
            modifier: "& > *:first-child"
          });
        });
      });

      describe("justify-content", () => {      
        test("should have center", () => {
          const { FlexContainer } = setup();
    
          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });
    });
  });

  describe("NavItem", () => { 
    test("there should be 5 elements", () => {
      const { NavItems } = setup();

      expect(NavItems.length).toEqual(5);
    });   

    test("each NavItem should have correct content", () => {
      const { NavItems } = setup();

      expect(NavItems[0].textContent).toEqual("Portfolio");
      expect(NavItems[1].textContent).toEqual("Experience");
      expect(NavItems[2].textContent).toEqual("Skills");
      expect(NavItems[3].textContent).toEqual("About me");
      expect(NavItems[4].textContent).toEqual("Contact");
    });      
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  NavItems: NodeListOf<HTMLAnchorElement>;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Nav />
  );

  const { container }: RenderResult = utils;
  const FlexContainer: Element = container.children[0];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const NavItems: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("a");

  return {
    ...utils,
    FlexContainer,
    NavItems
  };
}
