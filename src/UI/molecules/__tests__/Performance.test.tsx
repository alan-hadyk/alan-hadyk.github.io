import React from "react";
import { RenderResult } from "@testing-library/react";

import Performance from "<molecules>/Performance";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("<helpers>/math/getRandomDelay", () => (_min: number, max: number): number => max);

describe("molecules / Performance", () => {
  test("should have correct structure", () => {
    const {
      PerformanceItems,
      PerformanceWrapper
    } = setup();

    PerformanceItems.forEach((PerformanceItem, index) => {
      expect(PerformanceWrapper.children[index]).toEqual(PerformanceItem);
    });
  });

  describe("PerformanceItems", () => {
    test("there should be 17 items", () => {
      const { PerformanceItems } = setup();

      expect(PerformanceItems.length).toEqual(17);
    });

    describe("Props", () => {
      describe("label", () => {
        test("should render each item with label", () => {
          const { PerformanceItems } = setup();

          const performanceItems = [
            "Total heap size",
            "Used heap size",
            "Heap size limit",
            "Navi start",
            "Fetch start",
            "Domain lookup",
            "Connect start",
            "Connect end",
            "Request start",
            "Rasponse start",
            "Response end",
            "Dom loading",
            "Interactive",
            "Event start",
            "Event end",
            "Dom complete",
            "Load event"
          ];  
  
          PerformanceItems.forEach((PerformanceItem, index) => {
            expect(PerformanceItem.textContent).toEqual(performanceItems[index]);
          });
        });
      });

      describe("animationDelay", () => {
        test("should render each item in intervals with random delay", () => {
          const { PerformanceItems } = setup();
          PerformanceItems.forEach((PerformanceItem, index) => {
            expect(PerformanceItem.children[0].children[0].children[1].children[0]).toHaveStyleRule("animation-delay", `${index * 600}ms`);
          });
        });
      });
    });
  });

  describe("Performance", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have flex-start", () => {
          const { PerformanceWrapper } = setup();

          expect(PerformanceWrapper).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("justifyContent", () => {
        test("should have flex-start", () => {
          const { PerformanceWrapper } = setup();

          expect(PerformanceWrapper).toHaveStyleRule("justify-content", "flex-start");
        });
      });

      describe("flexFlow", () => {
        test("should have column nowrap", () => {
          const { PerformanceWrapper } = setup();

          expect(PerformanceWrapper).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  PerformanceItems: Element[];
  PerformanceWrapper: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Performance />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};

  const PerformanceWrapper: Element = queryByTestId("Performance");
  const PerformanceItems: Element[] = queryAllByTestId("PerformanceItem");

  return {
    ...utils,
    PerformanceItems,
    PerformanceWrapper
  };
}
