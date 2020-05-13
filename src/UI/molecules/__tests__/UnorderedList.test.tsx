import React from "react";
import { RenderResult } from "@testing-library/react";

import UnorderedList from "<molecules>/UnorderedList";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { ListItemProps } from "<atoms>/__typings__/ListItem.d.ts";
import { UnorderedListProps } from "<molecules>/__typings__/UnorderedList.d.ts";

describe("molecules / UnorderedList", () => {
  test("should render array of ListItems passed via items prop", () => {
    const items: UnorderedListProps["items"] = [
      "Front-end developer",
      "UI Designer"
    ];
    const { ListItem } = setup({
      items
    });

    items.forEach((item: ListItemProps["children"], index: number) => {      
      expect(ListItem[index].textContent).toEqual(item);
    });
  });
  
  describe("Styles", () => {
    describe("list-style-type", () => {      
      test("should have none", () => {
        const { UnorderedListContainer } = setup();
  
        expect(UnorderedListContainer).toHaveStyleRule("list-style-type", "none");
      });
    });

    describe("li", () => {      
      describe("align-items", () => {      
        test("should have flex-start", () => {
          const { UnorderedListContainer } = setup();
  
          expect(UnorderedListContainer).toHaveStyleRule("align-items", "flex-start", {
            modifier: "& li"
          });
        });
      });
      
      describe("display", () => {      
        test("should have flex", () => {
          const { UnorderedListContainer } = setup();
  
          expect(UnorderedListContainer).toHaveStyleRule("display", "flex", {
            modifier: "& li"
          });
        });
      });
      
      describe("margin-bottom", () => {      
        test("should have 1.6rem", () => {
          const { UnorderedListContainer } = setup();
  
          expect(UnorderedListContainer).toHaveStyleRule("margin-bottom", "1.6rem", {
            modifier: "& li"
          });
        });
      });
      
      describe("&::before", () => {      
        describe("background", () => {      
          test("should have #bcd8db", () => {
            const { UnorderedListContainer } = setup();
  
            expect(UnorderedListContainer).toHaveStyleRule("background", "#bcd8db", {
              modifier: "& li::before"
            });
          });
        });
        
        describe("border-radius", () => {      
          test("should have 50%", () => {
            const { UnorderedListContainer } = setup();
  
            expect(UnorderedListContainer).toHaveStyleRule("border-radius", "50%", {
              modifier: "& li::before"
            });
          });
        });
        
        describe("content", () => {      
          test("should have ''", () => {
            const { UnorderedListContainer } = setup();
  
            expect(UnorderedListContainer).toHaveStyleRule("content", "''", {
              modifier: "& li::before"
            });
          });
        });
        
        describe("display", () => {      
          test("should have inline-block", () => {
            const { UnorderedListContainer } = setup();
  
            expect(UnorderedListContainer).toHaveStyleRule("display", "inline-block", {
              modifier: "& li::before"
            });
          });
        });
        
        describe("height", () => {      
          test("should have .8rem", () => {
            const { UnorderedListContainer } = setup();
  
            expect(UnorderedListContainer).toHaveStyleRule("height", ".8rem", {
              modifier: "& li::before"
            });
          });
        });
        
        describe("margin-right", () => {      
          test("should have .8rem", () => {
            const { UnorderedListContainer } = setup();
  
            expect(UnorderedListContainer).toHaveStyleRule("margin-right", ".8rem", {
              modifier: "& li::before"
            });
          });
        });
        
        describe("margin-top", () => {      
          test("should have 1rem", () => {
            const { UnorderedListContainer } = setup();
  
            expect(UnorderedListContainer).toHaveStyleRule("margin-top", "1rem", {
              modifier: "& li::before"
            });
          });
        });
        
        describe("width", () => {      
          test("should have .8rem", () => {
            const { UnorderedListContainer } = setup();
  
            expect(UnorderedListContainer).toHaveStyleRule("width", ".8rem", {
              modifier: "& li::before"
            });
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ListItem: Element[];
  UnorderedListContainer: Element;
}

type UnorderedListTestProps = Partial<UnorderedListProps>;

function setup(additionalProps?: UnorderedListTestProps): Setup {
  const props: UnorderedListProps = {
    items: [],
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <UnorderedList {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};
  const ListItem: Element[] = queryAllByTestId("ListItem");
  const UnorderedListContainer: Element = queryByTestId("UnorderedList");

  return {
    ...utils,
    ListItem,
    UnorderedListContainer
  };
}
