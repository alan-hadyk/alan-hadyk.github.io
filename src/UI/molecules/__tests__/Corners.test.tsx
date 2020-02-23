import React from "react";
import { RenderResult } from "@testing-library/react";

import Corners from "<molecules>/Corners";

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
        test("each element should have correct opacity", () => {
          const { Corner } = setup();
  
          for (const CornerElement of Corner) {
            expect(CornerElement).toHaveStyleRule("opacity", "0.5");
          }

        });

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

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Corners />
  );

  const { container }: RenderResult = utils;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Corner: any = container.children;

  return {
    ...utils,
    Corner
  };
}
