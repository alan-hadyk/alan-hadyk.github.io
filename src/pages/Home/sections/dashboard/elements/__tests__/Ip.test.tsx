import React from "react";
import { RenderResult } from "@testing-library/react";

import Ip from "<pages>/Home/sections/dashboard/elements/Ip";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("ip", () => ({
  address: (): string => "127.0.0.1"
}));

describe("pages / Home / sections / dashboard / elements / Ip", () => {
  test("should have correct structure", () => {
    const { DashboardElement, Earth } = setup();

    expect(
      DashboardElement.children[1].children[0].children[4].children[0]
        .children[0]
    ).toEqual(Earth);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("childrenHeight", () => {
        test("should have calc(100% - 3.6rem)", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[1]).toHaveStyleRule(
            "height",
            "calc(100% - 3.6rem)"
          );
        });
      });

      describe("flex", () => {
        test("should have 0 1 30%", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement).toHaveStyleRule("flex", "0 1 30%");
        });
      });

      describe("shouldDisplayCorners", () => {
        test("should render corners", () => {
          const { Corners, DashboardElement } = setup();

          expect(DashboardElement.children[1].children[0].children[0]).toEqual(
            Corners[0]
          );
          expect(DashboardElement.children[1].children[0].children[1]).toEqual(
            Corners[1]
          );
          expect(DashboardElement.children[1].children[0].children[2]).toEqual(
            Corners[2]
          );
          expect(DashboardElement.children[1].children[0].children[3]).toEqual(
            Corners[3]
          );
        });
      });

      describe("title", () => {
        test("should render IP: ${ip.address} ", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[0].textContent).toEqual(
            "IP: 127.0.0.1"
          );
        });
      });
    });
  });

  describe("Earth", () => {
    test("should render", () => {
      const { Earth } = setup();

      expect(Earth.textContent).toEqual("Icon-Earth.svg");
    });
  });
});

interface Setup extends RenderResult {
  Corners: Element[];
  DashboardElement: Element;
  Earth: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<Ip />);

  const { queryByTestId, queryAllByTestId } = utils || {};

  const DashboardElement: Element = queryByTestId("IP");
  const Earth: Element = queryByTestId("Earth");
  const Corners: Element[] = queryAllByTestId("Corner");

  return {
    ...utils,
    Corners,
    DashboardElement,
    Earth
  };
}
