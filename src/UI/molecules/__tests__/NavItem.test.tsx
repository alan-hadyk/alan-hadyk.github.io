import React, { Fragment } from "react";
import {
  act,
  fireEvent,
  RenderResult
}from "@testing-library/react";

import NavItem, { NavItemProps } from "<molecules>/NavItem";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import ShuffleText from "shuffle-text";

describe("molecules / NavItem", () => {
  describe("useLayoutEffect", () => {
    test("should fire shuffleText.setText", () => {
      jest.spyOn(ShuffleText.prototype, "setText");

      setup();

      expect(ShuffleText.prototype.setText).toHaveBeenCalled();
    });
  });

  describe("PositionContainer", () => {    
    describe("Styles", () => {
      describe("position", () => {      
        test("should have relative", () => {
          const { PositionContainer } = setup();
    
          expect(PositionContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });
  
  describe("NavItem.Link", () => {    
    test("should have textContent equal to title prop", () => {
      const { NavItemLink } = setup({
        title: "Nice portfolio"
      });
      
      expect(NavItemLink.textContent).toEqual("Nice portfolio");
    });

    describe("Styles", () => {
      describe("color", () => {      
        test("should have #fff when isActive: true", () => {
          const { NavItemLink } = setup({
            isActive: true
          });
    
          expect(NavItemLink).toHaveStyleRule("color", "#fff");
        });

        test("should have #78b0b5 when isActive: false", () => {
          const { NavItemLink } = setup({
            isActive: false
          });
    
          expect(NavItemLink).toHaveStyleRule("color", "#78b0b5");
        });

        test("should have #fff for &:hover, &:active, &:focus", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("color", "#fff", {
            modifier: ":hover",
          });
    
          expect(NavItemLink).toHaveStyleRule("color", "#fff", {
            modifier: ":active",
          });
    
          expect(NavItemLink).toHaveStyleRule("color", "#fff", {
            modifier: ":focus",
          });
        });
      });

      describe("cursor", () => {      
        test("should have pointer", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("cursor", "pointer");
        });
      });

      describe("display", () => {      
        test("should have block", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("display", "block");
        });
      });

      describe("font-size", () => {      
        test("should have 28px", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("font-size", "28px");
        });
      });

      describe("height", () => {      
        test("should have 4.8rem", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("line-height", () => {      
        test("should have 4.8rem", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("line-height", "4.8rem");
        });
      });

      describe("position", () => {      
        test("should have relative", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("position", "relative");
        });
      });

      describe("text-shadow", () => {      
        test("should have 0px 0px .8rem #bcd8db when isActive: true", () => {
          const { NavItemLink } = setup({
            isActive: true
          });
    
          expect(NavItemLink).toHaveStyleRule("text-shadow", "0px 0px .8rem #bcd8db");
        });

        test("should have none when isActive: false", () => {
          const { NavItemLink } = setup({
            isActive: false
          });
    
          expect(NavItemLink).toHaveStyleRule("text-shadow", "none");
        });


        test("should have 0px 0px .8rem #bcd8db for &:hover, &:active, &:focus", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("text-shadow", "0px 0px .8rem #bcd8db", {
            modifier: ":hover",
          });
    
          expect(NavItemLink).toHaveStyleRule("text-shadow", "0px 0px .8rem #bcd8db", {
            modifier: ":active",
          });
    
          expect(NavItemLink).toHaveStyleRule("text-shadow", "0px 0px .8rem #bcd8db", {
            modifier: ":focus",
          });
        });
      });

      describe("text-transform", () => {      
        test("should have uppercase", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("text-transform", "uppercase");
        });
      });

      describe("transition", () => {      
        test("should have all 150ms ease-in-out", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("transition", "all 150ms ease-in-out");
        });
      });

      describe("z-index", () => {      
        test("should have 200", () => {
          const { NavItemLink } = setup();
    
          expect(NavItemLink).toHaveStyleRule("z-index", "200");
        });
      });
    });

    describe("Event handlers", () => {
      test("should fire element.scrollIntoView onClick", () => {
        const mockScrollIntoView = jest.fn();
        window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

        const { NavItemLink } = setup();

        act(() => {
          fireEvent.click(NavItemLink);
        });

        expect(mockScrollIntoView).toHaveBeenCalledWith({ 
          behavior: "smooth" 
        });
      });

      test("should fire shuffleText.start onMouseOver", () => {
        jest.spyOn(ShuffleText.prototype, "start");

        const { NavItemLink } = setup();

        act(() => {
          fireEvent.mouseOver(NavItemLink);
        });

        expect(ShuffleText.prototype.start).toHaveBeenCalled();
      });
    });
  });
});

interface Setup extends RenderResult {
  PositionContainer: Element;
  NavItemLink: Element;
  NavItemLineLeft: Element;
  NavItemLineRight: Element;
  TestElement: Element;
}

type NavItemTestProps = Partial<NavItemProps>;

function setup(addedProps?: NavItemTestProps): Setup {
  const props: NavItemProps = {
    href: "#element",
    title: "Title",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <Fragment>
      <NavItem {...props} />
      <div id="element" data-testid="testElement" />
    </Fragment>
  );

  const { container }: RenderResult = utils;
  const PositionContainer: Element = container.children[0];
  const NavItemLink: Element = PositionContainer.children[0];
  const NavItemLineLeft: Element = PositionContainer.children[1];
  const NavItemLineRight: Element = PositionContainer.children[2];
  const TestElement: Element = container.children[1];

  return {
    ...utils,
    PositionContainer,
    NavItemLink,
    NavItemLineLeft,
    NavItemLineRight,
    TestElement
  };
}
