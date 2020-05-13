import React from "react";
import { RenderResult } from "@testing-library/react";

import ListItem from "<atoms>/ListItem";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { ListItemProps } from "<atoms>/__typings__/ListItem.d.ts";

describe("atoms / ListItem", () => {
  test("should render children", () => {
    const { ListItemContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(ListItemContainer.textContent).toEqual("Custom children");
  });
  
  describe("Styles", () => {
    describe("color", () => {      
      test("should have #78b0b5", () => {
        const { ListItemContainer } = setup();
  
        expect(ListItemContainer).toHaveStyleRule("color", "#78b0b5");
      });
    });

    describe("font-size", () => {      
      test("should have 20px", () => {
        const { ListItemContainer } = setup();
  
        expect(ListItemContainer).toHaveStyleRule("font-size", "20px");
      });
    });

    describe("line-height", () => {      
      test("should have 2.8rem", () => {
        const { ListItemContainer } = setup();
  
        expect(ListItemContainer).toHaveStyleRule("line-height", "2.8rem");
      });
    });

    describe("strong", () => {      
      describe("color", () => {      
        test("should have #bcd8db", () => {
          const { ListItemContainer } = setup();
  
          expect(ListItemContainer).toHaveStyleRule("color", "#bcd8db", {
            modifier: "& strong"
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ListItemContainer: Element;
}

type ListItemTestProps = Partial<ListItemProps>;

function setup(additionalProps?: ListItemTestProps): Setup {
  const props: ListItemProps = {
    children: <div>ListItem</div>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <ListItem {...props}>
      {props.children}
    </ListItem>
  );

  const { queryByTestId } = utils || {};

  const ListItemContainer: Element = queryByTestId("ListItem");

  return {
    ...utils,
    ListItemContainer
  };
}
