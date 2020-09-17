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

    expect(DashboardElement.children[1].children[0].children[4].children[0].children[0]).toEqual(AnimatedIcons);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("childrenHeight", () => {
        test("should have calc(100% - 3.6rem)", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[1]).toHaveStyleRule("height", "calc(100% - 3.6rem)");
        });
      });

      describe("flex", () => {
        test("should have 1 0 40%", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("flex", "1 0 40%");
        });
      });

      describe("shouldDisplayCorners", () => {
        test("should render corners", () => {
          const { Corners, DashboardElement } = setup();

          expect(DashboardElement.children[1].children[0].children[0]).toEqual(Corners[0]);
          expect(DashboardElement.children[1].children[0].children[1]).toEqual(Corners[1]);
          expect(DashboardElement.children[1].children[0].children[2]).toEqual(Corners[2]);
          expect(DashboardElement.children[1].children[0].children[3]).toEqual(Corners[3]);
        });
      });

      describe("title", () => {
        test("should render Tech Stack", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[0].textContent).toEqual("Tech Stack");
        });
      });
    });
  });

  describe("AnimatedIcons", () => {
    test("should render correct animated icons", () => {
      const { AnimatedIcons } = setup();
  
      expect(AnimatedIcons).toHaveStyleRule("padding-bottom", ".8rem");
      expect(AnimatedIcons).toHaveStyleRule("padding-left", ".8rem");
      expect(AnimatedIcons).toHaveStyleRule("padding-right", ".8rem");
      expect(AnimatedIcons).toHaveStyleRule("padding-top", ".8rem");
      expect(AnimatedIcons.children[0]).toHaveStyleRule("align-items", "center");
      expect(AnimatedIcons.children[0]).toHaveStyleRule("height", "100%");
      expect(AnimatedIcons.children[0]).toHaveStyleRule("justify-content", "center");

      expect(AnimatedIcons.children[0].children[0].children[0].textContent).toEqual("Icon-React.svg");
      expect(AnimatedIcons.children[0].children[1].children[0].textContent).toEqual("Icon-Javascript.svg");
      expect(AnimatedIcons.children[0].children[2].children[0].textContent).toEqual("Icon-Typescript.svg");
      expect(AnimatedIcons.children[0].children[3].children[0].textContent).toEqual("Icon-Webpack.svg");
      expect(AnimatedIcons.children[0].children[4].children[0].textContent).toEqual("Icon-Node.svg");
      expect(AnimatedIcons.children[0].children[5].children[0].textContent).toEqual("Icon-Apollo.svg");
      expect(AnimatedIcons.children[0].children[6].children[0].textContent).toEqual("Icon-Graphql.svg");
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

  const { queryByTestId, queryAllByTestId } = utils || {};

  const DashboardElement: Element = queryByTestId("TechStack");
  const AnimatedIcons: Element = queryByTestId("AnimatedIcons");
  const Corners: Element[] = queryAllByTestId("Corner");

  return {
    ...utils,
    AnimatedIcons,
    Corners,
    DashboardElement
  };
}
