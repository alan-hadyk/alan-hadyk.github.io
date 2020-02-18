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
  
  describe("NavItem.Line", () => {
    describe("Left and right", () => {      
      describe("Styles", () => {
        describe("background-color", () => {      
          test("should have #fff", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup();
      
            expect(NavItemLineLeft).toHaveStyleRule("background-color", "#fff");
            expect(NavItemLineRight).toHaveStyleRule("background-color", "#fff");
          });
        });
  
        describe("bottom", () => {      
          test("should have 0", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup();
      
            expect(NavItemLineLeft).toHaveStyleRule("bottom", "0");
            expect(NavItemLineRight).toHaveStyleRule("bottom", "0");
          });
        });

        describe("box-shadow", () => {      
          test("should have 0px 0px .4rem #bcd8db when isActive: true", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup();
      
            expect(NavItemLineLeft).toHaveStyleRule("box-shadow", "0px 0px .4rem 0px #bcd8db");
            expect(NavItemLineRight).toHaveStyleRule("box-shadow", "0px 0px .4rem 0px #bcd8db");
          });
        });

        describe("display", () => {      
          test("should have block", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup();
      
            expect(NavItemLineLeft).toHaveStyleRule("display", "block");
            expect(NavItemLineRight).toHaveStyleRule("display", "block");
          });
        });
  
        describe("height", () => {      
          test("should have 1px", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup();
      
            expect(NavItemLineLeft).toHaveStyleRule("height", "1px");
            expect(NavItemLineRight).toHaveStyleRule("height", "1px");
          });
        });
  
        describe("opacity", () => {      
          test("should have 1 when isActive: true", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup({
              isActive: true
            });
      
            expect(NavItemLineLeft).toHaveStyleRule("opacity", "1");
            expect(NavItemLineRight).toHaveStyleRule("opacity", "1");
          });
        
          test("should have 0 when isActive: false", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup({
              isActive: false
            });
      
            expect(NavItemLineLeft).toHaveStyleRule("opacity", "0");
            expect(NavItemLineRight).toHaveStyleRule("opacity", "0");
          });
        });
  
        describe("position", () => {      
          test("should have absolute", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup();
      
            expect(NavItemLineLeft).toHaveStyleRule("position", "absolute");
            expect(NavItemLineRight).toHaveStyleRule("position", "absolute");
          });
        });
  
        describe("transition", () => {      
          test("should have all 150ms ease-in-out", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup();
      
            expect(NavItemLineLeft).toHaveStyleRule("transition", "all 150ms ease-in-out");
            expect(NavItemLineRight).toHaveStyleRule("transition", "all 150ms ease-in-out");
          });
        });

        describe("visibility", () => {      
          test("should have visible when isActive: true", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup({
              isActive: true
            });
      
            expect(NavItemLineLeft).toHaveStyleRule("visibility", "visible");
            expect(NavItemLineRight).toHaveStyleRule("visibility", "visible");
          });
        
          test("should have hidden when isActive: false", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup({
              isActive: false
            });
      
            expect(NavItemLineLeft).toHaveStyleRule("visibility", "hidden");
            expect(NavItemLineRight).toHaveStyleRule("visibility", "hidden");
          });
        });

        describe("width", () => {      
          test("should have 50% when isActive: true", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup({
              isActive: true
            });
      
            expect(NavItemLineLeft).toHaveStyleRule("width", "50%");
            expect(NavItemLineRight).toHaveStyleRule("width", "50%");
          });
        
          test("should have 0 when isActive: false", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup({
              isActive: false
            });
      
            expect(NavItemLineLeft).toHaveStyleRule("width", "0");
            expect(NavItemLineRight).toHaveStyleRule("width", "0");
          });
        });
  
        describe("z-index", () => {      
          test("should have 100", () => {
            const { NavItemLineLeft, NavItemLineRight } = setup();
      
            expect(NavItemLineLeft).toHaveStyleRule("z-index", "100");
            expect(NavItemLineRight).toHaveStyleRule("z-index", "100");
          });
        });
      });
    });

    describe("Left", () => {      
      describe("Styles", () => {
        describe("left", () => {      
          test("should have 50%", () => {
            const { NavItemLineLeft } = setup();
      
            expect(NavItemLineLeft).toHaveStyleRule("left", "50%");
          });
        });
      });
    });

    describe("Right", () => {      
      describe("Styles", () => {
        describe("right", () => {      
          test("should have 50%", () => {
            const { NavItemLineRight } = setup();
      
            expect(NavItemLineRight).toHaveStyleRule("right", "50%");
          });
        });
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
