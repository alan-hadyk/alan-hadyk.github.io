import React from "react";
import { RenderResult } from "@testing-library/react";

import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / dashboard / elements / TechStack", () => {
  test("should have correct structure", () => {
    const {
      AnimatedIcons,
      DashboardElement
    } = setup();

    expect(DashboardElement.children[1].children[4].children[0].children[0]).toEqual(AnimatedIcons);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 1 1 30%", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("flex", "1 1 30%");
        });
      });

      describe("childrenHeight", () => {
        test("should have 18.4rem", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[1]).toHaveStyleRule("height", "18.4rem");
        });
      });

      describe("title", () => {
        test("should render Tech Stack", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[0].textContent).toEqual("Tech Stack");
        });
      });

      describe("shouldDisplayCorners", () => {
        test("should render corners", () => {
          const { Corners, DashboardElement } = setup();
      
          expect(DashboardElement.children[1].children[0]).toEqual(Corners[0]);
          expect(DashboardElement.children[1].children[1]).toEqual(Corners[1]);
          expect(DashboardElement.children[1].children[2]).toEqual(Corners[2]);
          expect(DashboardElement.children[1].children[3]).toEqual(Corners[3]);
        });
      });
    });
  });

  describe("AnimatedIcons", () => {
    test("should render correct animated icons", () => {
      const { AnimatedIcons } = setup();
  
      expect(AnimatedIcons).toHaveStyleRule("align-items", "center");
      expect(AnimatedIcons).toHaveStyleRule("height", "100%");
      expect(AnimatedIcons).toHaveStyleRule("justify-content", "center");

      expect(AnimatedIcons.children[0].children[1].children[0].textContent).toEqual("react");
      expect(AnimatedIcons.children[1].children[1].children[0].textContent).toEqual("javascript");
      expect(AnimatedIcons.children[2].children[1].children[0].textContent).toEqual("typescript");
      expect(AnimatedIcons.children[3].children[1].children[0].textContent).toEqual("webpack");
      expect(AnimatedIcons.children[4].children[1].children[0].textContent).toEqual("node");
      expect(AnimatedIcons.children[5].children[1].children[0].textContent).toEqual("apollo");
      expect(AnimatedIcons.children[6].children[1].children[0].textContent).toEqual("graphql");
    });
  });
});

interface Setup extends RenderResult {
  AnimatedIcons: Element;
  Corners: Element[];
  DashboardElement: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <TechStack />
  );

  const { container, queryByTestId, queryAllByTestId } = utils || {};
  const DashboardElement: Element = container.children[0];
  const AnimatedIcons: Element = queryByTestId("AnimatedIcons");
  const Corners: Element[] = queryAllByTestId("Corner");

  return {
    ...utils,
    AnimatedIcons,
    Corners,
    DashboardElement
  };
}
