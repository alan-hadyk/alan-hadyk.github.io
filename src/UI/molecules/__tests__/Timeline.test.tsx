import React from "react";
import { RenderResult } from "@testing-library/react";

import Timeline from "<molecules>/Timeline";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / Timeline", () => {
  test("should have correct structure", () => {
    const { 
      Hexagon,
      TimelineContainer,
      TimelineHexagonPositionContainer,
      TimelineLine  
    } = setup();

    expect(TimelineContainer.children[0]).toEqual(TimelineHexagonPositionContainer);
    expect(TimelineContainer.children[1]).toEqual(TimelineLine);

    expect(TimelineHexagonPositionContainer.children[0]).toEqual(Hexagon);
  });
  
  describe("TimelineContainer", () => {
    describe("Props", () => {
      let TimelineContainer: Element;

      beforeEach(() => {
        TimelineContainer = setup().TimelineContainer;
      });

      describe("height", () => {      
        test("should have 100%", () => {
          expect(TimelineContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("position", () => {      
        test("should have relative", () => {
          expect(TimelineContainer).toHaveStyleRule("position", "relative");
        });
      });

      describe("width", () => {      
        test("should have 1.6rem", () => {
          expect(TimelineContainer).toHaveStyleRule("width", "1.6rem");
        });
      });
    });
  });
  
  describe("TimelineHexagonPositionContainer", () => {
    describe("Props", () => {
      let TimelineHexagonPositionContainer: Element;

      beforeEach(() => {
        TimelineHexagonPositionContainer = setup().TimelineHexagonPositionContainer;
      });

      describe("height", () => {      
        test("should have 1.6rem", () => {
          expect(TimelineHexagonPositionContainer).toHaveStyleRule("height", "1.6rem");
        });
      });

      describe("left", () => {      
        test("should have 0", () => {
          expect(TimelineHexagonPositionContainer).toHaveStyleRule("left", "0");
        });
      });

      describe("position", () => {      
        test("should have absolute", () => {
          expect(TimelineHexagonPositionContainer).toHaveStyleRule("position", "absolute");
        });
      });

      describe("top", () => {      
        test("should have 0", () => {
          expect(TimelineHexagonPositionContainer).toHaveStyleRule("top", "0");
        });
      });

      describe("width", () => {      
        test("should have 1.6rem", () => {
          expect(TimelineHexagonPositionContainer).toHaveStyleRule("width", "1.6rem");
        });
      });
    });
  });
  
  describe("Hexagon", () => {
    describe("Props", () => {
      let Hexagon: Element;

      beforeEach(() => {
        Hexagon = setup().Hexagon;
      });

      describe("fill", () => {      
        test("should have solid", () => {
          expect(Hexagon.children[0].textContent).toEqual("Hexagon.svg");
          expect(Hexagon.children[0]).toHaveStyleRule("fill", "#78b0b5", {
            modifier: "svg path"
          });
          expect(Hexagon.children[0]).toHaveStyleRule("filter", "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", {
            modifier: "svg"
          });
        });
      });
    });
  });
  
  describe("TimelineLine", () => {
    describe("Styles", () => {
      let TimelineLine: Element;

      beforeEach(() => {
        TimelineLine = setup().TimelineLine;
      });

      describe("background-color", () => {      
        test("should have #78b0b5", () => {
          expect(TimelineLine).toHaveStyleRule("background-color", "#78b0b5");
        });
      });
      
      describe("bottom", () => {      
        test("should have 0", () => {
          expect(TimelineLine).toHaveStyleRule("bottom", "0");
        });
      });
      
      describe("left", () => {      
        test("should have 50%", () => {
          expect(TimelineLine).toHaveStyleRule("left", "50%");
        });
      });
      
      describe("position", () => {      
        test("should have absolute", () => {
          expect(TimelineLine).toHaveStyleRule("position", "absolute");
        });
      });
      
      describe("top", () => {      
        test("should have 0", () => {
          expect(TimelineLine).toHaveStyleRule("top", "0");
        });
      });
      
      describe("transform", () => {      
        test("should have translateX(-50%)", () => {
          expect(TimelineLine).toHaveStyleRule("transform", "translateX(-50%)");
        });
      });
      
      describe("width", () => {      
        test("should have .2rem", () => {
          expect(TimelineLine).toHaveStyleRule("width", ".2rem");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Hexagon: Element;
  TimelineContainer: Element;
  TimelineHexagonPositionContainer: Element;
  TimelineLine: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Timeline />
  );

  const { queryAllByTestId } = utils || {};
  const Hexagon: Element = queryAllByTestId("Hexagon")[0];
  const TimelineContainer: Element = queryAllByTestId("Timeline")[0];
  const TimelineHexagonPositionContainer: Element = queryAllByTestId("TimelineHexagonPositionContainer")[0];
  const TimelineLine: Element = queryAllByTestId("TimelineLine")[0];

  return {
    ...utils,
    Hexagon,
    TimelineContainer,
    TimelineHexagonPositionContainer,
    TimelineLine
  };
}
