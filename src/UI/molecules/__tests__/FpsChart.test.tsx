import React from "react";
import { RenderResult } from "@testing-library/react";

import FpsChart from "<molecules>/FpsChart";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<hooks>/useFpsCounter");

describe("molecules / FpsChart", () => {
  test("should have correct structure", () => {
    const { 
      Canvas,
      Container,
      FpsCounter,
      HorizontalLines,
      Labels,
      PositionContainer
    } = setup();

    expect(PositionContainer.children[0]).toEqual(Container);
    expect(Container.children[0]).toEqual(FpsCounter);
    expect(Container.children[1]).toEqual(Canvas);
    expect(Container.children[2]).toEqual(HorizontalLines[0]);
    expect(Container.children[3]).toEqual(HorizontalLines[1]);
    expect(Container.children[4]).toEqual(HorizontalLines[2]);
    expect(Container.children[5]).toEqual(Labels[0]);
    expect(Container.children[6]).toEqual(Labels[1]);
    expect(Container.children[7]).toEqual(Labels[2]);
    expect(Container.children[8]).toEqual(Labels[3]);
    expect(Container.children[9]).toEqual(Labels[4]);
  });
  
  describe("PositionContainer", () => {    
    describe("Props", () => {
      describe("height", () => {      
        test("should have 100%", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("height", "100%");
        });
      });
      
      describe("position", () => {      
        test("should have relative", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });
  
  describe("FpsChart.Container", () => {    
    describe("Styles", () => {
      describe("border", () => {      
        test("should have thin solid #526065", () => {
          const { Container } = setup();

          expect(Container).toHaveStyleRule("border", "thin solid #526065");
        });
      });

      describe("height", () => {      
        test("should have 100%", () => {
          const { Container } = setup();

          expect(Container).toHaveStyleRule("height", "100%");
        });
      });
    });
  });
  
  describe("FpsChart.FpsCounter", () => {    
    describe("Styles", () => {
      describe("color", () => {      
        test("should have #bcd8db", () => {
          const { FpsCounter } = setup();

          expect(FpsCounter).toHaveStyleRule("color", "#bcd8db");
        });
      });

      describe("font-size", () => {      
        test("should have 16px", () => {
          const { FpsCounter } = setup();

          expect(FpsCounter).toHaveStyleRule("font-size", "16px");
        });
      });

      describe("line-height", () => {      
        test("should have 3.6rem", () => {
          const { FpsCounter } = setup();

          expect(FpsCounter).toHaveStyleRule("line-height", "3.6rem");
        });
      });

      describe("position", () => {      
        test("should have absolute", () => {
          const { FpsCounter } = setup();

          expect(FpsCounter).toHaveStyleRule("position", "absolute");
        });
      });

      describe("right", () => {      
        test("should have 0", () => {
          const { FpsCounter } = setup();

          expect(FpsCounter).toHaveStyleRule("right", "0");
        });
      });

      describe("text-align", () => {      
        test("should have right", () => {
          const { FpsCounter } = setup();

          expect(FpsCounter).toHaveStyleRule("text-align", "right");
        });
      });

      describe("top", () => {      
        test("should have 0", () => {
          const { FpsCounter } = setup();

          expect(FpsCounter).toHaveStyleRule("top", "0");
        });
      });

      describe("transform", () => {      
        test("should have translateY(-3.6rem)", () => {
          const { FpsCounter } = setup();

          expect(FpsCounter).toHaveStyleRule("transform", "translateY(-3.6rem)");
        });
      });
    });
  });
  
  describe("FpsChart.Canvas", () => {    
    describe("Styles", () => {
      describe("height", () => {      
        test("should have 100%", () => {
          const { Canvas } = setup();

          expect(Canvas).toHaveStyleRule("height", "100%");
        });
      });

      describe("width", () => {      
        test("should have 100%", () => {
          const { Canvas } = setup();

          expect(Canvas).toHaveStyleRule("width", "100%");
        });
      });
    });
  });
  
  describe("FpsChartLines", () => {   
    test("should render 3 items", () => {
      const { HorizontalLines } = setup();

      expect(HorizontalLines.length).toEqual(3);

    }); 
    
    describe("Props", () => {
      describe("lines", () => {      
        test("should have [15, 30, 45] (maxValue === 60)", () => {
          const { HorizontalLines } = setup();

          expect(HorizontalLines[0]).toHaveStyleRule("bottom", "25%");
          expect(HorizontalLines[1]).toHaveStyleRule("bottom", "50%");
          expect(HorizontalLines[2]).toHaveStyleRule("bottom", "75%");
        });
      });
    });
  });
  
  describe("FpsChartLabels", () => {   
    test("should render 5 items", () => {
      const { Labels } = setup();

      expect(Labels.length).toEqual(5);

    }); 
    
    describe("Props", () => {
      describe("labels", () => {      
        test("should have [0, 15, 30, 45, 60]", () => {
          const labels: number[] = [0, 15, 30, 45, 60];
          const { Labels } = setup();

          labels.forEach((label: number, index: number) => {
            expect(Labels[index].textContent).toEqual(String(label));
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Canvas: Element;
  Container: Element;
  FpsCounter: Element;
  HorizontalLines: Element[];
  Labels: Element[];
  PositionContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <FpsChart />
  );

  const { queryAllByTestId }: RenderResult = utils;

  const Canvas: Element = queryAllByTestId("Canvas")[0];
  const Container: Element = queryAllByTestId("Container")[0];
  const FpsCounter: Element = queryAllByTestId("FpsCounter")[0];
  const HorizontalLines: Element[] = queryAllByTestId("HorizontalLine");
  const Labels: Element[] = queryAllByTestId("Label");
  const PositionContainer: Element = queryAllByTestId("FpsChart")[0];

  return {
    ...utils,
    Canvas,
    Container,
    FpsCounter,
    HorizontalLines,
    Labels,
    PositionContainer
  };
}
