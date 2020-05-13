import React from "react";
import { RenderResult } from "@testing-library/react";
import max from "lodash/max";

import FpsChartLabels from "<atoms>/FpsChartLabels";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  FpsChartLabelsProps
} from "<atoms>/__typings__/FpsChartLabels.d.ts";

describe("atoms / FpsChartLabels", () => {
  describe("FpsChartLabels.Label", () => {
    describe("should render correct number of items", () => {
      test("for 5 labels", () => {
        const { Labels } = setup({
          labels: [1, 2, 3, 4, 5]
        });
        
        expect(Labels.length).toEqual(5);
      });
      
      test("for 10 labels", () => {
        const { Labels } = setup({
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        });
        
        expect(Labels.length).toEqual(10);
      });  
    });

    test("should render correct label for each item", () => {
      const labels: number[] = [16, 24, 38, 49, 52];
      const { Labels } = setup({
        labels
      });
        
      labels.forEach((label: number, index: number) => {
        expect(Labels[index].textContent).toEqual(String(label));
      });
    });
    
    describe("Styles", () => {
      const labels: number[] = [16, 24, 38, 49, 52];
      let Labels: Element[];

      beforeEach(() => {
        Labels = setup({
          labels
        }).Labels;
      });

      describe("bottom", () => {
        test("should have ${(label / maxValue) * 100}%", () => {          
          const maxValue: number = max(labels);

          labels.forEach((label: number, index: number) => {
            expect(Labels[index]).toHaveStyleRule("bottom", `${(label / maxValue) * 100}%`);
          });
        });
      });

      describe("color", () => {
        test("should have #bcd8db", () => {          
          labels.forEach((_label: number, index: number) => {
            expect(Labels[index]).toHaveStyleRule("color", "#bcd8db");
          });
        });
      });

      describe("display", () => {
        test("should have inline-block", () => {          
          labels.forEach((_label: number, index: number) => {
            expect(Labels[index]).toHaveStyleRule("display", "inline-block");
          });
        });
      });

      describe("font-size", () => {
        test("should have 8px", () => {          
          labels.forEach((_label: number, index: number) => {
            expect(Labels[index]).toHaveStyleRule("font-size", "8px");
          });
        });
      });

      describe("left", () => {
        test("should have 0", () => {          
          labels.forEach((_label: number, index: number) => {
            expect(Labels[index]).toHaveStyleRule("left", "0");
          });
        });
      });

      describe("line-height", () => {
        test("should have .8rem", () => {          
          labels.forEach((_label: number, index: number) => {
            expect(Labels[index]).toHaveStyleRule("line-height", ".8rem");
          });
        });
      });

      describe("padding-right", () => {
        test("should have .8rem", () => {          
          labels.forEach((_label: number, index: number) => {
            expect(Labels[index]).toHaveStyleRule("padding-right", ".8rem");
          });
        });
      });

      describe("position", () => {
        test("should have absolute", () => {          
          labels.forEach((_label: number, index: number) => {
            expect(Labels[index]).toHaveStyleRule("position", "absolute");
          });
        });
      });

      describe("text-align", () => {
        test("should have right", () => {          
          labels.forEach((_label: number, index: number) => {
            expect(Labels[index]).toHaveStyleRule("text-align", "right");
          });
        });
      });

      describe("transform", () => {
        test("should have translateX(-100%) for first item", () => {          
          expect(Labels[0]).toHaveStyleRule("transform", "translateX(-100%)");
        });

        test("should have translateX(-100%) translateY(100%) for last item", () => {          
          expect(Labels[labels.length - 1]).toHaveStyleRule("transform", "translateX(-100%) translateY(100%)");
        });

        test("should have translateX(-100%) translateY(25%) for other items", () => {          
          labels.forEach((_label: number, index: number) => {
            const isFirstItem: boolean = index === 0;
            const isLastItem: boolean = index === labels.length - 1;
          
            if (!isFirstItem && !isLastItem) {
              expect(Labels[index]).toHaveStyleRule("transform", "translateX(-100%) translateY(25%)");
            }
          });
        });
      });

    });
  });
});

interface Setup extends RenderResult {
  Labels: Element[];
}

type FpsChartLabelsTestProps = Partial<FpsChartLabelsProps>;

function setup(additionalProps?: FpsChartLabelsTestProps): Setup {
  const props: FpsChartLabelsProps = {
    labels: [0, 15, 30, 45],
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <FpsChartLabels {...props} /> 
  );

  const { queryAllByTestId } = utils || {};

  return {
    ...utils,
    Labels: queryAllByTestId("Label")
  };
}
