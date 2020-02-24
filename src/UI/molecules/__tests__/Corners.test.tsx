import React from "react";
import { RenderResult } from "@testing-library/react";

import Corners, { CornersProps } from "<molecules>/Corners";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / Corners", () => {
  describe("Corner", () => { 
    test("there should be 4 corners", () => {
      const { Corner } = setup();

      expect(Corner.length).toEqual(4);
    });   
  });

  describe("Corner", () => {
    describe("Styles", () => {
      describe("opacity", () => {      
        test("each element should have correct opacity - isActive: false", () => {
          const { Corner } = setup({
            isActive: false
          });
  
          for (const CornerElement of Corner) {
            expect(CornerElement).toHaveStyleRule("opacity", "0.5");
          }
        });

        test("each element should have correct opacity - isActive: true", () => {
          const { Corner } = setup({
            isActive: true
          });
  
          for (const CornerElement of Corner) {
            expect(CornerElement).toHaveStyleRule("opacity", "1");
          }
        });
      });

      describe("left and top", () => {      
        test("each element should have correct left and top - isActive: false", () => {
          const { Corner } = setup({
            isActive: false
          });
  
          expect(Corner[0]).toHaveStyleRule("left", "0");
          expect(Corner[0]).toHaveStyleRule("top", "0");
          expect(Corner[1]).toHaveStyleRule("left", "calc(100% - 8px)");
          expect(Corner[1]).toHaveStyleRule("top", "0");
          expect(Corner[2]).toHaveStyleRule("left", "0");
          expect(Corner[2]).toHaveStyleRule("top", "calc(100% - 8px)");
          expect(Corner[3]).toHaveStyleRule("left", "calc(100% - 8px)");
          expect(Corner[3]).toHaveStyleRule("top", "calc(100% - 8px)");
        });

        test("each element should have correct opacity - isActive: true", () => {
          const { Corner } = setup({
            isActive: true
          });
  
          expect(Corner[0]).toHaveStyleRule("left", "-8px");
          expect(Corner[0]).toHaveStyleRule("top", "-8px");
          expect(Corner[1]).toHaveStyleRule("left", "100%");
          expect(Corner[1]).toHaveStyleRule("top", "-8px");
          expect(Corner[2]).toHaveStyleRule("left", "-8px");
          expect(Corner[2]).toHaveStyleRule("top", "100%");
          expect(Corner[3]).toHaveStyleRule("left", "100%");
          expect(Corner[3]).toHaveStyleRule("top", "100%");
        });
      });

      describe("transform", () => {      
        test("each element should have correct transform", () => {
          const { Corner } = setup();
    
          expect(Corner[0]).toHaveStyleRule("transform", "rotate(0)");
          expect(Corner[1]).toHaveStyleRule("transform", "rotate(90deg)");
          expect(Corner[2]).toHaveStyleRule("transform", "rotate(270deg)");
          expect(Corner[3]).toHaveStyleRule("transform", "rotate(180deg)");
        });
      });
    }); 
  });
});

interface Setup extends RenderResult {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Corner: any;
}

function setup(props?: CornersProps): Setup {
  const utils: RenderResult = renderWithTheme(
    <Corners {...props} />
  );

  const { container }: RenderResult = utils;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Corner: any = container.children;

  return {
    ...utils,
    Corner
  };
}
