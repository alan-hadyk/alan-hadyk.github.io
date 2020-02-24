import {
  act,
  fireEvent,
  RenderResult
} from "@testing-library/react";
import ShuffleText from "shuffle-text";
import { Fragment } from "react";
import React from "react";

import NavItem, { NavItemProps } from "<molecules>/NavItem";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / NavItem", () => {
  describe("NavItem.Link", () => {    
    describe("Event handlers", () => {
      test("should fire element.scrollIntoView onClick", () => {
        const mockScrollIntoView = jest.fn();
        window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

        const { NavItemLink } = setup();

        act(() => {
          fireEvent.click(NavItemLink);
        });

        expect(mockScrollIntoView).toHaveBeenCalledWith({ 
          behavior: "smooth",
          block: "start"
        });
      });

      test("should fire shuffleText.start onMouseOver", () => {
        jest.spyOn(ShuffleText.prototype, "start");

        const { NavItemLink } = setup();

        expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

        act(() => {
          fireEvent.mouseOver(NavItemLink);
        });

        expect(ShuffleText.prototype.start).toHaveBeenCalled();
      });
    });
  }); 
});

interface Setup extends RenderResult {
  NavItemLink: Element;
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

  return {
    ...utils,
    NavItemLink
  };
}
