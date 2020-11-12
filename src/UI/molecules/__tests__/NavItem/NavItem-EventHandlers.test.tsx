import { act, fireEvent, RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";
import { Fragment } from "react";
import React from "react";

import NavItem from "UI/molecules/NavItem";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { NavItemProps } from "UI/molecules/__typings__/NavItem";

describe("molecules / NavItem", () => {
  describe("NavItem.Link", () => {
    describe("Event handlers", () => {
      test("should fire element.scrollIntoView onMouseUp", () => {
        const mockScrollIntoView = jest.fn();
        window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

        const { NavItemLink } = setup();

        act(() => {
          fireEvent.mouseUp(NavItemLink);
        });

        expect(mockScrollIntoView).toHaveBeenCalledWith(true);
      });

      test("should fire shuffleText.start onMouseOver", () => {
        jest.spyOn(ShuffleText.prototype, "start");
        jest.useFakeTimers();

        const { NavItemLink } = setup();

        expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

        act(() => {
          fireEvent.mouseOver(NavItemLink);
        });

        jest.advanceTimersByTime(10);

        expect(ShuffleText.prototype.start).toHaveBeenCalled();
        jest.clearAllTimers();
      });
    });
  });
});

interface Setup extends RenderResult {
  NavItemLink: Element;
}

type NavItemTestProps = Partial<NavItemProps>;

function setup(additionalProps?: NavItemTestProps): Setup {
  const props: NavItemProps = {
    href: "#element",
    title: "Title",
    ...additionalProps
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
