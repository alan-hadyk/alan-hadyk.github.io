import React from "react";
import { RenderResult } from "@testing-library/react";

import Code from "<pages>/Home/sections/dashboard/elements/Code";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / dashboard / elements / Code", () => {
  test("should have correct structure", () => {
    const { 
      DashboardElement,
      TypingAnimation
    } = setup();

    expect(DashboardElement.children[1].children[0].children[0]).toEqual(TypingAnimation);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 25%", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("flex", "0 1 25%");
        });
      });

      describe("childrenHeight", () => {
        test("should have 17vh", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[1]).toHaveStyleRule("height", "17vh");
        });
      });

      describe("title", () => {
        test("should render Code", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[0].textContent).toEqual("Code");
        });
      });
    });
  });

  describe("TypingAnimation", () => {
    test("should render", () => {
      const { TypingAnimation } = setup();
  
      expect(TypingAnimation).toHaveStyleRule("height", "100%");
      expect(TypingAnimation).toHaveStyleRule("position", "relative");
      
      expect(TypingAnimation.childElementCount).toEqual(1);
      expect(TypingAnimation.children[0].childElementCount).toEqual(1);
      
      expect(TypingAnimation.children[0].children[0]).toHaveStyleRule("color", "#78b0b5");
      expect(TypingAnimation.children[0].children[0]).toHaveStyleRule("bottom", "0");
      expect(TypingAnimation.children[0].children[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      expect(TypingAnimation.children[0].children[0]).toHaveStyleRule("font-size", "8px");
      expect(TypingAnimation.children[0].children[0]).toHaveStyleRule("left", "0");
      expect(TypingAnimation.children[0].children[0]).toHaveStyleRule("line-height", "1.2rem");
      expect(TypingAnimation.children[0].children[0]).toHaveStyleRule("min-height", "100%");
      expect(TypingAnimation.children[0].children[0]).toHaveStyleRule("position", "absolute");
    });
  });
});

interface Setup extends RenderResult {
  DashboardElement: Element;
  TypingAnimation: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Code />
  );

  const { container, queryByTestId } = utils || {};

  return {
    ...utils,
    DashboardElement: container.children[0],
    TypingAnimation: queryByTestId("TypingAnimation")
  };
}
