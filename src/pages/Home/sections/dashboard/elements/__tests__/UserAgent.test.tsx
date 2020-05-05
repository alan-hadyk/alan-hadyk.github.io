import React from "react";
import { RenderResult } from "@testing-library/react";

import UserAgent from "<pages>/Home/sections/dashboard/elements/UserAgent";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("detect-browser", () => ({
  detect: (): { name: string } => ({ name: "chrome" })
}));

describe("pages / Home / sections / dashboard / elements / UserAgent", () => {
  test("should have correct structure", () => {
    const {
      BrowserInfo,
      DashboardElement
    } = setup();

    expect(DashboardElement.children[2].children[4].children[0].children[0]).toEqual(BrowserInfo);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("childrenHeight", () => {
        test("should have auto", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[1]).toHaveStyleRule("height", "auto");
        });
      });

      describe("description", () => {
        test("should have Mozilla/5.0 (win32) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0", () => {
          Object.defineProperty(window.navigator, "userAgent", {value: "Mozilla/5.0 (win32) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0"});
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[1].textContent).toEqual("Mozilla/5.0 (win32) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0");
        });
      });

      describe("flex", () => {
        test("should have 0 1 13.6%", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement).toHaveStyleRule("flex", "0 1 13.6%");
        });
      });

      describe("shouldDisplayCorners", () => {
        test("should render corners", () => {
          const { Corners, DashboardElement } = setup();
      
          expect(DashboardElement.children[2].children[0]).toEqual(Corners[0]);
          expect(DashboardElement.children[2].children[1]).toEqual(Corners[1]);
          expect(DashboardElement.children[2].children[2]).toEqual(Corners[2]);
          expect(DashboardElement.children[2].children[3]).toEqual(Corners[3]);
        });
      });

      describe("title", () => {
        test("should render User Agent", () => {
          const { DashboardElement } = setup();
      
          expect(DashboardElement.children[0].textContent).toEqual("User Agent");
        });
      });
    });
  });

  describe("BrowserInfo", () => {
    test("should render correct browser info", () => {
      const { BrowserInfo } = setup();
  
      expect(BrowserInfo).toHaveStyleRule("height", "100%");
      expect(BrowserInfo).toHaveStyleRule("padding-bottom", "1.25vh");
      expect(BrowserInfo).toHaveStyleRule("padding-left", "1.25vw");
      expect(BrowserInfo).toHaveStyleRule("padding-top", "1.25vh");
      expect(BrowserInfo).toHaveStyleRule("padding-right", "1.25vw");
      expect(BrowserInfo).toHaveStyleRule("width", "100%");

      expect(BrowserInfo.children[0]).toHaveStyleRule("height", "100%");

      expect(BrowserInfo.children[0].children[0]).toHaveStyleRule("align-items", "center");
      expect(BrowserInfo.children[0].children[0]).toHaveStyleRule("flex-flow", "row wrap");
      expect(BrowserInfo.children[0].children[0]).toHaveStyleRule("height", "100%");
      expect(BrowserInfo.children[0].children[0]).toHaveStyleRule("justify-content", "space-between");

      expect(BrowserInfo.children[0].children[0].children[0].children[0].textContent).toEqual("Icon-Chrome.svg");
      expect(BrowserInfo.children[0].children[0].children[1].children[0].textContent).toEqual("Icon-Firefox.svg");
      expect(BrowserInfo.children[0].children[0].children[2].children[0].textContent).toEqual("Icon-IE.svg");
      expect(BrowserInfo.children[0].children[0].children[3].children[0].textContent).toEqual("Icon-Opera.svg");
      expect(BrowserInfo.children[0].children[0].children[4].children[0].textContent).toEqual("Icon-Safari.svg");
      expect(BrowserInfo.children[0].children[0].children[5].children[0].textContent).toEqual("Icon-Unknown.svg");
    });
  });
});

interface Setup extends RenderResult {
  BrowserInfo: Element;
  Corners: Element[];
  DashboardElement: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <UserAgent />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};
  
  const BrowserInfo: Element = queryByTestId("BrowserInfo");
  const Corners: Element[] = queryAllByTestId("Corner");
  const DashboardElement: Element = queryByTestId("UserAgent");

  return {
    ...utils,
    BrowserInfo,
    Corners,
    DashboardElement
  };
}
