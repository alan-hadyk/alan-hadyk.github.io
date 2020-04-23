import React from "react";
import { RenderResult } from "@testing-library/react";

import FpsChartLines from "<atoms>/FpsChartLines";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  FpsChartLinesProps
} from "<atoms>/__typings__/FpsChartLines.d.ts";

describe("atoms / FpsChartLines", () => {
  describe("FpsChartLines.HorizontalLine", () => {
    describe("should render correct number of items", () => {
      test("for 5 lines", () => {
        const { HorizontalLines } = setup({
          lines: [1, 2, 3, 4, 5]
        });
        
        expect(HorizontalLines.length).toEqual(5);
      });
      
      test("for 10 lines", () => {
        const { HorizontalLines } = setup({
          lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        });
        
        expect(HorizontalLines.length).toEqual(10);
      });  
    });
    
    describe("Styles", () => {
      const lines: number[] = [15, 30, 45];
      let HorizontalLines: Element[];
      const maxValue = 60;

      beforeEach(() => {
        HorizontalLines = setup({
          lines,
          maxValue
        }).HorizontalLines;
      });

      describe("border", () => {
        test("should have thin solid rgba(82,96,101,0.25)", () => {          
          lines.forEach((_label: number, index: number) => {
            expect(HorizontalLines[index]).toHaveStyleRule("border", "thin solid rgba(82,96,101,0.25)");
          });
        });
      });

      describe("bottom", () => {
        test("should have ${(line / maxValue) * 100}%", () => {          
          lines.forEach((line: number, index: number) => {
            expect(HorizontalLines[index]).toHaveStyleRule("bottom", `${(line / maxValue) * 100}%`);
          });
        });
      });

      describe("height", () => {
        test("should have .1rem", () => {          
          lines.forEach((_line: number, index: number) => {
            expect(HorizontalLines[index]).toHaveStyleRule("height", ".1rem");
          });
        });
      });

      describe("left", () => {
        test("should have 0", () => {          
          lines.forEach((_line: number, index: number) => {
            expect(HorizontalLines[index]).toHaveStyleRule("left", "0");
          });
        });
      });

      describe("position", () => {
        test("should have absolute", () => {          
          lines.forEach((_line: number, index: number) => {
            expect(HorizontalLines[index]).toHaveStyleRule("position", "absolute");
          });
        });
      });

      describe("right", () => {
        test("should have 0", () => {          
          lines.forEach((_line: number, index: number) => {
            expect(HorizontalLines[index]).toHaveStyleRule("right", "0");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HorizontalLines: Element[];
}

type FpsChartLinesTestProps = Partial<FpsChartLinesProps>;

function setup(addedProps?: FpsChartLinesTestProps): Setup {
  const props: FpsChartLinesProps = {
    lines: [0, 15, 30, 45],
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <FpsChartLines {...props} /> 
  );

  const { queryAllByTestId } = utils || {};

  return {
    ...utils,
    HorizontalLines: queryAllByTestId("HorizontalLine")
  };
}
