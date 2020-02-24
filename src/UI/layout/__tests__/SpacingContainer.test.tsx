import React from "react";
import { RenderResult } from "@testing-library/react";

import SpacingContainer, { SpacingContainerProps } from "<layout>/SpacingContainer";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("layout / SpacingContainer", () => {
  test("should render children", () => {
    const { SpacingContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(SpacingContainer.textContent).toEqual("Custom children");
  });
  
  describe("Styles", () => {
    describe("margin-bottom", () => {      
      test("should have 0 by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("margin-bottom", "0");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          marginBottom: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("margin-bottom", "4.8rem");
      });
    });

    describe("margin-left", () => {      
      test("should have 0 by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("margin-left", "0");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          marginLeft: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("margin-left", "4.8rem");
      });
    });

    describe("margin-right", () => {      
      test("should have 0 by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("margin-right", "0");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          marginRight: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("margin-right", "4.8rem");
      });
    });

    describe("margin-top", () => {      
      test("should have 0 by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("margin-top", "0");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          marginTop: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("margin-top", "4.8rem");
      });
    });

    describe("padding-bottom", () => {      
      test("should have 0 by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("padding-bottom", "0");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          paddingBottom: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("padding-bottom", "4.8rem");
      });
    });

    describe("padding-left", () => {      
      test("should have 0 by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("padding-left", "0");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          paddingLeft: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("padding-left", "4.8rem");
      });
    });

    describe("padding-right", () => {      
      test("should have 0 by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("padding-right", "0");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          paddingRight: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("padding-right", "4.8rem");
      });
    });

    describe("padding-top", () => {      
      test("should have 0 by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("padding-top", "0");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          paddingTop: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("padding-top", "4.8rem");
      });
    });
  });
});

interface Setup extends RenderResult {
  SpacingContainer: Node;
}

type SpacingContainerTestProps = Partial<SpacingContainerProps>;

function setup(addedProps?: SpacingContainerTestProps): Setup {
  const props: SpacingContainerProps = {
    children: <div>SpacingContainer</div>,
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <SpacingContainer {...props}>
      {props.children}
    </SpacingContainer>
  );

  const { container } = utils || {};

  return {
    ...utils,
    SpacingContainer: container.children[0]
  };
}
