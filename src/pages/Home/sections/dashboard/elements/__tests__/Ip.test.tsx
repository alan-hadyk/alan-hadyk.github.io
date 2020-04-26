import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import Ip from "<pages>/Home/sections/dashboard/elements/Ip";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("ip", () => ({
  address: (): string => "127.0.0.1"
}));

describe("pages / Home / sections / dashboard / elements / Ip", () => {
  test("should have correct structure", () => {
    const {
      DashboardElement,
      Earth
    } = setup();

    expect(DashboardElement.children[1].children[4].children[0].children[0]).toEqual(Earth);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 20%", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement).toHaveStyleRule("flex", "0 1 20%");
        });
      });

      describe("shuffleDelay", () => {
        test("should trigger shuffleText.start in intervals with 6000ms delay", () => {
          jest.spyOn(ShuffleText.prototype, "start");
          jest.useFakeTimers();

          setup();

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

          jest.advanceTimersByTime(6000);

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

          jest.advanceTimersByTime(7200);

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

          jest.advanceTimersByTime(6000);

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

          jest.advanceTimersByTime(7200);

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);

          jest.advanceTimersByTime(6000);

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);

          jest.advanceTimersByTime(7200);

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(4);

          jest.advanceTimersByTime(6000);

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(5);

          jest.clearAllTimers();
        });
      });

      describe("childrenHeight", () => {
        test("should have calc(100% - 3.6rem)", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[1]).toHaveStyleRule("height", "calc(100% - 3.6rem)");
        });
      });

      describe("title", () => {
        test("should render IP: ${ip.address} ", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[0].textContent).toEqual("IP: 127.0.0.1");
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
  const utils: RenderResult = renderWithTheme(
    <Ip />
  );

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
