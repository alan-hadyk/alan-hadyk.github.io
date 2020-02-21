import React from "react";
import {
  RenderResult
}from "@testing-library/react";

import Nav from "<molecules>/Nav";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<src>/hooks/useIntersectionObserver");

import useIntersectionObserver, { UseIntersectionObserver } from "<src>/hooks/useIntersectionObserver";

describe("molecules / Nav", () => {
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

      describe("justify-content", () => {      
        test("should have center", () => {
          const { FlexContainer } = setup();
    
          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });
    });
  });

  describe("SpacingContainer", () => { 
    test("there should be 5 elements", () => {
      const { SpacingContainers } = setup();

      expect(SpacingContainers.length).toEqual(5);
    });   

    describe("Styles", () => {
      describe("margin-left", () => {      
        test("should have 2.4rem", () => {
          const { SpacingContainers } = setup();

          for (const SpacingContainer of SpacingContainers) {
            expect(SpacingContainer).toHaveStyleRule("margin-left", "2.4rem");
          }
        });
      });
    });
  });

  describe("NavItem", () => { 
    test("there should be 5 elements", () => {
      const { NavItems } = setup();

      expect(NavItems.length).toEqual(5);
    });   

    test("each element should have correct content", () => {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SpacingContainers: any;
  NavItems: NodeListOf<HTMLAnchorElement>;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Nav />
  );

  const { container }: RenderResult = utils;
  const FlexContainer: Element = container.children[0];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SpacingContainers: any = FlexContainer.children;
  const NavItems: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("a");

  return {
    ...utils,
    FlexContainer,
    NavItems,
    SpacingContainers
  };
}
