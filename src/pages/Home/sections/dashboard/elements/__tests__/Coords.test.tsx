import React from "react";
import { RenderResult } from "@testing-library/react";

import Coords from "<pages>/Home/sections/dashboard/elements/Coords";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / dashboard / elements / Coords", () => {
  test("should have correct structure", () => {
    const { 
      DashboardElement,
      Sonar
    } = setup();

    expect(DashboardElement.children[1].children[0].children[0]).toEqual(Sonar);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 1 1 15%", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("flex", "1 1 15%");
        });
      });

      describe("childrenHeight", () => {
        test("should have 18.4rem", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[1]).toHaveStyleRule("height", "18.4rem");
        });
      });

      describe("title", () => {
        test("should render Coords", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[0].textContent).toEqual("Coords");
        });
      });
    });
  });

  describe("Sonar", () => {
    test("should render", () => {
      const { Sonar } = setup();
  
      expect(Sonar).toHaveStyleRule("height", "100%");
      expect(Sonar).toHaveStyleRule("position", "relative");
      
      expect(Sonar.childElementCount).toEqual(1);
      expect(Sonar.children[0].childElementCount).toEqual(3);
      
      expect(Sonar.children[0].children[0]).toHaveStyleRule("animation", "dKrSSl infinite 3600ms", {
        modifier: "&:after"
      });
      expect(Sonar.children[0].children[1]).toHaveStyleRule("animation", "enbksP 300ms infinite linear");
      expect(Sonar.children[0].children[2]).toHaveStyleRule("animation", "fhkkP 300ms infinite linear");
    });
  });
});

interface Setup extends RenderResult {
  DashboardElement: Element;
  Sonar: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Coords />
  );

  const { container, queryByTestId } = utils || {};

  return {
    ...utils,
    DashboardElement: container.children[0],
    Sonar: queryByTestId("Sonar")
  };
}
