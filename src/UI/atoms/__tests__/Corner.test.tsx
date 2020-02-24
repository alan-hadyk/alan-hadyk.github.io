import React from "react";
import { RenderResult } from "@testing-library/react";

import Corner, { CornerProps } from "<atoms>/Corner";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("atoms / Corner", () => {
  describe("Styles", () => {
    test("should have border-left thin solid #fff", () => {
      const { CornerContainer } = setup();

      expect(CornerContainer).toHaveStyleRule("border-left", "thin solid #fff");
    });

    test("should have border-top thin solid #fff", () => {
      const { CornerContainer } = setup();

      expect(CornerContainer).toHaveStyleRule("border-top", "thin solid #fff");
    });

    test("should have height 0.8rem", () => {
      const { CornerContainer } = setup();

      expect(CornerContainer).toHaveStyleRule("height", ".8rem");
    });

    test("should have width 0.8rem", () => {
      const { CornerContainer } = setup();

      expect(CornerContainer).toHaveStyleRule("width", ".8rem");
    });

    test("should have position absolute", () => {
      const { CornerContainer } = setup();

      expect(CornerContainer).toHaveStyleRule("position", "absolute");
    });

    test("should have transition `all fast ease-in-out`", () => {
      const { CornerContainer } = setup();
    
      expect(CornerContainer).toHaveStyleRule("transition", "all 150ms ease-in-out");
    });

    test("should have left 0 for position topLeft", () => {
      const { CornerContainer } = setup({
        position: "topLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("left", "0");
    });

    test("should have top 0 for position topLeft", () => {
      const { CornerContainer } = setup({
        position: "topLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("top", "0");
    });

    test("should have transform rotate(0) for position topLeft", () => {
      const { CornerContainer } = setup({
        position: "topLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("transform", "rotate(0)");
    });

    test("should have left calc(100% - 8px) for position topRight", () => {
      const { CornerContainer } = setup({
        position: "topRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("left", "calc(100% - 8px)");
    });

    test("should have top 0 for position topRight", () => {
      const { CornerContainer } = setup({
        position: "topRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("top", "0");
    });

    test("should have transform rotate(90deg) for position topRight", () => {
      const { CornerContainer } = setup({
        position: "topRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("transform", "rotate(90deg)");
    });

    test("should have left 0 for position bottomLeft", () => {
      const { CornerContainer } = setup({
        position: "bottomLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("left", "0");
    });

    test("should have top calc(100% - 8px) for position bottomLeft", () => {
      const { CornerContainer } = setup({
        position: "bottomLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("top", "calc(100% - 8px)");
    });

    test("should have transform rotate(270deg) for position bottomLeft", () => {
      const { CornerContainer } = setup({
        position: "bottomLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("transform", "rotate(270deg)");
    });

    test("should have left calc(100% - 8px) for position bottomRight", () => {
      const { CornerContainer } = setup({
        position: "bottomRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("left", "calc(100% - 8px)");
    });

    test("should have top calc(100% - 8px) for position bottomRight", () => {
      const { CornerContainer } = setup({
        position: "bottomRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("top", "calc(100% - 8px)");
    });

    test("should have transform rotate(180deg) for position bottomRight", () => {
      const { CornerContainer } = setup({
        position: "bottomRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("transform", "rotate(180deg)");
    });

    test("should have left -8px for position topLeft when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "topLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("left", "-8px");
    });

    test("should have top -8px for position topLeft when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "topLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("top", "-8px");
    });

    test("should have transform rotate(0) for position topLeft when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "topLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("transform", "rotate(0)");
    });

    test("should have left 100% for position topRight when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "topRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("left", "100%");
    });

    test("should have top -8px for position topRight when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "topRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("top", "-8px");
    });

    test("should have transform rotate(90deg) for position topRight when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "topRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("transform", "rotate(90deg)");
    });

    test("should have left -8px for position bottomLeft when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "bottomLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("left", "-8px");
    });

    test("should have top 100% for position bottomLeft when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "bottomLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("top", "100%");
    });

    test("should have transform rotate(270deg) for position bottomLeft when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "bottomLeft"
      });
  
      expect(CornerContainer).toHaveStyleRule("transform", "rotate(270deg)");
    });
      
    test("should have left 100% for position bottomRight when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "bottomRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("left", "100%");
    });

    test("should have top 100% for position bottomRight when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "bottomRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("top", "100%");
    });

    test("should have transform rotate(180deg) for position bottomRight when is active", () => {
      const { CornerContainer } = setup({
        isActive: true,
        position: "bottomRight"
      });
  
      expect(CornerContainer).toHaveStyleRule("transform", "rotate(180deg)");
    });

    test("should have opacity 0.5 when is not active", () => {
      const { CornerContainer } = setup();
  
      expect(CornerContainer).toHaveStyleRule("opacity", "0.5");
    });

    test("should have opacity 1 when is active", () => {
      const { CornerContainer } = setup({
        isActive: true
      });
  
      expect(CornerContainer).toHaveStyleRule("opacity", "1");
    });
  });
});

interface Setup extends RenderResult {
  CornerContainer: Element;
}

type CornerTestProps = Partial<CornerProps>;

function setup(addedProps?: CornerTestProps): Setup {
  const props: CornerProps = {
    isActive: false,
    position: "topLeft",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <Corner {...props} /> 
  );

  const { container } = utils || {};

  return {
    ...utils,
    CornerContainer: container.children[0]
  };
}
