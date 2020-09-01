import React from "react";
import { RenderResult } from "@testing-library/react";

import SpacingContainer from "<layout>/SpacingContainer";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  SpacingContainerProps
} from "<layout>/__typings__/SpacingContainer.d.ts";

describe("layout / SpacingContainer", () => {
  test("should render children", () => {
    const { SpacingContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(SpacingContainer.textContent).toEqual("Custom children");
  });
  
  describe("Styles", () => {
    describe("height", () => {      
      test("should have auto by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("height", "auto");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          height: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("height", "4.8rem");
      });
  
      test("should have 100% when passed via prop", () => {
        const { SpacingContainer } = setup({
          height: "100%"
        });
  
        expect(SpacingContainer).toHaveStyleRule("height", "100%");
      });
  
      test("should have 50% when passed via prop", () => {
        const { SpacingContainer } = setup({
          height: "50%"
        });
  
        expect(SpacingContainer).toHaveStyleRule("height", "50%");
      });
    });

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
  
      test("should have correct value when passed via custom value in prop", () => {
        const { SpacingContainer } = setup({
          marginBottom: "4vh"
        });
  
        expect(SpacingContainer).toHaveStyleRule("margin-bottom", "4vh");
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
        
      test("should have correct value when passed via custom value in prop", () => {
        const { SpacingContainer } = setup({
          marginLeft: "4vw"
        });
  
        expect(SpacingContainer).toHaveStyleRule("margin-left", "4vw");
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
              
      test("should have correct value when passed via custom value in prop", () => {
        const { SpacingContainer } = setup({
          marginRight: "4vw"
        });
  
        expect(SpacingContainer).toHaveStyleRule("margin-right", "4vw");
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
        
      test("should have correct value when passed via custom value in prop", () => {
        const { SpacingContainer } = setup({
          marginTop: "4vh"
        });
  
        expect(SpacingContainer).toHaveStyleRule("margin-top", "4vh");
      });
    });

    describe("max-width", () => {      
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          maxWidth: "spacing1056"
        });
  
        expect(SpacingContainer).toHaveStyleRule("max-width", "105.6rem");
      });

      test("should have correct value when passed via custom value in prop", () => {
        const { SpacingContainer } = setup({
          maxWidth: "100px"
        });
  
        expect(SpacingContainer).toHaveStyleRule("max-width", "100px");
      });
    });

    describe("min-height", () => {      
      test("should have 0 by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("min-height", "0");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          minHeight: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("min-height", "4.8rem");
      });
  
      test("should have 100vh when passed via prop", () => {
        const { SpacingContainer } = setup({
          minHeight: "100vh"
        });
  
        expect(SpacingContainer).toHaveStyleRule("min-height", "100vh");
      });
    });

    describe("overflow-y", () => {      
      test("should have initial by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("overflow-y", "initial");
      });
  
      test("should have correct value when passed via overflow prop", () => {
        const { SpacingContainer } = setup({
          overflowY: "hidden"
        });
  
        expect(SpacingContainer).toHaveStyleRule("overflow-y", "hidden");
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
              
      test("should have correct value when passed via custom value in prop", () => {
        const { SpacingContainer } = setup({
          paddingBottom: "8vh"
        });
  
        expect(SpacingContainer).toHaveStyleRule("padding-bottom", "8vh");
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
                    
      test("should have correct value when passed via custom value in prop", () => {
        const { SpacingContainer } = setup({
          paddingLeft: "8vw"
        });
  
        expect(SpacingContainer).toHaveStyleRule("padding-left", "8vw");
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
                          
      test("should have correct value when passed via custom value in prop", () => {
        const { SpacingContainer } = setup({
          paddingRight: "8vw"
        });
  
        expect(SpacingContainer).toHaveStyleRule("padding-right", "8vw");
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
                    
      test("should have correct value when passed via custom value in prop", () => {
        const { SpacingContainer } = setup({
          paddingTop: "8vh"
        });
  
        expect(SpacingContainer).toHaveStyleRule("padding-top", "8vh");
      });
    });

    describe("width", () => {      
      test("should have auto by default", () => {
        const { SpacingContainer } = setup();
  
        expect(SpacingContainer).toHaveStyleRule("width", "auto");
      });
  
      test("should have correct value when passed via spacing value in prop", () => {
        const { SpacingContainer } = setup({
          width: "spacing48"
        });
  
        expect(SpacingContainer).toHaveStyleRule("width", "4.8rem");
      });

      test("should have 50% when passed via prop", () => {
        const { SpacingContainer } = setup({
          width: "50%"
        });
  
        expect(SpacingContainer).toHaveStyleRule("width", "50%");
      });
  
      test("should have 100% when passed via prop", () => {
        const { SpacingContainer } = setup({
          width: "100%"
        });
  
        expect(SpacingContainer).toHaveStyleRule("width", "100%");
      });
    });
  });

  describe("Props", () => {
    test("should have id when passed via id prop", () => {
      const { SpacingContainer } = setup({
        id: "customId"
      });
  
      expect(SpacingContainer.getAttribute("id")).toEqual("customId");
  
    });
  });
});

interface Setup extends RenderResult {
  SpacingContainer: Element;
}

type SpacingContainerTestProps = Partial<SpacingContainerProps>;

function setup(additionalProps?: SpacingContainerTestProps): Setup {
  const props: SpacingContainerProps = {
    children: <div>SpacingContainer</div>,
    ...additionalProps
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
