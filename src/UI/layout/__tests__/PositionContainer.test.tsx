import React from "react";
import { RenderResult } from "@testing-library/react";

import PositionContainer, { PositionContainerProps } from "<layout>/PositionContainer";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("layout / PositionContainer", () => {
  test("should render children", () => {
    const { PositionContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(PositionContainer.textContent).toEqual("Custom children");
  });
  
  describe("Styles", () => {
    describe("bottom", () => {      
      test("should have unset by default", () => {
        const { PositionContainer } = setup();
  
        expect(PositionContainer).toHaveStyleRule("bottom", "unset");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { PositionContainer } = setup({
          bottom: "spacing48"
        });
  
        expect(PositionContainer).toHaveStyleRule("bottom", "4.8rem");
      });
    });

    describe("height", () => {      
      test("should have unset by default", () => {
        const { PositionContainer } = setup();
  
        expect(PositionContainer).toHaveStyleRule("height", "unset");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { PositionContainer } = setup({
          height: "spacing48"
        });
  
        expect(PositionContainer).toHaveStyleRule("height", "4.8rem");
      });

      test("should have 50% by when passed via prop", () => {
        const { PositionContainer } = setup({
          height: "50%"
        });
  
        expect(PositionContainer).toHaveStyleRule("height", "50%");
      });
  
      test("should have 100% by when passed via prop", () => {
        const { PositionContainer } = setup({
          height: "100%"
        });
  
        expect(PositionContainer).toHaveStyleRule("height", "100%");
      });
    });

    describe("left", () => {      
      test("should have unset by default", () => {
        const { PositionContainer } = setup();
  
        expect(PositionContainer).toHaveStyleRule("left", "unset");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { PositionContainer } = setup({
          left: "spacing48"
        });
  
        expect(PositionContainer).toHaveStyleRule("left", "4.8rem");
      });
    });

    describe("position", () => {      
      test("should have relative by default", () => {
        const { PositionContainer } = setup();
  
        expect(PositionContainer).toHaveStyleRule("position", "relative");
      });
  
      test("should have static when passed via prop", () => {
        const { PositionContainer } = setup({
          position: "static"
        });
  
        expect(PositionContainer).toHaveStyleRule("position", "static");
      });
  
      test("should have fixed when passed via prop", () => {
        const { PositionContainer } = setup({
          position: "fixed"
        });
  
        expect(PositionContainer).toHaveStyleRule("position", "fixed");
      });
  
      test("should have sticky when passed via prop", () => {
        const { PositionContainer } = setup({
          position: "sticky"
        });
  
        expect(PositionContainer).toHaveStyleRule("position", "sticky");
      });
    });

    describe("right", () => {      
      test("should have unset by default", () => {
        const { PositionContainer } = setup();
  
        expect(PositionContainer).toHaveStyleRule("right", "unset");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { PositionContainer } = setup({
          right: "spacing48"
        });
  
        expect(PositionContainer).toHaveStyleRule("right", "4.8rem");
      });
    });

    describe("top", () => {      
      test("should have unset by default", () => {
        const { PositionContainer } = setup();
  
        expect(PositionContainer).toHaveStyleRule("top", "unset");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { PositionContainer } = setup({
          top: "spacing48"
        });
  
        expect(PositionContainer).toHaveStyleRule("top", "4.8rem");
      });
    });

    describe("z-index", () => {      
      test("should have 100 by default", () => {
        const { PositionContainer } = setup();
  
        expect(PositionContainer).toHaveStyleRule("z-index", "100");
      });
  
      test("should have correct value when passed via z-index value in prop", () => {
        const { PositionContainer } = setup({
          zIndex: "layer4"
        });
  
        expect(PositionContainer).toHaveStyleRule("z-index", "400");
      });
    });
  });
});

interface Setup extends RenderResult {
  PositionContainer: Node;
}

type PositionContainerTestProps = Partial<PositionContainerProps>;

function setup(addedProps?: PositionContainerTestProps): Setup {
  const props: PositionContainerProps = {
    children: <div>PositionContainer</div>,
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <PositionContainer {...props}>
      {props.children}
    </PositionContainer>
  );

  const { container } = utils || {};

  return {
    ...utils,
    PositionContainer: container.children[0]
  };
}
