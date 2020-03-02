import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardElement from "<molecules>/DashboardElement";
import { DashboardElementProps } from "<molecules>/__typings__/DashboardElement";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / DashboardElement", () => {
  test("should have correct structure", () => {
    const { 
      Corners,
      DashboardElementContainer,
      DashboardElementInnerContainer,
      FlexItem,
      PositionContainer,
      SpacingContainer,
      Text
    } = setup();

    expect(FlexItem.children[0]).toEqual(DashboardElementContainer);
    expect(DashboardElementContainer.children[0]).toEqual(Text);
    expect(DashboardElementContainer.children[1]).toEqual(PositionContainer);
    expect(PositionContainer.children[0]).toEqual(Corners[0]);
    expect(PositionContainer.children[1]).toEqual(Corners[1]);
    expect(PositionContainer.children[2]).toEqual(Corners[2]);
    expect(PositionContainer.children[3]).toEqual(Corners[3]);
    expect(PositionContainer.children[4]).toEqual(DashboardElementInnerContainer);
    expect(DashboardElementInnerContainer.children[0]).toEqual(SpacingContainer);
  });

  describe("DashboardElementInnerContainer", () => {
    describe("Styles", () => {
      test("should have height 100%", () => {
        const { DashboardElementInnerContainer } = setup();
  
        expect(DashboardElementInnerContainer).toHaveStyleRule("height", "100%");
      });

      test("should have background", () => {
        const { DashboardElementInnerContainer } = setup();
  
        expect(DashboardElementInnerContainer).toHaveStyleRule("background", "url(Cross.svg)");
      });

      test("should have background repeat space", () => {
        const { DashboardElementInnerContainer } = setup();
  
        expect(DashboardElementInnerContainer).toHaveStyleRule("background-repeat", "space");
      });

      test("should have background position center", () => {
        const { DashboardElementInnerContainer } = setup();
  
        expect(DashboardElementInnerContainer).toHaveStyleRule("background-position", "center");
      });

      test("should have background size center", () => {
        const { DashboardElementInnerContainer } = setup();
  
        expect(DashboardElementInnerContainer).toHaveStyleRule("background-size", "3.2rem 3.2rem");
      });
    });
  });

  describe("Text", () => { 
    test("should have correct content passed as buttonText", () => {
      const { Text } = setup({
        title: "Tech Stack"
      });

      expect(Text.textContent).toEqual("Tech Stack");
    });

    describe("Styles", () => {
      test("should have color #78b0b5", () => {
        const { Text } = setup();

        expect(Text).toHaveStyleRule("color", "#78b0b5");
      }); 
      
      test("should have font size 16px", () => {
        const { Text } = setup();

        expect(Text).toHaveStyleRule("font-size", "16px");
      }); 

      test("should have font family AnonymousPro", () => {
        const { Text } = setup();

        expect(Text).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      });

      test("should have line height 3.6rem", () => {
        const { Text } = setup();

        expect(Text).toHaveStyleRule("line-height", "3.6rem");
      });

      test("should have text transform uppercase", () => {
        const { Text } = setup();

        expect(Text).toHaveStyleRule("text-transform", "uppercase");
      });
    });
  });

  describe("PositionContainer", () => {
    test("should have 5 children", () => {
      const { PositionContainer } = setup();

      expect(PositionContainer.children.length).toEqual(5);
    });

    describe("Styles", () => {
      test("should have position relative", () => {
        const { PositionContainer } = setup();

        expect(PositionContainer).toHaveStyleRule("position", "relative");
      });
    });
  });

  describe("SpacingContainer", () => {
    test("should render children", () => {
      const { SpacingContainer } = setup({
        children: <div>Custom children</div>
      });
  
      expect(SpacingContainer.textContent).toEqual("Custom children");
    });

    describe("Styles", () => {
      test("should have height 100%", () => {
        const { SpacingContainer } = setup();

        expect(SpacingContainer).toHaveStyleRule("height", "100%");
      });

      test("should have padding right .8rem", () => {
        const { SpacingContainer } = setup();

        expect(SpacingContainer).toHaveStyleRule("padding-right", ".8rem");
      });

      test("should have padding left .8rem", () => {
        const { SpacingContainer } = setup();

        expect(SpacingContainer).toHaveStyleRule("padding-left", ".8rem");
      });

      test("should have padding top .8rem", () => {
        const { SpacingContainer } = setup();

        expect(SpacingContainer).toHaveStyleRule("padding-top", ".8rem");
      });

      test("should have padding bottom .8rem", () => {
        const { SpacingContainer } = setup();

        expect(SpacingContainer).toHaveStyleRule("padding-bottom", ".8rem");
      });
    });
  });
});

interface Setup extends RenderResult {
  Corners: HTMLElement[];
  DashboardElementContainer: Element;
  DashboardElementInnerContainer: Element;
  FlexItem: Element;
  PositionContainer: Element;
  SpacingContainer: Element;
  Text: Element;
}

type DashboardElementTestProps = Partial<DashboardElementProps>;

function setup(addedProps?: DashboardElementTestProps): Setup {
  const props: DashboardElementProps = {
    children: <div>Child</div>,
    childrenHeight: "spacing184",
    flex: "1 1 30%",
    shouldDisplayCorners: true,
    title: "Tech Stack",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <DashboardElement {...props}>
      {props.children}
    </DashboardElement>
  );

  const { container, queryByTestId, queryAllByTestId }: RenderResult = utils;
  const FlexItem: Element = container.children[0];
  const DashboardElementContainer: Element = FlexItem.children[0];
  const Text: Element = DashboardElementContainer.children[0];
  const PositionContainer: Element = DashboardElementContainer.children[1];
  const Corners: HTMLElement[] = queryAllByTestId("Corner");
  const DashboardElementInnerContainer: Element = queryAllByTestId("DashboardElementInnerContainer")[0];
  const SpacingContainer: Element = DashboardElementInnerContainer.querySelector("[data-testid=SpacingContainer]");

  return {
    ...utils,
    Corners,
    DashboardElementContainer,
    DashboardElementInnerContainer,
    FlexItem,
    PositionContainer,
    SpacingContainer,
    Text
  };
}
